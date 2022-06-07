//This file should gather all the functions handling search related endpoints for the GH API.

import { Router } from 'express';
import octokit from '../octokit.js';

//Getting all the occurences of "console.log" in a specific repo.
//The function gets the user's name and the name of the repo though queries in the request's url.
const getConsoleLogsFromRepo = () => async (req, res) => {
    const userName = req.query.username;
    const repoName = req.query.reponame;

    //Using Octokit to expand the number of allowed requests (up to 5000) through my personal access token.
    const consoleLogs = await octokit.request('GET /search/code?q={searchString}+in:{in}+language:{language}+repo:{userName}/{repoName}', {
        in: 'file',
        language: 'js',
        searchString: 'console.log',
        userName: `${userName}`,
        repoName: `${repoName}`,
    });
    res.json(consoleLogs.data);
};

//Bundling and exporting all the routes related to search endpoints for the GH API, so they can be used by the server.
export function searchRoutes() {
    const router = new Router();

    router.get('/repos-search', getConsoleLogsFromRepo());

    return router;
}
