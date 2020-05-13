<?php

  header('Content-Type: application/json');

  require_once 'db.php';

  $dataNuovo = $graphs["fatturato_by_agent"];

  //mi ricavo i nomi di tutti gli agenti e tutte le vendite

  foreach ($dataNuovo["data"] as $agente => $fatturato) {
    $agentiNuovo[] = $agente;
    $fatturatiNuovo[] = $fatturato;
  }

  // popolo un oggetto in modo da renderlo utile nel json_encode
  $graphsNuovo = [
    'chartType' => $dataNuovo["type"],
    'agenti' => $agentiNuovo,
    'fatturati' => $fatturatiNuovo,
    'access' => $dataNuovo['access']
  ];

  echo json_encode($graphsNuovo);
 ?>
