import dotenv from 'dotenv';
import express from 'express';

dotenv.config({ path: '.env.development' });
const app = express()

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("App listening at port number 3000")
})