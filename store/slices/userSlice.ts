import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string | null;
  bixon: number;
  bio: string;
};

export type UserSessionState = {
  user: null | User;
  theme: string; // add theme to our model - we specify the only two valid values
};

// initial state for current user session
const initialState: UserSessionState = {
  user: {
    firstName: "Jeffrey",
    lastName: "Hernandez",
    email: "jeff@gmail.com",
    bio: "Call me Joe Sir aka Jeffrey Hernandez",
    profileImage: require("../../assets/images/profilePic.png"),
    bixon: 1080,
  }, // user profile
  theme: "", // get local storage value for theme
};

export const userSessionSlice = createSlice({
  name: "session",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // updates user session data
    setUser: (state: UserSessionState, action: PayloadAction<User>) => {
      if (action.payload) {
        state.user = action.payload;
      }
    },

    addBixon: (state: UserSessionState, action: PayloadAction<number>) => {
      if (action.payload && state.user) {
        state.user.bixon += action.payload;
      }
    },
  },
});

export const { setUser, addBixon } = userSessionSlice.actions;

// accessor for admin user
export const getUser = (state: RootState) => state.session.user;

// get color theme
export const getColorTheme = (state: RootState) => state.session.theme;

export default userSessionSlice.reducer;
