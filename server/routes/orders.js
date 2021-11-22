const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  // what does addOrder take?
  const newOrder = req.body
  db.addOrder(newOrder)
    .then(() => {
      // do we get a return from addOrder?
      res.sendStatus(201)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', (req, res) => {
  db.listOrders()
    .then((orders) => {
      res.json(orders)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// a patch route that edits the order status using db.editOrderStatus
router.patch('/', (req, res) => {
  const orderId = req.body.orderId
  const newStatus = req.body.newStatus
  db.editOrderStatus(orderId, newStatus)
    .then((order) => {
      console.log('orders after editting status: ', order)
      res.json(order)
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
