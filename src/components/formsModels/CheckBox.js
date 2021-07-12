import React, { useState } from 'react'

const CheckBox = (props) => {
    const { addFormData } = props
    const [ label, setLabel ] = useState('')
    const [ text, setText ] = useState('')
    const [ choices, setChoices ] = useState([])

    const handleLabel = (e) => {
        setLabel(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleAdd = () => {
        setChoices([...choices, {name:text, isChecked:false}])
        setText('')
    }

    const handleAddForm = () => {
        const obj = {
            id : Number(new Date()),
            type : 'checkbox',
            label : label,
            choices : choices,
            value : []
        }
        //console.log(obj)
        addFormData(obj)
    }



    return(
        <div>
            <label>Enter label name</label><br/>
            <input type="text" value={label} onChange={handleLabel} /><br/>

            <label>Add choices</label><br/>
            {choices.map((ele, i) => {
                return <li key={i}>{ele.name}</li>
            })}
            <input type="text" value={text} onChange={handleText} /><br/>
            <button onClick={handleAdd}>Add choices</button><br/>

            <button onClick={handleAddForm}>Add to form</button>
        </div>
    )
}

export default CheckBox