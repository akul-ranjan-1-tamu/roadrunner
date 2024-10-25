import { useData } from "../../data-provider/DataProvider";
import { WidgetProps } from "../types";
import WidgetWrapper from "../utils/WidgetWrapper";

interface BasicDisplay extends WidgetProps {};

const BasicDisplay: React.FC<BasicDisplay> = () => {

    const {data} = useData();

    console.log(data);

    return <WidgetWrapper>Speed</WidgetWrapper>
}

export default BasicDisplay;