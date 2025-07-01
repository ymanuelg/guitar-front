import { useEffect, useMemo, useState } from 'react'
import { getAllGuitar } from '../services/guitarService.js'
import {
  cleanAllOrders,
  createOrderGuitar,
  deleteOrderById,
  getOrdersByCustomer,
  updateQuantity
} from '../services/orderService.js'

const useCart = () => {
  //
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [changeCart, setChangeCart] = useState(false)

  useEffect(() => {
    const cargaGuitar = async () => {
      try {
        const guitarData = await getAllGuitar()
        setData(guitarData)
      } catch (error) {
        console.error('Error querying guitar data', error.message)
      }
    }
    cargaGuitar()
  }, [])

  useEffect(() => {
    const loadOrder = async () => {
      try {
        const orderdata = await getOrdersByCustomer()
        setCart(orderdata)
      } catch (error) {
        console.error('Error querying order data', error.message)
      }
    }
    loadOrder()
  }, [changeCart])

  const addTotal = useMemo(
    () => cart.reduce((adder, item) => adder + item.price * item.quantity, 0),
    [cart]
  )
  //const addTotal = 0
  const isEmpty = useMemo(
    () => cart.length === 0,
    [cart]
  )
  //const isEmpty=false

  const removeFromCart = async (idOrder) => {
    // console.log('Eliminando..')
    try {
      const deleteOrder = await deleteOrderById(idOrder)
      // borrar de la lista
      setChangeCart((prevValue) => (prevValue ? false : true))
    } catch (error) {
      console.error('Error canceling Order')
    }
  }

  const incrementOrder = async (orderId) => {
    try {
      const objectParam = { orderId, operation: 'inc' }
      const updateOrder = await updateQuantity(objectParam)
      // actualizar el cambio
      setChangeCart((prevValue) => (prevValue ? false : true))
    } catch (error) {
      console.error('Error increasing quantity', error.message)
    }
  }

  const decrementOrder = async (orderId) => {
    try {
      const objectParam = { orderId, operation: 'dec' }
      const updateOrder = await updateQuantity(objectParam)
      // actualizar el cambio
      setChangeCart((prevValue) => (prevValue ? false : true))
    } catch (error) {
      console.error('Error increasing quantity', error.message)
    }
  }

  const createOrder = async (guitarId) => {
    try {
      const result = await createOrderGuitar(guitarId)
      setChangeCart((prevValue) => (prevValue ? false : true))
    } catch (error) {
      console.error('Error creating Order', error.message)
    }
  }

  const cleanOrders = async () => {
    console.log ('Limpiando')
    try {
      const customerId = 'aa'
      const result = cleanAllOrders (customerId)
      setChangeCart((prevValue) => (prevValue ? false : true))
    } catch (error) {
      console.error('Error cleaning Order', error.message)
    }
  }

  return {
    data,
    cart,
    removeFromCart,
    incrementOrder,
    decrementOrder,
    createOrder, 
    addTotal, 
    isEmpty, 
    cleanOrders
  }
}

export default useCart
