import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: 0,
  increaseCart: () => set((state) => ({ cart: state.cart + 1 })),
  removeCart: () => set({ cart: 0 }),
  updateCart: (newCart) => set({ cart: newCart }),
}));

export default useCartStore;
