import validator from "validator";

export const isEmailValid = (email) => {
    return validator.isEmail(email);
};
