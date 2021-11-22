import { getProducts } from '../api/products'
import { showError } from '../actions/error'

export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'

// action creator for fetching products pending
export function fetchProductsPending () {
  return {
    type: FETCH_PRODUCTS_PENDING
  }
}

// action creator for fetching products success AND giving the state the products
export function fetchProductsSuccess (products) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products: products
  }
}

// this gets called by the component ProductList when it mounts
export function fetchProducts () {
  // fetchProducts is a higher order function which means it returns a function.
  // the dispatch parameter is passed to the returned function by thunk middleware
  return (dispatch) => {
    // dispatch the pending action for the loading indicator
    dispatch(fetchProductsPending())
    return getProducts()
      .then((products) => {
        dispatch(fetchProductsSuccess(products))
        return null
      })
      .catch((err) => {
        // if the error is from our routes, this will use the message our route
        // sends back, rather than the generic 'Internal Server Error' from a
        // status 500
        // if the error is from elsewhere in the Promise chain, there won't be
        // an err.response object, so we use err.message
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}
