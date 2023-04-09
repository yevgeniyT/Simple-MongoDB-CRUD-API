import mongoose from "mongoose";
import { isEmailValid } from "../helper/validation.js";

// here inside  the object we define the data structure
const usersSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: [16, "You are not allowed to enter"],
    },
    email: {
        type: String,
        required: true,
        trim: true, // delete breakspace
        validate: {
            validator: isEmailValid,
            message: "Invalid email fromat",
        },
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "There are should be min 6 characters in password"],
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

// from mongoose we want to create model(equal to collection) first param: any name, second param: which schema you want t0 follow
//So, this line provides you acsess to DB (in the form of the Users collection) that you can use to interact with the MongoDB collection for all your CRUD operations.
const Users = mongoose.model("Users", usersSchema);

export default Users;
