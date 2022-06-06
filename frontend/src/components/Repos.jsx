import React from "react";
import { scanRepos } from "../functions/fetches.js";

function Repos(props) {
    const userName = props.userName;
    const repos = props.repos;
    const setResult = props.setResult;

    const reposData = repos[0];
    let reposNames = reposData.map((i) => {return i.name});

    async function createScanResult(userName, repoName) {
        const scanResult = await scanRepos(userName, repoName)
        await setResult(scanResult);
    }
    
    return (
        <>
            <p>Your public repositories:</p>
            <ul>
                {reposNames.map((i) => 
                    <li key={i}>
                        <a 
                        href='#' 
                        onClick={() => createScanResult(userName, i)}>
                            {i}
                        </a>
                    </li>)}
            </ul>
        </>
        )
}

export default Repos;