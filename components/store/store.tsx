"use client"
import { create } from "zustand";

export type CartItem = {
  title: string;
  image: string;
  price: number;
  quantity: number;
};

type StoreState = {
  cart: CartItem[];
};

type StoreActions = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  reduceQuantity: (title: string) => void;
  incrementQuantity: (title: string) => void;
};

type Store = StoreState & StoreActions;

const useStore = create<Store>((set, get) => ({
  cart: [],
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.findIndex(
        (cartItem) => cartItem.title === item.title
      );

      if (existingItem !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItem] = {
          ...updatedCart[existingItem],
          quantity: updatedCart[existingItem].quantity + 1,
        };
        updatedCart[existingItem].price = updatedCart[existingItem].quantity * item.price

        return { cart: updatedCart };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    });
  },
  removeFromCart: (item) => {
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem !== item),
    }));
  },
  reduceQuantity: (title) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.title === title
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    })),

  incrementQuantity: (title) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
}));

export default useStore;
