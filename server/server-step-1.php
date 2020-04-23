<?php

    include __DIR__ . '/../data/database-step-1.php';
    header('Content-Type: application/json');
    echo json_encode($data);

 ?>
