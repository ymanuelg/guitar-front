import './App.css'
import Guitar from './components/Guitar'
import Header from './components/Header'
import useCart from './hooks/useCart'

function App() {
  const {
    data,
    cart,
    removeFromCart,
    incrementOrder,
    decrementOrder,
    createOrder, 
    addTotal,
    isEmpty, 
    cleanOrders
  } = useCart()

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incrementOrder={incrementOrder}
        decrementOrder={decrementOrder}
        addTotal={addTotal}
        isEmpty={isEmpty}
        cleanOrders={cleanOrders}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>
        <div className="row mt-5">
          {data.map((itmGuitar) => (
            <Guitar
              key={itmGuitar.idUUID}
              guitar={itmGuitar}
              createOrder={createOrder}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
