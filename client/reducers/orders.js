import { FETCH_ORDERS_SUCCESS, PATCH_ORDERS_SUCCESS } from '../actions/orders'

// orders reducer watching for fetch orders success action which will set the store state to the new orders array
export default function orders (state = [], action) {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return action.orders
    case PATCH_ORDERS_SUCCESS:
      return (
        [
          ...state.map(order => {
            if (order.id === action.order.id) {
              return action.order
            } else {
              return order
            }
          })
        ]
      )
    default:
      return state
  }
}
