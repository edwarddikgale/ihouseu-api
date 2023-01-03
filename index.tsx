import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import config  from './config';
import {connect} from './db/dbConnector';
import notFound from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';

import * as dotenv from 'dotenv';

import postsRoutes from './routes/api/posts';
const app = express();

dotenv.config();

//routes
app.get('/', (reg, res) => {
    res.send('iHouseU api');
});

//routing
app.use('/api/posts', postsRoutes);
//app.use(express.static('/public'));
app.use(notFound);

//middleware
app.use(express.json());
app.use(errorHandlerMiddleware);


mongoose.set('strictQuery', false);
//process.env.MONGO_URI as string
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