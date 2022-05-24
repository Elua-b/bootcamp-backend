const express=require('express')
const dotenv=require('dotenv')
const bootcamp=require('./routes/bootcamp')
dotenv.config({path:'./config/config.env'});
const app=express();
app.use('/api/v1/bootcamps',bootcamp)
const PORT=process.env.port || 5000;
app.listen(PORT,()=>{
    console.log(`server is listening in on port ${PORT}`);
});

