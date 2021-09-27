import React from "react";
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { DropdownButton, Dropdown, Image } from 'react-bootstrap';
import FlagIcon from '../FlagIcon';
import { useState } from 'react';
import logo from '../assets/heptagon-logo.png';
import "./Navigation.css";

export const NavigationBar = ({lang, changeLang}) => {

    const [ countryFlag , setCountryFlag ] = useState(lang.lang);

    const handleSelect = (e) => {
      setCountryFlag(e);
      localStorage.setItem('lang', e);
    }

    return (
        <Navbar expand='lg' className="custom-navbar-class">
            <Image className="custom-image-class" src={logo} rounded/>
            <Navbar.Brand href='/' className="custom-navbar-brand-class">{lang.navTitle}</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Item className="custom-navitem-class"><Nav.Link className="custom-navlink-class" href='/'>{lang.btnHome}</Nav.Link></Nav.Item>
                    <Nav.Item className="custom-navitem-class"><Nav.Link className="custom-navlink-class" href='/contacts'>{lang.btnContacts}</Nav.Link></Nav.Item>
                    <Nav.Item className="custom-navitem-class"><Nav.Link className="custom-navlink-class" href='/about'>{lang.btnAbout}</Nav.Link></Nav.Item>
                    <Nav.Item className="custom-navitem-class">
                        <DropdownButton id="dropdown-basic-button" title={<FlagIcon code={countryFlag} size={"2x"} />} onSelect={handleSelect}>
                            <Dropdown.Item eventKey='bg' href="#" onClick={ (e) => { e.preventDefault(); changeLang('bg')}}>
                                <FlagIcon code={"bg"} size={"2x"} /> Български
                            </Dropdown.Item>
                            <Dropdown.Item eventKey='gb' href="#" onClick={ (e) => { e.preventDefault(); changeLang('gb')}}>
                                <FlagIcon code={"gb"} size={"2x"} /> English
                            </Dropdown.Item>
                        </DropdownButton>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}