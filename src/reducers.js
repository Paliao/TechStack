import { combineReducers } from 'redux'

import LibraryReducer from './library/libraryReducer'
import SelectionReducer from './library/selectionReducer'

const reducers = combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
})

export default reducers