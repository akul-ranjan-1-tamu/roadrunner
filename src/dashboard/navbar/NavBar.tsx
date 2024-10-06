import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSave, faTrash, faBucket } from '@fortawesome/free-solid-svg-icons';
import "./styles.css";

interface NavBarProps {
    changeMenuState: () => void;
};

const NavBar: React.FC<NavBarProps> = (props) => {
    const {changeMenuState} = props;

    return <div className="navbar-container">
        <FontAwesomeIcon icon={faPlus} onClick={changeMenuState} />
        <FontAwesomeIcon icon={faSave} />
        <FontAwesomeIcon icon={faTrash} />
        <FontAwesomeIcon icon={faBucket} />
    </div>
}

export default NavBar;