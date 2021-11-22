import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrders } from '../actions/orders'

import Order from './Order'

function OrderList (props) {
  // const orders = []
  const orders = useSelector(state => state.orders)

  const { children, history } = props

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchOrders())
  }, [])

  console.log('orderlist orders: ', orders)

  return (
    <div className='orderlist'>
      {children} { /* Holds the WaitIndicator */ }
      {orders?.map(order => {
        return (
          <Order
            key={order.id}
            order={order}
            history={history}
          />
        )
      })}
    </div>
  )
}

export default OrderList
