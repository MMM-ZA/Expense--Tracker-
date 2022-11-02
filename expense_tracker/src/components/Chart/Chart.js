import ChartBars from './ChartBars';
import './Chart.css';

const Chart = props => {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxValue = Math.max(...dataPointsValues);


  return (
    <div className="chart">
     {props.dataPoints.map((dataPoint =>
     <ChartBars
     key={dataPoint.label}
     value={dataPoint.value}
     maxValue={maxValue}
     label={dataPoint.label}
    />
    ))}
   </div>
  );
};


export default Chart;
