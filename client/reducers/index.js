import { combineReducers } from 'redux'

import products from './products'
import cart from './cart'
import errorMessage from './errorMessage'
import waiting from './waiting'
import orders from './orders'

export default combineReducers({
  products,
  cart,
  errorMessage,
  waiting,
  orders
})
