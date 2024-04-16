import { assets } from '../../assets/assets';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nisi saepe consequatur deserunt reiciendis debitis asperiores praesentium vel quae id perspiciatis tenetur, magni at quia accusamus aperiam quidem facilis eligendi cum iste atque nihil voluptatum dignissimos. Consequuntur possimus eos quia.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delevery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+880 1978-979966</li>
                        <li>rezvirayhan2002@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright"> Copyright @2024 Tomato.Com - All Right Reserved. </p>
        </div>
    );
};

export default Footer;