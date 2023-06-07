import Pagina from '@/Components/Pagina'
import React from 'react'
import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import styles from '../../styles/Cabecalho.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { LuDog } from 'react-icons/lu'
import { FaShower } from 'react-icons/fa'
import { HiScissors } from 'react-icons/hi'
import { AiOutlineShop } from 'react-icons/ai'
import Link from 'next/link';
const index = () => {
  return (
    <>

      <Pagina>
        <Row md={2}>
          <Col >
            <p className={styles.text}>Nosso compromisso <br></br>
              é cuidar com muito amor do seu pet.
            </p>
          </Col>
          <Col>
            <h3 className={styles.h3}>Serviços</h3>
            <ul className={styles.col}>              
              <Link href={'/#'} className='btn btn-light ms-2'><li className={'bg-transparent list-group-item'}> Clínica Veterinária <LuDog/></li> </Link><br></br>
              <Link href={'/#'} className='btn btn-light ms-2'><li className={'bg-transparent list-group-item'}> Banho <FaShower/></li> </Link><br></br>
              <Link href={'/#'} className='btn btn-light ms-2'><li className={'bg-transparent list-group-item'}> Tosa <HiScissors/></li> </Link><br></br>
              <Link href={'/#'} className='btn btn-light ms-2'><li className={'bg-transparent list-group-item'}> Banho e Tosa <FaShower/><HiScissors/></li> </Link><br></br>
              <Link href={'/#'} className='btn btn-light ms-2'><li className={'bg-transparent list-group-item'}> PetShop <AiOutlineShop/></li> </Link><br></br>
            </ul>
          </Col>
        </Row>
      </Pagina>
    </>
  )

}

export default index