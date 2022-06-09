import React from 'react';
import { ReposContainer } from './styles/Repos.styled.js';
import { LinkButton } from './styles/LinkButton.styled.js';

function Repos(props) {
    const userName = props.userName;
    const repos = props.repos;
    const setRepoToScan = props.setRepoToScan;
    const reposData = repos[0];
    let reposNames = reposData.map((i) => {
        return i.name;
    });

    return (
        <ReposContainer>
            <h4>{userName}'s public repositories:</h4>
            <ul>
                {reposNames.map((i) => (
                    <li key={i}>
                        {/* prettier-ignore */}
                        <LinkButton
                        href='#'
                        onClick={() => setRepoToScan(i)}>
                            {i}
                        </LinkButton>
                    </li>
                ))}
            </ul>
        </ReposContainer>
    );
}

export default Repos;
