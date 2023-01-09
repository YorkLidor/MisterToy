import { NavLink } from "react-router-dom";

export function AppHeader() {

    return (
        <header className="app-header">
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/shop">Shop</NavLink> |
                <NavLink to="/about">About</NavLink> |
                {/* <a href="#" onClick={onToggleCart}>
                    🛒 Cart
                </a> */}
            </nav>

            <h1>Toy Shop</h1>

        </header>
    )
}

