import { ProductCard } from "./ProductCard";

export const ProductListing = ({ products }) => {
  return (
    <div id="ProductListing">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

