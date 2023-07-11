import './Navbar.component.css'
import { NavLink } from "react-router-dom"
import NavbarCollapse from './NavbarCollapse'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-dark navbar-expand-lg">
                <div className="container-fluid ms-5">
                    <NavLink to="/" className="navbar-brand text-light">
                        <img src="/img/logo.png" alt="Logo Caka Architect Studio" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarItems" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <NavbarCollapse />
                </div>
            </nav>
        </>
    )
}

export default Navbar