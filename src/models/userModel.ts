import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "pls enter username"],
    unique:true
  },
  email: {
     type: String,
    required: [true, "pls enter email"],
    unique:true
  },
  password: {
     type: String,
    required: [true, "pls enter username"]
    
  },
  language: {
    type: String,
    required:true
  },
   
  experience: {
    type: String,
    enum:["NOVICE","ROOKIE","DADDY","GIGACHAD"]
  }


  
})

const User = mongoose.models.user || mongoose.model("user", userSchema);
export default User;