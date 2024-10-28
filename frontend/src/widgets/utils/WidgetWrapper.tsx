import { DEBUG } from "../../utils/debug";
import "../styles.css";
import { FormProps, WidgetConfig } from "../types";

interface WidgetWrapperProps<T extends WidgetConfig> {
    selected: boolean;
    config: T;
    setConfig: React.Dispatch<React.SetStateAction<T>>;
    Form: React.FC<FormProps>;
    children?: React.ReactNode;
}

const WidgetWrapper = <ConfigType extends WidgetConfig>({
    selected,
    config,
    setConfig,
    Form,
    children
}: WidgetWrapperProps<ConfigType>) => {
    return (
        <div className={"widget-wrapper-container"}>
            {selected && (
                <div>
                    <button onClick={() => {  }}>edit!</button>
                </div>
            )}
            {children}
        </div>
    );
};

export default WidgetWrapper;
