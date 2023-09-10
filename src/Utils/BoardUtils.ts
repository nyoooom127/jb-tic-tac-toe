import CellValue from "../Models/CellValue";
import BoardRow from "../Models/RowModel";
import WinnerEnum from "../Models/WinnerEnum";

function cellValueToWinner(cellValue: CellValue): WinnerEnum {
    switch (cellValue) {
        case CellValue.X:
            return WinnerEnum.X;
        case CellValue.O:
            return WinnerEnum.O;
    }
}

function getWinner(rows: BoardRow[], row: number, col: number, turn: CellValue, moveCount: number, boardSize = 3) {
    for (let i = 0; i < boardSize; i++) {
        if (rows[row][i] !== turn)
            break;
        if (i == boardSize - 1) {
            return cellValueToWinner(turn);
        }
    }

    //check row
    for (let i = 0; i < boardSize; i++) {
        if (rows[i][col] !== turn)
            break;
        if (i == boardSize - 1) {
            return cellValueToWinner(turn);
        }
    }

    //check diag
    if (row == col) {
        //we're on a diagonal
        for (let i = 0; i < boardSize; i++) {
            if (rows[i][i] !== turn)
                break;
            if (i == boardSize - 1) {
                return cellValueToWinner(turn);
            }
        }
    }

    //check anti diag (thanks rampion)
    if (row + col == boardSize - 1) {
        for (let i = 0; i < boardSize; i++) {
            if (rows[i][(boardSize - 1) - i] !== turn)
                break;
            if (i == boardSize - 1) {
                return cellValueToWinner(turn);
            }
        }
    }

    //check draw
    if (moveCount == (Math.pow(boardSize, 2))) {
        return WinnerEnum.TIE;
    }

    return WinnerEnum.BLANK;
}

export default getWinner;