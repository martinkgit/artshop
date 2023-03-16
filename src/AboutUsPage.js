import React, {useState} from 'react';
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

function AboutUsPage({props}) {
return(
<div
style = {{
    width: "70%",
    textAlign: 'left',
    marginLeft: "15%",
    textIndent: "5%"
}}>
    <h2>About us</h2>
  <p
  style={{
    textAlign: 'left'
    
  }}>Nämä kuvat on luotu valikoimalla Hubble-teleskoopin ottamista kuvista
kaikista näyttävimmän, ja yhdistämällä ne keskenään. Käytetty ohjelma valitsee kuvien
joukosta satunnaisesti kaksi kuvaa, käy niiden pikselit läpi yksitellen ja rakentaa näistä
pikseleistä keskimääräisen tuloksen, jossa on osa molempia kohteita. Tällä tavalla
saadaan luotua aidon näköisiä avaruuden maisemia, jotka ehkä ovatkin olemassa
jossain loputtomassa avaruudessa.
<br>
</br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in finibus lacus.
Nunc feugiat sed diam varius facilisis. Mauris venenatis laoreet massa, vitae dapibus
nisi dapibus eleifend. Integer maximus ipsum rutrum sollicitudin interdum. Etiam
placerat consequat mi, eget scelerisque nulla facilisis eget. Pellentesque ac sagittis
magna, sed pretium lectus. Maecenas laoreet nisi faucibus quam hendrerit fringilla. Sed
volutpat viverra eleifend. Integer scelerisque purus eu diam accumsan pretium. Integer
ultricies ipsum non mi consequat, ut auctor neque venenatis. Nullam vel finibus leo.
Sed pharetra condimentum mi non porta. Mauris egestas mauris id lectus gravida
efficitur. Nam accumsan a sem eu accumsan. Nam sit amet mauris felis. Fusce rutrum
leo ipsum, ac tristique neque tristique in. Curabitur varius nisl et nibh fringilla, quis
laoreet elit sodales. Pellentesque volutpat ac tortor posuere placerat. Curabitur quam
augue, vestibulum ac sapien feugiat, suscipit efficitur massa.
<br>
</br>
Vestibulum dignissim ex ultrices nibh vulputate luctus. Maecenas et turpis egestas,
ultricies tortor blandit, mattis velit. Nullam ullamcorper enim dui, id varius dolor aliquet
non. Ut imperdiet tristique lacus ut pharetra. Pellentesque tincidunt volutpat risus, eu
posuere massa venenatis non. Aenean fermentum arcu nunc. Morbi eget turpis vitae
orci luctus condimentum a eu lacus. Morbi sed efficitur nisi, lobortis ultricies neque.
<br>
</br>
Fusce dapibus, purus sit amet auctor aliquam, enim lectus ornare odio, id congue lectus
ex sed orci. Nulla augue lorem, hendrerit vitae tellus id, molestie luctus velit. Quisque
quis ultrices sem. Pellentesque vel vestibulum elit. Ut euismod ultricies mollis. Nulla ex
orci, ullamcorper nec ligula in, faucibus ultricies libero.
Donec leo sem, dictum nec consequat vel, egestas eu ex. Cras sollicitudin consectetur
nisl, in finibus elit placerat a. Suspendisse posuere velit ut elit auctor congue. Cras
condimentum blandit augue et sollicitudin. Nunc commodo diam in elit vestibulum, in
lacinia tellus accumsan. Donec condimentum, dui nec sollicitudin porta, eros arcu
rhoncus nunc, volutpat lacinia diam orci eu mauris. Nullam ac sollicitudin ante. In hac
habitasse platea dictumst. Curabitur mattis nulla vitae felis mattis consequat.
Suspendisse neque lectus, commodo id accumsan sit amet, faucibus eu massa. Proin
eu tellus sem. Cras vitae leo sit amet sem accumsan tincidunt. Praesent eget libero sed
ipsum finibus pretium. Morbi varius ultrices erat, vitae finibus erat hendrerit in.</p>
</div>
)
}
export default AboutUsPage;
