import React from 'react'

const Checkbox = (props) => {
    return (
        <div className='mx-4 py-8 my-2' style={{ backgroundColor: "#FFFFFF", borderRadius: "10px", height: "60px", width: "250px" }}>
            <div class="form-check checkbox-xl py-2" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <input style={{ height: "20px", width: "20px" }} class=" form-check-input" type="checkbox" value="" id="checkbox-3" />
                <h3 className='px-2'>{props.ans}</h3>
            </div>
        </div>
    )
}

export default Checkbox
