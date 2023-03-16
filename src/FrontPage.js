import React, {useState} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  CardBody,
  CardTitle,
  Card,
  CardText,
} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function FrontPage({array}) {

  const items = array;

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
 
    return (
      
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
        style={{  alignContent: "center" }}
      >
        <img class = "d-block w-100 h-40" src={require(process.env.PUBLIC_URL+ "/assets/" + item.imageUrl)} alt={item.name} ></img>
        <CarouselCaption
          captionHeader={item.name}
        />
      </CarouselItem>
    );
  });

  const cards = items.map((item) => {
    if(item.featured){

    return(
      <Link to= {`/product/${item.id}`}>
      <Card
      style={{
        width: '18rem',
        height: '45vh',
        overflow: "hidden",
        marginBottom: "10px"
      }}>
        <img alt='sample' src={require(process.env.PUBLIC_URL+ "/assets/" + item.imageUrl)}></img>
      <CardBody>
        <CardTitle>
        Card title
        </CardTitle>
        <CardText>
          {item.name}
          <ul>
          {item.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
        </CardText>
      </CardBody>
      </Card>
      </Link>
    );
    }
  });

  return(
  <main>
    <div class = 'front-page-container1'>
      <section id="hero" class = "justify-content-center">
      <h1>ArtShop</h1>
      <Carousel class = "carousel slide carousel-fade"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
      
        <h2>Welcome to ArtShop</h2>
        <p style = {{textAlign: "center", fontSize: "16px", font: "Source Sans Pro"}}>Nämä kuvat on luotu valikoimalla Hubble-teleskoopin ottamista kuvista
          kaikista näyttävimmän, ja yhdistämällä ne keskenään. Käytetty ohjelma valitsee kuvien
          joukosta satunnaisesti kaksi kuvaa, käy niiden pikselit läpi yksitellen ja rakentaa näistä
          pikseleistä keskimääräisen tuloksen, jossa on osa molempia kohteita. Tällä tavalla
          saadaan luotua aidon näköisiä avaruuden maisemia, jotka ehkä ovatkin olemassa
          jossain loputtomassa avaruudessa.</p>
          <Link to = {`/shop`}>
        <button class = "button">Shop Now</button>
        </Link>
      </section>
      </div>
      
      <h2>Featured Products</h2>
      <div class='card-container'>
        {cards}
      </div>
    </main>
  )
}
export default FrontPage;