$(document).ready(init);

function init() {
  lineChart();
}

function lineChart() {
  $.ajax({
    url: "api.php",
    method: "GET",
    success: function(data,stato) {
      var ctx = $("#line");
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          // labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
          labels: moment.months(),
          datasets: [{
            label: "Vendite al mese",
            data: data,
            backgroundColor: [
              // 'rgba(255, 99, 132, 0.2)',
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              // 'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      })
    },
    error: function(richiesta,stato,errore){
      alert("Qualcosa è andato storto");
      console.log("Richiesta: ",richiesta);
      console.log("Stato: ",stato);
      console.error("Errore: ",errore);
    }
  })
}
