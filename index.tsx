import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import config  from './config';
import {connect} from './db/dbConnector';
import * as dotenv from 'dotenv';

import postsRoutes from './routes/api/posts';
const app = express();

dotenv.config();

//routes
app.get('/', (reg, res) => {
    res.send('iHouseU api');
});

app.use(express.json());

mongoose.set('strictQuery', false);
//process.env.MONGO_URI as string

app.use('/api/posts', postsRoutes);
const port = process.env.PORT || 3000;

const start = async () =>{
    try{
        await connect(process.env.MONGO_URI as string);
        app.listen(port, () => { console.log(`Server listening on port ${port}...`)});
    }
    catch(error){
        console.log(error);
    }
} 

start().then(() => {});