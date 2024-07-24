const Logo = (referencia) => {
    if (referencia=='header') 
        return(<img src="/homepage/logo-header.svg"     
                    alt="logo header"></img>)
    if (referencia=='footer') 
        return(<img src="/homepage/logo-footer.svg"
                    alt="logo footer"></img>)
}
export default Logo;