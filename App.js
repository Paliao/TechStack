import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducers from './src/reducers'
import { Header } from './src/common'
import LibraryList from './src/library/libraryList'

const store = createStore(reducers)

const App = () => {
  return(
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Header title='Tech Stack'/>
        <LibraryList />
      </View>
    </Provider>
  )
}

export default App