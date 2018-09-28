import { combineReducers } from "redux"
import selectedChord from "./selectedChord"

const reducers = combineReducers({
  selectedChord: selectedChord
})

export default reducers