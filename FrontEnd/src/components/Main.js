import React from 'react'
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
const Main = () => {
    return (
        <div className='main' style={{ background: "#929EB3", height: "100vh", width: "100%", display: "flex" }}>
            <div style={{ width: "50%", paddingLeft: "250px" }} >
                <h1 >Main Tag</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quaerat reiciendis ullam magnam itaque omnis veritatis nesciunt odio, amet incidunt aperiam doloribus ex earum ad accusamus dolore expedita ea eum nemo minima delectus molestiae voluptate? Harum est asperiores
                </p>
                <Link to="/dashboard" style={{ margin: "auto" }}>
                    <MDBBtn style={{ height: "40px", width: "140px" }} color='dark'>
                        DashBoard
                    </MDBBtn>
                </Link>
            </div>
            <div style={{ marginTop: "100px" }}>
                Right side
            </div>
        </div>
    )
}

export default Main
