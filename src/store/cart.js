import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  countCart: 0,
  addProductCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  increaseCart: () => set((state) => ({ countCart: state.countCart + 1 })),
  removeCart: () => set({ countCart: 0 }),
  updateCart: (newCart) => set({ countCart: newCart }),
}));

export default useCartStore;
