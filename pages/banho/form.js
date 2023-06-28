import Pagina from '@/Components/Pagina'
import banhoValidator from '@/validator/banhoValidator'
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

        axios.post('/api/banho', dados)
        push('/banho')

    }
    function handleChange(event) {
        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara));
    }
    return (
        <Pagina>
            <h1 className='text-center'>Serviço</h1>
            <Form>
                <Form.Group className="mb-3" controlId="nomeAnimal">
                    <Form.Label>Nome do Animal:</Form.Label>
                    <Form.Control isInvalid={errors.nomeAnimal} type="text"
                        placeholder="Digite o nome do animal"
                        {...register('nomeAnimal', banhoValidator.nomeAnimal)}
                        onChange={handleChange} />
                    {
                        errors.nomeAnimal &&
                        <small className='error-message bg-danger text-white'>
                            {errors.nomeAnimal.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="raca">
                    <Form.Label>Raça:</Form.Label>
                    <Form.Control isInvalid={errors.raca} type="text"
                        placeholder="Digite a raça"
                        {...register('raca', banhoValidator.raca)}
                        onChange={handleChange} />
                    {
                        errors.raca &&
                        <small className='error-message bg-danger text-white'>
                            {errors.raca.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="dtNascimento">
                    <Form.Label>Data de Nascimento:</Form.Label>
                    <Form.Control mask='99/99/9999'
                        isInvalid={errors.dtNascimento} type="text"
                        placeholder="Digite a data de nascimento"
                        {...register('dtNascimento', banhoValidator.dtNascimento)}
                        onChange={handleChange} />
                    {
                        errors.dtNascimento &&
                        <small className='error-message bg-danger text-white'>
                            {errors.dtNascimento.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="cliente">
                    <Form.Label>Cliente:</Form.Label>
                    <Form.Control
                        isInvalid={errors.cliente} type="text"
                        placeholder="Digite o nome do cliente"
                        {...register('cliente', banhoValidator.cliente)}
                        onChange={handleChange} />
                    {
                        errors.cliente &&
                        <small className='error-message bg-danger text-white'>
                            {errors.cliente.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control mask='(99)9 9999-9999'
                        isInvalid={errors.telefone} type="text"
                        placeholder="Digite o telefone"
                        {...register('telefone', banhoValidator.telefone)}
                        onChange={handleChange} />
                    {
                        errors.telefone &&
                        <small className='error-message bg-danger text-white'>
                            {errors.telefone.message}</small>
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="servico">
                    <Form.Label>Serviço:</Form.Label>
                    <Form.Select aria-label="Default select example"
                        isInvalid={errors.servico}
                        placeholder="Escolha o serviço"
                        {...register('servico', banhoValidator.servico)}
                        onChange={handleChange}>
                        <option>Escolha o serviço</option>
                        <option value='Banho'>Banho</option>
                        <option value='Tosa'>Tosa</option>
                        <option value='Banho e Tosa'>Banho e Tosa</option>
                        {
                            errors.servico &&
                            <small className='error-message bg-danger text-white'>
                                {errors.servico.message}</small>
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="funcionario">
                    <Form.Label>Funcionário:</Form.Label>
                    <Form.Control
                        isInvalid={errors.funcionario} type="text" funcionario
                        placeholder="Digite o nome do funcionário"
                        {...register('funcionario', banhoValidator.funcionario)}
                        onChange={handleChange} />
                    {
                        errors.funcionario &&
                        <small className='error-message bg-danger text-white'>
                            {errors.funcionario.message}</small>
                    }
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