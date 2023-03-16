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

function ContactsPage(){
  return(
    <div>
        <h1>Yhteystiedot</h1>
        <h2>Martin Kakko</h2>
        <h2>0441526323</h2>
        <h2>martink@gmail.com</h2>
    </div>
  )
}

export default ContactsPage;