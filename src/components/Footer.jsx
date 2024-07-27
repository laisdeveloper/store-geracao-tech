// src/components/Footer/Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

// Componente Principal do Footer
export const Footer = () => {
    const informacaoF = [
        {
            text: 'Sobre Drip Store',
            link: '/about'
        },
        {
            text: 'Segurança',
            link: '/seguranca'
        },
        {
            text: 'Wishlist',
            link: '/wishlist'
        },
        {
            text: 'Blog',
            link: '/blog'
        },
        {
            text: 'Trabalhe conosco',
            link: '/trabalheConosco'
        },
        {
            text: 'Meus pedidos',
            link: '/meusPedidos'
        }
    ];

    const categoriasF = [
        {
            text: 'Camisetas',
            link: '/camisetas'
        },
        {
            text: 'Calças',
            link: '/calcas'
        },
        {
            text: 'Bones',
            link: '/bones'
        },
        {
            text: 'Headphones',
            link: '/headphones'
        },
        {
            text: 'Tênis',
            link: '/tenis'
        }
    ];

    return (
        <div id="footer">
            <Principal
                informacoes={informacaoF}
                categorias={categoriasF}
            />
            <Secundario date={new Date().getFullYear()} />
        </div>
    );
};

// Componente Principal do Footer
const Principal = ({ informacoes, categorias }) => {
    return (
        <div id="footerPrincipal">
            <Bloco>
                <img src="/homepage/logo-footer.svg" alt="logo footer" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </Bloco>
            <Bloco>
                <h2>Informações</h2>
                <InformacoesPagina items={informacoes} />
            </Bloco>
            <Bloco>
                <h2>Categorias</h2>
                <InformacoesPagina items={categorias} />
            </Bloco>
            <Bloco>
                <h2>Contato</h2>
                <div className="lista">
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                    <p>(85) 3051-3411</p>
                </div>
            </Bloco>
        </div>
    );
};

// Componente Secundário do Footer
const Secundario = ({ date }) => {
    return (
        <div id="footerSecundario">
            <hr />
            <p>@{date} Digital Store</p>
        </div>
    );
};

// Componente Bloco para estruturação
const Bloco = ({ children }) => {
    return (
        <div className="blocoFooter">
            {children}
        </div>
    );
};

// Componente para renderizar lista de informações ou categorias
const InformacoesPagina = ({ items }) => {
    return (
        <ul className='info-lista'>
            {items.map((item, index) => (
                <li key={index}>
                    <NavLink to={item.link}>{item.text}</NavLink>
                </li>
            ))}
        </ul>
    );
};
