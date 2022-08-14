import { CartItemContainer } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details"></div>
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </CartItemContainer>
  );
};

export default CartItem;
