import React, { useState } from 'react'

const DropDown = (props) => {
    const [ data, setData ] = useState([])
    const [ option, setOption ] = useState('')
    const [ selection, setSelection ] = useState('')

    const handleChange = (e) => {
        setOption(e.target.value)
    }

    const handleAdd = () => {
        setData([...data, option ])
        setOption('')
    }

    const handleSelection = (e) => {
        //console.log(e.target.value)
        setSelection(e.target.value)
    }

    const showData = () => {
        const obj = {
            type : 'select',
            label : 'laptop',
            data : data,
            selection : selection
        }
        console.log(obj)
    }


    return(
        <div>
            <select onChange={handleSelection}>
                <option value=''>select</option>
                {data.length > 0 && 
                    data.map((ele, i) => {
                        return(
                            <option value={ele} key={i}>{ele}</option>
                        )
                    })
                }
            </select><br/>
            <input type="text" value={option} onChange={handleChange} />
            <button onClick={handleAdd}>Add</button>
            <button onClick={showData}>show</button>
        </div>
    )
}

export default DropDown