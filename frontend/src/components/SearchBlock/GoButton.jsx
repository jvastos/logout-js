import React from "react";
import { fetchRepos } from '../../functions/fetches';

function GoButton(props) {
    const userName = props.userName;
    const setUserName = props.setUserName;
    const setRepos = props.setRepos;
    const setRepoToScan = props.setRepoToScan;

    async function searchRepos() {
        const inputValue = document.getElementById('input').value;
        console.log(inputValue);
        if(inputValue != userName) {
            setUserName(inputValue);
            const repos = await fetchRepos(inputValue);
            setRepos(repos);
            setRepoToScan();
        }
    }

    return (
        <button onClick={searchRepos}>Go</button>
    )
}

export default GoButton;