import { menu_list } from '../../assets/assets';
import './ExploreMenu.css';
const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className="ExploreMenu" id="ExploreMenu">
            <h1>Explore Our Menu</h1>
            <p className="ExploreMenuText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aliquid qui fugiat! Aut laboriosam, odit impedit, sint, molestias id nulla dolorum officiis expedita possimus quis?</p>
            <div className="ExploreMenu-list">
                {
                    menu_list.map((item, index) => {
                        return (
                            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="ExploreMenu-List-item">
                                <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;