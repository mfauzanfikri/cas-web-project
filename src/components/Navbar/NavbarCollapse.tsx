import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const NavbarCollapse = () => {
    const location = useLocation()
    const [currentLocation, setCurrentLocation] = useState('/')
    const navbarCollapseRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        if (currentLocation !== location.pathname) {
            setCurrentLocation(location.pathname)
            if (navbarCollapseRef.current !== null) {
                navbarCollapseRef.current.classList.remove('show')
            }
        }
    }, [location, currentLocation])
    
    return (
        <>
            <div className="collapse navbar-collapse me-5" id="navbarItems" ref={navbarCollapseRef}>
                <div className="navbar-nav ms-auto">
                    <NavLink to='/' className={`nav-link mx-2 fs-5 text-light ${(isActive:boolean, isPending:boolean) => {
                        return isActive ? "active" : ""
                    }}`}>Home</NavLink>
                    <NavLink to='/projects' className={`nav-link mx-2 fs-5 text-light ${(isActive:boolean, isPending:boolean) => {
                        return isActive ? "active" : ""
                    }}`}>Projects</NavLink>
                    <NavLink to='/pricing-and-procedure' className={`nav-link mx-2 fs-5 text-light ${(isActive:boolean, isPending:boolean) => {
                        return isActive ? "active" : ""
                    }}`}>Pricing & Procedure</NavLink>
                    <NavLink to='/about' className={`nav-link mx-2 fs-5 text-light ${(isActive:boolean, isPending:boolean) => {
                        return isActive ? "active" : ""
                    }}`}>About</NavLink>
                    <NavLink to='/contact' className={`nav-link mx-2 fs-5 text-light ${(isActive:boolean, isPending:boolean) => {
                        return isActive ? "active" : ""
                    }}`}>Contact</NavLink>
                </div>
            </div>
        </>
    )
}

export default NavbarCollapse