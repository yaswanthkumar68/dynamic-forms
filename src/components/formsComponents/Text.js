import React, { useEffect, useState } from 'react'

const Text = (props) => {
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
        addValue(data.id, text)
    }
    
    return(
        <div className="form-group py-2 px-3">
            <label>{data.label}</label>
            <input 
                type={data.type} 
                value={text} 
                onChange={handleText} 
                onBlur={handleData} 
                className="form-control w-75" 
                required={true}
            />
        </div>
    )
}

export default Text