import React from 'react'
import { useDispatch } from 'react-redux'
import { updateOrderStatus } from '../actions/orders'

import OrderItem from './OrderItem'

function Order (props) {
  const { id, products, createdAt, status } = props.order
  const { history } = props
  const dispatch = useDispatch()

  function cancelOrder () {
    console.log('cancelling order')
    dispatch(updateOrderStatus(id, 'cancelled', history))
  }

  function completeOrder () {
    console.log('completing order')
    dispatch(updateOrderStatus(id, 'completed', history))
  }

  return (
    <div className='order'>
      <p className='name'>Order #{id}</p>
      <p className='order-details'>Order placed: {createdAt}</p>
      <p className='order-details'>
        <span className={`fa fa-circle ${status}`} aria-hidden="true"></span>
        Status: {status}
      </p>
      <table>
        <thead>
          <tr>
            <td role='columnheader'>Product</td>
            <td role='columnheader'>Quantity</td>
          </tr>
        </thead>
        <tbody>
          {products.map(item => {
            return <OrderItem
              key={item.id}
              product={item}
            />
          })}</tbody>
      </table>
      <div>
        {status === 'pending' &&
          <>
            <button
              onClick={cancelOrder}
              className='order-button'
            >Cancel Order</button>
            <button
              onClick={completeOrder}
              className='order-button button-primary'
            >Order Received</button>
          </>
        }
      </div>
    </div>
  )
}

export default Order
