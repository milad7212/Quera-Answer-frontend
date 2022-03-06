import "../styles/marker.scss";

const Marker = ({ x: left, y: top }) => {
    return (
        <span className="marker" style={{ left, top }}>
            📍
        </span>
    );
};

export default Marker;
