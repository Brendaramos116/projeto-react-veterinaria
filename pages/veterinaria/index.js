import Pagina from '@/Components/Pagina'
import React from 'react'
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import styles from '../../styles/Cabecalho.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LuDog } from 'react-icons/lu'
import { FaShower } from 'react-icons/fa'
import { HiScissors } from 'react-icons/hi'
import { AiOutlineShop } from 'react-icons/ai'
const index = () => {
  return (
    <>

      <Pagina>
        <Row md={2}>
          <Col className={styles.text}>
            <p>Nosso compromisso <br></br>
              é cuidar com muito amor do seu pet.
            </p>
          </Col>
          <Col className={styles.col}>
            <h3>Serviços</h3>
            <ListGroup className='bg-transparent'>
              <ListGroupItem className='bg-transparent'><LuDog /> Clínica Veterinária</ListGroupItem>
              <ListGroupItem className='bg-transparent'><FaShower /> Banho</ListGroupItem>
              <ListGroupItem className='bg-transparent'><HiScissors /> Tosa</ListGroupItem>
              <ListGroupItem className='bg-transparent'><FaShower /><HiScissors /> Banho e Tosa</ListGroupItem>
              <ListGroupItem className='bg-transparent'><AiOutlineShop /> PetShop</ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Pagina>
    </>
  )
}

export default index