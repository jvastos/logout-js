import express from 'express';
import { Octokit } from 'octokit';

const app = express();

const octokit = new Octokit({
    auth: process.env.REACT_APP_GH_TOKEN,
    userAgent: 'jvastos',
});

app.get('/hello', (req, res) => {
    res.send('Hello there!').end();
});

app.get('/gh-api', async (req, res) => {
    const consoleLogs = await octokit.request(
        'GET /search/code?q=console.log+in:{in}+language:{language}+repo:{user}/{repo}',
        {
            in: 'file',
            language: 'js',
            user: 'jvastos',
            repo: 'schmemory',
        }
    );
    res.json(consoleLogs);
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
