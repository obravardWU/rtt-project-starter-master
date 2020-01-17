import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {AlbumInfo} from "./types";

export const albumsSlice = createSlice<AlbumInfo[], SliceCaseReducers<AlbumInfo[]>>({
  name: 'albums',
  initialState: [],
  reducers: {
    albumsLoaded: (state: AlbumInfo[], action: PayloadAction<AlbumInfo[]>) => action.payload
  }
});
