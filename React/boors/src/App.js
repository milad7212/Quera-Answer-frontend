import React, { useEffect, useState } from "react";
import Chart from "./components/chart/Charts";
import StockCard from "./components/stockCard/StockCard";
import "./index.css";
const callApi = async () => {
  let ans = await fetch("http://localhost:3001/stock");
  let dataFinal = await ans.text();
  return JSON.parse(dataFinal);
};
const precDiff = (one, two) => {
  let dif = two - one;
  let divid = dif / Math.abs(one);

  return divid;
};

function App({ intervalTime }) {
  
  const [dataChart, setDataChart] = useState([]);
  const [name, setName] = useState("");
  const [chartData, setChartData] = useState([]);
  let [num, setNum] = useState(0);
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    async function fetchData() {
      let dataPrice = await callApi();
      setName(dataPrice.name);
      
      setDataChart([...dataChart, dataPrice.value]);
    }
    fetchData();
    setTimeout(() => {
      setNum(num + 1);
    }, intervalTime);
  }, [num]);

  useEffect(() => {
    let helpArray=[...dataChart]
    if (dataChart.length > 1) {
      let precTwoValue = precDiff(
        dataChart[dataChart.length - 2],
        dataChart[dataChart.length - 1]
      );

      setDiff(precTwoValue);
      if(dataChart.length>49){
        
      }
      setChartData([
        ...helpArray,
        { value: dataChart[dataChart.length - 1], dif: precTwoValue },
      ]);
    }
  }, [dataChart]);

  return (
    <div className="container">
      <StockCard
        name={name}
        diff={Math.round(diff * 100) / 100}
        lastPrice={dataChart[dataChart.length - 1]}
        ind={dataChart.length}
      />
      <Chart chartData={chartData} />
    </div>
  );
}

export default App;
