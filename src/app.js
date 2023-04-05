import express from 'express';

// import dependencies
import cors from 'cors';
import nodemon from 'nodemon';
import dotenv from 'dotenv';
import morgan from 'morgan';
import bodyParser from 'body-parser';


// imports variables to use in port and mongoDB
import dev from './config/index.js';

//use routers from folder routes
import userRoutes from './routes/userRoutes.js'
//import DB connection 
import connectDB from './config/db.js';

const app = express()

//to use dependencies
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req,res)=>{
    res.status(200).json('server is OK')
})

//use routers from folder routes. use '/users' here not to use this is routes as it comes in every line || and '/api/users' is a standart to use in such cases
app.use('/api/users', userRoutes)

const PORT = dev.app.serverPort;

app.listen(PORT, ()=>{
    console.log('server is running');
    // after the server is running I want to connect DB
    connectDB()
})