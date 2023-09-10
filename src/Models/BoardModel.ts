import CellValue from "./CellValue";
import BoardRow from "./RowModel";
import WinnerEnum from "./WinnerEnum";

class BoardModel {
    rows: [BoardRow, BoardRow, BoardRow];
    turn: CellValue;
    moveCount: number;
    winner: WinnerEnum

    public constructor() {
        // const board = new BoardModel();
        this.rows = [[CellValue.BLANK, CellValue.BLANK, CellValue.BLANK], [CellValue.BLANK, CellValue.BLANK, CellValue.BLANK], [CellValue.BLANK, CellValue.BLANK, CellValue.BLANK]];
        this.turn = CellValue.X;
        this.moveCount = 0;
        this.winner = WinnerEnum.BLANK;

        // return board;
    }
}

export default BoardModel;
