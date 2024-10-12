import { DEBUG } from "../../utils/debug";
import "../styles.css";

interface WidgetWrapperProps {
    children?: React.ReactNode;
}

const WidgetWrapper: React.FC<WidgetWrapperProps> = ({children}) => {
    return <>
        <div className={"widget-wrapper-container"}>
            {children}
        </div>
    </>;
};

export default WidgetWrapper;