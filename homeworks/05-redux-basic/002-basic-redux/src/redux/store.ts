import { createStore, Reducer, compose } from "redux";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
enum BankActions {
    UPDATE_BALANCE = "UPDATE_BALANCE",
    CREDIT = "CREDIT",
    DEBIT = "DEBIT",
    SET_BALANCE_WITH_TAX = "SET_BALANCE_WITH_TAX"
}

interface ActionType {
    type: keyof typeof BankActions;
    payload: number;
}

const bankReducer: Reducer<{ balance: number }, ActionType> = (state = { balance: 0 }, action) => {
    switch (action.type) {
        case BankActions.UPDATE_BALANCE:
            state.balance = action.payload; break;
        case BankActions.CREDIT:
            state.balance += action.payload; break;
        case BankActions.DEBIT:
            state.balance -= action.payload; break;
        case BankActions.SET_BALANCE_WITH_TAX:
            state.balance *= (1 - action.payload / 100); break;
        default: return state
    }
    return state
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(bankReducer, { balance: 0 }, composeEnhancers());

const array: ActionType[] = [
    { type: "UPDATE_BALANCE", payload: 1000.0 },
    { type: "CREDIT", payload: 200.0 },
    { type: "CREDIT", payload: 100.0 },
    { type: "SET_BALANCE_WITH_TAX", payload: 14.0 },
    { type: "DEBIT", payload: 250.0 },
    { type: "UPDATE_BALANCE", payload: 1000.0 },
]

array.forEach(array => store.dispatch(array));

export default store