
import './App.css';
import StoreItemsPage from './StoreItemPage';
import React, {useState} from 'react';
import { BrowserRouter , Route, Routes, Link } from "react-router-dom";
import ProductPage from "./ProductPage";
import FrontPage from './FrontPage';
import AboutUsPage from './AboutUsPage';
import ContactsPage from './ContactsPage';
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

export const items = [
  { id: 1, name: "Item 1", price: 10.99, imageUrl: "snapshot_1648986240219.png" , tags: ['blue', 'swirl', 'light', 'brown'], description: " Nämä kuvat on luotu valikoimalla Hubble-teleskoopin ottamista kuvista kaikista näyttävimmän, ja yhdistämällä ne keskenään. \n Käytetty ohjelma valitsee kuvien joukosta satunnaisesti kaksi kuvaa, käy niiden pikselit läpi yksitellen ja rakentaa näistäpikseleistä keskimääräisen tuloksen, jossa on osa molempia kohteita."
  , featured: true
  },
    { id: 2, name: "Item 2", price: 15.99, imageUrl: "snapshot_1648992784025.png", tags: ['red', 'star', 'cloud'] , description: "Nämä kuvat on luotu valikoimalla Hubble-teleskoopin ottamista kuvista kaikista näyttävimmän, ja yhdistämällä ne keskenään. \n Käytetty ohjelma valitsee kuvien joukosta satunnaisesti kaksi kuvaa, käy niiden pikselit läpi yksitellen ja rakentaa näistäpikseleistä keskimääräisen tuloksen, jossa on osa molempia kohteita."
    , featured: true},
    { id: 3, name: "Item 3", price: 8.99, imageUrl: "snapshot_1648985652316.png", tags: ['light', 'swirl', 'galaxy'] , description: "Nämä kuvat on luotu valikoimalla Hubble-teleskoopin ottamista kuvista kaikista näyttävimmän, ja yhdistämällä ne keskenään. \n Käytetty ohjelma valitsee kuvien joukosta satunnaisesti kaksi kuvaa, käy niiden pikselit läpi yksitellen ja rakentaa näistäpikseleistä keskimääräisen tuloksen, jossa on osa molempia kohteita."
    , featured: false},
    { id: 4, name: "Item 4", price: 12.99, imageUrl: "snapshot_1648993045376.png", tags:['swirl', 'galaxy', 'blue', ] , description: "Nämä kuvat on luotu valikoimalla Hubble-teleskoopin ottamista kuvista kaikista näyttävimmän, ja yhdistämällä ne keskenään. \n Käytetty ohjelma valitsee kuvien joukosta satunnaisesti kaksi kuvaa, käy niiden pikselit läpi yksitellen ja rakentaa näistäpikseleistä keskimääräisen tuloksen, jossa on osa molempia kohteita."
    , featured: false},
    { id: 5, name: "Item 5", price: 9.99, imageUrl: "snapshot_1649155540303.png", tags: ['light', 'cloud', 'dark'], description: "Nämä kuvat on luotu valikoimalla Hubble-teleskoopin ottamista kuvista kaikista näyttävimmän, ja yhdistämällä ne keskenään. \n Käytetty ohjelma valitsee kuvien joukosta satunnaisesti kaksi kuvaa, käy niiden pikselit läpi yksitellen ja rakentaa näistäpikseleistä keskimääräisen tuloksen, jossa on osa molempia kohteita."
    , featured: true},
    { id: 6, name: "Item 6", price: 7.99, imageUrl: "snapshot_1649155476389.png", tags: ['nebula', 'orange', 'green', ] , description: "Nämä kuvat on luotu valikoimalla Hubble-teleskoopin ottamista kuvista kaikista näyttävimmän, ja yhdistämällä ne keskenään. \n Käytetty ohjelma valitsee kuvien joukosta satunnaisesti kaksi kuvaa, käy niiden pikselit läpi yksitellen ja rakentaa näistäpikseleistä keskimääräisen tuloksen, jossa on osa molempia kohteita."
    , featured: true},
];


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



  return (

   
    
      
    <div className="App" class="App">
    <head>
    <title>ArtShop</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="App.css"></link>
  </head>
  <body>
  
  <div class = "container2">
  <div class = "container-light">

  <div>
      <Navbar class="align-items-left">
        <NavbarBrand href="/">ArtShop</NavbarBrand>
        <form class="form-inline">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success my-2 my-sm-0 position: absolute" type="submit">Search</button>
        </form>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/shop">
                Shop
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/about">
                About us
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/contact">
                Contact us
              </NavLink>
            </NavItem>
          </Nav>
        
        </Collapse>
        
        
      </Navbar>
    </div>

    
    <Routes> 
  <Route path='/shop' element ={<StoreItemsPage array={items}></StoreItemsPage>}></Route>
  <Route path='/'element = {<FrontPage array={items}></FrontPage>} ></Route>
  <Route path='/about' element = {<AboutUsPage></AboutUsPage>}></Route>
  <Route path='/product/:id' element = {<ProductPage array = {items}></ProductPage>}></Route>
  <Route path= '/contact' element = {<ContactsPage></ContactsPage>}></Route>
  </Routes>

    
   
    
    
   
    
    </div>
      </div>

        <footer >
          <p>&copy; 2023 ArtShop</p>
        </footer>
     </body>
    
     </div>
    
 
  );
}

export default App;
