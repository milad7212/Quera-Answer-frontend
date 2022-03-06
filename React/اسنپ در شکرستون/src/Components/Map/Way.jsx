import LineTo from "react-lineto";

const Way = ({ from, to, isPath }) => {
    const ft = [from, to].sort().join("-");
    const way = isPath ? "way route" : "way";
    return (
        <LineTo
            from={`n${from}`}
            to={`n${to}`}
            within="map"
            borderColor={isPath ? "red" : "blue"}
            zIndex={1}
            borderWidth={isPath ? 2.5 : 1}
            className={`${way} ${ft}`}
        />
    );
};

export default Way;
