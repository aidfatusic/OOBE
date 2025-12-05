import ReactApexChart from "react-apexcharts";
import { type ApexOptions } from "apexcharts";
import { Card, Row } from "react-bootstrap";
import "./PropertyChart.scss";
import { FormattedMessage } from "react-intl";

const someData = [
  { x: 1, y: 30 },
  { x: 2.2, y: 25 },
  { x: 3.4, y: 38 },
  { x: 4.6, y: 28 },
  { x: 5, y: 22 },
  { x: 6.5, y: 37 },
  { x: 7.7, y: 21 },
  { x: 8.9, y: 32 },
  { x: 9.1, y: 40 },
  { x: 10.4, y: 25 },
  { x: 11.6, y: 33 },
  { x: 12.2, y: 31 },
  { x: 13.3, y: 29 },
  { x: 14.5, y: 35 },
  { x: 15.7, y: 27 },
  { x: 16.8, y: 39 },
  { x: 17.9, y: 23 },
  { x: 18, y: 26 },
  { x: 19.2, y: 34 },
  { x: 20.4, y: 30 },
  { x: 21.5, y: 28 },
  { x: 22.7, y: 36 },
  { x: 23.9, y: 24 },
];

type PropertyChartProps = {
  chartName: string;
  chartColor?: "blue" | "orange" | "green";
  data: string;
};

const PropertyChart = ({ chartName, chartColor, data }: PropertyChartProps) => {
  const baseChartOptions: ApexOptions = {
    chart: {
      toolbar: { show: false },
      animations: { enabled: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "smooth",
      width: 0.5,
    },
    grid: {
      show: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 40,
    },
    tooltip: { enabled: false },
    legend: { show: false },
    dataLabels: { enabled: false },
    colors:
      chartColor === "blue"
        ? ["#00C2FF"]
        : chartColor === "orange"
          ? ["#FF6B00"]
          : ["#0FFF00"],
  };

  return (
    <Card className="production-graph-card rounded-5 border-secondary border-2">
      <Card.Body className="d-flex flex-column">
        <Row className="flex-grow-1 justify-content-center align-items-center">
          <Card.Title className="fw-bold fs-5 mb-1 ms-1 justify-content-center text-center">
            <FormattedMessage
              id="dataStreamChart.chartName"
              defaultMessage={chartName}
            />
          </Card.Title>
          <Card.Text className="fw-semiBold fs-2 mb-4 ms-1 justify-content-center text-center">
            <FormattedMessage id="dataStreamChart.data" defaultMessage={data} />
          </Card.Text>
        </Row>

        <div className="usage-section d-flex flex-column">
          <ReactApexChart
            options={{ ...baseChartOptions }}
            series={[{ name: "Data", data: someData }]}
            type="area"
            height={142}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default PropertyChart;
