import { WidgetProps } from "../types";
import WidgetWrapper from "../WidgetWrapper";

const EmptyWidget: React.FC<WidgetProps> = ({id}) => {
    return <WidgetWrapper id={id} title="Empty Widget!">empty widget!</WidgetWrapper>
}

export default EmptyWidget;