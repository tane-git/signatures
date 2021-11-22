import request from 'superagent'

// Create a function that makes a post request to /api/v1/orders and gives it a new order array
export function postOrder (newOrder) {
  return request.post('/api/v1/orders')
    .send(newOrder)
    .then((res) => res.body)
}

// Get orders from /api/v1/orders and return json
export function getOrders () {
  return request.get('/api/v1/orders')
    .then((res) => res.body)
}

// patchOrderStatus function which takes in an orderId and a new status and calls the patch request to /api/v1/orders
export function patchOrderStatus (orderId, newStatus) {
  return request.patch('/api/v1/orders')
    .send({ newStatus: newStatus, orderId: orderId })
    .then((res) => res.body)
}
