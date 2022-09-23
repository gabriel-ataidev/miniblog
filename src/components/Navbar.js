import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    return(
        <nav className="navbar">
            <NavLink className="brand" to="/">Mini <span>Blog</span></NavLink>
            <ul className="pages_list">
                <li><NavLink to="/" end className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => (isActive ? "active" : "")}>Sobre</NavLink></li>
                <li><NavLink to="/login" className={({isActive}) => (isActive ? "active" : "")}>Login</NavLink></li>
                <li><NavLink to="/register" className={({isActive}) => (isActive ? "active" : "")}>Cadastrar</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;
