import { WidgetProps } from "../types";
import WidgetWrapper from "../utils/WidgetWrapper";

interface BasicDisplay extends WidgetProps {};

const BasicDisplay: React.FC<BasicDisplay> = () => {

    return <WidgetWrapper>Basic Display</WidgetWrapper>
}

export default BasicDisplay;