import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash, faBucket } from '@fortawesome/free-solid-svg-icons';
import "./styles.css";
import "../../App.css";
import { DEBUG } from '../../utils/debug';

interface NavBarProps {
    changeMenuState: () => void;
};

const NavBar: React.FC<NavBarProps> = (props) => {
    const {changeMenuState} = props;

    return <div className={"navbar-container " + (DEBUG ? "debug" : "")}>
        <FontAwesomeIcon icon={faPlus} onClick={changeMenuState} />
    </div>
}

export default NavBar;