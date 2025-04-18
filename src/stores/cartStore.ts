"use client"; // важное указание, если будешь использовать persist

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  items: CartItem[];
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  decreaseItem: (id: string) => void;
  increaseItem: (id: string) => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => {
        const items = get().items;
        const existing = items.find((i) => i.id === item.id);
        let newItems;

        if (existing) {
          newItems = items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          );
        } else {
          newItems = [...items, item];
        }

        const newTotal = newItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );

        set({ items: newItems, total: newTotal });
      },
      removeItem: (id: string) => {
        const newItems = get().items.filter((i) => i.id !== id);
        const newTotal = newItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );
        set({ items: newItems, total: newTotal });
      },

      decreaseItem: (id: string) => {
        const items = get().items;
        const newItems = items
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0);

        const newTotal = newItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );

        set({ items: newItems, total: newTotal });
      },

      increaseItem: (id: string) => {
        const items = get().items;
        const newItems = items.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        const newTotal = newItems.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0
        );

        set({ items: newItems, total: newTotal });
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
