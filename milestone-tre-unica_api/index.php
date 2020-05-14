<!DOCTYPE html>
<html lang="it" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Advanced Dashboard Charts</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>

    <div class="guest-employee">
      <div class="grafico-guest">
        <canvas id="guest"></canvas>
      </div>

      <div class="grafico-employee">
        <canvas id="employee"></canvas>
      </div>
    </div>

    <div class="terzo-grafico-clevel">
      <div class="grafico-clevel">
        <canvas id="clevel"></canvas>
      </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js@2/dist/Chart.min.js"></script>
    <!-- <script src="https://momentjs.com/downloads/moment-with-locales.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.25.3/locale/it.min.js"> </script>
    <script src="main.js" charset="utf-8"></script>
  </body>
</html>
