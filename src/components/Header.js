import { Container, Navbar, NavbarBrand } from 'reactstrap';
import React from 'react'
import logo from '../../src/app/assets/img/logo.png';

const Header = () => {
  return (
    <div>
        <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={logo} height="100px" alt='nucamp logo' />
                    </NavbarBrand>
                </Container>
        </Navbar>
    </div>
  )
}

export default Header