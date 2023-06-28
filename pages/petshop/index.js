import Pagina from '@/Components/Pagina'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { HiTrash } from 'react-icons/hi'
import { BiPencil } from 'react-icons/bi'
import Link from 'next/link'
const index = () => {
    const [petshop, setpetshop] = useState([])

    useEffect(() => {
      getAll() 
    }, [])

    function getAll(){
        axios.get('/api/petshop').then(resultado=>{
            setpetshop(resultado.data);
        })
    }

    function excluir(id){
        if(confirm('Deseja realmente excluir o registro?')){
            axios.delete('/api/petshop/' + id)
            getAll()
        }
    }
    return (
        <Pagina>
            <Link href='/petshop/form' className='mb-2 btn btn-primary'>
                <AiFillPlusCircle /> Novo </Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Vendendor</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                {petshop.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/petshop/' + item.id}> 
                                <BiPencil href={'/petshop/' + item.id} title="Alterar" /> 
                                </Link>
                                <HiTrash onClick={() => excluir(item.id)} />
                            </td>
                            <td>{item.produto}</td>
                            <td>{item.quantidade}</td>
                            <td>{item.vendendor}</td>
                            <td>{item.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index