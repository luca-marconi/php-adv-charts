<?php

    include __DIR__ . '/../data/database-step-2.php';
    header('Content-Type: application/json');
    echo json_encode($graphs);

 ?>
