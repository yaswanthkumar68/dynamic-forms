import React, { useEffect, useState } from 'react'

import ShortText from './formsModels/ShortText'
import LongText from './formsModels/LongText'
import DropDown from './formsModels/DropDown'
import CheckBox from './formsModels/CheckBox'
import Radio from './formsModels/Radio'

import Text from './formsComponents/Text'
import Textarea from './formsComponents/Textarea'
import Select from './formsComponents/Select'
import Checkbox from './formsComponents/Checkbox'
import RadioButtons from './formsComponents/RadioButtons'

const Forms = (props) => {
    const [ formType, setFormType ] = useState('')
    const [ formData, setFormData ] = useState([])
    const [ status, setStatus ] = useState(false)
    //console.log(formData)

    useEffect(() => {
        setStatus(false)
        //console.log(status)
    }, [status])

    const handleSelect = (e) => {
        setFormType(e.target.value)
    }

    const addFormData = (details) => {
        setFormData([...formData, {...details}])
        setFormType('')
    }

    //console.log(formData)

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
        setStatus(true)
    }

    return(
        <div style={{display:"flex", justifyContent:"space-around", alignContent:"baseline"}}>
            <div>
                <select value={formType} onChange={handleSelect}>
                    <option value="">select form type</option>
                    <option value="text">text</option>
                    <option value="textarea">textarea</option>
                    <option value="dropdown">dropdown</option>
                    <option value="checkbox">checkbox</option>
                    <option value="radio">radio</option>
                </select>
                {formType === 'text' && (
                    <ShortText  addFormData={addFormData}/>
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
            <div>
                {formData.length > 0 && 
                    <form onSubmit={handleSubmit}>
                        {formData.map((ele, i) => {
                            return(
                                <div key={i}>
                                    {ele.type === 'text' && (
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
                        })}<br/>
                        <input type="submit" />
                    </form>
                
                }
            </div>          
        </div>
    )
}

export default Forms