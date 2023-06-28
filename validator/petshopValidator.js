import React from 'react'

const petshopValidator = {
    produto: {
        required: 'O campo é obrigatório!',
    },

    quantidade: {
        required: 'O campo é obrigatório!',

    }, 

    vendendor: {
        required: 'O campo é obrigatório!',
        minLength: {
            value: 1,
            message: 'O número mínimo é 1'
        },
        maxLength: {
            value: 50,
            message: 'O número máximo é 50'
        }
    },

    preco: {
        required: 'O campo é obrigatório!',

    }
    
    
}
  
export default petshopValidator