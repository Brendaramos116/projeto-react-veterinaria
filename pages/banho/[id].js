import Pagina from '@/Components/Pagina'
import banhoValidator from '@/validator/banhoValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BiArrowBack } from 'react-icons/bi'
import { FiSave} from 'react-icons/fi'

const form = () => {
    const { push, query } = useRouter()

    const { register, handleSubmit, setValue } = useForm()

    useEffect(() =>{
        if(query.id){

            axios.get('/api/banho/' + query.id).then( resultado=>{
                const banho = resultado.data

                for(let atributo in banho){
                    setValue(atributo, banho[atributo])
                }
            })
        }
    }, [query.id])
  
    function salvar(dados) {
         axios.put('/api/banho/' + query.id, dados) 
         push('/banho')           
    }
  
    return (
        <Pagina>
            <Form>
                <Form.Group className="mb-3" controlId="nomeAnimal">
                    <Form.Label>Nome do Animal:</Form.Label>
                    <Form.Control type="text"
                        placeholder="Digite o nome do animal"
                        {...register('nomeAnimal')}/>
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="raca">
                    <Form.Label>Raça:</Form.Label>
                    <Form.Control type="text"
                        placeholder="Digite a raça"
                        {...register('raca')}/>

                </Form.Group>  
                <Form.Group className="mb-3" controlId="dtNascimento">
                    <Form.Label>Data de Nascimento:</Form.Label>
                    <Form.Control  type="text"
                        placeholder="Digite a data de nascimento"
                        {...register('dtNascimento')}/>

                </Form.Group>  
                <Form.Group className="mb-3" controlId="cliente">
                    <Form.Label>Cliente:</Form.Label>
                    <Form.Control 
                         type="text"
                        placeholder="Digite o nome do cliente"
                        {...register('cliente')}/>
                    
                </Form.Group>  
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control 
                         type="text"
                        placeholder="Digite o telefone"
                        {...register('telefone')}/>
                    
                </Form.Group>  
                <Form.Group className="mb-3" controlId="servico">
                    <Form.Label>Serviço:</Form.Label>
                    <Form.Select aria-label="Default select example"
                        placeholder="Escolha o serviço"
                        {...register('servico')}>
                        <option></option>
                        <option value='1'>Banho</option>
                        <option value='2'>Tosa</option>
                        <option value='3'>Banho e Tosa</option>
                    
                    </Form.Select>
                </Form.Group>  
                <Form.Group className="mb-3" controlId="funcionario">
                    <Form.Label>Funcionário:</Form.Label>
                    <Form.Control 
                         type="text"funcionario
                        placeholder="Digite o nome do funcionário"
                        {...register('funcionario')}/>
                    
                </Form.Group>
            </Form>
            <div className='text-center'>
            <Button variant="warning" onClick={handleSubmit(salvar)}>
              <FiSave className='me-2' /> Salvar
            </Button>
            <Link href="/banho" className="ms-2 btn btn-primary" type="submit">
              <BiArrowBack /> Voltar
            </Link>
          </div>
        </Pagina>
    )
}

export default form