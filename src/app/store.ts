import {configureStore} from '@reduxjs/toolkit';
import {membersSlice} from "../features/members/members.slice";


export const store = configureStore({
  reducer: {
    members: membersSlice.reducer
  }
});
