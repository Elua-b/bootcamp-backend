const express=require('express')
const dotenv=require('dotenv')
dotenv.config({path:'./config/config.env'});
const app=express();
const PORT=process.env.port || 5000;
app.get('/api/v1/bootcamps',(req,res)=>{
    res.status(200).json({success:true,
    msg:'show all bootcamps'});
})
app.listen(PORT,()=>{
    console.log(`server is listening in on port ${PORT}`);
});

