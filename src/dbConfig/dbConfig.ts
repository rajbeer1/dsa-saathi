import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect('mongodb+srv://royu49:rajbeer11@cluster0.jjwo5tw.mongodb.net/?retryWrites=true&w=majority');
   
    
  } catch (error) {
    console.log('something went wrong');
    console.log(error);
  }
  
}