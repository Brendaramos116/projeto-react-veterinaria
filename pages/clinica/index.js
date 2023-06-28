import Pagina from '@/Components/Pagina'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { HiTrash } from 'react-icons/hi'
import { BiPencil } from 'react-icons/bi'
import Link from 'next/link'
const index = () => {
    const [clinica, setclinica] = useState([])

    useEffect(() => {
      getAll() 
    }, [])

    function getAll(){
        axios.get('/api/clinica').then(resultado=>{
            setclinica(resultado.data);
        })
    }

    function excluir(id){
        if(confirm('Deseja realmente excluir o registro?')){
            axios.delete('/api/clinica/' + id)
            getAll()
        }
    }
    return (
        <Pagina>
            <Link href='/clinica/form' className='mb-2 btn btn-primary'>
                <AiFillPlusCircle /> Novo </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome do Animal</th>
                        <th>Tipo</th>
                        <th>Raça</th>
                        <th>Sexo</th>
                        <th>Data de Nascimento</th>
                        <th>Cliente</th>
                        <th>Telefone</th>
                        <th>Serviço</th>
                        <th>Descrição Serviço</th>
                        <th>Funcionário</th>
                    </tr>
                </thead>
                <tbody>
                {clinica.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/clinica/' + item.id}> 
                                <BiPencil href={'/clinica/' + item.id} title="Alterar" /> 
                                </Link>
                                <HiTrash onClick={() => excluir(item.id)} />
                            </td>
                            <td>{item.nomeAnimal}</td>
                            <td>{item.tipo}</td>
                            <td>{item.raca}</td>
                            <td>{item.sexo}</td>
                            <td>{item.dtNascimento}</td>
                            <td>{item.cliente}</td>
                            <td>{item.telefone}</td>
                            <td>{item.servico}</td>
                            <td>{item.descricao}</td>
                            <td>{item.funcionario}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index