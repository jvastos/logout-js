import React from "react";
import InputField from "./InputField";
import GoButton from "./GoButton";

function SearchBlock(props) {

    const userName = props.userName;
    const setUserName = props.setUserName;
    const setRepos = props.setRepos;

    return(
        <>
            <InputField setUserName={setUserName} />
            <GoButton userName={userName} setRepos={setRepos} />
        </>
    )
}

export default SearchBlock;