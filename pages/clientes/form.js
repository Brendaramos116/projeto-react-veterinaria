import Pagina from '@/Components/Pagina'
import clienteValidator from '@/validators/clienteValidator'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BiArrowBack } from 'react-icons/bi'
import { FiSave } from 'react-icons/fi'
import { mask } from 'remask'

const form = () => {
    const { push } = useRouter()

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) {

        axios.post('/api/clientes', dados)
        push('/clientes')

    }

    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }


    return (
        <Pagina>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text"
                        placeholder="Digite o nome"
                        {...register('nome', clienteValidator.nome)} />

                    {
                        errors.nome &&
                        <small className='error-message bg-danger text-white'
                        >{errors.nome.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf" >
                    <Form.Label>CPF:</Form.Label>
                    <Form.Control mask='999.999.999-99' isInvalid={errors.cpf} type="text"
                        placeholder="Digite seu CPF"
                        {...register('cpf', clienteValidator.cpf)}
                        onChange={handleChange} />
                    {
                        errors.cpf &&
                        <small className='error-message bg-danger text-white'
                        >{errors.cpf.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="animal" >
                    <Form.Label>Animal:</Form.Label>
                    <Form.Control isInvalid={errors.funcao} type="text"
                        placeholder="Digite o Animal"
                        {...register('funcao', clienteValidator.animal)} />
                    {
                        errors.animal &&
                        <small className='error-message bg-danger text-white'
                        >{errors.animal.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="email" >
                    <Form.Label>E-mail:</Form.Label>
                    <Form.Control isInvalid={errors.email} type="email"
                        placeholder="Digite seu Email"
                        {...register('email', clienteValidator.email)} />
                    {
                        errors.email &&
                        <small className='error-message bg-danger text-white'
                        >{errors.email.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="telefone" >
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control mask='(99) 99999-9999' isInvalid={errors.telefone} type="text"
                        placeholder="Digite seu Telefone"
                        {...register('telefone', clienteValidator.telefone)}
                        onChange={handleChange} />
                    {
                        errors.telefone &&
                        <small className='error-message bg-danger text-white'
                        >{errors.telefone.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf" >
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control mask='99.999-999' isInvalid={errors.cep} type="text"
                        placeholder="Digite seu CEP"
                        {...register('cep', clienteValidator.cep)}
                        onChange={handleChange} />
                    {
                        errors.cep &&
                        <small className='error-message bg-danger text-white'
                        >{errors.cep.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="endereco" >
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control isInvalid={errors.endereco} type="text"
                        placeholder="Digite seu Endereço"
                        {...register('endereco', clienteValidator.endereco)} />
                    {
                        errors.endereco &&
                        <small className='error-message bg-danger text-white'
                        >{errors.endereco.message}</small>
                    }
                </Form.Group>


                <div className='text-center'>
                    <Button variant="warning" onClick={handleSubmit(salvar)}>
                        <FiSave className='me-2' /> Salvar
                    </Button>
                    <Link href="/clientes" className="ms-2 btn btn-primary" type="submit">
                        <BiArrowBack /> Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}


export default form
