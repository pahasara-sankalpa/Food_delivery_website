import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../Context/StoreContext";

const FoodItem = ({obj}) => {
  const {_id,name,image,description,price} = obj
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[_id] ? (
          <img
            className="add"
            onClick={() =>
              addToCart(_id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-counter">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[_id]}</p>
            <img
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-price">
          <p className="food-item-name">{name}</p>
          <p className="food-item-price">{price}</p>
        </div>
        <p className="food-item-description">{description}</p>
      </div>
    </div>
  );
};

export default FoodItem;



