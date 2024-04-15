import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

import './FoodDisplay.css';
const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className="Food-display" id="food-display">
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list.map((item, index) => {
                    return <FoodItem key={index}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        image={item.image}
                        price={item.price}
                    ></FoodItem>
                })}
            </div>
        </div>
    );
};

export default FoodDisplay;