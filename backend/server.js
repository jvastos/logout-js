import express from 'express';
import { reposRoutes } from './modules/repos.js';
import { searchRoutes } from './modules/search.js';
import cors from 'cors';

export function createServer() {
    const app = express();

    app.use(
        cors({
            origin: '*',
        })
    );

    //Parsing as JSON automatically.
    app.use(express.json());

    app.use('/gh-api', reposRoutes());
    app.use('/gh-api', searchRoutes());

    return app;
}
