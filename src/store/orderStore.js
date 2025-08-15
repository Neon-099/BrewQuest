import {create} from 'zustand';
import {persist} from 'zustand/middleware';

//CREATE RETURN CUSTOM HOOKS: to give access in zustand
export const useStore = create(
    persist ( 
        (set) => ({
        orders: [],  //store here the orders

            addOrder: (coffee, price, quantity, servingOption) => 
                set((state) => {
                    const totalPrice = price * quantity;
                    const roundedValue = Math.round(totalPrice * 100) / 100;
                    
                    const newOrder = {
                        id: crypto.randomUUID(),
                        name: coffee.name,
                        price: roundedValue,
                        quantity: quantity,
                        originalPrice: price,
                        servingOption,
                    };

                    //RETURN THE NEW ORDER AND THE COFFEE
                    return {orders: [...state.orders, newOrder]}
                }),

            deleteOrder: (orderId) => 
                set((state) => ({
                    orders: state.orders.filter((order) => order.id !== orderId)
            })),
        }),
        {
            name: 'orderStore',
        }
    )
)
