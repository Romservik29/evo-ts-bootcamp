export enum PizzaActions {
    PIZZA_VIEWED = "PIZZA_VIEWED",
    PIZZA_SELECTED = "PIZZA_SELECTED",
    PIZZA_ADDED_INTO_BASKET = "PIZZA_ADDED_INTO_BASKET",
    PIZZA_REMOVED_FROM_BASKET = "PIZZA_REMOVED_FROM_BASKET",
}

export type PizzaAction = {
    type: keyof typeof PizzaActions
    payload?:any
}