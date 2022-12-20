import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from "../redux/features/authSlice"

const Sidebar = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <div style={{ backgroundColor: "#929EB3", padding: "16px", display: "flex", flexDirection: "column", position: "fixed", height: "100vh" }}>
                <img src="./images/logo2.svg" alt="MedHead" style={{ alignSelf: "center" }} />
                <ul style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexBasis: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                        <Link to="/dashboard">
                            <li style={{ display: "flex", gap: "12px" }}>
                                <img src="/images/dashboard.svg" alt="Dashboard" />
                                <h6 style={{ color: "#111" }}>Dashboard</h6>
                            </li>
                        </Link>
                        <Link to="/selfanalyze">
                            <li style={{ display: "flex", gap: "12px" }}>
                                <img src="/images/Selfanalyze.svg" alt="Self Analyze" />
                                <h6 style={{ color: "#111" }}>Self Analyze</h6>
                            </li>
                        </Link>
                        <Link to="/onlinemedic">
                            <li style={{ display: "flex", gap: "12px" }}>
                                <img src="/images/onlinedoc.svg" alt="Online Medic" />
                                <h6 style={{ color: "#111" }}>Online Medic</h6>
                            </li>
                        </Link>
                        <Link to="/symptonchecker">
                            <li style={{ display: "flex", gap: "12px" }}>
                                <img src="/images/Virus.svg" alt="AI Sympton Checker" />
                                <h6 style={{ color: "#111" }}>AI Sympton Checker</h6>
                            </li>
                        </Link>
                    </div>
                    <Link onClick={() => {
                        dispatch(logout());
                    }}>
                        <li style={{ display: "flex", gap: "12px" }}>
                            <img src="/images/Logout.svg" alt="Logout" />
                            <h6 style={{ color: "#111" }}>Sign Out</h6>
                        </li>
                    </Link>

                </ul>
            </div>
            <div style={{ width: "250px" }}></div>
        </div>

    )
}

export default Sidebar
