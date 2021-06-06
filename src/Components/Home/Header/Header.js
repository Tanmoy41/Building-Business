import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import { Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header className="header-container">
            <Container>
                <NavBar />
                <HeaderMain />
            </Container>
        </header>
    );
};

export default Header;
