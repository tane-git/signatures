import React from 'react'

function Admin () {
  const initialState = { name: '', description: '', country: '' }
  const [newProduct, setNewProduct] = React.useState(initialState)

  function handleChange (event) {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
    console.log('Submitting newProduct: ', newProduct)
  }

  console.log('newProduct: ', newProduct)

  return (
    <div>
      <h1>Admin</h1>
      <h3>add a product</h3>
      <label htmlFor='name'>Name:</label>
      <input name='name' type='text' value={newProduct.name} onChange={(e) => handleChange(e)} />
      <label htmlFor='discription'>Discription:</label>
      <input name='description' type='text' value={newProduct.description} onChange={(e) => handleChange(e)} />
      <label htmlFor='country'>Country:</label>
      <input name='country' type='text' value={newProduct.country} onChange={(e) => handleChange(e)} />
      <button type='submit' onClick={handleSubmit}>Add Product</button>
    </div>
  )
}

export default Admin
