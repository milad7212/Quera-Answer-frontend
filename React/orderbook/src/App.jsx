import React from "react";
import OrderbookHeader from "./components/OrderbookHeader";
import OrderbookListItem from "./components/OrderbookListItem";
import { lastTotal, sortBuyData, sortSellData } from "./functions";
import { ORDER_TYPE } from "./types";

function App({ data }) {
  let sellData = sortSellData(data);
  let buyData = sortBuyData(data);
  console.log("buyData :>> ", buyData);
  let mostTotal =
    lastTotal(buyData) > lastTotal(sellData)
      ? lastTotal(buyData)
      : lastTotal(sellData);

  return (
    <div className="container">
      <div className="wrapper">
        <OrderbookHeader />
        <div className="table">
          <div className="sell-side side">
            {
              // Loop through sell orders and use OrderbookListItem component
              sellData.map((item, index) => (
                <>
                  <OrderbookListItem
                    index={index}
                    type={ORDER_TYPE.SELL}
                    price={item.price}
                    amount={item.quantity}
                    bgWidth={
                      +((item.total / mostTotal) * 100)
                        .toString()
                        .match(/^-?\d+(?:\.\d{0,2})?/)[0]
                    }
                    total={item.total}
                  />
                </>
              ))
            }
          </div>
          <div className="buy-side side">
            {
              // Loop through buy orders and use OrderbookListItem component
              buyData.map((item, index) => (
                <>
                  <OrderbookListItem
                    index={index}
                    type={ORDER_TYPE.BUY}
                    price={item.price}
                    amount={item.quantity}
                    bgWidth={
                      +((item.total / mostTotal) * 100)
                        .toString()
                        .match(/^-?\d+(?:\.\d{0,2})?/)[0]
                    }
                    total={item.total}
                  />
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
