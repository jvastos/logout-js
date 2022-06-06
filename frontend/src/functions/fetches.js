import { API_BASE_URL } from '../config';

export async function fetchRepos(userName) {
    let repos = [];
    await fetch(`${API_BASE_URL}repos-list?username=${userName}`)
        .then((res) => res.json())
        .then((data) => {
            repos = data;
        });
    return repos;
}

export async function scanRepos(userName, repoName) {
    console.log('scanRepos triggered');
    let consoleLogInfo = [];
    await fetch(
        `${API_BASE_URL}repos-search?username=${userName}&reponame=${repoName}`
    )
        .then((res) => res.json())
        .then((data) => {
            consoleLogInfo = data;
            console.log(consoleLogInfo);
        });
    return consoleLogInfo;
}
