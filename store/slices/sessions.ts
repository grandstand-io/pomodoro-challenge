import { createSlice } from '@reduxjs/toolkit'

export interface SessionState {
  sessions: any[];
}

const initialState: SessionState = {
  sessions: [],
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
  },
})

export const { } = sessionSlice.actions

export default sessionSlice.reducer
