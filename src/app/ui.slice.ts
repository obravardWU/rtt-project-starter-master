import {createSlice, PayloadAction, SliceCaseReducers} from '@reduxjs/toolkit';
import {UiState} from "../shared/types/uiState";
import {AppState} from "../shared/types/appState";

// manage ui slice state
export const uiSlice = createSlice<UiState, SliceCaseReducers<UiState>>({
  name: 'ui',
  initialState: {
    selectedMembersIds: [],
    loading: false
  },
  reducers: {
    memberSelected: (state: UiState, action: PayloadAction<number>) => {
      const memberId = action.payload;

      if (state.selectedMembersIds.includes(memberId)) {
        const index = state.selectedMembersIds.indexOf(memberId);
        state.selectedMembersIds.splice(index, 1);
      } else {
        state.selectedMembersIds.push(action.payload);
      }
    },
    loadingToggled: (state: UiState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  }
});

// selectors
export const selectedMembersIds = (state: AppState) => state.ui.selectedMembersIds;
