import dynamic from 'next/dynamic';

// Components
import getOptions from './components/getOptions';
import getSeries from './components/getSeries';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const LineChart = (props) => {
  let { dates, data, type } = props;

  return (
    <>
      <ReactApexChart
        height={300}
        options={getOptions(dates)}
        series={getSeries(data)}
        type={type}
      />
    </>
  );
};

export default LineChart;
