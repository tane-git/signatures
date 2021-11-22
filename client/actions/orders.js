import { getOrders, patchOrderStatus, postOrder } from '../api/orders'

export const POST_ORDER_PENDING = 'POST_ORDER_PENDINGR'
export const POST_ORDER_SUCCESS = 'POST_ORDER_SUCCESS'
export const FETCH_ORDERS_PENDING = 'FETCH_ORDERS_PENDING'
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS'
export const PATCH_ORDERS_PENDING = 'PATCH_ORDERS_PENDING'
export const PATCH_ORDERS_SUCCESS = 'PATCH_ORDERS_SUCCESS'

export function postOrderPending () {
  return {
    type: POST_ORDER_PENDING
  }
}

export function postOrderSuccess (order) {
  return {
    type: POST_ORDER_SUCCESS
  }
}

// async function...
export function placeOrder (order, history) {
  return (dispatch) => {
    dispatch(postOrderPending())
    return postOrder(order)
      .then(() => {
        dispatch(postOrderSuccess())
        history.push('/orders')
        return null
      })
      .catch(err => console.log(err))
  }
}

// action creator for fetching orders pending
export function fetchOrdersPending () {
  return {
    type: FETCH_ORDERS_PENDING
  }
}

// action creator for fetching orders success
export function fetchOrdersSuccess (orders) {
  return {
    type: FETCH_ORDERS_SUCCESS,
    orders
  }
}

// async function for fecthing orders using api call of getOrders
export function fetchOrders () {
  return (dispatch) => {
    dispatch(fetchOrdersPending())
    return getOrders()
      .then(orders => {
        dispatch(fetchOrdersSuccess(orders))
        return null
      })
      .catch(err => console.log(err))
  }
}

// An updateOrderStatus async action creator, which dispatches pending and success actions.

// action creater for patching orders pending
export function patchOrdersPending () {
  return {
    type: PATCH_ORDERS_PENDING
  }
}

// action creator for patching orders success
export function patchOrdersSuccess (order) {
  return {
    type: PATCH_ORDERS_SUCCESS,
    order
  }
}

// async function for patching orders using api call of patchOrder
export function updateOrderStatus (id, status, history) {
  return (dispatch) => {
    dispatch(patchOrdersPending())
    return patchOrderStatus(id, status)
      .then((order) => {
        dispatch(patchOrdersSuccess(order))
        history.push('/orders')
        return null
      })
      .catch(err => console.log(err))
  }
}
