import { Footer } from "./Footer"
import { Header } from "./Header"
import { Principal } from "./Principal"
import { ProductListing } from "./ProductListing"
import { ProductView } from "./ProductView"

export const Layout = ({page}) => {
    if ({page} == "HomePage") {
        return(
            <>
            <header><Header /></header>
            <Principal />
            <footer><Footer /></footer>
            </>
        )
    }
    if ({page} == "ProductListingPage") {
        return(
            <>
            <header><Header /></header>
            <ProductListing />
            <footer><Footer /></footer>
            </>
        )
    }
    if ({page} == "ProductViewPage") {
        return(
            <>
            <header><Header /></header>
            <ProductView />
            <footer><Footer /></footer>
            </>
        )
    }
        
}