import mongoose from 'mongoose';

// here inside  the object we define the data structure
const usersSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    createdOn:{
        type: Date,
        default: Date.now
    }

})

// from mongoose we want to create model(equal to collection) first param: any name, second param: which schema you want t0 follow
//So, this line provides you acsess to DB (in the form of the Users collection) that you can use to interact with the MongoDB collection for all your CRUD operations.
const Users =mongoose.model('Users', usersSchema)

export default Users