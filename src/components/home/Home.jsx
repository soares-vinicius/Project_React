import React from "react";
import Main from "../template/Main";

export default function Home(props) {
    return (
        <Main icon="home" title="Inicio"
            subtitle="Projeto React">
            <div className='display-4'>Bem Vindo</div>
            <hr />
            <p className='mb-0'>Sistema para exemplificar construção cadatro em React</p>
        </Main>
    )
}