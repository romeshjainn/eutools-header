import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { UserProfileTypes } from "./types";

// const initialState: UserProfileTypes = { name: "Romesh" };
const initialState = {};

const UserProfileSlice = createSlice({
  name: "UserProfile",
  initialState,
  reducers: {
    // setUserProfile: (_, action: PayloadAction<UserProfileTypes>) => {
    setUserProfile: (_, action) => {
      return action.payload;
    },
  },
});

export const { setUserProfile } = UserProfileSlice.actions;
export default UserProfileSlice.reducer;
