import CellModel from "../Models/CellModel";
import { appStore } from "../Redux/AppState";
import { boardActions } from "../Redux/BoardSlice";

class BoardService {
    public updateCell(row: number, col: number): void {
        appStore.dispatch(boardActions.updateCell({row, col}));
    }
}

const boardService = new BoardService();

export default boardService;