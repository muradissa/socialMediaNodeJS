import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';
import {mongoDBSRV} from './mongoDBConnect'

const app = express();
app.use(express.json())
app.use("/api/user",router) // http://localhost:5000/api/user/
mongoose.connect(
    mongoDBSRV
    )
    .then(()=>
        app.listen(5000)
    )
    .then(()=>
        console.log("Connected to database and listening to localhost 5000")
    )
    .catch((err)=>{
        console.log("ERROR ! can nor connect to db or localhost")
    })   
