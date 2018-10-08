/**
 * (c) 2010-2017 Torstein Honsi
 *
 * License: www.highcharts.com/license
 *
 * Dark blue theme for Highcharts JS
 * @author Torstein Honsi
 */

import Highcharts from 'highcharts';

// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);

/* colors */
const High = Highcharts;

// Load the fonts
High.theme = {
  colors: [
    '#7cb5ec',
    '#f7a35c',
    '#90ee7e',
    '#7798BF',
    '#aaeeee',
    '#ff0066',
    '#eeaaee',
    '#55BF3B',
    '#DF5353',
    '#7798BF',
    '#aaeeee'
  ],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: 'Montserrat, sans-serif'
    }
  },
  title: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  },
  tooltip: {
    borderWidth: 0,
    backgroundColor: 'rgba(219,219,216,0.8)',
    shadow: false
  },
  legend: {
    itemStyle: {
      fontWeight: 'bold',
      fontSize: '13px',
      color: '#6d6d6d'
    }
  },
  xAxis: {
    gridLineWidth: .1,
    labels: {
      style: {
        fontSize: '12px',
        fontWeight: '700'
      }
    }
  },
  yAxis: {
    title: {
      style: {
        textTransform: 'uppercase'
      }
    },
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  },
  plotOptions: {
    candlestick: {
      lineColor: '#fff'
    }
  },

  pie: {

  }
  // General
  // background2: '#F0F0EA'

};

// Apply the theme
High.setOptions(High.theme);

/* export */
export default High;
