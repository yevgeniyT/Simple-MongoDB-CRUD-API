import mongoose from 'mongoose';
import dev from './index.js'

const connectDB = async () => {
   try{
    await mongoose.connect(dev.db.url);
    console.log('Data base is connected');
   } catch(error){
    console.log(error);
   }
}

export default connectDB