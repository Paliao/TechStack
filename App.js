import React from 'react'
import {  } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './src/reducers'

const store = createStore(reducers)

const App = () => {
  return(
    <Provider store={store}>
      <View/>
    </Provider>
  )
}

export default App