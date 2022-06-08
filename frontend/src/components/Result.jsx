import React from 'react';
import { useState, useEffect } from 'react';
import { ResultContainer } from './styles/Result.styled.js';
import { scanRepos } from '../functions/fetches.js';

function Result(props) {
    const userName = props.userName;
    const repoToScan = props.repoToScan;

    const [result, setResult] = useState([]);

    useEffect(() => {
        async function createScanResult(userName, repoName) {
            const scanResult = await scanRepos(userName, repoName);
            setResult(scanResult);
        }
        createScanResult(userName, repoToScan);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [repoToScan]);

    const consoleLogQtt = result.total_count;
    const consoleLogInfo = result.items;

    return (
        <ResultContainer id="result">
            {consoleLogQtt === 0 && (
                <h4>
                    <u>{consoleLogQtt}</u> console.logs found
                </h4>
            )}
            {consoleLogQtt === 1 && (
                <h4>
                    <u>{consoleLogQtt}</u> console.log found at:
                </h4>
            )}
            {consoleLogQtt > 1 && (
                <h4>
                    <u>{consoleLogQtt}</u> console.logs found at:
                </h4>
            )}
            <ul>
                {consoleLogInfo &&
                    consoleLogInfo.map((i) => (
                        <li key={i.name}>
                            {/* prettier-ignore */}
                            <a 
                            href={i.html_url} 
                            target="_blank"
                            rel="noreferrer">
                                {i.path}
                            </a>
                        </li>
                    ))}
            </ul>
        </ResultContainer>
    );
}

export default Result;
