import { assets } from '../../assets/assets';
import './FoodItem.css';
const FoodItem = ({ id, name, price, image, description }) => {
    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className="food-item-image" src={image} alt="" />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">$ {price}</p>
            </div>
        </div>
    );
};

export default FoodItem;