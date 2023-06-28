import Pagina from '@/Components/Pagina'
import petshopValidator from '@/validator/petshopValidator'
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

        axios.post('/api/petshop', dados)
        push('/petshop')

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
                <Form.Group className="mb-3" controlId="produto">
                    <Form.Label>Produto:</Form.Label>
                    <Form.Control isInvalid={errors.produto} type="text"
                        placeholder="Digite o produto"
                        {...register('produto', petshopValidator.produto)}
                        onChange={handleChange} />
                    {
                        errors.produto &&
                        <small className='error-message bg-danger text-white'>
                            {errors.produto.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="quantidade">
                    <Form.Label>Quantidade:</Form.Label>
                    <Form.Control isInvalid={errors.quantidade} type="text"
                        placeholder="Digite a quantidade"
                        {...register('quantidade', petshopValidator.quantidade)}
                        onChange={handleChange} />
                    {
                        errors.quantidade &&
                        <small className='error-message bg-danger text-white'>
                            {errors.quantidade.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="vendendor">
                    <Form.Label>vendendor:</Form.Label>
                    <Form.Control 
                        isInvalid={errors.vendendor} type="text"
                        placeholder="Digite o nome vendendor"
                        {...register('vendendor', petshopValidator.vendendor)}
                        onChange={handleChange} />
                    {
                        errors.vendendor &&
                        <small className='error-message bg-danger text-white'>
                            {errors.vendendor.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="preco">
                    <Form.Label>Preço:</Form.Label>
                    <Form.Control
                        isInvalid={errors.preco} type="text"
                        placeholder="Digite o preço"
                        {...register('preco', petshopValidator.preco)}
                        onChange={handleChange} />
                    {
                        errors.preco &&
                        <small className='error-message bg-danger text-white'>
                            {errors.preco.message}</small>
                    }
                </Form.Group>
                
            </Form>
            <div className='text-center'>
                <Button variant="warning" onClick={handleSubmit(salvar)}>
                    <FiSave className='me-2' /> Salvar
                </Button>
                <Link href="/petshop" className="ms-2 btn btn-primary" type="submit">
                    <BiArrowBack /> Voltar
                </Link>
            </div>
        </Pagina>
    )
}

export default form