$(document).ready(init);

// RICORDA: location.search => Restituisce la parte querystring di un URL
function init() {
  if (location.search==="?level=guest"){
    guestChart();
  }
  if (location.search==="?level=employee"){
    guestChart();
    employeeChart();
  }
  if (location.search==="?level=clevel"){
    guestChart();
    employeeChart();
    clevelChart();
  }
}


function guestChart() {
  $.ajax({
    url: "api.php"+ location.search,
    method: "GET",
    success: function(data,stato) {
      var ctx = $("#guest");
      var myChart = new Chart(ctx, {
        type: data[0].type,
        data: {
          // labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
          labels: moment.months(),      // ricorda link in html
          datasets: [{
            label: "Vendite al mese",
            data: data[0].data,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
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


function employeeChart() {
  $.ajax({
    url: "api.php"+ location.search,
    method: "GET",
    success: function(data,stato) {
      var ctx = $("#employee");
      var myChart = new Chart(ctx, {
        type: data[1].type,
        data: {
          labels: data[1].agenti,
          datasets: [{
            label: 'Fatturato Agenti',
            data: data[1].fatturati,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
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
      });
    },
    error: function(richiesta,stato,errore){
      alert("Qualcosa è andato storto");
      console.log("Richiesta: ",richiesta);
      console.log("Stato: ",stato);
      console.error("Errore: ",errore);
    }
  })
}


function clevelChart() {
  $.ajax({
    url: "api.php"+ location.search,
    method: "GET",
    success: function(data,stato) {
      var ctx = $('#clevel');
      var myChart = new Chart(ctx, {
        type: data[2].type,
        data: {
          labels: moment.months(),      // ricorda link in html
          datasets: [{
            label: 'Team1',
            data: data[2].data["Team1"],
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            },
            {
            label: 'Team2',
            data: data[2].data["Team2"],
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
            },
            {
            label: 'Team3',
            data: data[2].data["Team3"],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
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
      });
    },
    error: function(richiesta,stato,errore){
      alert("Qualcosa è andato storto");
      console.log("Richiesta: ",richiesta);
      console.log("Stato: ",stato);
      console.error("Errore: ",errore);
    }
  })
}
