//This file should gather any Octokit authorization objects.

import dotenv from 'dotenv';
dotenv.config(); //to be able to use the .env file.
import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: process.env.REACT_APP_GH_TOKEN,
    userAgent: 'jvastos',
});

export default octokit;
