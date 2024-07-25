export const ProductCard = ({ image, name, price, priceDiscount }) => {
    return (
      <div id="ProductCard">
        <div id="imagemCard">
          <img src={image} alt={name} />
        </div>
        <div id="descricaoCard">
          <h3>{name}</h3>
          <h4>{price}</h4>
          {priceDiscount && <h4>{priceDiscount}</h4>}
        </div>
      </div>
    );
  };