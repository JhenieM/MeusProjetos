<?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        $numElementos = intval($_POST['quantidade']);
        $colunasPorLinha = 0;

        if($numElementos > 0){
            if($numElementos <= 100 || $numElementos < 200){
                $colunasPorLinha = 10;
            }elseif($numElementos >= 200){
                $colunasPorLinha = 20;
            }

            $numLinhas = ceil($numElementos / $colunasPorLinha);
            echo "<table>";
            $elementoAtual = 1;

            for ($i = 0; $i < $numLinhas; $i++) {
            echo("<tr>");

                for ($j = 0; $j < $colunasPorLinha; $j++) {
                if ($elementoAtual > $numElementos) break;
        
                echo("<td>". $elementoAtual . "</td>");

                $elementoAtual++;
                }
                echo("</tr>");
            }
            echo("</table>");
        }else {
            echo("<script>alert('Por favor, digite um número inteiro maior que zero.');</script>");
        }
    }
?>