import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MyChart = () => {
  const data = {
    labels: ['2006', '2007', '2008', '2009', '2010','2011', '2012', '2013', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2023', '2023'],
    datasets: [
      {
        data: [
          8051.649902,
8036,
8093,
7866.549805,
7841.549805,

          7769.200195,
7798.899902,
7694.450195,
7421.799805,

          7507.200195,
          7503.049805,
          7492.649902,
          7471.899902,
          7449.100098,
          7411.5,
          7562.049805,
          7495.600098,
          7459.950195,
          7386.700195],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      }
    ]
  };

  const options = {
    responsive: false, // This line makes the chart not responsive
    maintainAspectRatio: true, // This line ensures the chart does not maintain aspect ratio
    width: 1200, // Custom width
    height: 900, // Custom height
  };

  return (
    <div>
      <h2>Line Chart Example</h2>
      <Line data={data} options={options}/>
    </div>
  );
};

export default MyChart;