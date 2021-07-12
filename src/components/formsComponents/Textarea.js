import React, { useState, useEffect } from 'react'

const Textarea = (props) => {
    const { data, addValue, status } = props
    const [ text, setText ] = useState('')

    useEffect(() => {
        if(status){
            setText('')
        }
    }, [status])

    const handleText = (e) => {
        setText(e.target.value)
    }
    const handleData = () => {
        //console.log(data.id, text)
        addValue(data.id, text)
    }

    return(
        <div>
            <label>{data.label}</label><br/>
            <textarea value={text} onChange={handleText} onBlur={handleData}></textarea><br/>
        </div>
    )
}

export default Textarea