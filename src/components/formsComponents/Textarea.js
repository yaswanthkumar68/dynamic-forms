import React, { useState, useEffect } from 'react'

const Textarea = (props) => {
    const { data, addValue, status } = props
    const [ text, setText ] = useState('')

    useEffect(() => {
        if(status){
            setText('')
        }
    }, [status])

    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleData = () => {
        //console.log(data.id, text)
        addValue(data.id, text)
    }

    return(
        <div className="form-group py-2 px-3">
            <label>{data.label}</label>
            <textarea 
                value={text} 
                onChange={handleText} 
                onBlur={handleData} 
                className="form-control w-75"
                required={true}
            ></textarea>
        </div>
    )
}

export default Textarea