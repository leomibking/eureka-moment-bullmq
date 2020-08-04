import express from 'express';

const app = express();
app.get('/', (request, response) => response.json({ message: 'hello word' }));
app.listen(3333, () => console.log('App listening on port 3333'));
