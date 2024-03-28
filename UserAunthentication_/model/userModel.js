import mongoose from "mongoose";
import {} from 'dotenv/config'

const uri= process.env.MONGO_URI
//const uri = "mongodb+srv://cangurleen000:KX1KlILIcdTeyhbu@cluster0.0vgibrb.mongodb.net/driveCenter?retryWrites=true&w=majority"
mongoose.connect(uri).then(()=>console.log("***************************Connected to Mongodb ******************************"))
.catch((err)=>console.log(`##############Not Connected due to error below ##################\n${err}`))


const userSchema = mongoose.Schema({
    name :{type:String,required:true},
    email :{type:String,required:true},
    pwd  : {type:String,required:true}
})

const userModel = mongoose.model('GeneralUser',userSchema)

export default userModel