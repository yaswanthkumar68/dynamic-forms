import React, { useState } from 'react'

const ShortText = (props) => {
    const [label, setLabel ] = useState('')
    const { addFormData } = props

    const handleChange = (e) => {
        setLabel(e.target.value)
    }

    const handleAdd = () => {
        const obj = {
            id : Number(new Date()),
            type : "text",
            label : label,
            value:''
        }
        addFormData(obj)
    }
    return(
        <div>
            <label>Enter label name</label><br/>
            <input type="text" value={label} onChange={handleChange} /><br/>
            <button onClick={handleAdd}>Add to form</button><br/>
        </div>
    )
}

export default ShortText