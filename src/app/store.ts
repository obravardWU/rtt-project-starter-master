import {configureStore} from '@reduxjs/toolkit';
import {membersSlice} from "../features/members/members.slice";
import {AppState} from "../shared/types/appState";
import {albumsSlice} from "../features/albums/albums.slice";
import {authSlice} from "../features/auth/auth.slice";

export const store = configureStore<AppState>({
  reducer: {
    members: membersSlice.reducer,
    albums: albumsSlice.reducer,
    curranUser: authSlice.reducer
  }
});
