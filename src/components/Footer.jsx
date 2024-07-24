import { Logo } from './Logo'

export const Footer = () => {
    return (
        <>
        <div id="footer">
            <Principal />
            <Secundario />
        </div>
        </>
    )
}
const Principal = () => {
    return (
        <div id="footerPrincipal">
            <Bloco>
                <Logo referencia="footer" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </Bloco>
            <Bloco>
                <h2>Informaçao</h2>
                <div class="lista">
                    <a>Sobre Drip Store</a><br></br>
                    <a>Segurança</a><br></br>
                    <a>Wishlist</a><br></br>
                    <a>Blog</a><br></br>
                    <a>Trabalhe conosco</a><br></br>
                    <a>Meus pedidos</a>
                </div>
            </Bloco>
            <Bloco>
                <h2>Categorias</h2>
                <div class="lista">
                    <a>Camisetas</a><br></br>
                    <a>Calças</a><br></br>
                    <a>Bones</a><br></br>
                    <a>Headphones</a><br></br>
                    <a>Tenis</a>
                </div>
            </Bloco>
            <Bloco>
                <h2>Contato</h2>
                <div class="lista">
                    <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p><br></br>
                    <p>(85) 3051-3411</p>
                </div>
            </Bloco>
        </div>
    );
}
const Secundario = ({date}) => {
    return (
        <div id="footerSecundario">
            <hr></hr>
            <p>@{date} Lais & Digital College</p>
        </div>
    );
}

const Bloco = ({children}) => {
    return (
        <div id="Bloco">
            {children}
        </div>
    );
}