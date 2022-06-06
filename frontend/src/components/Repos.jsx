import React from "react";
import { ReposContainer } from './styles/Repos.styled.js'

function Repos(props) {
    const userName = props.userName;
    const repos = props.repos;
    const setRepoToScan = props.setRepoToScan;
    const reposData = repos[0];
    let reposNames = reposData.map((i) => {return i.name});
    
    return (
        <ReposContainer>
            <h4>{userName}'s public repositories:</h4>

            <ul>
                {reposNames.map((i) => 
                    <li key={i}>
                        <a 
                        href='#result' 
                        onClick={() => setRepoToScan(i)}>
                            {i}
                        </a>
                    </li>)}
            </ul>
        </ReposContainer>
        )
}

export default Repos;