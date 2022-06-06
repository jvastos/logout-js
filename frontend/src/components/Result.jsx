import React from "react";

function Result(props) {
    
    const result = props.result;
    const consoleLogQtt = result[0].total_count;
    const consoleLogInfo = result[0].items&&result[0].items
    
    return (
        <div>
            <h2>{consoleLogQtt} "console.log" found at:</h2>
            <ul>
                {consoleLogInfo&&consoleLogInfo.map(i => 
                    <li key={i.name}>
                        <a href={i.html_url} target='_blank'>{i.path}</a>
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Result;