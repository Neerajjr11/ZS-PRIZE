import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBInput, MDBSpinner, MDBValidation, MDBBtn } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login, setToken } from '../redux/features/authSlice';
import { GoogleLogin } from '@react-oauth/google';

const initialState = {
    email: "",
    password: "",
};

const Login = () => {
    const [formValue, setFormValue] = useState(initialState);
    const { loading, error } = useSelector((state) => ({ ...state.auth }));
    const { username, password } = formValue;
    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            dispatch(login({ formValue, navigate, toast }));
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };
    return (
        <div style={{ display: "flex", height: "100%", minHeight: "100vh" }}>
            <div class="col-md-8 img-fluid" style={{ height: "100vh" }}>
                <img className='w-100 h-100' style={{ objectFit: "cover", objectPosition: "bottom" }} src='images/login.png' alt="MedHead" />
            </div>
            <div
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "500px",
                    alignContent: "center",
                    marginTop: "60px",
                }}
            >
                <MDBCard alignment="center">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <img src="/images/medheadlogo.svg" alt="MedHead" />
                        <Link to="/register" >
                            <MDBBtn style={{ height: "40px", width: "100px" }} color='dark'>
                                Sign Up
                            </MDBBtn>
                        </Link>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                        style={{
                            height: "32px",
                            width: "32px",
                            margin: "auto"
                        }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h5>Sign In</h5>
                    <MDBCardBody>
                        <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
                            <div className="col-md-12">
                                <MDBInput
                                    label="Email"
                                    type="email"
                                    value={username}
                                    name="username"
                                    onChange={onInputChange}
                                    required
                                    validation="Please provide your email"
                                />
                            </div>
                            <div className="col-md-12">
                                <MDBInput
                                    label="Password"
                                    type="password"
                                    value={password}
                                    name="password"
                                    onChange={onInputChange}
                                    required
                                    validation="Please provide your password"
                                />
                            </div>
                            <div className="col-12">
                                <MDBBtn style={{ width: "100%" }} className='mx-2' color='dark'>
                                    {loading && (
                                        <MDBSpinner
                                            size="sm"
                                            role="status"
                                            tag="span"
                                            className="me-2"
                                        />)
                                    }
                                    Login
                                </MDBBtn>
                            </div>
                        </MDBValidation>
                        <br />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <GoogleLogin
                                onSuccess={(res) => {
                                    fetch("https://zsapi.delanolourenco.xyz/auth/oauth-exchange", {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            id_token: res.credential
                                        })
                                    }).then(res => res.json()).then(res => {
                                        console.log("google login", res)
                                        dispatch(setToken(res));
                                        navigate("/dashboard")
                                    })
                                }}
                                onError={(res) => {
                                    console.log("error ", res)
                                }}
                                isSignedIn={true}
                            />
                        </div>
                    </MDBCardBody>

                </MDBCard>
            </div>
        </div >
    )
}

export default Login
