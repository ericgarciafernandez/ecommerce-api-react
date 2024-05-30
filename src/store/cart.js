import { create } from "zustand";
import { persist } from 'zustand/middleware'


const useCartStore = create(persist((set) => ({
  cart: [],
  countCart: 0,
  totalPrice: 0,
  addProductCart: (product) =>
    set((state) => ({ cart: state.cart.concat(product) })),
  increaseCart: () => set((state) => ({ countCart: state.countCart + 1 })),
  removeCart: () => set({ countCart: 0 }),
  updateCart: (newCart) => set({ countCart: newCart }),
  setTotalPrice: (price) =>
    set((state) => ({ totalPrice: state.totalPrice + price })),
}),
  {
    name: 'cart-storage',
    getStorage: () => localStorage,
  }
)

);

export default useCartStore;
