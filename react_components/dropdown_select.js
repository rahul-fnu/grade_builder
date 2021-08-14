import React, { useState } from 'react';
import Select from 'react-select';
export default function DropdownSelect(props) {
    const data = props.options;
    const [selectedValue, setSelectedValue] = useState([]);
    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    }
    const handleSave = (e) => {
        e.preventDefault();
        props.parentCallback(selectedValue)
    }
    return (
        <div>
        <Select
            className="dropdown"
            placeholder="Select Option"
            value={data.filter(obj => selectedValue.includes(obj.value))} // set selected values
            options={data} // set list of the data
            maxMenuHeight={50}
            onChange={handleChange} // assign onChange function
            isMulti
            isClearable
        />
        <button onClick = {handleSave}>Save</button>
    </div>

    )
}