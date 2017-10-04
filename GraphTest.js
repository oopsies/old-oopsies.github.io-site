Highcharts.chart('container', {

  title: {
    text: 'Altitude of Pi Balloon'
  },

  subtitle: {
    text: 'Source: Sense_Hat Data'
  },

  yAxis: {
    title: {
      text: 'Altitude (Meters)'
    }
  },

  xAxis: {
    title: {
      text: 'Time (Seconds)'
    }
  },
  
  series: [{
    data: [
      [0, 216],
      [6, 226],
    ]
  }]


});
