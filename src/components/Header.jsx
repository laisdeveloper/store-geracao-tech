import { Logo } from './Logo'

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
            <Logo referencia="header"/>
            <Pesquisa />
            <ButtonsHeader />
        </div>
    );
}
const Navegacao = () => {
    return (
        <div id="headerNavegacao">
            <ItensNav name="Home"/>
            <ItensNav name="Produtos"/>
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
        <a src={caminho}>{name}</a>
    )
}