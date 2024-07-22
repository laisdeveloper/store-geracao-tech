export const Body = () => {
    return (
        <>
        <Destaque   titulo="Queima de stoque Nike 🔥"
                    subtitulo="Melhores ofertas personalizadas"
                    descricao="Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
                    imagem="/products/produc-image-1.jpeg"/>
        <Colecao />
        <Produtos />
        <Destaque   titulo="Air Jordan edição de 
colecionador"
                    subtitulo="Oferta especial"
                    descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                    imagem="/products/produc-image-1.jpeg"
        />
        </>
    )
}
const Destaque = ({titulo, subtitulo, description, imagem}) => {
    return (
        <div id="bodyDestaque">
            <div id="descricao">
                <h3>{subtitulo}</h3>
                <h1>{titulo}</h1>
                <p>{description}</p>
                <button>Ver Ofertas</button>
            </div>
            <div id="imgDestaque">
                <img src={imagem} alt="imagem destaque"></img>
            </div>
        </div>
    );
}
const Colecao = () => {
    return (
        <div id="bodyColecao">
            <h1>Coleções em destaque</h1>
            <Card />
            <Card />
            <Card />
            <h1>Coleções em destaque</h1>
            <Icon />
            <Icon />
            <Icon />
            <Icon />
            <Icon />
        </div>
    );
}
const Produtos = () => {
    return (
        <div id="bodyProdutos">
            <h1>hello B P</h1>
        </div>
    );
}

const Card = () => {
    return (
        <div id="card">
            <h3>meu card</h3>
        </div>
    );
}

const Icon = () => {
    return (
        <div id="icon">
            <h3>meu icon</h3>
        </div>
    );
}