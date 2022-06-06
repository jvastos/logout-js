import React from "react";
import { scanRepos } from "../functions/fetches.js";
import { ReposContainer } from './styles/Repos.styled.js'

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
        <ReposContainer>
            <h4>Your public repositories:</h4>
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
        </ReposContainer>
        )
}

export default Repos;