import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'

function Navbar() {
    return ( 
        <header>
            <nav className='nav-bar'>
                <p className='logo'>Super Shopping</p>
            <ul className='nav-bar-items'>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
            </ul>
            <CartWidget />
        </nav>
        </header>
    );
};
export default Navbar;