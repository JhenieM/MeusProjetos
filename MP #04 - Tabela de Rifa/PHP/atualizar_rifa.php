<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = get_db_connection();

    $rifa_id = intval($_POST['rifa_id']);
    $codigo = $_POST['codigo'];
    $numeros_vendidos = isset($_POST['numeros']) ? $_POST['numeros'] : [];

    // Marcar todos os números como não vendidos
    $conn->query("UPDATE numeros SET vendido = 0 WHERE rifa_id = $rifa_id");

    // Marcar os números selecionados como vendidos
    if (!empty($numeros_vendidos)) {
        $numeros_vendidos_str = implode(",", array_map('intval', $numeros_vendidos));
        $conn->query("UPDATE numeros SET vendido = 1 WHERE rifa_id = $rifa_id AND numero IN ($numeros_vendidos_str)");
    }

    $conn->close();

    echo "Rifa atualizada com sucesso.";
    echo "<br><a href='ver_rifa.php?codigo=" . $codigo . "'>Voltar à Rifa</a>";
}
?>
