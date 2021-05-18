import { useMemo } from "react";
import { useSelector } from "react-redux";
import { State} from "../types";
import {PizzaBasketItem} from "./PizzaBasketItem";

export function PizzaBasket() {
    const basket = useSelector((state:State)=> state.basket)
    return useMemo(()=>basket.map((p) =>
        <PizzaBasketItem
            _id={p._id}
            key={p._id}
            price={p.price}
            name={p.name}
            count={p.count}
        />),[basket]);
}
