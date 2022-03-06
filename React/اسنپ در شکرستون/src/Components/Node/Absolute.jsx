import "../../styles/absolute.scss";

const Absolute = ({ children, bottom, left, className, ...others }) => {
    const style = { left, bottom };
    return (
        <div
            className={"absolute  " + className ?? ""}
            style={style}
            {...others}>
            {children}
        </div>
    );
};
export default Absolute;
