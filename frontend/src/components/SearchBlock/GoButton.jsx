import React from 'react';
import { fetchRepos } from '../../functions/fetches';
import { Button } from '../../components/styles/Button.styled.js';

function GoButton(props) {
    const userName = props.userName;
    const setUserName = props.setUserName;
    const setRepos = props.setRepos;
    const setRepoToScan = props.setRepoToScan;

    //Function to fetch the public repos of the given username.
    //It also decides if the repo fetching process should be started and if the result box should be displayed on the interface.
    //(because if a new user is given through the input field, we want to hide the result from the last clicked repo of the previous given user.)
    async function getRepos() {
        const inputValue = document.getElementById('input').value;
        console.log(inputValue);
        if (!inputValue) {
            alert('Please enter username.');
        } else if (inputValue !== userName) {
            setUserName(inputValue);
            const repos = await fetchRepos(inputValue);
            setRepos(repos);
            setRepoToScan(); //this makes the result box disappear on the interface.
        }
        /* if (inputValue !== userName) {
            setUserName(inputValue);
            const repos = await fetchRepos(inputValue);
            setRepos(repos);
            setRepoToScan(); //this makes the result box disappear on the interface.
        } */
    }

    return <Button onClick={getRepos}>Go</Button>;
}

export default GoButton;
