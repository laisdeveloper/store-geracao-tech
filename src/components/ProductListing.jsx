export const ProductListing = ({products}) => {
    return (
        <div className="product-listing">
            {products.map((product, index) => (
            <div key={index} className="product-card">
                <img src={process.env.PUBLIC_URL + '/' + product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Preço: R$ {product.price.toFixed(2)}</p>
                {product.priceDiscount && (
                <p>De: R$ {product.priceDiscount.toFixed(2)}</p>
                )}
            </div>
            ))}
        </div>
    )
}

const products =  [
    {
      name: "K-Swiss v8 - Masculino",
      image: "products/product-thumb-1.png",
      price: 200,
      priceDiscount: 149.9
    },
    {
      name: "K-Swiss v8 - Masculino",
      image: "products/product-thumb-2.png",
      price: 49.9
    },
    {
    name: "K-Swiss v8 - Masculino",
    image: "products/product-thumb-1.png",
    price: 200,
    priceDiscount: 149.9
    },
    {
    name: "K-Swiss v8 - Masculino",
    image: "products/product-thumb-1.png",
    price: 200,
    priceDiscount: 149.9
    },
    {
    name: "K-Swiss v8 - Masculino",
    image: "products/product-thumb-1.png",
    price: 200,
    priceDiscount: 149.9
    },
    {
    name: "K-Swiss v8 - Masculino",
    image: "products/product-thumb-1.png",
    price: 200,
    priceDiscount: 149.9
    },
    {
    name: "K-Swiss v8 - Masculino",
    image: "products/product-thumb-1.png",
    price: 200,
    priceDiscount: 149.9
    },
    {
    name: "K-Swiss v8 - Masculino",
    image: "products/product-thumb-1.png",
    price: 200,
    priceDiscount: 149.9
    }
  ]