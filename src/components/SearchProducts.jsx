import { Produtos } from "./Principal"; 

export const SearchProducts = () => {
    return (
        <div class="SearchProducts">
            <Filter /> 
            <Produtos />
        </div>
    )
}

const Filter = ({filters}) => {
    return(
        <div class="filter">
            <h2>Filtrar por</h2>
            <hr></hr>
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