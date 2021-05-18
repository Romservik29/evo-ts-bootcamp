import { Middleware } from "redux";
import { fetchLog } from "../services/api";
import { State } from "../types";
import { PizzaActions } from "./actions";

export const logger: Middleware<{}, State> = store => next => action => {
    const { type, payload } = action;
    const pizza = store.getState().pizza.filter(p => payload === p._id)[0]
    if (type === PizzaActions.PIZZA_VIEWED) { fetchLog({ eventName: PizzaActions.PIZZA_VIEWED }) }
    else {
        fetchLog({
            eventName: type,
            pizzaName: pizza.name,
            pizzaPrice: pizza.price
        })
    }
    return next(action);
};