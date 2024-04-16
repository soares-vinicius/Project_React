import React, { Component } from 'react';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuário',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Remover'

}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}