import React from "react";

function StockCard({ name, ind, diff, lastPrice }) {
  return (
    <div className="stockContainer">
      <div className="header">
        <div
          id="arrow"
          data-testid="arrow-element"
          className={diff < 0 ? "down" : "up "}
        />
        <div className="title" data-testid="title-element">
          {name}
        </div>
      </div>
      <div className="info">
        <div
          id="percentage"
          data-testid="percentage-element"
          className={diff < 0 ? "percentage_down" : "percentage_up "}
        >
          {ind == 1 && "..."}
          {ind > 1 && (
            <>
              {diff > 0 && "+"}
              {diff}٪
            </>
          )}
        </div>
        <div className="price" data-testid="price-element">
          {lastPrice}
        </div>
      </div>
    </div>
  );
}
export default StockCard;
