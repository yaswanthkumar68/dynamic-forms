import React, { useState } from 'react'

const LongText = (props) => {
    const [label, setLabel ] = useState('')
    const [message, setMessage] = useState('')
    const { addFormData } = props

    const handleChange = (e) => {
        setLabel(e.target.value)
    }

    const handleFocus = () => {
        setMessage('')
    }

    const handleAdd = () => {
        if(label.trim()){
            const obj = {
                id : Number(new Date()),
                type : "textarea",
                label : label,
                value:''
            }
            addFormData(obj)
        }
        else{
            setMessage('label name cannot be blank')
        }
        
    }
    return(
        <div className="form-group m-2">
            <label>Enter label name</label><br/>
            <input 
                type="text" 
                value={label} 
                onChange={handleChange}
                onFocus={handleFocus} 
                className="form-control my-2" 
            /><span>{message ? <p>{message}</p> : null}</span>
            <button onClick={handleAdd} className="btn btn-primary my-2">Add to form</button>
        </div>
    )
}

export default LongText