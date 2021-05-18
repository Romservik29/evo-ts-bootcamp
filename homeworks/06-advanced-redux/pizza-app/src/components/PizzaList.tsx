import React, { useEffect, useMemo } from "react";
import { PizzaItem } from "./PizzaItem";
import { State } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { viewPizza } from "../redux/pizzaActions";


export function PizzaList() {
    const dispatch = useDispatch() 
        useEffect(() => {
        dispatch(viewPizza())
    }, [dispatch])
    const pizza = useSelector((state:State) => state.pizza)
    return useMemo(()=>pizza.map(p=>
        <PizzaItem
            key={p._id}
            _id={p._id}
            name={p.name}
            price={p.price}
        />),[pizza]);
}
