import React from 'react'

const clinicaValidator ={
    nomeAnimal: {
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

    raca: {
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

    sexo: {
        required: 'O campo é obrigatório!'
    },

    dtNascimento: {
        required: 'O campo é obrigatório!'
    },

    cliente: {
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

   telefone: {
        required: 'O campo é obrigatório!',
    },

    servico: {
        required: 'O campo é obrigatório!',

    },
    descricao: {
        required: 'O campo é obrigatório!',

    },

    funcionario: {
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

    


}

export default clinicaValidator