<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Simples validação (substitua pela conexão com o banco)
    if ($email === "admin@example.com" && $senha === "12345") {
        header("Location: definir_frangos.php");
        exit;
    } else {
        $erro = "E-mail ou senha inválidos.";
    }
}
?>
    <?php if (isset($erro)) echo "<p>$erro</p>"; ?>