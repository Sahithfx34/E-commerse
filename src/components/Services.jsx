import { assets } from "../assets/frontend_assets/assets"

const Services = () => {
    return (
        <>
            <div className="services_container">
                <div>
                    <img src={assets.exchange_icon} />
                    <h4>Easy Exchage Policy</h4>
                    <p>We offer hasssle free exchange policy</p>
                </div>
                <div>
                    <img src={assets.quality_icon} />
                    <h4>7 Days Return Policy</h4>
                    <p>We provide 7 days free return policy</p>
                </div>
                <div>
                    <img src={assets.support_img} />
                    <h4>Best customer support</h4>
                    <p>We oprovide 24/7 customer support</p>
                </div>
            </div>

        </>
    )
}

export default Services