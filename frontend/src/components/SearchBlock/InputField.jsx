import React from 'react';
import { Input } from '../../components/styles/Input.styled.js';

function InputField() {
    return (
        // prettier-ignore
        <Input 
        type="text" 
        placeholder="username" 
        aria-label="username" 
        aria-describedby="username input field" 
        id="input" />
    );
}

export default InputField;
