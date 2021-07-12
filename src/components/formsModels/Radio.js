import React, { useState } from 'react'

const Radio = (props) => {
    const { addFormData } = props
    const [ label, setLabel ] = useState('')
    const [ text, setText ] = useState('')
    const [ radioButtons, setRadioButtons ] = useState([])

    const handleLabel = (e) => {
        setLabel(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleAdd = () => {
        setRadioButtons([...radioButtons, text])
        setText('')
    }

    const handleAddForm = () => {
        const obj = {
            id : Number(new Date()),
            type : 'radio',
            label : label,
            choices : radioButtons,
            value : ''
        }
        console.log(obj)
        addFormData(obj)
    }

    return(
        <div>
            <label>Enter label name</label><br/>
            <input type="text" value={label} onChange={handleLabel} /><br/>

            <label>Add radio buttons</label><br/>
            {radioButtons.map((ele, i) => {
                return <li key={i}>{ele}</li>
            })}

            <input type="text" value={text} onChange={handleText} /><br/>
            <button onClick={handleAdd}>Add radio buttons</button><br/>

            <button onClick={handleAddForm}>Add to form</button>

        </div>
    )
}

export default Radio