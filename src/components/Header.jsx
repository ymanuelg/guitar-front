import { Fragment } from 'react'

const Header = ({ cart, removeFromCart, incrementOrder, decrementOrder, addTotal, isEmpty, cleanOrders }) => {
  //
  return (
    <Fragment>
      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img
                  src="img/logo.svg"
                  alt="imagen logo"
                  className="img-fluid"
                />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img
                  src="/img/carrito.png"
                  alt="Cart Image"
                  className="img-fluid"
                />
                <div id="carrito" className="bg-white p-3">
                  {isEmpty ? (
                    <p className="text-center">The cart is Empty</p>
                  ) : (
                    <p></p>
                  )}
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((itmOrder) => {
                        return (
                          <tr key={itmOrder.id}>
                            <td>
                              <img
                                src={`img/${itmOrder.image}.jpg`}
                                alt="imagen Guitarra"
                                className="img-fluid"
                              />
                            </td>
                            <td>{itmOrder.name}</td>
                            <td className="fw-bold">$ {itmOrder.price}</td>
                            <td className="flex align-items-start gap-4">
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => decrementOrder(itmOrder.id)}
                              >
                                -
                              </button>
                              {itmOrder.quantity}
                              <button
                                type="button"
                                className="btn btn-dark"
                                onClick={() => incrementOrder(itmOrder.id)}
                              >
                                +
                              </button>
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => removeFromCart(itmOrder.id)}
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                  <p className="text-end">
                    Total to pay
                    <span className="fw-bold">$ {addTotal}</span>
                  </p>
                  <button className="btn btn-dark w-100 mt-3 p-2" type='button' onClick={() => cleanOrders()}>
                    Empty Cart
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
