import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {MemberInfo} from "./types";

export const membersSlice = createSlice<MemberInfo[], SliceCaseReducers<MemberInfo[]>>({
  name: 'members',
  initialState: [],
  reducers: {
    membersLoaded: (state, action: PayloadAction<MemberInfo[]>) => action.payload
  }
});

