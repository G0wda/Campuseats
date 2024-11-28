import { writable } from 'svelte/store';

const createCartStore = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    addToCart: (item) => {
      update(items => {
        const existingItem = items.find(i => i.id === item.id);
        if (existingItem) {
          return items.map(i => 
            i.id === item.id 
              ? { ...i, quantity: i.quantity + 1 }
              : i
          );
        }
        return [...items, { ...item, quantity: 1 }];
      });
    },
    removeFromCart: (id) => {
      update(items => items.filter(i => i.id !== id));
    },
    updateQuantity: (id, newQuantity) => {
      update(items => 
        items.map(i => i.id === id ? { ...i, quantity: newQuantity } : i)
      );
    },
    clearCart: () => set([])
  };
};

export const cartItems = createCartStore();