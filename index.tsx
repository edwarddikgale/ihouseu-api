import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import config  from './config';
import {connect} from './db/dbConnector';
import notFound from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';

import * as dotenv from 'dotenv';

import postsRoutes from './routes/api/posts';
import stgsRoutes from './routes/api/stgs';
import indicatorsRoutes from './routes/api/indicators';

const app = express();

dotenv.config();

//routes
app.get('/', (reg, res) => {
    res.send('iHouseU api');
});

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(errorHandlerMiddleware);

//routing
app.use('/api/posts', postsRoutes);
app.use('/api/stgs', stgsRoutes);
app.use('/api/indicators', indicatorsRoutes);

//app.use(express.static('/public'));
app.use(notFound);


mongoose.set('strictQuery', false);
//process.env.MONGO_URI as string
const port = process.env.PORT || 3000;

const start = async () =>{
    try{
        console.log(`Connecting to mongo...`)
        await connect(process.env.MONGO_URI as string);
        app.listen(port, () => { console.log(`Server listening on port ${port}...`)});
    }
    catch(error){
        console.log(`Possible error connecting to mongo db`);
        console.log(error);
    }
} 

start().then(() => {});