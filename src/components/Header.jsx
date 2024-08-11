import React from 'react'; 
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom'; 

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
    const pesquisar = () => {
        <Pesquisa />
    }
    
    return (
        <div id="headerCabecalho">
            <button className='atalho-mobile-search' onClick={pesquisar}><img src="/homepage/Menu.png"></img></button>
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
            <Link to={"/"} className="link" activeclassname="active">Home</Link>
            <Link to={"/products"} className="link" activeclassname="active">Produtos</Link>
            <Link to={"/categories"} className="link" activeclassname="active">Categorias</Link>
            <Link to={"/myOrders"} className="link" activeclassname="active">Meus Pedidos</Link>
        </div>
    );
}


const Pesquisa = () => {
    /*  cria um estado query para armazenar o valor digitado  */
    const [busca, setBusca] = React.useState('');
    const navigate = useNavigate();

    /* chamada quando o usuário clica no botão de busca */
    const realizarBusca = () => {
        if (busca.trim()) { /* verifica se não está vazio */
            /* redirecionar o usuário para a rota /products com query string filter com o texto da busca.*/
            navigate(`/products?filter=${busca.trim()}`);
        }
    };
    /*  tecla pressionada for Enter */
    const lidarComTecla = (event) => {
        if (event.key === 'Enter') {
            realizarBusca();
        }
    };
    return (
        <div id="pesquisaHeader">
            <input 
                type="text" 
                placeholder="Pesquisar produto..." 
                value={busca} 
                onChange={(e) => setBusca(e.target.value)}
                onKeyDown={lidarComTecla}
            />
            <button onClick={realizarBusca}>
                <img src="Search.svg" alt="ícone de busca" />
            </button>
        </div>
    );
}

const ButtonsHeader = () => {
    return (
        <>
        {/* <ItensNav class="cadastroHeader" name="Cadastre-se" caminho="/cadastro"/> */}
        <Link to={"/cadastro"} className="link" activeclassname="active">Cadastre-se</Link>
        <button className='buttonHeader'>Entrar</button>
        <a><img src="./homepage/mini-cart.svg" alt="carrinho de compras"></img></a>
        </>
    );
}/* 
export const ItensNav = ({name, caminho}) => {
    return (
        <Link to={caminho} className="link" activeClassName="active">{name}</Link>
    )
} */