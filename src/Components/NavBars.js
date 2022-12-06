import React from 'react'
import {NavDropdown, Navbar, Container, Nav} from 'react-bootstrap'
import './NavBars.css'
const NavBars = () => {
    return (
        <div className='NavBars'>
            <div className='logo'>
                <a href='https://www.pathe.tn/tunis'>
                    <img src="https://yc.cldmlk.com/tn029qswebz1gahz3xzzhb7x44/1621249307392_Logopathetuniscitynormal.png" alt="Pathé Tunis City" className='initial loading' data-was-processed="true"></img>
                </a>
            </div>
            <Navbar classname='menu'>
                <Container>
                    <Navbar.Brand className='brand' href="https://www.pathe.tn/tunis">ACTUELLEMENT</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='links' href="https://www.pathe.tn/tunis/coming-soon">PROCHAINEMENT</Nav.Link>
                            <Nav.Link className='links' href="https://www.pathe.tn/tunis/informations-">INFORMATIONS</Nav.Link>
                            <NavDropdown title="PLUS" id="basic-nav-dropdown">
                                <NavDropdown.Item className='items' href="https://www.pathe.tn/tunis/offres-btob">OFFRES BTOB</NavDropdown.Item>
                                <NavDropdown.Item className='items' href="https://www.pathe.tn/tunis/projections-scolaires-">
                                    PROJECTIONS SCOLAIRES
                                </NavDropdown.Item>
                                <NavDropdown.Item className='items' href="https://www.pathe.tn/tunis/espace-recrutement">ESPACE RECRUTEMENT</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item className='items' href="https://www.pathe.tn/tunis/offre-anniversaire">
                                    OFFRE ANNIVERSAIRE
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBars
