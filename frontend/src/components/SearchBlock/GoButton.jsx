import React from 'react';
import { fetchRepos } from '../../functions/fetches';

function GoButton(props) {
    const userName = props.userName;
    const setUserName = props.setUserName;
    const setRepos = props.setRepos;
    const setRepoToScan = props.setRepoToScan;

    //Function to fetch the public repos of the given username.
    //It also decides if the result box should be displayed on the interface.
    //(because if a new user is given through the input field, we want to hide the result from the last clicked repo of the previous given user.)
    async function getRepos() {
        const inputValue = document.getElementById('input').value;
        console.log(inputValue);
        if (inputValue !== userName) {
            setUserName(inputValue);
            const repos = await fetchRepos(inputValue);
            setRepos(repos);
            setRepoToScan(); //this makes the result box disappear on the interface.
        }
    }

    return <button onClick={getRepos}>Go</button>;
}

export default GoButton;
