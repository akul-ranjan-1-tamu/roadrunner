import { WidgetProps } from "../types";
import WidgetWrapper from "../WidgetWrapper";

const EmptyWidget: React.FC<WidgetProps> = ({id}) => {
    return <WidgetWrapper>Empty Widget</WidgetWrapper>
}

export default EmptyWidget;