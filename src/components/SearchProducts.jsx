import { Produtos } from "./Principal"; 

export const SearchProducts = () => {
    return (
        <div className="SearchProducts">
            <NavProducts />
            <div className="BodyProducts">
                <Filter /> 
                <Produtos />
            </div>
        </div>
    )
}

const Filter = ({filters}) => {
    return(
        <div className="filter">
            <h2>Filtrar por</h2>
            <hr></hr>

            <h3>Marca</h3>
            <Item id="filter" name="Adidas" type="checkbox"/>
        </div>
    )
}
const Item = ({id, name, type}) => {
    return (
        <>
        <input type={type} id={id} name={id} />
        <label htmlFor={id}>{name}</label>
        </>
    )
}

const NavProducts = () => {
    return(
        <div className="NavProducts">
            <div id="results">
                <h3>Resultados para "Tenis" - </h3>
                <h3>389 produtos</h3>
            </div>
            <div id="ordenar">
                <select>
                    <option value="relevant">Ordenar por: Mais relevantes</option>
                    <option value="sale">Ordenar por: Mais vendidos</option>
                    <option value="pricebigger">Ordenar por: Maior preço</option>
                    <option value="pricesmaller">Ordenar por: Menor preço</option>
                </select>
            </div>
        </div>
    )
}

const filters = [
    {
        title: 'marca',
        id: 'filter',
        check: 'Adidas'
    },
    {
        title: 'marca',
        id: 'filter',
        check: 'Balenciaga'
    },
    {
        title: 'marca',
        id: 'filter',
        check: 'K-Swiss'
    },
    {
        title: 'marca',
        id: 'filter',
        check: 'Nike'
    },
    {
        title: 'marca',
        id: 'filter',
        check: 'Puma'
    }
]

const marcas = [
    'Adidas', 
    'Balenciaga',
    'K-Swiss',
    'Nike',
    'Puma'
]
const category = [
    'Esport e lazer',
    'Casual',
    'Utilitario',
    'Corrida'
]
const gender = [
    'Masculino',
    'Feminino',
    'Unisex'
]