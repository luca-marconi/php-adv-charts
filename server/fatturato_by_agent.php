<?php

    include __DIR__ . '/../data/database-step-3.php';
    header('Content-Type: application/json');
    $typeGraph = $graphs['fatturato_by_agent']['type'];
    $accessGraph = $graphs['fatturato_by_agent']['access'];

    foreach ($graphs['fatturato_by_agent'] as $keyDiFatturatoByAgent => $valueKeyDiFatturatoByAgent) {
        foreach ($valueKeyDiFatturatoByAgent as $key => $value) {
            $labelGraph[] = $key;
            $dataGraph[] = $value;
        }
    };

    $grafico2 = [$typeGraph, $labelGraph, $dataGraph, $accessGraph];
    echo json_encode($grafico2);






 ?>
