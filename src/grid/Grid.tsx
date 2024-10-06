import { DEBUG } from "../utils/debug";
import "./styles.css";

interface GridProps {

};

const Grid: React.FC<GridProps> = (props) => {

    return <div className={"grid-container " + (DEBUG ? "debug" : "")}></div>
}

export default Grid;