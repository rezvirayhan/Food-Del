import { useState } from "react";

import AppDawnload from "../../Components/AppDawnload/AppDawnload";
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import Header from '../../Components/Header/Header';
import './Home.css';
const Home = () => {
    const [category, setCategory] = useState("All")
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />
            <AppDawnload />
        </div>
    );
};

export default Home;