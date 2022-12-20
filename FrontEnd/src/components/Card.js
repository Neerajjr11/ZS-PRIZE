import React from 'react'

const Card = (props) => {
    return (
        <div className='px-4 py-4' style={{ width: "800px", backgroundColor: "#FFFFFF", display: "flex" }}>
            <div className='col-md-4'>
                <img src={`/images/${props.url}`} alt="Doctor" style={{ height: "128px", borderRadius: "50%" }} />
            </div>
            <div className='col-md-8' >
                <h1>{props.name}</h1>
                <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam ipsa similique nesciunt, accusamus placeat vero minima voluptatem neque corporis. In.</h5>
            </div>
        </div>
    )
}

export default Card
