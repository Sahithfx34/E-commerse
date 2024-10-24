import { assets } from "../assets/frontend_assets/assets"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_content">

                <div className="footer_logo">
                    <img src={assets.logo} alt="logo" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex, accusamus est accusantium cupiditate, quas officiis numquam, ea explicabo nam ipsam harum optio dolorum. Iste quaerat consequuntur laborum fugiat voluptates.</p>
                </div>
                <div>
                    <h3>company</h3>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <h3>get in touch</h3>
                    <ul>

                        <li>+1-000-000-000</li>
                        <li>sahithreddyfx34@gmail.com</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p>Copyright 2024 © Sahith - All Right Reserved</p>
        </div>
    )
}

export default Footer