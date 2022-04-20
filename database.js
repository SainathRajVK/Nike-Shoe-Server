
const mongoose = require("mongoose")
require("dotenv").config();


mongoose.connect('mongodb://localhost:27017/ecom-app',{    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('connection successful'))
.catch((err)=>console.log('connection failed'));

// mongoose.connect( "mongodb+srv://sainathraj:sainath01@cluster0.agiig.mongodb.net/nikestore?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
//     // useFindAndModify: false,
//     useUnifiedTopology: true
// })

// const dbcon =mongoose.connection;
// console.log('connected');
// dbcon.on("error", console.error.bind(console, "connection error: "));
// dbcon.once("open", function () {
//   console.log("db Connected successfully");
// });

// module.exports = dbcon