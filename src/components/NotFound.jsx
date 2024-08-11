import React from 'react'; 
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div>
            <h3>Pagina Nao Encontrada</h3>
            <Link to="/">Voltar</Link>
        </div>
    )
}