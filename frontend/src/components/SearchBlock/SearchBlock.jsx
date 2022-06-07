//This component wraps the InputField and the Go button. This makes easier to handle both as just one element.

import React from 'react';
import InputField from './InputField';
import GoButton from './GoButton';

function SearchBlock(props) {
    const userName = props.userName;
    const setUserName = props.setUserName;
    const setRepos = props.setRepos;
    const setRepoToScan = props.setRepoToScan;

    return (
        <>
            <InputField />
            {/* prettier-ignore */}
            <GoButton 
            userName={userName} 
            setUserName={setUserName} 
            setRepos={setRepos} 
            setRepoToScan={setRepoToScan} />
        </>
    );
}

export default SearchBlock;
