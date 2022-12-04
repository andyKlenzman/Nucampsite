export const validateUserLoginForm = (values) => {
    const errors = {};

    if (values.password.length < 7) {
        errors.password = 'Must be at least 8 characters';
    } 

    if (values.username.length < 6 ) {
        errors.username = 'Must be at least 2 characters.';
    } else if(values.username.length > 15) {
        errors.username = 'Must be less then 15 characters.';
    }


    return errors;
};