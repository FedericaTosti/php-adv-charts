<?php

  header('Content-Type: application/json');

  require_once 'db.php';



  // estrapolo e salvo il primo oggetto del db -> per il PRIMO GRAFICO
  $graphGuest = $graphs["fatturato"];




  // estrapolo e salvo il secondo oggetto del db -> per il SECONDO GRAFICO
  $graphEmployee = $graphs['fatturato_by_agent'];

  // estrapolo da "data" anche i nomi di tutti gli agenti e tutti i fatturati
  foreach ($graphEmployee["data"] as $agente => $fatturato) {
    $agenti[] = $agente;
    $fatturati[] = $fatturato;
  }

  // aggiungo gli array creati nell' oggetto di prima
  $graphEmployee["agenti"] = $agenti;
  $graphEmployee["fatturati"] = $fatturati;




  // estrapolo e salvo il terzo oggetto del db -> per il TERZO GRAFICO
  $graphClevel = $graphs['team_efficiency'];









  // creo oggetto che contiene i tre creati
  $allGraphs = [
    "grafico1" => $graphGuest,
    "grafico2" => $graphEmployee,
    "grafico3" => $graphClevel
  ];

  // salvo valore preso in ingresso, inserito dall'utente
  $accessUtente = $_GET["level"];

  //filtro i grafici in uscita a seconda del valore di accessUtente
  if($accessUtente === 'clevel'){
    $newGraphs[] = $allGraphs['grafico1'];
    $newGraphs[] = $allGraphs['grafico2'];
    $newGraphs[] = $allGraphs['grafico3'];
  }
  if($accessUtente === 'employee'){
    $newGraphs[] = $allGraphs['grafico1'];
    $newGraphs[] = $allGraphs['grafico2'];
  }
  if($accessUtente === 'guest' ){
    $newGraphs[] = $allGraphs['grafico1'];
  }

  echo json_encode($newGraphs);

?>
