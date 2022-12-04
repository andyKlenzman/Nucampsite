import { COMMENTS } from '../../app/shared/oldData/COMMENTS'
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
            console.log("add comment", action.payload, state.commentsArray)
            const newComment = {
                id: state.commentsArray.length + 1,
                ...action.payload
            };
            state.commentsArray.push(newComment)
        }

    }
});

//
export const commentsReducer = commentsSlice.reducer;

// this is so COOL! redux toolkit automatically makes a call to the database to exists
export const { addComment } = commentsSlice.actions


//same currying factor
export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
};





