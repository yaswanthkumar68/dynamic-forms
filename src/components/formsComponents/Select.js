import React, { useState, useEffect } from 'react'

const Select = (props) => {
    const { data, addValue, status } = props
    const [ selected, setSelected ] = useState('')

    useEffect(() => {
        if(status){
            setSelected('')
        }
    }, [status])

    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    const handleData = () => {
        addValue(data.id, selected)
    }


    return(
        <div className="form-group px-3 py-2">
            <label>{data.label}</label>
            <select 
                value={selected} 
                onChange={handleChange} 
                onBlur={handleData} 
                className="form-select w-75"
                required={true}
            >
                <option value="">select</option>
                {data.choices.map((ele, i) => {
                    return (
                        <option key={i}>{ele}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select