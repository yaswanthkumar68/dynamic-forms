import React, { useState, useEffect } from 'react'

const Checkbox = (props) => {
    const { data, addValue, status } = props
    const [ values, setValues ] = useState([])

    useEffect(() => {
        setValues(data.choices)
    }, [])

    useEffect(() => {
        if(status){
            const result = values.map((ele) => {
                return {...ele, isChecked:false}
            })
            setValues(result)
        }
        
    }, [status])

    //console.log(values)

    const handleCheck = (i, e) => {
        const result = values.map((ele, index) => {
            if(index === i){
                return {...ele, isChecked:e.target.checked}
            }
            else{
                return ele
            }
        })
        setValues(result)
    }

    const handleData = () => {
        const result = []
        for(const key of values){
            if(key.isChecked){
                result.push(key.name)
            }
        }
        addValue(data.id, result)
    }

    return(
        <div>
            <label>{data.label}</label>
            {values.map((ele, i) => {
                return (
                    <div key={i}>
                        <input 
                            type="checkbox" 
                            checked={ele.isChecked} 
                            onChange={(e) => {handleCheck(i, e)}}
                            onBlur={handleData}
                        /><span>{ele.name}</span>
                    </div>
                )

            })}

        </div>
    )
}

export default Checkbox