import Pagina from '@/Components/Pagina';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';

const index = () => {

    const [clientes, setclientes] = useState([]);

    useEffect(() => {
        getAll()
    }, []);

    function getAll() {
        axios.get('/api/clientes').then(resultado => {
            setclientes(resultado.data);
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            axios.delete('/api/clientes/' + id)
            getAll()
        }
    }
    return (
        <>
            <Pagina titulo='clientes'>
                <Link href='/clientes/form' className='mb-2 btn btn-primary'> <AiFillPlusCircle /> Novo </Link>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Clientes</th>
                            <th>CPF</th>
                            <th>Animal</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>CEP</th>
                            <th>Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/clientes/' + item.id}>
                                        <BiPencil href={'/clientes/' + item.id} title="Alterar" />
                                    </Link>
                                    <HiTrash onClick={() => excluir(item.id)} />
                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.animal}</td>
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