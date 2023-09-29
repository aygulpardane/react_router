import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <h4>Go to:</h4>
            <Link to="/blue">BLUE</Link>
            <Link to="/red">RED</Link>
            <Link to="/black">BLACK</Link>
            <Link to="/">HOME</Link>
        </div>
    )
}

export default Footer;
