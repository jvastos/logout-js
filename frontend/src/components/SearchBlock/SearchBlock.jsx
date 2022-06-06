import React from "react";
import InputField from "./InputField";
import GoButton from "./GoButton";

function SearchBlock(props) {

    const userName = props.userName;
    const setUserName = props.setUserName;
    const setRepos = props.setRepos;
    const setRepoToScan = props.setRepoToScan;

    return(
        <>
            <InputField />
            <GoButton userName={userName} setRepos={setRepos} setUserName={setUserName} setRepoToScan={setRepoToScan} />
        </>
    )
}

export default SearchBlock;