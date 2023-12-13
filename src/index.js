require('dotenv').config();
const connectDB = require("./db/index");
const app = require('./app')

connectDB()
    .then(()=>{
        app.listen(process.env.PORT || 8000);
        console.log(`Server started at PORT: ${process.env.PORT}`)
    })
    .catch((err)=> {
        console.log("Mongo DB connection failed: ", err)
    })

/*

const express = require('express');
const app = express();

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error: ", error);
            throw error;
        })

        app.listen(process.env.PORT);
        console.log(`App is listening on port : ${process.env.PORT}`)
    } catch (error) {
        console.log("Error: " , error);
        throw error
    }
})()

 */