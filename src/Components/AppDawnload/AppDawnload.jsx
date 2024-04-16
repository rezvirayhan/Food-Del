import { assets } from '../../assets/assets';
import './AppDawnload.css';
const AppDawnload = () => {
    return (
        <div className="app-dawnload" id="app-dawnload">
            <p>For Better Experience Dawnload <br /> Tomoto App</p>
            <div className="app-dawnload-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    );
};

export default AppDawnload;