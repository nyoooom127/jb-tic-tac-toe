import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import BoardModel from "../Models/BoardModel";
import CellModel from "../Models/CellModel";
import BoardRow from "../Models/RowModel";
import CellValue from "../Models/CellValue";
import getWinner from "../Utils/BoardUtils";
import WinnerEnum from "../Models/WinnerEnum";

function setAll(currentState: BoardModel, action: PayloadAction<BoardModel>): BoardModel {
    const newState = { ...action.payload };

    return newState;
}

function updateCell(currentState: BoardModel, action: PayloadAction<CellModel>): BoardModel {
    const { row, col } = action.payload;
    if (currentState.rows[row][col] === CellValue.BLANK) {
        const newRows = [...currentState.rows];
        const newState = {
            rows: newRows,
            turn: currentState.turn,
            moveCount: currentState.moveCount,
            winner: currentState.winner
        };

        const newRow = [...newRows[row]] as BoardRow;
        newRow[col] = newState.turn;
        newRows[row] = newRow;
        newState.moveCount++;

        const winner = getWinner(newState.rows, row, col, newState.turn, newState.moveCount);

        if (winner !== WinnerEnum.BLANK) {
            newState.winner = winner
        }

        newState.turn = newState.turn === CellValue.X ? CellValue.O : CellValue.X;

        return newState as BoardModel;
    }
}

const boardSlice = createSlice({
    name: "board", // Slice name
    initialState: new BoardModel(),
    // ({
    //     rows: ([
    //         [CellValue.BLANK, CellValue.BLANK, CellValue.BLANK],
    //         [CellValue.BLANK, CellValue.BLANK, CellValue.BLANK],
    //         [CellValue.BLANK, CellValue.BLANK, CellValue.BLANK]
    //     ] as BoardRow[]),
    //     turn: CellValue.X
    // } as BoardModel),
    reducers: { setAll, updateCell }
});

// Export all actions (each reducer will create it's own action)
export const boardActions = boardSlice.actions;

// Export reducer
export const boardReducer = boardSlice.reducer;