import React, { useState, useEffect } from 'react';


export const Body = () => {
    return (
        <>
        <Destaque   titulo="Queima de stoque Nike 🔥"
                    subtitulo="Melhores ofertas personalizadas"
                    descricaoD="Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur."
                    imagem="/products/produc-image-1.jpeg"/>
        <Colecao />
        <Produtos />
        <Destaque   titulo="Air Jordan edição de 
colecionador"
                    subtitulo="Oferta especial"
                    descricaoD="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip"
                    imagem="/products/produc-image-1.jpeg"
        />
        </>
    )
}
const Destaque = ({titulo, subtitulo, descricaoD}) => {

    const roll = [
        {"src": "products/home-slide-1.jpeg"},
        {"src": "products/home-slide-2.jpeg"}
    ]

    return (
        <div id="bodyDestaque">
            <div id="descricao">
                <h3>{subtitulo}</h3>
                <h1>{titulo}</h1>
                <p>{descricaoD}</p>
                <button>Ver Ofertas</button>
            </div>
            <div id="imgDestaque">
                <Gallery imagens={roll}/>
            </div>
        </div>
    );
}
const Colecao = () => {
    return (
        <div id="bodyColecao">
            <h2>Coleções em destaque</h2>
            <Card id="card"
                imagem="./homepage/body/card/supreme.svg"/>
            <Card id="card" 
                imagem="./homepage/body/card/adidas.svg"/>
            <Card id="card" 
                imagem="./homepage/body/card/bass.svg"/>
            <h2>Coleções em destaque</h2>
            <Card id="icon"
                imagem="/homepage/body/icon/shirt.svg"/>
            <Card id="icon"
                imagem="/homepage/body/icon/pants.svg"/>
            <Card id="icon"
                imagem="/homepage/body/icon/cap.svg"/>
            <Card id="icon"
                imagem="/homepage/body/icon/phone.svg"/>
            <Card id="icon"
                imagem="/homepage/body/icon/shoe.svg"/>
        </div>
    );
}
const Produtos = () => {
    return (
        <div id="bodyProdutos">
            <h2>Produtos em alta</h2>
            <Card id="produto"
                    imagem="/homepage/body/product/sale.png"/>
            <Card id="produto"
                    imagem="/homepage/body/product/normal.png"/>
        </div>
    );
}

const Card = ({id, imagem}) => {
    return (
        <div id={id}>
            <a><img src={imagem}></img></a>
        </div>
    );
}

const Gallery = ({imagens}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000); // Muda a imagem a cada 3 segundos
    
        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
      }, [imagens.length]);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
        );
      };
    
    return (
        <img src={imagens[currentIndex].src} alt="imagem destaque"></img>
    )
}
{/* <img src={imagem} alt="imagem destaque"></img> */}