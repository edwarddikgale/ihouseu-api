import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import config  from './config';
import * as dotenv from 'dotenv';

import postsRoutes from './routes/api/posts_controller';
const app = express();

dotenv.config();

//routes
app.get('/hello', (reg, res) => {
    res.send('Task manager app');
});

app.use(express.json());

mongoose.connect(process.env.MONGO_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
.then(() => {
    console.log('MongoDB connected');
})
.catch(err => console.log(err));

app.use('/api/posts', postsRoutes);
const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Server listening on port ${port}...`)});