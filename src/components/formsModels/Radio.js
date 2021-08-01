import React, { useState } from 'react'

const Radio = (props) => {
    const { addFormData } = props
    const [ label, setLabel ] = useState('')
    const [ text, setText ] = useState('')
    const [ radioButtons, setRadioButtons ] = useState([])
    const [ formErrors, setFormErrors ] = useState({})
    const [ message, setMessage ] = useState('')
    const errors = {}

    const handleLabel = (e) => {
        setLabel(e.target.value)
    }

    const handleText = (e) => {
        setText(e.target.value)
    }

    const handleAdd = () => {
        if(text.trim()){
            setRadioButtons([...radioButtons, text])
            setText('')
        }
        else{
            setMessage('choice name cannot be blank')
        }
    }

    const handleFocus = () => {
        setFormErrors({})
        setMessage('')
    }
    const formValidation = () => {
        if(label.trim() === ''){
            errors.labelName = 'label name cannot be blank'
        }
        else if(radioButtons.length <= 1){
            errors.choicesLength = 'enter more than one choices'
        }
    }

    const handleAddForm = () => {
        formValidation()
        if(Object.keys(errors).length === 0){
            const obj = {
                id : Number(new Date()),
                type : 'radio',
                label : label,
                choices : radioButtons,
                value : ''
            }
            //console.log(obj)
            addFormData(obj)
        }
        else{
            setFormErrors(errors)
        }
    }

    return(
        <div className="form-group m-2">
            <label>Enter label name</label>
            <input 
                type="text" 
                value={label} 
                onChange={handleLabel} 
                onFocus={handleFocus}
                className="form-control my-2" 
            /><span>{formErrors.labelName ? <p>{formErrors.labelName}</p> : null}</span>

            <label>Add radio buttons</label>
            <div className="d-flex justify-content-between">
                <input 
                    type="text" 
                    value={text} 
                    onChange={handleText}
                    onFocus={handleFocus} 
                    className="form-control my-2 w-75" 
                />
                <button className="btn btn-info my-2" onClick={handleAdd}>Add choices</button>
            </div><span>{message ? <p>{message}</p> : null}</span>

            {radioButtons.map((ele, i) => {
                return <li key={i}>{ele}</li>
            })}
            {formErrors.choicesLength ? <p>{formErrors.choicesLength}</p> : null}
            <button className="btn btn-primary my-2"  onClick={handleAddForm}>Add to form</button>

        </div>
    )
}

export default Radio