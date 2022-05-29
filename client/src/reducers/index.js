import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './authReducer.js'

export default combineReducers({
  auth: authReducer,
})
