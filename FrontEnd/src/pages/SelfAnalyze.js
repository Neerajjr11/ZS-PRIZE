import { Box, Button, Card, CardContent, Grid, Step, StepLabel, Stepper } from '@material-ui/core';
import { MDBCard, MDBCardBody, MDBInput, MDBValidation } from "mdb-react-ui-kit";

import { Form, Formik } from 'formik';
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import CircularProgress from '../components/CircularProgress'
import React, { useState } from 'react';
// import { mixed, number, object } from 'yup';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ComparingMetric from '../components/ComparingMetric';

const sleep = (time) => new Promise((acc) => setTimeout(acc, time));

const initialState = {
    hospitalname: "",
    hospitaladdress: "",
    patientname: "",
    address: "",
    age: "",
    sex: "",
    doctorname: "",
    date: "",
    diagnosis: "",
    summary: ""
};

export default function Home() {

    const [formValue, setFormValue] = useState(initialState);
    const { hospitalname, hospitaladdress, patientname, address, age, sex, doctorname, date, diagnosis, summary } = formValue;
    // const dispatch = useDispatch();
    // const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (hospitalname && hospitaladdress && patientname && address && age && sex && doctorname && date && diagnosis && summary) {
            // dispatch(addDetails({ formValue, navigate, toast }));
        }
    };
    //add details auth slice part is left

    const onInputChange = (e) => {
        let { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    }


    return (
        <div style={{ backgroundColor: "#FFEEFF" }} >
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <Navbar />
                    <div className='py-4 px-4 mx-4 my-4' >
                        <Card >
                            <CardContent>
                                <FormikStepper
                                    initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        millionaire: false,
                                        money: 0,
                                        description: '',
                                    }}
                                    onSubmit={async (values) => {
                                        await sleep(3000);
                                        console.log('values', values);
                                    }}
                                >
                                    <FormikStep label="Personal Data">
                                        <Box paddingBottom={2}>
                                            {/* <Field fullWidth name="firstName" component={TextField} label="First Name" /> */}
                                            <h1>Step 1</h1>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto cupiditate aperiam recusandae. Cupiditate quia explicabo facilis reiciendis possimus sed.</h5>
                                        </Box>
                                        <Box paddingBottom={2}>
                                            {/* <Field fullWidth name="lastName" component={TextField} label="Last Name" /> */}
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                <div style={{ width: "100vh", height: "180px", backgroundColor: "#929EB3", display: "flex", alignItems: "center", justifyContent: "center" }} >
                                                    <input type="file" id="myFile" name="filename" />
                                                </div>
                                                <br />
                                                <img src="/images/doublearrow.svg" alt="Move" />
                                            </div>
                                        </Box>

                                        <Box paddingBottom={2}>
                                            <MDBCard className='px-4 mx-4'>
                                                <MDBCardBody>
                                                    <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
                                                        <h4>Report Details</h4>
                                                        <div className="col-md-12">
                                                            <MDBInput
                                                                label="Hospital Name"
                                                                type="hospitalname"
                                                                value={hospitalname}
                                                                name="hospitalname"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Hospital Name"
                                                            />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <MDBInput
                                                                label="Hospital Address"
                                                                type="hospitaladdress"
                                                                value={hospitaladdress}
                                                                name="hospitaladdress"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Hospital Address"
                                                            />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <MDBInput
                                                                label="Patient Name"
                                                                type="patientname"
                                                                value={patientname}
                                                                name="patientname"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Patient Name"
                                                            />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <MDBInput
                                                                label="Address"
                                                                type="address"
                                                                value={address}
                                                                name="address"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Address"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <MDBInput
                                                                label="Age"
                                                                type="age"
                                                                value={age}
                                                                name="age"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Age"
                                                            />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <MDBInput
                                                                label="Sex"
                                                                type="sex"
                                                                value={sex}
                                                                name="sex"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Sex"
                                                            />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <MDBInput
                                                                label="Doctor Name"
                                                                type="doctorname"
                                                                value={doctorname}
                                                                name="doctorname"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Doctor Name"
                                                            />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <MDBInput
                                                                label="Date"
                                                                type="date"
                                                                value={date}
                                                                name="date"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Date"
                                                            />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <MDBInput
                                                                label="Diagnosis"
                                                                type="diagnosis"
                                                                value={diagnosis}
                                                                name="diagnosis"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Diagnosis"
                                                            />
                                                        </div>
                                                        <div className="col-md-12">
                                                            <MDBInput
                                                                label="Summary"
                                                                type="summary"
                                                                value={summary}
                                                                name="summary"
                                                                onChange={onInputChange}
                                                                required
                                                                validation="Please provide your Summary"
                                                            />
                                                        </div>

                                                    </MDBValidation>

                                                </MDBCardBody>

                                            </MDBCard>
                                        </Box>
                                    </FormikStep>
                                    <FormikStep>
                                        <Box paddingBottom={2} className='mx-4 px-4 py-2 my-2'>
                                            {/* <Field fullWidth name="firstName" component={TextField} label="First Name" /> */}
                                            <h1>Step 2</h1>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto cupiditate aperiam recusandae. Cupiditate quia explicabo facilis reiciendis possimus sed.</h5>
                                        </Box>
                                        <Box paddingBottom={2} style={{ display: "flex" }}>
                                            <CircularProgress percentage={65} />
                                            <div>
                                                <h3>Comparing Meric</h3>
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quod voluptate distinctio iure consequatur quasi est iusto non animi maxime. Quod et aliquam quae. Perspiciatis quas corporis rem dicta! Reprehenderit?
                                                </p>
                                            </div>
                                        </Box>
                                        <Box paddingBottom={2} style={{ display: "flex" }}>
                                            <ComparingMetric />
                                            <ComparingMetric />
                                        </Box>
                                        <Box paddingBottom={2} style={{ display: "flex" }}>
                                            <ComparingMetric />
                                            <ComparingMetric />
                                        </Box>


                                    </FormikStep>
                                    <FormikStep label="More Info">
                                        <Box paddingBottom={2} className='mx-4 px-4 py-2 my-2'>
                                            {/* <Field fullWidth name="firstName" component={TextField} label="First Name" /> */}
                                            <h1>Step 3</h1>
                                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum iusto cupiditate aperiam recusandae. Cupiditate quia explicabo facilis reiciendis possimus sed.</h5>
                                        </Box>
                                    </FormikStep>
                                </FormikStepper>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div >
        </div >
    );
}


export function FormikStep({ children }) {
    return <>{children}</>;
}

export function FormikStepper({ children, ...props }) {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState(false);

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                if (isLastStep()) {
                    await props.onSubmit(values, helpers);
                    setCompleted(true);
                } else {
                    setStep((s) => s + 1);

                    // the next line was not covered in the youtube video
                    //
                    // If you have multiple fields on the same step
                    // we will see they show the validation error all at the same time after the first step!
                    //
                    // If you want to keep that behaviour, then, comment the next line :)
                    // If you want the second/third/fourth/etc steps with the same behaviour
                    //    as the first step regarding validation errors, then the next line is for you! =)
                    //
                    // In the example of the video, it doesn't make any difference, because we only
                    //    have one field with validation in the second step :)
                    helpers.setTouched({});
                }
            }}
        >
            {({ isSubmitting }) => (
                <Form autoComplete="off">
                    <Stepper alternativeLabel activeStep={step}>
                        {childrenArray.map((child, index) => (
                            <Step key={child.props.label} completed={step > index || completed}>
                                <StepLabel>{child.props.label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {currentChild}

                    <Grid container spacing={2}>
                        {step > 0 ? (
                            <Grid item>
                                <Button
                                    disabled={isSubmitting}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => setStep((s) => s - 1)}
                                >
                                    Back
                                </Button>
                            </Grid>
                        ) : null}
                        <Grid item>
                            <Button
                                startIcon={isSubmitting ? <CircularProgress size="1rem" /> : null}
                                disabled={isSubmitting}
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                {isSubmitting ? 'Submitting' : isLastStep() ? 'Submit' : 'Proceed'}
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}