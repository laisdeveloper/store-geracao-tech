import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { SearchProducts } from "../components/SearchProducts"

export const ProductListingPage =() => {
    return (
        <>
        <header><Header /></header>
        <SearchProducts />
        <footer><Footer /></footer>
        </>
    )
} 
/*
<Layout page="ProductListingPage" />
*/