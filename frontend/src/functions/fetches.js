import { API_BASE_URL } from '../config';

export async function fetchRepos(userName) {
    let repos = [];
    await fetch(`${API_BASE_URL}repos-list?username=${userName}`)
        .then((res) => res.json())
        .then((data) => {
            repos = data;
        })
        .catch((error) => {
            console.log('There was an error fecthing the repos', error);
        });
    return repos;
}

export async function scanRepos(userName, repoName) {
    let consoleLogInfo = [];
    await fetch(`${API_BASE_URL}repos-search?username=${userName}&reponame=${repoName}`)
        .then((res) => res.json())
        .then((data) => {
            consoleLogInfo = data;
        })
        .catch((error) => {
            console.log('There was an error searching for console.logs', error);
        });
    return consoleLogInfo;
}
