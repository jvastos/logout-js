import React from "react";
import { fetchRepos } from '../../functions/fetches';

function GoButton(props) {

    const userName = props.userName;
    const setRepos = props.setRepos;

    async function searchRepos() {
        const repos = await fetchRepos(userName);
        setRepos(repos);
    }

    return (
        <button onClick={searchRepos}>Go</button>
    )
}

export default GoButton;