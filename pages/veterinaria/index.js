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
          <Image src='https://cdn-icons-png.flaticon.com/512/3905/3905601.png'
           width={200} height={200}/>
          </Col>
        </Row>
        <div>
          <Row md={2}>
            <Col mb={1}>
              <Card>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/836142780/pt/foto/funny-cat-is-taking-a-bath-with-toy-duck.jpg?s=612x612&w=0&k=20&c=b_iPyk600kq90KJnPyOx8BNGTrSvg71utDM4hsGO7xQ=" />
                <Card.Body>
                  <Card.Text style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                    O banho do animal é caracterizado como uma remoção de sujidades presentes nos
                    pelos e na pele dos animais de companhia, sendo necessária à manutenção da
                    sanidade através de banhos periódicos semanalmente e em todas as estações do ano.
                  </Card.Text>
                  <Link href={'../banho/form.js'} className='btn btn-danger'><FaShower /> Banho</Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src="https://www.revistapetcenter.com.br/wp-content/uploads/2021/11/revista-petcenter-236-empregabilidade-no-banho-e-tosa-desafios-e-oportunidades.jpg" />
                <Card.Body>
                  <Card.Text style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                    A tosa basicamente é um corte realizado no pelo do pet para que a pelagem possa
                    ficar em um tamanho confortável para o animal, resultando em vários benefícios
                    para a saúde, como o conforto térmico, a boa higiene e a prevenção de doenças.
                  </Card.Text>
                  <Link href={'../banho/form.js'} className='btn btn-danger'><HiScissors /> Tosa</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row md={2}>
            <Col mb={1}>
              <Card>
                <Card.Img variant='top' src='https://www.unisuam.edu.br/wp-content/uploads/2022/05/Design-sem-nome-12.png' />
                <Card.Body>
                  <Card.Text style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                    As clínicas veterinárias são estabelecimentos autorizados a realizar consultas de
                    rotina, exames em geral e tratamentos clínicos e cirúrgicos.
                  </Card.Text>
                  <Link href={'../clinica/form.js'} className='btn btn-danger'><LuDog /> Clínica Veterinária </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant='top' src='https://ipatas.com.br/wp-content/uploads/2022/11/vender-mais-na-black-friday-pet-shop-1200x675.jpeg' />
                <Card.Body>
                  <Card.Text style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                    Na nossa Loja de Pet Shop você encontra rações para gatos, cachorros, aves e
                    peixes, além de produtos para higiene do pet, transporte, remédios, brinquedos
                    e mais.
                  </Card.Text>
                  <Link href={'../petshop/form.js'} className='btn btn-danger'><AiOutlineShop /> Petshop </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Pagina>
    </>
  )

}

export default index