export const validateCommentForm = (values) => {
    const errors = {};

    if (!values.rating) {
        errors.rating = 'Required';
    } 

    if (values.author.length < 3 ) {
        errors.author = 'Must be at least 2 characters.';
    } else if(values.author.length > 15) {
        errors.author = 'Must be less then 15 characters.';
    }


    return errors;
};