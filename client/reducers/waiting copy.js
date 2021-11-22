// import {
//   FETCH_ORDERS_PENDING,
//   FETCH_ORDERS_SUCCESS,
//   POST_ORDER_PENDING,
//   POST_ORDER_SUCCESS,
//   PATCH_ORDERS_PENDING,
//   PATCH_ORDERS_SUCCESS
// } from '../actions/orders'
// import { FETCH_PRODUCTS_PENDING, FETCH_PRODUCTS_SUCCESS } from '../actions/products'
// import { SHOW_ERROR } from '../actions/error'

// function waiting (state = false, action) {
//   switch (action.type) {
//     // check if action.type contains the word pending
//     case /PENDING/.test(action.type):
//       return true

//     case /SUCCESS/.test(action.type):
//       return false

//     default:
//       return state
//   }
// }

export default function waiting (state = false, action) {
  if (/PENDING/.test(action.type)) return true
  if (/SUCCESS/.test(action.type)) return false
  else return state
}

// export default waiting

// function waiting (state = false, action) {
//   switch (action.type) {
//     case FETCH_PRODUCTS_PENDING:
//     case POST_ORDER_PENDING:
//     case FETCH_ORDERS_PENDING:
//     case PATCH_ORDERS_PENDING:
//       return true

//     case FETCH_PRODUCTS_SUCCESS:
//     case POST_ORDER_SUCCESS:
//     case FETCH_ORDERS_SUCCESS:
//     case PATCH_ORDERS_SUCCESS:
//     case SHOW_ERROR:
//       return false

//     default:
//       return state
//   }
// }
