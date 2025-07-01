const URL_ORDER_BASE = 'http://localhost:1234/order'
const DEFAULT_CUSTOMER = '5628ab4e-4ac3-11f0-8e95-f8b46a8ea60e'

export const getOrdersByCustomer = async (customerId) => {
  try {
    const response = await fetch(
      `${URL_ORDER_BASE}/customer/${DEFAULT_CUSTOMER}`
    )
    if (!response.ok) {
      console.log('error al ORDERS')
      throw new Error('Error retrieving order data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error retrieving guitar data', error.message)
  }
}

export const deleteOrderById = async (orderId) => {
  try {
    const response = await fetch(`${URL_ORDER_BASE}/${orderId}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error('Error canceling order')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error canceling order', error.message)
  }
}

export const updateQuantity = async ({ orderId, operation }) => {
  try {
    const response = await fetch(`${URL_ORDER_BASE}/${orderId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ operation })
    })
    if (!response.ok) {
      throw new Error('Error increasing quantity')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error increasing order quantity', error.message)
  }
}

export const createOrderGuitar = async (idGuitar) => {
  try {
    const response = await fetch(`${URL_ORDER_BASE}/customer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({customerId: DEFAULT_CUSTOMER, guitarId: idGuitar})
    })
    if (!response.ok) {
      throw new Error('Error creating order')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error increasing order quantity', error.message)
  }
}

export const cleanAllOrders = async (customerId) => {
  try {
    const response = await fetch(`${URL_ORDER_BASE}/customer/${DEFAULT_CUSTOMER}`, {
      method: 'DELETE'
    })
    if (!response.ok) {
      throw new Error('Error cleaning orders')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error cleaning orders', error.message)
  }
}