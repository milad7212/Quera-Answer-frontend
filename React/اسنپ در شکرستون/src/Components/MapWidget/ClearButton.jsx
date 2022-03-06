import "../../styles/btn.scss";

const ClearButton = ({ onClick }) => {
    return <button onClick={onClick} className="btn">🗑️</button>;
};

export default ClearButton;
