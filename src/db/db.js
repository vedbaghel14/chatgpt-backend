const mongoose = require('mongoose')
const dns = require('dns')

dns.setServers(['1.1.1.1','8.8.8.8'])

async function connectDb(){
    try{
        await mongoose.connect("mongodb+srv://ved:c5aFjygoHf33nuVa@cluster0.i8pnc0v.mongodb.net/chatgpt")
        console.log("connected to database")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDb