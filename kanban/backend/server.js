const express=require('express')
const db=require("./db")
const cors=require('cors')
const bodyParser=require('body-parser')
const appRoutes=require('./routes/Routes')
const app=express()
const PORT=4000

//middlewares
app.use(cors())
app.use(bodyParser.json())

//routes
app.use("/",appRoutes)

//Listening to server
app.listen(PORT,()=>{
    console.log("connected to server")
})

//connecting to database
db()