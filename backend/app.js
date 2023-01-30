import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';

const app = express();

app.use("/api/user",router) // http://localhost:5000/api/user/
mongoose.connect(
    'mongodb+srv://murad-admin:DZI6XiPuDZTzxIsy@cluster0.ykwgp7q.mongodb.net/?retryWrites=true&w=majority'
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


// app.use("/api" , (req, res, next) => {
//     res.send("Hello world");
// })

// app.listen(5000);