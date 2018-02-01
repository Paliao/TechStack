const INITIAL_STATE = { selectedId: null }

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECTED_LIBRARY':
      return { ...state, selectedId: action.payload }
    default:
      return state
  }
}