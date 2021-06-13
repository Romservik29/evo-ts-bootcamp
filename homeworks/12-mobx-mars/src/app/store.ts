import { Controls } from "./controls";
import { Mars } from "./mars";
import { createContext } from "./storeUtils";

export const { StoreProvider, useStore } = createContext({
    Mars: new Mars(),
    Controls: new Controls()
});