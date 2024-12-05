import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  return (
    <BarChart
         
      series={[
        { data: [35, 44, 24, 34] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      width={500}
      height={200}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 0, bottom: 30, left: 40, right: 10 }}
    />
  );
}