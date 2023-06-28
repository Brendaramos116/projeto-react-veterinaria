import Pagina from '@/Components/Pagina';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';

const index = () => {

    const [funcionarios, setfuncionarios] = useState([]);

    useEffect(() => {
        getAll()
    }, []);

    function getAll() {
        axios.get('/api/funcionarios').then(resultado => {
            setfuncionarios(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/funcionarios/' + id)
            getAll()
        }
    }
    return (
        <>
            <Pagina titulo='funcionarios'>
                <Link href='/funcionarios/form' className='mb-2 btn btn-primary'> <AiFillPlusCircle /> Novo </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>funcionarios</th>
                            <th>CPF</th>
                            <th>Matrícula</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>CEP</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {funcionarios.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/funcionarios/' + item.id}>
                                        <BiPencil href={'/funcionarios/' + item.id} title="Alterar" />
                                    </Link>
                                    <HiTrash onClick={() => excluir(item.id)} />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.funcao}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>{item.cep}</td>
                                <td>{item.endereco}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Pagina>
        </>
    )
}

export default index