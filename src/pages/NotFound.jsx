import { useNavigate } from "react-router-dom";
import "../css/NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate("/");
    };

    return (
        <div className="not-found-container">
            <div className="content">
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>
                    The page you are looking for doesn't exist or has been moved. Let's get you back on track!
                </p>
                <button onClick={handleBackToHome}>Back to Home</button>
            </div>
        </div>
    );
};

export default NotFound;
