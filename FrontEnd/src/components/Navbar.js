import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
const Navbar = ({ setIsOpen, isOpen }) => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    return (
        <div>
            <nav className='app_navbar'>
                <div />
                {!user ? <Link to="/login" >
                    <MDBBtn style={{ height: "40px", width: "100px" }} color='dark'>
                        Login
                    </MDBBtn>
                </Link> : <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <img style={{ height: "48px", width: "48px", borderRadius: "50%", objectFit: "cover" }} src={user.photo_url} alt="user" />
                    {user.name}
                </div>}
            </nav>
        </div>
    )
}

export default Navbar
