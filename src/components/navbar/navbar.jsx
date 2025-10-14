import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className='navbar'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/episodes">Episodes</Link>
          <Link to="/characters">Characters</Link>
        </div>
    );
}

export default Navbar;