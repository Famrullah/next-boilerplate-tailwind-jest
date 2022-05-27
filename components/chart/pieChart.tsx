import React from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsReact from 'highcharts-react-official';
import { NoDataToDisplay } from 'react-highcharts-no-data-to-display';

if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts);
  NoDataToDisplay(Highcharts);
}

export const PieChart = () => {
  const chartOptions = {
    chart: {
      type: 'pie',
      style: {
        fontFamily: 'sans-serif',
      },
    },
    title: {
      text: 'Browser market shares. January, 2018',
    },
    subtitle: {
      text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
    },
    credits: false,
    tooltip: {
      formatter() {
        const { y, key } = this;
        return (
          `<div>
            <h1 style="font-size:11px">${key}</h1><br>
            <span style="font-size:11px">${y} %</span><br>
           </div>`
        );
      },
    },
    series: [
      {
        name: 'Browsers',
        colorByPoint: true,
        data: [
          {
            name: 'Chrome',
            y: 62.74,
            drilldown: 'Chrome',
          },
          {
            name: 'Firefox',
            y: 10.57,
            drilldown: 'Firefox',
          },
          {
            name: 'Internet Explorer',
            y: 7.23,
            drilldown: 'Internet Explorer',
          },
          {
            name: 'Safari',
            y: 5.58,
            drilldown: 'Safari',
          },
          {
            name: 'Edge',
            y: 4.02,
            drilldown: 'Edge',
          },
          {
            name: 'Opera',
            y: 1.92,
            drilldown: 'Opera',
          },
          {
            name: 'Other',
            y: 7.62,
            drilldown: null,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};
