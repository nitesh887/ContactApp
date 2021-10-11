import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">ContactBook</Link>


                    <div className="d-flex">

                        <Link to="/contacts/add" className="btn btn-light" >Create Contact</Link>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Navbar
