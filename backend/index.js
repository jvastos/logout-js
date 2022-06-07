import dotenv from 'dotenv';
dotenv.config(); //to be able to use the .env file.
import { createServer } from './server.js';

const PORT = process.env.PORT;

//Creating the server and maging sure it's running.
async function main() {
    const server = createServer();

    server.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

//Making sure to catch any unhandled errors, log them properly and exit.
main().catch((err) => {
    console.error('Something went wrong running the main fnc', err);

    process.exit(1);
});
