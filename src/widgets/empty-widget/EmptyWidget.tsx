import { WidgetProps } from "../types";
import WidgetWrapper from "../WidgetWrapper";

const EmptyWidget: React.FC<WidgetProps> = ({id}) => {
    return <WidgetWrapper id={id} title="Empty Widget!">Empty Widget</WidgetWrapper>
}

export default EmptyWidget;