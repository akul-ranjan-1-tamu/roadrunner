import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash, faBucket } from '@fortawesome/free-solid-svg-icons';
import "./styles.css";
import "../../App.css";
import { DEBUG } from '../../utils/debug';

interface NavBarProps {
    changeMenuState: () => void;
    emptyLayout: () => void;
};

const NavBar: React.FC<NavBarProps> = ({changeMenuState, emptyLayout}) => {

    return <div className={"navbar-container " + (DEBUG ? "debug" : "")}>
        <FontAwesomeIcon icon={faPlus} onClick={changeMenuState} />
        <FontAwesomeIcon icon={faTrash} onClick={emptyLayout} />
    </div>
}

export default NavBar;