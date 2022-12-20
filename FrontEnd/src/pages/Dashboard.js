import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar';
import LineChart1 from '../components/LineChart1';
import BarGraph1 from '../components/BarGraph1';
import Calender from './Calender';
import { MDBCardImage } from "mdb-react-ui-kit";
import { Link } from "react-router-dom"
const Dashboard = () => {


    return (
        <div style={{ backgroundColor: "#FFEEFF" }} >
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <div className='px-4'>
                        <Navbar />
                        <div className='' style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        }}>
                            {/* TL */}
                            <div style={{ display: "flex", flexDirection: "column" }} className=" py-4 px-4" >
                                <div style={{ display: "flex" }}>
                                    <h1 >Hi, Kevin, <br />welcome back</h1>
                                    <Link to="/selfanalyze">
                                        <div style={{ background: "#332d2d", alignItems: "center", padding: "4px 8px", borderRadius: "4px", color: "#fff", display: "flex", flexDirection: "column", width: "150px" }}>
                                            <span>SELF</span>
                                            <span>ANALYZE</span>
                                        </div>
                                    </Link>
                                </div>
                                <div style={{ display: "flex" }} className="col-md-6" >
                                    <div >
                                        <LineChart1 />
                                    </div>
                                    <div>
                                        <BarGraph1 />
                                    </div>
                                </div>
                            </div>
                            {/* TR */}
                            <div className=' p-4' style={{ backgroundColor: "#FFFFFF", borderRadius: "3px", display: "inline-flex", gap: "16px" }} >
                                <div className=''>
                                    Calender
                                    <Calender />
                                </div>
                                <div className='' style={{ display: "flex", flexDirection: "column" }}>
                                    <div>
                                        Details
                                        <div style={{ display: "flex", backgroundColor: "#FFEEFF", borderRadius: "2px" }}>
                                            <div style={{
                                                display:
                                                    "flex", flexDirection: "column", gap: "8px", alignItems: "center", padding: "0 12px"
                                            }}>
                                                <span>Blood</span>
                                                <span>O+</span>
                                            </div>
                                            <div style={{
                                                display:
                                                    "flex", flexDirection: "column", gap: "8px", alignItems: "center", padding: "0 12px"
                                            }}>
                                                <span>Blood</span>
                                                <span>O+</span>
                                            </div>
                                            <div style={{
                                                display:
                                                    "flex", flexDirection: "column", gap: "8px", alignItems: "center", padding: "0 12px"
                                            }}>
                                                <span>Blood</span>
                                                <span>O+</span>
                                            </div>

                                            {/* <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-between" }} >
                                                <li>Blood</li>
                                                <li>Height</li>
                                                <li>Weight</li>
                                            </ul>
                                            <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-between" }}>
                                                <li style={{ fontWeight: "20px" }}>O+</li>
                                                <li>170cm</li>
                                                <li>78kg</li>
                                            </ul> */}
                                        </div>
                                    </div>
                                    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                                        12/10/22
                                        <div style={{ backgroundColor: "#FFEEFF", borderRadius: "2px", flexBasis: "100%" }}>
                                            New
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row py-4 px-4' >
                        <div className='col-md-6 ' style={{ backgroundColor: "#FFFFFF", borderRadius: "3px" }} >
                            <h4>12/10/22</h4>
                            <br />
                            <h2>Blog heading here</h2>
                            <MDBCardImage position='bottom' src='https://mdbootstrap.com/img/new/slides/042.webp' alt='Image' />

                        </div>
                        <div className='col-md-6' style={{ display: "flex" }}>
                            <div className='col-md-6 ' style={{ backgroundColor: "#FFFFFF", borderRadius: "3px" }} >
                                <h4>Friends</h4>
                                <br />
                                <h2>some content</h2>
                                <MDBCardImage position='bottom' src='https://mdbootstrap.com/img/new/slides/042.webp' alt='Image' />

                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div >
    )
}

export default Dashboard
