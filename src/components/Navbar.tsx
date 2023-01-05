import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { RiMenu4Fill, RiMailFill, RiLinkedinBoxFill, RiWhatsappFill } from "react-icons/ri";
import { Col, Row, NavDropdown } from "react-bootstrap";
import './Navbar.css'

export default function MyNavbar() {
    return (
        <Navbar bg="none" expand="lg" fixed="top">
            <Container fluid="lg">
                <Navbar.Brand href="/">Aarón Carrizal</Navbar.Brand>
                <NavDropdown
                    title={<h3><RiMenu4Fill/></h3>}
                    id="basic-nav-dropdown"
                    align="end">
                    <NavDropdown.Item href="#action/3.1">
                        Me
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        My Work
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                        My Résumé
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <Container>
                        <Row>
                            <Col>
                                <h5>Say hello!</h5>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={4}>
                            <NavDropdown.Item href="#action/3.4">
                                <RiMailFill/>
                            </NavDropdown.Item>
                            </Col>
                            <Col xs={4}>
                            <NavDropdown.Item href="#action/3.4">
                                <RiLinkedinBoxFill/>
                            </NavDropdown.Item>
                            </Col>
                            <Col xs={4}>
                            <NavDropdown.Item href="#action/3.4">
                                <RiWhatsappFill/>
                            </NavDropdown.Item>
                            </Col>
                        </Row>
                    </Container>
                    
                </NavDropdown>
            </Container>
        </Navbar>
    );
}
