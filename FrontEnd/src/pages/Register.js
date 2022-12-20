import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox } from "@material-ui/core";
import { MDBCard, MDBCardBody, MDBInput, MDBValidation, MDBBtn } from "mdb-react-ui-kit";

import { GoogleLogin } from '@react-oauth/google';
import { toast } from "react-toastify";

import { register } from '../redux/features/authSlice';


const initialState = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: ""
};

const Register = () => {

    const [formValue, setFormValue] = useState(initialState);
    const { name, email, password, confirmPassword } = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return toast.error("Password should Match");
        }
        if (email && password && name && confirmPassword && checked) {
            dispatch(register({ formValue, navigate, toast }));
        }
    };

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div style={{ display: "flex" }}>
            <div class="col-md-8 img-fluid" style={{ height: "100vh" }}>
                <img className='w-100 h-100' style={{ objectFit: "cover", objectPosition: "bottom" }} src='images/signup1.png' alt="MedHead" />
            </div>
            {/* <div
                className='col-md-4 px-4 py-4'
            > */}
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
                        <Link to="/login" >
                            <MDBBtn style={{ height: "40px", width: "100px" }} color='dark'>
                                Login
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

                    <h3>Sign Up </h3>
                    <MDBCardBody>
                        <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
                            <div className="col-md-12">
                                <MDBInput
                                    label="Name"
                                    type="text"
                                    value={name}
                                    name="name"
                                    onChange={onInputChange}
                                    required
                                    validation="Please provide your First Name"
                                />
                            </div>
                            <div className="col-md-12">
                                <MDBInput
                                    label="Email"
                                    type="email"
                                    value={email}
                                    name="email"
                                    onChange={onInputChange}
                                    required
                                    validation="Please provide your Email"
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
                                    validation="Please provide your Password"
                                />
                            </div>
                            <div className="col-md-12">
                                <MDBInput
                                    label="Password Confirm"
                                    type="password"
                                    value={confirmPassword}
                                    name="confirmPassword"
                                    onChange={onInputChange}
                                    required
                                    validation="Please provide your Confirm Password"
                                />
                            </div>
                            <div>
                                <Checkbox size="large" checked={checked} onChange={handleChange} />
                                <span >I agree to the <a href="/"> Terms and Conditions</a></span>
                            </div>
                            <div className="col-12">
                                <MDBBtn style={{ width: "100%" }} className='mx-2' color='dark' >
                                    Register
                                </MDBBtn>
                            </div>

                        </MDBValidation>
                        <br />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <GoogleLogin
                                clientId={""}
                                onSuccess={(res) => {
                                    console.log("logged in ", res)
                                    fetch("https://zsapi.delanolourenco.xyz/auth/oauth-exchange", {
                                        method: "POST",
                                        headers: {
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify({
                                            id_token: res.credential
                                        })
                                    }).then(res => res.json()).then(res => {
                                        console.log("api gave", res);
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

export default Register
