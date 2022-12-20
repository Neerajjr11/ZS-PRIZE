import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import CircularProgress from '../components/CircularProgress'
import SymptonBox from '../components/SymptonBox'
import Checkbox from '../components/Checkbox'
const AiSymptonNew = () => {
    return (
        <div style={{ backgroundColor: "#FFEEFF" }} >
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <div >
                        <Navbar />
                        <div className='py-1 px-4 mx-4' >
                            <h1><b>AI SYMPTONS CHECKER</b></h1>
                        </div>
                        <div className='row px-4 py-2'>
                            <div className='col-md-4'>
                                <CircularProgress percentage="65" radius="48" />
                                <SymptonBox />
                                <SymptonBox />
                                <SymptonBox />
                            </div>
                            <div className='col-md-4'>
                                <h2>DISEASE DETECTED</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio blanditiis consequatur, impedit corporis repellendus voluptatem odio exercitationem doloremque assumenda maxime. Ab officiis obcaecati animi quidem dignissimos soluta beatae expedita. Obcaecati!</p>
                                <SymptonBox />
                                <SymptonBox />
                                <SymptonBox />
                            </div>
                            <div className='col-md-4'>
                                <p className='mx-4 py-8 my-2'>Customized Components</p>
                                <Checkbox ans="Sympton1" />
                                <Checkbox ans="Sympton2" />
                                <hr />
                                <Checkbox ans="Sympton3" />
                                <Checkbox ans="Sympton4" />
                                <Checkbox ans="Sympton5" />
                                <Checkbox ans="Sympton6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AiSymptonNew
