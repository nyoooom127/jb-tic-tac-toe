import { configureStore } from '@reduxjs/toolkit';
import BoardModel from "../Models/BoardModel";
import { boardReducer } from "./BoardSlice";

export type AppState = {
    board: BoardModel;
};

export const appStore = configureStore<AppState>({
    reducer: {
        board: boardReducer
    }
})