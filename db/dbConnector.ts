import mongoose, { ConnectOptions } from "mongoose";

const connect = (url:string): Promise<void>  => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
    .then(() => {console.log('Successfully connected to MongoDB');})
    .catch(err => console.log(err));
}

export {connect};