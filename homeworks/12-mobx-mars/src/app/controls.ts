
import { makeAutoObservable } from "mobx";
import { AnyRover, Routes, Rover } from "./types";

type Rovers = [Rover.Curiosity, Rover.Opportunity, Rover.Perseverance, Rover.Spirit];

export class Controls {
    currentSol = 1;
    isFetching = false;
    route: Routes;
    currentRover: AnyRover;
    rovers: Rovers = [Rover.Curiosity, Rover.Opportunity, Rover.Perseverance, Rover.Spirit];
    constructor() {
        this.route = "gallery";
        this.currentRover = "Curiosity";
        makeAutoObservable(this);
    }
    setCurrentSol(sol: number): void {
        this.currentSol = sol
    };
    setRoute(route: Routes): void {
        this.route = route;
    }
    setRover(rover: AnyRover): void {
        this.currentRover = rover
    }
    setIsFetching(status: boolean) {
        this.isFetching = status
    }
}
