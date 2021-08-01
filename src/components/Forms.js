import React, { useEffect, useState } from 'react'

import ShortText from './formsModels/ShortText'
import NumberType from './formsModels/NumberType'
import LongText from './formsModels/LongText'
import DropDown from './formsModels/DropDown'
import CheckBox from './formsModels/CheckBox'
import Radio from './formsModels/Radio'

import Text from './formsComponents/Text'
import Textarea from './formsComponents/Textarea'
import Select from './formsComponents/Select'
import Checkbox from './formsComponents/Checkbox'
import RadioButtons from './formsComponents/RadioButtons'

// import './style.css'

const Forms = (props) => {
    const [ formType, setFormType ] = useState('')
    const [ formData, setFormData ] = useState([])
    const [ status, setStatus ] = useState(false)
    const [ text, setText ] = useState('')
    //console.log(formData)

    useEffect(() => {
        setStatus(false)
        //console.log(status)
    }, [status])

    useEffect(() => {
        setTimeout(() => {
            setText('')
        }, 3000)
    }, [text])

    const handleSelect = (e) => {
        setFormType(e.target.value)
    }

    const addFormData = (details) => {
        setFormData([...formData, {...details}])
        setFormType('')
    }

    const addValue = (id, data) => {
        //console.log(id, data)
        const result = formData.map((ele) => {
            if(ele.id === id){
                return {...ele, value:data}
            }
            else{
                return ele
            }
        })
        setFormData(result)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)     
        const result = formData.map((ele) => {
            return {...ele, value:""}
        }) 
        //console.log(result)
        setFormData(result)
        setText('check console for form data')
        setStatus(true)
    }

    return(
        <div className="container my-5">
            <div className="row gx-5 justify-content-center my-3 ">
                <div className="col-5 mx-5 py-3">
                    <select className=" form-select" value={formType} onChange={handleSelect}>
                        <option value="">select form type</option>
                        <option value="text">text</option>
                        <option value="number">number</option>
                        <option value="textarea">textarea</option>
                        <option value="dropdown">dropdown</option>
                        <option value="checkbox">checkbox</option>
                        <option value="radio">radio</option>
                    </select>
                    {formType === 'text' && (
                        <ShortText  addFormData={addFormData}/>
                    )}
                    {formType === 'number' && (
                        <NumberType  addFormData={addFormData}/>
                    )}
                    {formType === 'textarea' && (
                        <LongText addFormData={addFormData} />
                    )}
                    {formType === 'dropdown' && (
                        <DropDown addFormData={addFormData} />
                    )}
                    {formType === 'checkbox' && (
                        <CheckBox addFormData={addFormData} />
                    )}
                    {formType === 'radio' && (
                        <Radio addFormData={addFormData} />
                    )}
                </div>
            
                <div className="col-6">
                    {formData.length > 0 && 
                    <>
                        <form onSubmit={handleSubmit}>
                            {formData.map((ele, i) => {
                                return(
                                    <div key={i}>
                                        {ele.type === 'text' && (
                                            <Text data={ele} addValue={addValue} status={status}/>                                                                               
                                        )}
                                        {ele.type === 'number' && (
                                            <Text data={ele} addValue={addValue} status={status}/>
                                        )}
                                        {ele.type === 'textarea' && (
                                            <Textarea data={ele} addValue={addValue} status={status} />
                                        )}
                                        {ele.type === 'dropdown' && (
                                            <Select data={ele} addValue={addValue} status={status} />
                                        )}
                                        {ele.type === 'checkbox' && (
                                            <Checkbox data={ele} addValue={addValue} status={status} />
                                        )}
                                        {ele.type === 'radio' && (
                                            <RadioButtons data={ele} addValue={addValue} status={status} />
                                        )}
                                    </div>
                                )
                            })}
                            <input type="submit" className="m-3  btn btn-primary" />
                        </form>
                        {text ? <h5 className="text-danger mx-3">{text}</h5> : null}
                    </>   
                    }
                </div>
            </div>          
        </div>
    )
}

export default Forms