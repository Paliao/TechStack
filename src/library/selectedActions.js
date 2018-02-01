export function selectLibrary(selectedId) {
  return {
    type: 'SELECTED_LIBRARY',
    payload: selectedId
  }
}