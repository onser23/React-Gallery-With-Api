import { combineReducers } from "redux";
import GalleryReducer from "./reducers/GalleryReducer";

export default combineReducers({
  GeneralResponse: GalleryReducer,
});
