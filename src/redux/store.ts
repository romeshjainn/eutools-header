import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserProfileReducer from "./reducers/userProfileReducer";

const rootReducer = combineReducers({
  userProfile: UserProfileReducer,
});

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return { store };
};

const { store } = makeStore();
export default store;
