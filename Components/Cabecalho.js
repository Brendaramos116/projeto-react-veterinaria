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
                        <Nav.Link href="../pages/veterinaria">Home</Nav.Link>
                        <Nav.Link href="../pages/clinica">Clínica Veterinária</Nav.Link>
                        <Nav.Link href="../pages/petshop">Pet Shop</Nav.Link>
                        <Nav.Link href="../pages/banho">Banho</Nav.Link>
                        <Nav.Link href="../pages/banho">Tosa</Nav.Link>
                        <Nav.Link href="../pages/funcionarios">Funcionários</Nav.Link>
                        <Nav.Link href="../pages/clientes">Clientes</Nav.Link>
                    </Nav>
                </Container>
            </Navbar >
        </>
    )
}

export default Cabecalho