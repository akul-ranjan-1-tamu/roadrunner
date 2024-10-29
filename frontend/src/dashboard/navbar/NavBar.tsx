import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash, faBucket } from '@fortawesome/free-solid-svg-icons';
import "./styles.css";
import "../../App.css";
import { DEBUG } from '../../utils/debug';
import { useWidgets } from '../../widgets/hooks/WidgetContext';

interface NavBarProps {
    changeMenuState: () => void;
};

const NavBar: React.FC<NavBarProps> = ({changeMenuState}) => {

    const {setWidgets} = useWidgets();

    return <div className={"navbar-container " + (DEBUG ? "debug" : "")}>
        <FontAwesomeIcon icon={faPlus} onClick={changeMenuState} />
        <FontAwesomeIcon icon={faTrash} onClick={() => {setWidgets([])}} />
    </div>
}

export default NavBar;