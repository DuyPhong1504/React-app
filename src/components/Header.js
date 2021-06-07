import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-dark bg-dark opacity-0h5">


            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link  className="nav-link" to='dashboard'>Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link  className="nav-link" to='login'>Login</Link>
                    </li>
                    <li className="nav-item active">
                        <Link  className="nav-link" to='store'>Store</Link>
                    </li>

                </ul>
            </div>
        </header>
        



    )
}

export default Header
