import { NavLink } from "react-router-dom"
import "./Header.css"

export const Header = () => {
    return (
        <>
            <div className="homeRoutes" >
                <NavLink to="/" className="navlink" >Home</NavLink>
                <NavLink to="/rating" className="navlink" >Rating</NavLink>
                <NavLink to="/calculator" className="navlink" >Calculator</NavLink>
                <NavLink to="/tableColorizer" className="navlink" >Table-Colorizer</NavLink>
                <NavLink to="/dtable" className="navlink" >D-Table</NavLink>
            </div>
        </>
    )
}