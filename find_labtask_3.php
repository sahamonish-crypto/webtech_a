<?php

for ($i = 1; $i <= 20; $i++) {
    echo $i . " ";
    if ($i == 5) {
        break;
    }
}

echo "<br>";

$j = 1;
while ($j <= 20) {
    if ($j % 2 == 0) {
        echo $j . " ";
    }
    $j++;
}

echo "<br>";

$fruits = [
    "apple" => "red",
    "banana" => "yellow",
    "grape" => "purple",
    "orange" => "orange"
];

foreach ($fruits as $fruit => $color) {
    echo $fruit . " is " . $color . "<br>";
}

?>
