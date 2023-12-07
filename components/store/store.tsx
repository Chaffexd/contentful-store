import { create } from "zustand";

const useStore = create((set, get) => ({
    cart: [],
    addToCart: (item) => {
        set((state) => ({
            cart: [...state.cart, item],
        }));
    },
    removeFromCart: (item) => {
        set((state) => ({
          cart: state.cart.filter((cartItem) => cartItem !== item),
        }));
      },
}));

export default useStore;