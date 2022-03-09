import React from "react";
import OrderbookHeader from "./components/OrderbookHeader";

function App({ data }) {
  return (
    <div className="container">
      <div className="wrapper">
        <OrderbookHeader />
        <div className="table">
          <div className="sell-side side">
            {
              // Loop through sell orders and use OrderbookListItem component
            }
          </div>
          <div className="buy-side side">
            {
              // Loop through buy orders and use OrderbookListItem component
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
