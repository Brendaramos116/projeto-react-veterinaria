import React from 'react'
import { Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap'
import styles from '../styles/Cabecalho.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';




const Cabecalho = () => {
    return (
        <>
            <Navbar className={styles.navbar}>
                <Container>
                    <div>
                        <Image className={styles.logo} src='https://cdn-icons-png.flaticon.com/512/3905/3905601.png' />
                        <Navbar.Brand>| AMOR DE 4 PATAS</Navbar.Brand>
                    </div>
                    <Nav className="me-3">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-1"
                                aria-label="Search"
                            />                        
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>
                </Container>
            </Navbar >
        </>
    )
}

export default Cabecalho