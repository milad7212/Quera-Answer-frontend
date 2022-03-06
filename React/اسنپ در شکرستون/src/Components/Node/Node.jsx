import Absoulte from "./Absolute";
import calcPositionCSS from "../../utils/calcPositionCSS";

const Node = ({ lat, lon, bounds, id }) => {
    const positions = calcPositionCSS({ lat, lon }, bounds);
    return <Absoulte {...positions} className={`node n${id}`} />;
};

export default Node;
