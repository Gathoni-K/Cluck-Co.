import { createContext, useContext, useState } from "react";
import type { ProductType } from "../data/products";

export interface CartItemType extends ProductType {
  quantity: number;
}

interface CartContextType {
  cart: CartItemType[];
  addToCart: (product: ProductType) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItemType[]>([]);

    const addToCart = (product: ProductType) => {
        setCart(prev => {
        const existing = prev.find(item => item.id === product.id);

        if (existing) {
            return prev.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
        }

        return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (productId: number, quantity: number) => {
        setCart(prev =>
        prev.map(item =>
            item.id === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        ));
    };

    const removeFromCart = (productId: number) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
        {children}
        </CartContext.Provider>
    );
    };

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used inside a CartProvider");
    }
    return context;
};
