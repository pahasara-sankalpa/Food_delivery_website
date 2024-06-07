import React, { useContext } from "react";
import "./FoodDisplay.css";

import FoodItem from "../FoodItem/FoodItem";
import { food_list } from "../../assets/assets";

const FoodDisplay = (category) => {
console.log(food_list);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        
        {
          food_list.map((item, index) => {
            return (
              <FoodItem
                key={index}
                obj  = {item}
              ></FoodItem>
            );
          })
        }
      </div>
      
    </div>
  );
};

export default FoodDisplay;
