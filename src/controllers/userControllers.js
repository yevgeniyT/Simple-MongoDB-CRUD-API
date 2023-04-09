import User from "../models/usersSchema.js";
import { v4 as uuidv4 } from "uuid";
//import function to hash password
import { encryptPassword } from "../helper/securePassword.js";
// import fanction to compare password to login
import { checkPassword } from "../helper/securePassword.js";

const getAllUsers = async (req, res) => {
    try {
        // assing to allUsers all is found in Users collections from DB
        const allUsers = await User.find();
        res.status(200).json({
            message: "List of all users",
            //asign to users all from allUsers to show in JSON output
            users: allUsers,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
const getSingleUser = async (req, res) => {
    try {
        //Check is user is not found by id show message
        const isExist = await User.findOne({ id: req.params.id });
        if (!isExist) {
            return res.status(404).json({
                message: "User has not been found",
            });
        }
        // assing to singleUser user founded by id in Users collections from DB
        const singleUser = await User.findOne({ id: req.params.id });
        res.status(200).json({
            message: "User has been found",
            //asign to users a user from singleUser to show in JSON output
            users: singleUser,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        //Check is user is not found by id show message
        const isExist = await User.findOne({ id: req.params.id });
        if (!isExist) {
            return res.status(404).json({
                message: "User has not been found",
            });
        }
        // dletes singleUser user founded by id in Users collections from DB
        await User.deleteOne({ id: req.params.id });
        res.status(200).json({
            message: "User has been deleted",
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

const createUser = async (req, res) => {
    try {
        //I want to check if user exist by email
        const isExist = await User.findOne({ email: req.body.email });
        if (isExist) {
            return res.status(404).json({
                message: "User is already exist",
            });
        }
        // Difines the lenth of pasword some way
        const saltRounds = 10;
        // Definese where from we take to passford
        const plaintextPassword = req.body.password;
        //use exported function to hash the password
        const hashPassword = await encryptPassword(
            plaintextPassword,
            saltRounds
        );
        //I want to create new User using our model (collection) which have required schema from /model/schema
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            email: req.body.email,
            // assign already hashed passford to DB
            password: hashPassword,
            age: req.body.age,
        });
        // Saves user to DB
        const user = await newUser.save();
        //Check if the user is not created then return massege
        if (!user)
            return res.status(404).json({
                message: "Failed to create user",
            });

        return res.status(201).json({
            message: "User is created",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        //I want to check if user exist by email
        const isExist = await User.findOne({ id: req.params.id });
        if (!isExist) {
            return res.status(400).json({
                message: "User is not exist",
            });
        }
        // Update the user with the new data
        const updatedUser = await User.updateOne(
            { id: req.params.id },
            {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    age: req.body.age,
                },
            }
        );
        // Send a success response
        return res.status(200).json({
            message: "User was updated",
        });
    } catch (error) {
        // Handle errors
        return res.status(500).json({
            message: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        //I want to check if user exist by email
        const isExist = await User.findOne({ email: req.body.email });
        if (!isExist) {
            return res.status(400).json({
                message: "User does not exist, please register",
            });
        }
        // get input pf password from frontend
        const plaintextPassword = req.body.password;
        // compare that password with one from DB which we get in isExist variable
        const isMatched = await checkPassword(
            plaintextPassword,
            isExist.password
        );
        // if matche we givv acceess to user
        if (!isMatched) {
            return res.status(404).json({
                message: "Not authorised",
            });
        }

        return res.status(200).json({
            message: "loggin success",
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

// export all variables in object
export {
    getAllUsers,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser,
    loginUser,
};
