import bcrypt from "bcryptjs";

// create fanction that will encrypt password
export const encryptPassword = (plaintextPassword) => {
    // Difines the lenth of pasword some way
    const saltRounds = 10;
    return bcrypt.hash(plaintextPassword, saltRounds);
};

// fuction that will compare password from input with encrypt password
export const checkPassword = (plaintextPassword, hashPassword) => {
    return bcrypt.compare(plaintextPassword, hashPassword);
};
