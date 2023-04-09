import bcrypt from "bcryptjs";

// create fanction that will encrypt password
export const encryptPassword = (plaintextPassword, saltRounds) => {
    return bcrypt.hash(plaintextPassword, saltRounds);
};

// fuction that will compare password from input with encrypt password
export const checkPassword = (plaintextPassword, hashPassword) => {
    return bcrypt.compare(plaintextPassword, hashPassword);
};
