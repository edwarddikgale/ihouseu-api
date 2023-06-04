import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import config  from './config';
import {connect} from './db/dbConnector';
import notFound from './middleware/not-found';
import errorHandlerMiddleware from './middleware/error-handler';
import cors from 'cors';

import * as dotenv from 'dotenv';
import RouteAggregator from './routeAggregator';

const app = express();
const routeAggregator = new RouteAggregator(app);

dotenv.config();

//routes
app.get('/', (reg, res) => {
    res.send('iHouseU api v1.2, added new routes for ihouseuusers, + socialaccounts');
});

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(errorHandlerMiddleware);

//initialise the routes
routeAggregator.init();

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