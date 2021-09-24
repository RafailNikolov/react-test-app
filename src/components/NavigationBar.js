import React from "react";
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import FlagIcon from '../FlagIcon';
import { useState } from 'react';

export const NavigationBar = ({lang, changeLang}) => {

    const [ countryFlag , setCountryFlag ] = useState(lang.lang);

    const handleSelect = (e) => {
      setCountryFlag(e);
      localStorage.setItem('lang', e);
    }

    return (
        <Navbar expand='lg'>
            <Navbar.Brand href='/'>{lang.navTitle}</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='basic-navbar-nav' className="justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href='/'>{lang.btnHome}</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/contacts'>{lang.btnContacts}</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/about'>{lang.btnAbout}</Nav.Link></Nav.Item>
                </Nav>

                <DropdownButton id="dropdown-basic-button" title={<FlagIcon code={countryFlag} size={"1x"} />} style={{"width" : "110px"}} 
                onSelect={handleSelect} >
                    <Dropdown.Item eventKey='bg' href="#" onClick={ (e) => { e.preventDefault(); changeLang('bg')}}>
                        <FlagIcon code={"bg"} size={"1x"} /> Български
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='gb' href="#" onClick={ (e) => { e.preventDefault(); changeLang('gb')}}>
                        <FlagIcon code={"gb"} size={"1x"} /> English
                    </Dropdown.Item>
                </DropdownButton>

            </Navbar.Collapse>
        </Navbar>
    )
}