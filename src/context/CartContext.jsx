import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => {
      const existe = prev.find((p) => p.id === producto.id);

      if (existe) {
        return prev.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        );
      } else {
        return [
          ...prev,
          {
            ...producto,
            cantidad: 1,
            talla: "", // 👈 importante
          },
        ];
      }
    });
  };

  const aumentarCantidad = (id) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, cantidad: p.cantidad + 1 }
          : p
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCarrito((prev) =>
      prev
        .map((p) =>
          p.id === id
            ? { ...p, cantidad: p.cantidad - 1 }
            : p
        )
        .filter((p) => p.cantidad > 0)
    );
  };

  const eliminarDelCarrito = (id) => {
    setCarrito((prev) =>
      prev.filter((p) => p.id !== id)
    );
  };

  // ⭐ AQUÍ ESTABA LO QUE TE FALTABA
  const actualizarTalla = (id, talla) => {
    setCarrito((prev) =>
      prev.map((p) =>
        p.id === id
          ? { ...p, talla }
          : p
      )
    );
  };

  const limpiarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        aumentarCantidad,
        disminuirCantidad,
        eliminarDelCarrito,
        actualizarTalla, // 👈 IMPORTANTE
        limpiarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);