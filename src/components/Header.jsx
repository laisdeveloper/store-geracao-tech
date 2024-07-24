import React from 'react'; 
import { NavLink } from 'react-router-dom'; 

export const Header = () => {
    return ( 
        <>
        <div id="Header">
            <Cabecalho />
            <Navegacao />
        </div>
        </>
    );
}

const Cabecalho = () => {
    return (
        <div id="headerCabecalho">
            <img src="/homepage/logo-header.svg"     
                    alt="logo header"></img>
            <Pesquisa />
            <ButtonsHeader />
        </div>
    );
}
const Navegacao = () => {
    return (
        <div id="headerNavegacao">
            <ItensNav name="Home" caminho="/"/>
            <ItensNav name="Produtos" caminho="/produtos" />
            <ItensNav name="Categorias"/>
            <ItensNav name="Meus pedidos"/>
        </div>
    );
}


const Pesquisa = () => {
    return (
        <div id="pesquisa">
            <form>
                <input type="text" 
                        placeholder="Pesquisar produto..."/>
                <button><img src="Search.svg" alt="search"></img></button>
            </form>
        </div>
    )
}
const ButtonsHeader = () => {
    return (
        <>
        <a>Cadastre-se</a>
        <button>Entrar</button>
        <a><img src="./homepage/mini-cart.svg" alt="carrinho de compras"></img></a>
        </>
    );
}
const ItensNav = ({name, caminho}) => {
    return (
        <NavLink to={caminho} exact>
            {name}
        </NavLink>
    )
}
{/* <a src={caminho}>{name}</a> */}