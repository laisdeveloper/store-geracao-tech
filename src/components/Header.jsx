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
            <img src="./homepage/logo-header.svg" alt="logo header"></img>
            <div id="pesquisa">
                <form>
                    <input type="text" placeholder="Pesquisar produto..."/>
                    <button><img src="Search.svg" alt="search"></img></button>
                </form>
            </div>
            <a>Cadastre-se</a>
            <button>Entrar</button>
            <a><img src="./homepage/mini-cart.svg" alt="carrinho de compras"></img></a>
        </div>
    );
}
const Navegacao = () => {
    return (
        <div id="headerNavegacao">
            <a>Home</a>
            <a>Produtos</a>
            <a>Categorias</a>
            <a>Meus pedidos</a>
        </div>
    );
}