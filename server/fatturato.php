<?php

    include __DIR__ . '/../data/database-step-3.php';
    header('Content-Type: application/json');
    $typeGraph = $graphs['fatturato']['type'];
    $accessGraph = $graphs['fatturato']['access'];

    foreach ($graphs['fatturato'] as $keyDiFatturato => $valueKeyDiFatturato) {
        foreach ($valueKeyDiFatturato as $key => $value) {
            $dataGraph[] = $value;
        }
    };

    $grafico1 = [$typeGraph, $dataGraph, $accessGraph];
    echo json_encode($grafico1);

 ?>
