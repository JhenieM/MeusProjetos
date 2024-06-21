<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./CSS/style.css">
    <title>Tabela</title>
    <!-- <script src="./PHP/script.js" defer></script> -->
</head>
<body>
    <div class="box-main">
        <div class="box-screen">
            <div class="screen-input">
                <form action="" method="POST">
                    <input type="number" placeholder="Quantidade de números" id="qualidade" name="quantidade" required/>
                    <button type="submit" class="button-g">Gerar Tabela</button>
                </form>
            </div>
            <div id="tabela">
                <?php
                    include './PHP/logic.php';
                ?>
            </div>
        </div>
    </div>
</body>
</html>

<!-- <table>: Inicia a tabela.
    <capitation>: Cria nome da tabela
    <thead>: Contém o cabeçalho da tabela.
    <tr>: Define uma linha na tabela.
    <th>: Define uma célula de cabeçalho, que por padrão é estilizada como negrito e centralizada.
    <tbody>: Contém o corpo da tabela.
    <tr>: Define uma linha no corpo da tabela.
    <td>: Define uma célula de dados dentro da tabela. -->