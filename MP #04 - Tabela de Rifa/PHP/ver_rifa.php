<?php
include 'config.php';

$conn = get_db_connection();

if (isset($_GET['codigo'])) {
    $codigo = $_GET['codigo'];

    // Buscar a rifa pelo código
    $stmt = $conn->prepare("SELECT id, nome, valor, num_elementos FROM rifas WHERE codigo = ?");
    $stmt->bind_param("s", $codigo);
    $stmt->execute();
    $stmt->bind_result($rifa_id, $nome, $valor, $num_elementos);
    $stmt->fetch();
    $stmt->close();

    if ($rifa_id) {
        echo "<h1>Rifa: $nome</h1>";
        echo "<p>Valor de Cada Rifa: R$ $valor</p>";
        echo "<p>Quantidade de Rifas: $num_elementos</p>";

        // Buscar os números da rifa
        $result = $conn->query("SELECT numero, vendido FROM numeros WHERE rifa_id = $rifa_id");

        echo "<form method='post' action='atualizar_rifa.php'>";
        echo "<table border='1'>";
        $colunasPorLinha = ($num_elementos <= 100) ? 10 : 25;
        $elementoAtual = 1;
        while ($elementoAtual <= $num_elementos) {
            echo "<tr>";
            for ($j = 0; $j < $colunasPorLinha; $j++) {
                if ($elementoAtual > $num_elementos) break;
                $row = $result->fetch_assoc();
                $numero = $row['numero'];
                $vendido = $row['vendido'];
                $checked = $vendido ? "checked" : "";
                echo "<td>";
                echo "<label>$numero</label>";
                echo "<input type='checkbox' name='numeros[]' value='$numero' $checked>";
                echo "</td>";
                $elementoAtual++;
            }
            echo "</tr>";
        }
        echo "</table>";
        echo "<input type='hidden' name='rifa_id' value='$rifa_id'>";
        echo "<input type='hidden' name='codigo' value='$codigo'>";
        echo "<button type='submit'>Atualizar</button>";
        echo "</form>";
    } else {
        echo "Rifa não encontrada.";
    }
} else {
    echo "Código da rifa não fornecido.";
}

$conn->close();
?>
