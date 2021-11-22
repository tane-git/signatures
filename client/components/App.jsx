import React from 'react'
import { Route } from 'react-router-dom'

// import components here
import Header from './Header'

// what is history???

function App () {
  return (
    <div className='app'>
      <Route path='/' component={Header} />
      {/* <Route path='/' component={ErrorMessage} />
      <Route exact path='/' render={({ history }) => {
        return <ProductList history={history}>
          <WaitIndicator />
        </ProductList>
      }} />
      <Route path='/cart' render={({ history }) => {
        return <Cart history={history}>
          <WaitIndicator />
        </Cart>
      }} />
      <Route path='/orders' render={({ history }) => {
        return <OrderList history={history}>
          <WaitIndicator />
        </OrderList>
      }} />
      <Route path='/admin' render={({ history }) => {
        return <Admin history={history}>
          <WaitIndicator />
        </Admin>
      }} /> */}
    </div>
  )
}

export default App
