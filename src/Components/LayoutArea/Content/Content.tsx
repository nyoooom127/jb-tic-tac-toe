import { useEffect, useState } from "react";
import Board from "../../BoardArea/Board/Board";
import "./Content.css";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import WinnerEnum from "../../../Models/WinnerEnum";

function Content(): JSX.Element {
    const [winner, setWinner] = useState<"x" | "o" | "tie">();

    const board = useSelector((appState: AppState) => appState.board);

    // useEffect(() => {
    //     setWinner(isWin())
    // }, [board]);

    function isWin() {

    }
    return (
        <div className="Content">
            {
                board.winner === WinnerEnum.X
                    ? <h1>!ניצחת את המחשב</h1>
                    : board.winner === WinnerEnum.O
                        ? <h1>!המחשב ניצח</h1>
                        : board.winner === WinnerEnum.TIE
                            ? <h1>תיקו</h1>
                            : <Board />
            }
        </div>
    );
}

export default Content;
