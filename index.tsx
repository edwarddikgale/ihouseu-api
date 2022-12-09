import express from 'express';
const app = express();

//routes
app.get('/hello', (reg, res) => {
    res.send('Task manager app');
});

const port = 3000;

app.listen(port, () => { console.log(`Server listening on port ${port}...`)});