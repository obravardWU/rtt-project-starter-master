import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {MemberInfo} from "./types";
import {AppState} from "../../shared/types/appState";

export const membersSlice = createSlice<MemberInfo[], SliceCaseReducers<MemberInfo[]>>({
  name: 'members',
  initialState: [],
  reducers: {
    membersLoaded: (state, action: PayloadAction<MemberInfo[]>) => action.payload
  }
});

export const allMembers = (state: AppState) => state.members;

