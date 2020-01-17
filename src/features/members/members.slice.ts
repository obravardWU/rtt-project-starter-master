import {createSelector, createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {MemberInfo} from "./types";
import {AppState} from "../../shared/types/appState";

export const membersSlice = createSlice<MemberInfo[], SliceCaseReducers<MemberInfo[]>>({
  name: 'members',
  initialState: [],
  reducers: {
    membersLoaded: (state, action: PayloadAction<MemberInfo[]>) => action.payload
  }
});

// return members as-is
const rawMembers = (state: AppState) => state.members;

// use 'reselect' library under the hood
// cached results
export const allMembers = createSelector(
    rawMembers,
    (members) => {
      console.log('members are  mapped');

      return members.map((member:any) => ({
        id: member.id,
        name: member.name.first,
        email: member.email,
        city: member.location.city,
        phone: member.phone,
        picture: member.picture.thumbnail
      }))
    }
);



