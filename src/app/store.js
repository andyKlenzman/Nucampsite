import { configureStore, getDeefaultMiddleware } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsiteSlice';
import { commentsReducer } from '../features/comments/commentSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionSlice';
import logger from 'redux-logger'
import { userReducer } from '../features/user/userSlice';


// was bugging out before I did this,,,
export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

