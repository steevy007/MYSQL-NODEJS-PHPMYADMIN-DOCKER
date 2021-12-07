const express=require('express')
const app=express()
const database=require('./config/db')
app.get('/',(req,res)=>{
    //database.connect()
    database.query('select * from personnes', function (error, results, fields) {
        if (error) throw error;
        console.log('The personnes is: ', results);
        return res.status(200).json({data:results})
      }); 
})


app.listen(5000,()=>{
    console.log('server started')
})