<?php

  header('Content-Type: application/json');

  require_once 'db.php';

  $dataNuovo = $graphs["team_efficiency"];

  //mi ricavo i nomi di tutti i team e tutte le vendite

  foreach ($dataNuovo["data"] as $team => $vendite) {
    $teamNuovo[] = $team;
    $venditeNuovo[] = $vendite;
  }

  // popolo un oggetto in modo da renderlo utile nel json_encode
  $graphsNuovo = [
    'chartType' => $dataNuovo["type"],
    'team' => $teamNuovo,
    'vendite' => $venditeNuovo,
    'access' => $dataNuovo['access']
  ];

  echo json_encode($graphsNuovo);
 ?>
