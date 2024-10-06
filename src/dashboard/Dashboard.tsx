import { useState } from "react";
import NavBar from "./navbar/NavBar";
import "./styles.css";
import Grid from "../grid/Grid";
import Menu from "./menu/Menu";

interface DashboardProps {

}


const Dashboard: React.FC<DashboardProps> = (props) => {

    const [inMenu, setInMenu] = useState<boolean>(false);

    function changeMenuState() {
        setInMenu(!inMenu);
    };

    return (
        <div className={"dashboard-container " + (inMenu ? "in-menu" : "")}>
            <Menu />
            <div className="dashboard-contents" onClick={() => inMenu ? setInMenu(false) : null }>
                <Grid />
                <NavBar changeMenuState={changeMenuState} />
            </div>
        </div>
    );
};

export default Dashboard;