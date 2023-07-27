import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    let navigate = useNavigate();

    const Logout = () => {
        localStorage.removeItem('token')
        navigate("/login");

    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item btn btn-primary">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item btn btn-primary">
                                <NavLink className="nav-link" to="/signup">Signup</NavLink>
                            </li>
                        </ul> : <li className="nav-item btn btn-primary" onClick={Logout}>Logout</li>}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;