import CartWidget from "../CartWidget";

export default function Navbar(){
    return <nav className="navbar">
    <div className="navbar-brand">
        <h1>CostaMusic</h1>
    </div>
    <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
    </ul>
    <CartWidget></CartWidget>
</nav>
}