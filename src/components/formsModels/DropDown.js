import React, { useState } from 'react'

const DropDown = (props) => {

    const [label, setLabel ] = useState('')
    const [ choices, setChoices ] = useState([])
    const [ option, setOption ] = useState('')

    const { addFormData } = props


    const handleChange = (e) => {
        setLabel(e.target.value)
    }

    const handleOption = (e) => {
        setOption(e.target.value)
    }

    const handleAdd = () => {
        setChoices([...choices, option ])
        setOption('')
    }

    const handleAddForm = () => {
        const obj = {
            id : Number(new Date()),
            type : 'dropdown',
            label : label,
            choices : choices,
            value : ''
        }
        //console.log(obj)
        addFormData(obj)
    }


    return(
        <div>
            <label>Add label</label><br/>
            <input type="text" value={label} onChange={handleChange} /><br/>

            <label>Add options</label><br/>
            {choices.map((ele, i) => {
                return <li key={i}>{ele}</li>
            })}
            <input type="text" value={option} onChange={handleOption} /><br/>
            <button onClick={handleAdd}>Add a option</button><br/>

            <button onClick={handleAddForm}>Add to form</button>
        </div>
    )
}

export default DropDown