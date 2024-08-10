const mongoose=require("mongoose")
require('dotenv').config()
DATABASE=process.env.DATABASEURL
const url=`mongodb+srv://dev:<Dev@234cluster0.uokbggd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
module.exports.connect=()=>{
    mongoose.connect(url,console.log("Database is connected"))
}