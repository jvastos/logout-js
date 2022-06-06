import React from "react";
import { ResultContainer } from './styles/Result.styled.js'

function Result(props) {
    
    const result = props.result;
    const consoleLogQtt = result[0].total_count;
    const consoleLogInfo = result[0].items&&result[0].items
    
    return (
        <ResultContainer>
            <h4><u>{consoleLogQtt}</u> "console.log" found at:</h4>
            <ul>
                {consoleLogInfo&&consoleLogInfo.map(i => 
                    <li key={i.name}>
                        <a href={i.html_url} target='_blank'>{i.path}</a>
                    </li>
                )}
            </ul>
        </ResultContainer>
    )
}

export default Result;