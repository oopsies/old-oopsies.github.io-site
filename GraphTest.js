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

  var X = 0;
  var Y = 0;
  
  series: [{
    data: [
      [0, 216],
      [6, 226],
      [12, 226],
      [18, 224],
      [24, 223],
      [30, 221],
      [36, 231],
      [42, 230],
      [48, 226],
      [54, 223],
    ]
  }]


});
