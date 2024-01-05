const express = require('express');
const { connection } = require('./config/db');
const { userRoute } = require('./routes/user.route');
const { productRoute } = require('./routes/product.route');
var cors = require('cors')

require("dotenv").config()
const port = process.env.PORT


const app = express();
app.use(cors())
app.use(express.json())

app.use("/", userRoute)
app.use("/", productRoute)

app.listen(port, async()=>{
  try{
    await connection
    console.log('Connected to the database.');
    console.log(`Server is running on port ${port}.`);
  }catch(err){
    console.log(err)
  }
})
