import { useState } from "react";
import Cell from "../Cell/Cell";
import "./Board.css";
import CellModel from "../../../Models/CellModel";
import boardService from "../../../Services/BoardService";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";

function Board(): JSX.Element {
    const board = useSelector((appState: AppState) => appState.board);

    const [values, setValues] = useState<("" | "x" | "o")[][]>([["", "", ""], ["", "", ""], ["", "", ""]]);

    function updateCell(row: number, col: number): void {
        boardService.updateCell(row, col);
    }

    return (
        <div className="Board">
            <table>
                <tbody>
                    {[...board.rows].map((row, rIndex) => (
                        <tr key={`row${rIndex}`}>
                            {
                                row.map((cell, cIndex) => (
                                    <td key={`row${rIndex}cell${cIndex}`}>
                                        <Cell value={cell} row={rIndex} col={cIndex} updateCell={updateCell}/>
                                    </td>
                                ))
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Board;
