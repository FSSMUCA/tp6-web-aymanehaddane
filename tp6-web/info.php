<?php
$etablissement = "FSSM";
$module = "Pentesting";
$annee = 2025;
//declaration des nombres
$a = 7;
$b = 4;
//Résultat d’addition et multiplication
$addition = $a + $b;
$produit = $a * $b;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>test php</title>
</head>

<body>
    <h1>Exemple d'affichage PHP</h1>

    <p>Établissement : <?php echo $etablissement; ?></p> 
    <p>Module : <?php echo $module; ?></p>
    <p>Année : <?php echo $annee; ?></p>

    <h2>Variables Numériques</h2>
    <p>A = <?php echo $a; ?></p>
    <p>B = <?php echo $b; ?></p>

    <h2>Résultats des opérations</h2>
    <p>Addition : a + b = <?php echo $addition; ?></p>
    <p>Multiplication : a * b = <?php echo $produit; ?></p>


</body>
</html>
