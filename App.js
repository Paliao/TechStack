import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './src/reducers'
import { Header } from './src/common'

const store = createStore(reducers)

const App = () => {
  return(
    <Provider store={store}>
      <View>
        <Header title='Tech Stack'/>
      </View>
    </Provider>
  )
}

export default App