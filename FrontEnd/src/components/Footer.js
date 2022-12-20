import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ background: "#929EB3", width: "100%" }}>
            <MDBFooter className='text-center text-lg-start text-muted'>
                <section style={{ color: "black", fontWeight: "400", fontSize: "24px" }} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' >
                    <div className='me-5 d-none d-lg-block'>
                        <span >Get connected with us on social networks:</span>
                    </div>

                    <div>
                        <a href='/' className='me-4 text-reset'>

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M48 24C48 10.7438 37.2562 0 24 0C10.7438 0 0 10.7438 0 24C0 35.9813 8.775 45.9094 20.25 47.7094V30.9375H14.1562V24H20.25V18.7125C20.25 12.6984 23.8313 9.375 29.3156 9.375C31.9406 9.375 34.6875 9.84375 34.6875 9.84375V15.75H31.6594C28.6781 15.75 27.75 17.6016 27.75 19.5V24H34.4062L33.3422 30.9375H27.75V47.7094C39.225 45.9094 48 35.9813 48 24Z" fill="#1877F2" />
                                <path d="M33.3422 30.9375L34.4062 24H27.75V19.5C27.75 17.6016 28.6781 15.75 31.6594 15.75H34.6875V9.84375C34.6875 9.84375 31.9406 9.375 29.3156 9.375C23.8313 9.375 20.25 12.6984 20.25 18.7125V24H14.1562V30.9375H20.25V47.7094C21.4734 47.9016 22.725 48 24 48C25.275 48 26.5266 47.9016 27.75 47.7094V30.9375H33.3422Z" fill="white" />
                            </svg>

                        </a>
                        <a href='/' className='me-4 text-reset'>

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#55ACEE" />
                                <path d="M23.2812 19.5075L23.3316 20.338L22.4922 20.2363C19.4369 19.8465 16.7677 18.5245 14.5013 16.3043L13.3934 15.2027L13.108 16.0162C12.5036 17.8297 12.8897 19.7448 14.1488 21.0328C14.8203 21.7447 14.6692 21.8464 13.5109 21.4227C13.108 21.2871 12.7554 21.1854 12.7219 21.2362C12.6044 21.3549 13.0073 22.8971 13.3262 23.5073C13.7627 24.3547 14.6524 25.1851 15.6261 25.6766L16.4487 26.0664L15.475 26.0834C14.5349 26.0834 14.5013 26.1003 14.6021 26.4562C14.9378 27.5578 16.264 28.7273 17.7413 29.2357L18.7822 29.5916L17.8756 30.1339C16.5326 30.9136 14.9546 31.3542 13.3766 31.3881C12.6211 31.4051 12 31.4728 12 31.5237C12 31.6932 14.0481 32.6423 15.24 33.0151C18.8157 34.1167 23.063 33.6422 26.2526 31.761C28.5189 30.4221 30.7852 27.7612 31.8428 25.1851C32.4136 23.8123 32.9844 21.304 32.9844 20.1007C32.9844 19.3211 33.0347 19.2194 33.9748 18.2873C34.5288 17.7449 35.0492 17.1517 35.15 16.9823C35.3178 16.6603 35.3011 16.6603 34.4449 16.9484C33.018 17.4568 32.8165 17.389 33.5216 16.6264C34.042 16.084 34.6631 15.101 34.6631 14.8129C34.6631 14.7621 34.4113 14.8468 34.1259 14.9993C33.8238 15.1688 33.1523 15.423 32.6486 15.5756L31.7421 15.8637L30.9195 15.3044C30.4663 14.9993 29.8283 14.6604 29.4926 14.5587C28.6364 14.3214 27.327 14.3553 26.5548 14.6265C24.4563 15.3892 23.1301 17.3551 23.2812 19.5075Z" fill="white" />
                            </svg>

                        </a>
                        <a href='/' className='me-4 text-reset'>

                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#0077B5" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.3188 14.8227C17.3188 16.3918 16.1377 17.6473 14.2412 17.6473H14.2064C12.3805 17.6473 11.2 16.3918 11.2 14.8227C11.2 13.2204 12.4164 12 14.277 12C16.1377 12 17.2835 13.2204 17.3188 14.8227ZM16.9605 19.8778V36.2196H11.5216V19.8778H16.9605ZM36.5752 36.2196L36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1325 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7681C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752Z" fill="white" />
                            </svg>

                        </a>
                        <a href='/' className='me-4 text-reset'>
                            <svg style={{ width: 48, height: 48 }} enableBackground="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g><circle cx="256" cy="256" fill="#333333" r="256" /><g><path d="M256,93.9c-89.5,0-162.1,72.6-162.1,162.1c0,70.5,45,130.4,107.8,152.8c0.3,0.1,1.4,0.5,1.7,0.6    c0.9,0.3,1.9,0.5,2.9,0.5c5.3,0,9.5-4.3,9.5-9.5c0-0.3,0-0.5,0-0.8l0,0c0-8.6,0-19.5,0-28.2c-10.3,2.1-25.9,4.1-34.4,0    c-11-5.3-16.6-12.1-21.9-25.5c-6.6-16.3-21.8-20.8-22.4-23.6c-0.6-2.9,16.1-7.2,24.7,2.7c8.6,9.9,17.3,29.7,35.8,27.8    c9.1-0.9,15-2.4,18.7-3.5c0.7-6.4,2.8-14.3,8.1-19.9c-43.5-7.2-72.5-30.6-72.5-76.5c0-20.9,6-37.1,16.6-49.2    c-1.8-10-4.8-33.2,3.2-41.3c0,0,11.3-7,43.7,15.8c12.1-2.8,25.5-4.2,39.8-4.2l0,0c0.3,0,0.5,0,0.8,0c0.3,0,0.5,0,0.8,0l0,0    c14.4,0.1,27.8,1.5,39.8,4.2c32.4-22.8,43.7-15.8,43.7-15.8c8,8.2,5,31.4,3.2,41.3c10.6,12.2,16.6,28.4,16.6,49.2    c0,45.9-28.9,69.3-72.5,76.5c8.3,8.7,8.6,22.8,8.6,28.6c0,5.5,0,42.3,0,42.5c0,5.3,4.3,9.5,9.5,9.5c0.8,0,1.5-0.1,2.3-0.3    c0.2,0,0.8-0.2,1-0.3c63.5-22,109.1-82.3,109.1-153.3C418.1,166.4,345.5,93.9,256,93.9z" fill="#FFFFFF" /></g></g></svg>
                        </a>
                    </div>
                </section>

                <section className='' style={{ color: "black", fontWeight: "400" }}>
                    <MDBContainer className='text-center text-md-start mt-5'>
                        <MDBRow className='mt-3'>
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>
                                    <MDBIcon icon="gem" className="me-3" />
                                    <img src="/images/medheadlogo.png" alt="Medhead" />
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam architecto accusamus facere nulla et necessitatibus veniam quidem rem hic error.
                                </p>
                            </MDBCol>
                            <MDBCol md="2" lg="2" xl="2" className='px-4 mb-4' style={{
                                borderLeft: "1px solid rgba(0, 0, 0, 0.15)",
                                borderRight: "1px solid rgba(0, 0, 0, 0.15)"
                            }}>
                                <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Product
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Shop
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        About Us
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Contact Us
                                    </a>
                                </p>
                            </MDBCol>

                            {/* <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Pricing
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Orders
                                    </a>
                                </p>
                                <p>
                                    <a href='#!' className='text-reset'>
                                        Help
                                    </a>
                                </p>
                            </MDBCol> */}

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                                <p>
                                    <MDBIcon icon="home" className="me-2" />
                                    New York, NY 10012, US
                                </p>
                                <p>
                                    <MDBIcon icon="envelope" className="me-3" />
                                    medhead@gmail.com
                                </p>
                                <p>
                                    <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                                </p>
                                <p>
                                    <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4' style={{ color: "black", fontWeight: "400", backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    <span>© 2022 Copyright </span>
                    <Link className='text-reset fw-bold' to='/'>
                        MedHead.com
                    </Link>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer
