

<?php

  ini_set('display_errors', '1');
  ini_set('display_startup_errors', '1');
  error_reporting(E_ALL);

  
  const FILENAME = 'exercise';
  
  echo '<div style="opacity: 0; height:0; width: 0;" id="content">';

  $lines = file(FILENAME);
  foreach ($lines as $l) {
    echo $l . "<br>";
  }

  echo "</div>";


?>