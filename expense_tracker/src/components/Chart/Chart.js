import ChartBars from './ChartBars';
import './Chart.css';

const Chart = props => {
  return (
    <div className="chart">
     {props.dataPoints.map((dataPoint =>
     <ChartBars
     key={dataPoint.label}
     value={dataPoint.value}
     maxValue={null}
     label={dataPoint.label}
    />
    ))}
   </div>
  );
};


export default Chart;
