//This file should gather all the functions handling repo related endpoints for the GH API.

import { Router } from 'express';
import octokit from '../octokit.js';

//Getting all the public repos from a specific user.
//The function gets the username through a query in the request's url.
const getReposFromUser = () => async (req, res) => {
    const userName = req.query.username;

    //Using Octokit to expand the number of allowed requests (up to 5000) through my personal access token.
    const reposList = await octokit.request('GET /users/{userName}/repos?per_page=100', {
        userName: `${userName}`,
    });
    res.send(reposList.data);
};

//Bundling and exporting all the routes related to repo endpoints for the GH API, so they can be used by the server.
export function reposRoutes() {
    const router = new Router();

    router.get('/repos-list', getReposFromUser());

    return router;
}
