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
const Filter = () => {
    return (
        <div className="filter">
            <h2>Filtrar por</h2><br></br>
            <hr /><br></br>

            <h3>Marca</h3> 
            <Item id="adidas" name="marca" label="Adidas" type="checkbox" />
            <Item id="balenciaga" name="marca" label="Balenciaga" type="checkbox" />
            <Item id="kswiss" name="marca" label="K-Swiss" type="checkbox" />
            <Item id="nike" name="marca" label="Nike" type="checkbox" />
            <Item id="puma" name="marca" label="Puma" type="checkbox" /><br></br>

            <h3>Categoria</h3>
            <Item id="esporte" name="categoria" label="Esporte e lazer" type="checkbox" />
            <Item id="casual" name="categoria" label="Casual" type="checkbox" />
            <Item id="utilitario" name="categoria" label="Utilitário" type="checkbox" />
            <Item id="corrida" name="categoria" label="Corrida" type="checkbox" /><br></br>

            <h3>Gênero</h3>
            <Item id="masculino" name="genero" label="Masculino" type="checkbox" />
            <Item id="feminino" name="genero" label="Feminino" type="checkbox" />
            <Item id="unisex" name="genero" label="Unisex" type="checkbox" /><br></br>

            <h3>Estado</h3>
            <Item id="novo" name="estado" label="Novo" type="radio" />
            <Item id="usado" name="estado" label="Usado" type="radio" />
        </div>
    )
}

const Item = ({ id, name, label, type }) => {
    return (
        <div className="checkbox">
            <input type={type} id={id} name={name} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
    

const NavProducts = () => {
    const showFilter = () => {
        return (
            <Filter />
        )
    }
    return(
        <div className="NavProducts">
            <div id="results">
                <h3 id="h3quantityProducts">Resultados para "Tenis" - </h3>
                <h3>389 produtos</h3>
            </div>
            <div id="ordenar">
                <select>
                    <option value="relevant">Ordenar por: Mais relevantes</option>
                    <option value="sale">Ordenar por: Mais vendidos</option>
                    <option value="pricebigger">Ordenar por: Maior preço</option>
                    <option value="pricesmaller">Ordenar por: Menor preço</option>
                </select>
                <div id="iconFilterMobile" onClick={showFilter}>
                    <a><img src="./homepage/body/icon/filtericon.svg" alt="icon filtro mobile"></img></a>
                </div>
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