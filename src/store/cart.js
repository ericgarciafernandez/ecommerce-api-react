import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      countCart: 0,
      totalPrice: 0,
      addProductCart: (product) =>
        set((state) => {
          const updatedCart = state.cart.map((item) => {
            if (item.id === product.id) {
              return { ...item, quantity: item.quantity + 1 }; // Aumentamos la cantidad si el producto ya está en el carrito
            }
            return item;
          });
          if (!updatedCart.some((item) => item.id === product.id)) { // Si el producto no estaba en el carrito, lo agregamos
            updatedCart.push({ ...product, quantity: 1 });
          }
          return { cart: updatedCart };
        }),

      increaseCart: () => set((state) => ({ countCart: state.countCart + 1 })),
      removeCart: () => set({ countCart: 0 }),
      updateCart: (newCart) => set({ countCart: newCart }),
      setTotalPrice: (price) =>
        set((state) => ({ totalPrice: state.totalPrice + price })),
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useCartStore;
