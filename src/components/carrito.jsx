import { useState } from "react";
import { useCart } from "../context/CartContext";
import "../styles/carrito.css";

function Carrito({ abierto, cerrar }) {
  const [mostrarPago, setMostrarPago] = useState(false);

  const {
    carrito,
    aumentarCantidad,
    disminuirCantidad,
    eliminarDelCarrito,
    actualizarTalla,
  } = useCart();

  const total = carrito.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <>
      {abierto && (
        <div
          className="overlay-carrito"
          onClick={cerrar}
        ></div>
      )}

      <div className={`carrito ${abierto ? "activo" : ""}`}>
        <div className="carrito-header">
          <div>
            <h2>🛒 Mi Carrito</h2>

            <p className="subtitulo-carrito">
              Revisa tus productos antes de finalizar tu compra
            </p>
          </div>

          <button onClick={cerrar}>
            ✖
          </button>
        </div>

        {carrito.length === 0 ? (
          <p className="carrito-vacio">
            Tu carrito está vacío
          </p>
        ) : (
          <>
            {carrito.map((item) => (
              <div
                key={item.id}
                className="item-carrito"
              >
                <img
                  src={item.imagen}
                  alt={item.nombre}
                />

                <div className="info-producto">
                  <h4>{item.nombre}</h4>

                  <p className="cantidad-item">
                    Cantidad: {item.cantidad}
                  </p>

                  <p className="precio-item">
                    Precio: ${item.precio}
                  </p>

                  <p className="subtotal">
                    Subtotal: $
                    {item.precio * item.cantidad}
                  </p>
<select
  className="selector-talla"
  value={item.talla || ""}
  onChange={(e) =>
    actualizarTalla(item.id, e.target.value)
  }
>
  <option value="">
    Seleccionar talla
  </option>
  <option value="XS">XS</option>
  <option value="S">S</option>
  <option value="M">M</option>
  <option value="L">L</option>
  <option value="XL">XL</option>
</select>

                 <div className="controles">
  <button onClick={() => disminuirCantidad(item.id)}>
    -
  </button>

  <span>{item.cantidad}</span>

  <button onClick={() => aumentarCantidad(item.id)}>
    +
  </button>

  <button
    className="btn-eliminar"
    onClick={() => eliminarDelCarrito(item.id)}
  >
    🗑️
  </button>
</div>
                </div>
              </div>
            ))}

            <div className="total-carrito">
              <p className="cantidad-productos">
                Productos: {carrito.length}
              </p>

              <div className="detalle-total">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>

              <div className="detalle-total">
                <span>Envío</span>
                <span>Gratis</span>
              </div>

              <div className="detalle-total total-final">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <button
                className="btn-pagar"
                onClick={() => {
                  if (carrito.length > 0) {
                    setMostrarPago(true);
                  }
                }}
              >
                Finalizar Pedido
              </button>
            </div>
          </>
        )}
      </div>

      {mostrarPago && (
        <div className="modal-pago">
          <div className="contenido-pago">
            <h2>Finalizar Pedido</h2>

            <p>
              Total a pagar:{" "}
              <strong>${total}</strong>
            </p>

            <input
              type="text"
              placeholder="Nombre completo"
              required
            />

            <input
              type="tel"
              placeholder="Teléfono"
              required
            />

            <textarea
              placeholder="Dirección de entrega"
              rows="3"
              required
            ></textarea>

            <select>
              <option>
                Tarjeta de Crédito/Débito
              </option>

              <option>
                Transferencia Bancaria
              </option>

              <option>
                Pago Contra Entrega
              </option>
            </select>

            <button className="btn-confirmar">
              Confirmar Pedido
            </button>

            <button
              className="btn-cerrar"
              onClick={() =>
                setMostrarPago(false)
              }
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Carrito;