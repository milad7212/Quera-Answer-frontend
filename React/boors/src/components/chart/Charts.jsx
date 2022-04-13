import React from "react";

const heigthBar=(value)=>{
return (value/7900000)*300
}

function Chart({chartData}) {
  return <div className="chartContainer">
    {chartData.map(({value,dif},index)=>(
      <div key={index} style={{height:`${heigthBar(value)}px`}} className={`chart ${dif <0 ? 'chart_down':'chart_up'} `}></div>
    ))}
  </div>;
}

export default Chart;
