import { useEffect, useState } from "react";
import oSource from '../../../Assets/Images/o.png';
import xSource from '../../../Assets/Images/x.png';
import CellValue from "../../../Models/CellValue";
import "./Cell.css";

interface CellProps {
    value: CellValue;
    row: number;
    col: number;
    updateCell: (row: number, col: number) => void
}

function Cell(props: CellProps): JSX.Element {
    function getImage(value: CellValue) {
        switch (value) {
            case CellValue.X:
                return xSource;
            case CellValue.O:
                return oSource;
            case CellValue.BLANK:
            default:
                return undefined;
        }
    }

    const [image, setImage] = useState<string | undefined>(getImage(props.value));

    useEffect(() => {
        setImage(getImage(props.value));
    }, [props.value]);

    function handleClick() {
        if (props.value === CellValue.BLANK) {
            props.updateCell(props.row, props.col);
        }
    }

    return (
        <div className="Cell" onClick={handleClick} >
            <img src={image} />
        </div>
    );
}

export default Cell;
