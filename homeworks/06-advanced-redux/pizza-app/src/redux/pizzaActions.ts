import { ThunkAction } from 'redux-thunk'
import { getPizza } from '../services/api'
import { State } from '../types'
import { PizzaAction, PizzaActions } from './actions'

export type ThunkActionTS = ThunkAction<void, State, unknown, PizzaAction>

export const viewPizza = (): ThunkActionTS => async (dispatch) => {
    getPizza().then(res => {
        dispatch({ type: PizzaActions.PIZZA_VIEWED, payload: res.items })
    })
}

export const selectPizza = (payload: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: PizzaActions.PIZZA_SELECTED, payload })
}

export const addPizzaIntoBasket = (payload: {}): ThunkActionTS => async (dispatch) => {
    dispatch({ type: PizzaActions.PIZZA_ADDED_INTO_BASKET, payload })
}

export const removePizza = (payload: string): ThunkActionTS => async (dispatch) => {
    dispatch({ type: PizzaActions.PIZZA_REMOVED_FROM_BASKET, payload })
}