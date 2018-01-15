import { combineReducers } from 'redux'

import libraryReducer from './library/libraryReducer'

const reducers = combineReducers({
  libraries: libraryReducer
})

export default reducers