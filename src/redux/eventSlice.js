import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    list: [],
    filter: "All",
  },
  reducers: {
    addEvent: (state, action) => {
      state.list.push(action.payload);
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setEvents: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addEvent, setFilter, setEvents } = eventSlice.actions;
export default eventSlice.reducer;
