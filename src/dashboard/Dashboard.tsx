import { useState } from "react";
import NavBar from "./NavBar";
import "./styles.css";
import Grid from "../grid/Grid";

interface DashboardProps {

}


const Dashboard: React.FC<DashboardProps> = (props) => {

    const [inMenu, setInMenu] = useState<boolean>(false);

    return (
        <div className={"dashboard-container " + (inMenu ? "in-menu" : "")}>
            <div className="dashboard-contents">
                <Grid />
                <NavBar setInMenu={setInMenu}/>`
            </div>
        </div>
    );
}

export default Dashboard;