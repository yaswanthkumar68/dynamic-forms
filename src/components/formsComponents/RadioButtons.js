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
        <div>
            <label>{data.label}</label>
            {data.choices.map((ele, i) => {
                return(
                    <div key={i}>
                        <input 
                            type="radio"
                            name= "type"
                            value= {ele}
                            checked={type === ele}
                            onChange={handleType}
                            onBlur={handleData}
                        /><span>{ele}</span>
                    </div>
                )
            })}

        </div>
    )
}

export default RadioButtons