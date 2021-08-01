import React, { useState, useEffect } from 'react'

const RadioButtons = (props) => {
    const { data, addValue, status } = props
    const [ type, setType ] = useState('')

    useEffect(() => {
        if(status){
            setType('')
        }
    }, [status])

    const handleType = (e) => {
        setType(e.target.value)
    }

    const handleData = () => {
        addValue(data.id, type)
    }
    
    return(
        <div className="form-check py-2 px-3">
            <label>{data.label}</label>
            {data.choices.map((ele, i) => {
                return(
                    <div key={i}>
                        <input 
                            className="form-check-input mx-3"
                            type="radio"
                            name= "type"
                            value= {ele}
                            checked={type === ele}
                            onChange={handleType}
                            onBlur={handleData}
                            required={true}
                        /><span>{ele}</span>
                    </div>
                )
            })}

        </div>
    )
}

export default RadioButtons