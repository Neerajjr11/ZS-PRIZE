import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { MDBBtn } from 'mdb-react-ui-kit'
import Checkbox from '../components/Checkbox'
import { Link } from 'react-router-dom'

const SymptonChecker = () => {
    return (
        <div style={{ backgroundColor: "#FFEEFF" }} >
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <Navbar />
                    <div className='py-4 px-4 mx-4 my-4' >
                        <h1>SYMPTONS CHECKER</h1>
                        <h4 className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ut quo debitis iure necessitatibus nisi rerum. Maiores, harum. Expedita, excepturi.</h4>
                        <div style={{ justifyContent: 'space-between' }}>
                            <div >
                            </div>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <Checkbox ans="Sympton1" />
                                    <Checkbox ans="Sympton2" />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Checkbox ans="Sympton3" />
                                    <Checkbox ans="Sympton4" />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Checkbox ans="Sympton5" />
                                    <Checkbox ans="Sympton6" />
                                </div>
                                <div style={{ display: "flex" }}>
                                    <Checkbox ans="Sympton7" />
                                    <Checkbox ans="Sympton8" />
                                </div>
                            </div>
                            <Link to="/aisymptonchecker">
                                <MDBBtn style={{ height: "50px", width: "140px" }} color='dark'>
                                    Find Out
                                </MDBBtn>
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SymptonChecker
