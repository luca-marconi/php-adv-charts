<?php

    include __DIR__ . '/../data/database-step-3.php';
    header('Content-Type: application/json');
    $typeGraph = $graphs['team_efficiency']['type'];
    $accessGraph = $graphs['team_efficiency']['access'];

    foreach ($graphs['team_efficiency'] as $keyDiTeamEfficieny => $valueKeyDiTeamEfficieny) {
        foreach ($valueKeyDiTeamEfficieny as $key => $value) {
            $labelGraph[] = $key;
            $dataGraph[] = $value;
        }
    };

    $grafico3 = [$typeGraph, $labelGraph, $dataGraph, $accessGraph];
    echo json_encode($grafico3);



 ?>
