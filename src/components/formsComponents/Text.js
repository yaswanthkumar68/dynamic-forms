import React, { useEffect, useState } from 'react'

const Text = (props) => {
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
        addValue(data.id, text)
    }


    return(
        <div>
            <label>{data.label}</label><br/>
            <input type="text" value={text} onChange={handleText} onBlur={handleData} /><br/>
        </div>
    )
}

export default Text