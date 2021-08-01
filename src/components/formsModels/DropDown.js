import React, { useState } from 'react'

const DropDown = (props) => {

    const [label, setLabel ] = useState('')
    const [ choices, setChoices ] = useState([])
    const [ option, setOption ] = useState('')
    const [ formErrors, setFormErrors ] = useState({})
    const [ message, setMessage ] = useState('')

    const { addFormData } = props

    const errors = {}

    const handleChange = (e) => {
        setLabel(e.target.value)
    }

    const handleOption = (e) => {
        setOption(e.target.value)
    }

    const handleAdd = () => {
        if(option.trim()){
            setChoices([...choices, option ])
            setOption('')
        }
        else{
            setMessage('option name cannot be blank')
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
        else if(choices.length <= 1){
            errors.choicesLength = 'enter more than one choices'
        }
    }

    const handleAddForm = () => {
        formValidation()
        if(Object.keys(errors).length === 0){
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
        else{
            setFormErrors(errors)
        }
    }


    return(
        <div className="form-group m-2">
            <label>Add label</label>
            <input 
                type="text" 
                value={label} 
                onChange={handleChange}  
                onFocus={handleFocus}
                className="form-control my-2"
            /><span>{formErrors.labelName ? <p>{formErrors.labelName}</p> : null}</span>

            <label>Add options</label>
            <div className="d-flex justify-content-between">
                <input 
                    type="text" 
                    value={option} 
                    onChange={handleOption} 
                    onFocus={handleFocus}
                    className="form-control my-2 w-75" 
                />
                <button className="btn btn-info my-2" onClick={handleAdd}>Add a option</button>
            </div><span>{message ? <p>{message}</p> : null}</span>

            {choices.map((ele, i) => {
                return <li key={i}>{ele}</li>
            })}
            {formErrors.choicesLength ? <p>{formErrors.choicesLength}</p> : null}
            <button className="btn btn-primary my-2" onClick={handleAddForm}>Add to form</button>
        </div>
    )
}

export default DropDown