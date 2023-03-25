import express from 'express';

const port: number = 3000;
const app: express.Application = express();

app.get('/', (_, res) => res.send('Bot is ON!'));
app.listen(port, () => console.log(`Running on ${port}!`));
