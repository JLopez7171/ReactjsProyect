import { useState } from 'react'
import { Link } from 'react-router-dom';
import CartWidget from "../components/CartWidget";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
            <Link to="/">
                
                    <h1>CostaMusic</h1>
                
            </Link>
            </div>
            <ul className="navbar-links">

                <Link to="/">
                    Inicio
                </Link>
                
                <Link to="/categorias/Instrumentos">
                    Instrumentos
                </Link>
                
                <Link to="/categorias/Audio">
                    Audio
                </Link>

                <Link to="/categorias/Accesorios">
                    Accesorios
                </Link>

                <Link to={`/categorias/${encodeURIComponent("Producción Musical")}`}>
                    Producción Musical
                </Link>
                
                <CartWidget></CartWidget>
            </ul>
            
        </nav>

    )
}