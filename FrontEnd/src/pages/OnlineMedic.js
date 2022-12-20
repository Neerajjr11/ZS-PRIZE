import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Card from '../components/Card'

const OnlineMedic = () => {
    return (
        <div style={{ backgroundColor: "#FFEEFF", minHeight: "100vh" }}>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <div >
                        <Navbar />
                        <div className='py-2 px-4 mx-4' >
                            <h1><b>ONLINE MEDIC</b></h1>
                            <h4 className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ut quo debitis iure necessitatibus nisi rerum. Maiores, harum. Expedita, excepturi.</h4>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div className='px-4 mx-4' >
                                <Card url="doc1.svg" name="Doctor1" />
                                <br />
                                <Card url="doc2.svg" name="Doctor2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnlineMedic
