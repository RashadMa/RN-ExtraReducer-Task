import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './screens/Main'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import CustomerReducer from './redux/store/customerSlice'


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
const store = configureStore({
  reducer: {
    CustomerReducer
  }
})
const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})