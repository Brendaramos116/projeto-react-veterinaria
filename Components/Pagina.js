import styles from '../styles/Cabecalho.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Cabecalho from './Cabecalho'
import { Container } from 'react-bootstrap'

const Pagina = (props) => {
  return (
    <>
     <Cabecalho />
            <div className='py-3 text-white text-center mb-3'>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </div>
            <Container className={styles.container1}>
                {props.children}
            </Container>
    </>
  )
}

export default Pagina