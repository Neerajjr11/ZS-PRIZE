import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingToRedirect = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/login");
    }, [navigate]);
    return (
        <div style={{ marginTop: "100px" }}>
            <h5>Redirecting to login page</h5>
        </div>
    );
};

export default LoadingToRedirect;