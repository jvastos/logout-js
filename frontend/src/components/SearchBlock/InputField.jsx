import React from 'react'

function InputField(props) {

    const setUserName = props.setUserName;

    /* function updateState(e) {
        setUserName(e.target.value);
    } */

    return (
        <input
        type="text"
        placeholder='username' 
        aria-label='username'
        aria-describedby='userneame input field'
        /* onChange={updateState} */
        id='input'/>
    )

}

export default InputField;