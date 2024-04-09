import { create } from "zustand";

const useCartStore = create((set) => ({
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
}));

export default useCartStore;
