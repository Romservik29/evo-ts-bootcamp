import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PizzaAction, PizzaActions } from './actions';
import { Pizza, State } from '../types';
import * as R from "ramda";
import { logger } from './middleware';

const initialState = {
    pizza: [],
    basket: []
} as State

const pizzaReducer = (state = initialState, action: PizzaAction): State => {
    switch (action.type) {
        case PizzaActions.PIZZA_ADDED_INTO_BASKET: {
            const newBasket = [...state.basket]
            const idx = R.findLastIndex((x: Pizza) => x._id === action.payload)(newBasket);
            if (idx === -1) {
                const newPizza = state.pizza.filter(p => p._id === action.payload)[0]
                return { ...state, basket: [...state.basket, { ...newPizza, count: 1 }] }
            }
            else {
                newBasket[idx] = { ...newBasket[idx], count: newBasket[idx].count + 1 }
            }
            return { ...state, basket: [...newBasket] }
        }
        case PizzaActions.PIZZA_REMOVED_FROM_BASKET: {
            const newBasket = [...state.basket]
            const idx = R.findLastIndex((x: Pizza) => x._id === action.payload)(newBasket);
            const pizza = newBasket.find(p => p._id === action.payload);
            if (pizza?.count === 1) {
                const removedPizzaBasket = newBasket.filter(p => p._id !== action.payload)
                return { ...state, basket: [...removedPizzaBasket] }
            }
            else {
                newBasket[idx] = { ...newBasket[idx], count: newBasket[idx].count - 1 }
            }
            return { ...state, basket: [...newBasket] }
        }
        case PizzaActions.PIZZA_VIEWED: {
            const newPizzaList = action.payload
            return { ...state, pizza: newPizzaList }
        }
        case PizzaActions.PIZZA_SELECTED: { //it's copy PIZZA_ADDED_INTO_BASKET from basket
            const newBasket = [...state.basket]
            const idx = R.findLastIndex((x: Pizza) => x._id === action.payload)(newBasket);
            if (idx === -1) {
                const newPizza = state.pizza.filter(p => p._id === action.payload)[0]
                return { ...state, basket: [...state.basket, { ...newPizza, count: 1 }] }
            }
            else {
                newBasket[idx] = { ...newBasket[idx], count: newBasket[idx].count + 1 }
            }
            return { ...state, basket: [...newBasket] }
        }
        default:
            return state
    }
}

export const store = createStore(pizzaReducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)))

