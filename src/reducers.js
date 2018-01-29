import { combineReducers } from 'redux'

import LibraryReducer from './library/libraryReducer'
import SelectReducer from './library/selectionReducer'

const reducers = combineReducers({
  libraries: LibraryReducer,
  selectedId: SelectReducer
})

export default reducers