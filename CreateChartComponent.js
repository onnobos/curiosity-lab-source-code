// function name must be chartExecutor
// More info about Google Charts
// https://developers.google.com/chart/interactive/docs/gallery/barchart

function chartExecutor() {

      // any Google Charts libraries can be used
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        const data = google.visualization.arrayToDataTable("$chartData");

        const options = {
          chartArea: { width: '80%'},
          height: 320,
          legend: { position: 'none' },
          backgroundColor: '#132056',
          animation:{
            duration: 250,
            easing: 'out',
            startup: true
          },
          vAxes: [
            {
              gridlines : { color: '#222d62'},
              minorGridlines:{ color: '#222d62'},
              format:'short',
              textStyle: { color: '#bbc0e4', bold: true}
            }
          ],
          hAxes: [
            {
              gridlines : { color: '#222d62'},
              minorGridlines:{ color: '#222d62'},
              textStyle: { color: '#bbc0e4', bold: true}
            }
          ],
          bar: { groupWidth: "20%" }
          
        };

        // element ID must be chart_data_div
        const chart = new google.visualization.ColumnChart(document.getElementById('chart_data_div'));

        chart.draw(data, options);



      }
}

// The chart component consumes the chart function as a string
const funcAsString = chartExecutor.toString();

return { funcAsString }
