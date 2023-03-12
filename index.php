

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <!-- TODO Design the UI .. but after everything is working correctly -->
  <div>
    <span id="part-1"></span>
    <span id="input-span">
      <input type="text" name="answer" id="input" min="1" required>
    </span>
    <span id="part-2"></span>
    <div>
      <button id="verify" name="verify">Vérifier</button>
      <button id="next" name="next">Suivant</button>
    </div>
  </div>
  <?php include("script.php"); ?>
  <script src="./script.js"></script>
</body>
</html>    

