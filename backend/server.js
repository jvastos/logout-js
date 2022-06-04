import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { Octokit } from 'octokit';
import cors from 'cors';

const app = express();

const PORT = 8080;

const octokit = new Octokit({
    auth: process.env.REACT_APP_GH_TOKEN,
    userAgent: 'jvastos',
});

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);

app.use(express.json());

app.get('/gh-api/repos-list', async (req, res) => {
    const userName = req.query.username;

    const repoList = await octokit.request(
        'GET /users/{userName}/repos?per_page=100',
        {
            userName: `${userName}`,
        }
    );
    res.json(repoList.data);
});

app.get('/gh-api/repos-search', async (req, res) => {
    const userName = req.query.username;
    const repoName = req.query.reponame;

    const consoleLogs = await octokit.request(
        'GET /search/code?q={searchString}+in:{in}+language:{language}+repo:{userName}/{repoName}',
        {
            in: 'file',
            language: 'js',
            searchString: 'console.log',
            userName: `${userName}`,
            repoName: `${repoName}`,
        }
    );
    res.json(consoleLogs.data);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
