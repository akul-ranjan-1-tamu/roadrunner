interface WidgetWrapperProps {
    id: string;
    title: string;
    onRemove?: (id:string) => void;
    children: React.ReactNode;
}

const WidgetWrapper: React.FC<WidgetWrapperProps> = ({id, title, onRemove, children}) => {
    return <>
        <div className="widget-wrapper-container">
            {children}
        </div>
    </>;
};

export default WidgetWrapper;