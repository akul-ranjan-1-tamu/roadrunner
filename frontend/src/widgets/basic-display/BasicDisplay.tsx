import { useData } from "../../data-provider/DataProvider";
import { WidgetProps } from "../types";
import WidgetWrapper from "../utils/WidgetWrapper";

interface BasicDisplay extends WidgetProps {};

const BasicDisplay: React.FC<BasicDisplay> = () => {

    const {data} = useData();
    const value = data["speed"] ? data["speed"].value : null;

    return <WidgetWrapper>Speed: {value}</WidgetWrapper>
}

export default BasicDisplay;