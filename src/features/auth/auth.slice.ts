import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import {UserInfo} from "./types";

export const authSlice = createSlice<UserInfo, SliceCaseReducers<UserInfo>>({
  name: 'albums',
  initialState: null,
  reducers: {
    userLoggedIn: (state: UserInfo, action: PayloadAction<UserInfo>) => action.payload,
    userLoggedOut: (state: UserInfo, action: PayloadAction<null>) => action.payload,
  }
});
