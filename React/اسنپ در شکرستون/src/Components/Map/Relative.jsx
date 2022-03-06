import PropTypes from "prop-types";
import "../../styles/relative.scss"

const Relative = ({ children, className, _ref, ...others }) => {
    const fullClassName = "relative  " + className ?? "";
    
    return (
        <div className={fullClassName} ref={_ref} {...others}>
            {children}
        </div>
    );
};

Relative.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Relative;
