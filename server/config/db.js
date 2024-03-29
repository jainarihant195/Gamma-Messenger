const mongoose=require("mongoose");
const connectDatabase=()=>{
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>{
    console.log(`Connected to db with server at ${data.connection.host}`);
})
}
module.exports=connectDatabase