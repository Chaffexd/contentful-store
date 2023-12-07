import { create } from "zustand";

export type CartItem = {
    title: string;
    image: string;
    price: number;
    quantity: number;
}

type StoreState = {
    cart: CartItem[];
}

type StoreActions = {
    addToCart: (item: CartItem) => void;
    removeFromCart: (item: CartItem) => void;
}

type Store = StoreState & StoreActions;

const useStore = create<Store>((set, get) => ({
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