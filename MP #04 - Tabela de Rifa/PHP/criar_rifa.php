<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $conn = get_db_connection();

    $nome = $_POST['nome'];
    $valor = $_POST['valor'];
    $num_elementos = intval($_POST['quantidade']);

    // codigo de la rifa
    $codigo = substr(md5(uniqid(rand(), true)), 0, 10);

    // inserimos la rifa en el banco de datos
    $stmt = $conn->prepare("INSERT INTO rifas (codigo, nome, valor, num_elementos) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssdi", $codigo, $nome, $valor, $num_elementos);
    $stmt->execute();

    $rifa_id = $stmt->insert_id;

    // inserimos los numeros en el banco de datos
    $stmt = $conn->prepare("INSERT INTO numeros (rifa_id, numero) VALUES (?, ?)");
    for ($i = 1; $i <= $num_elementos; $i++) {
        $stmt->bind_param("ii", $rifa_id, $i);
        $stmt->execute();
    }

    $stmt->close();
    $conn->close();

    echo "Rifa criada com sucesso! Código: $codigo";
    echo "<br><a href='ver_rifa.php?codigo=$codigo'>Ver Rifa</a>";
}
?>
