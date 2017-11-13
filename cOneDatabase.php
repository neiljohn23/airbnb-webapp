<?php
  	
$row = 1;
$filePath = "listings.csv";
$columns = array();
$rows = array();

if (($handle = fopen($filePath, "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 0, ",", '"', '\\')) !== FALSE) {
        $num = count($data);

        if($row == 1) { //if it is the csv headers
        	for ($c=0; $c < $num; $c++) {
          	  echo ($c) . " : " .$data[$c] ."<br>";// . "<br />\n";
        	}
        } else {
          		$rows[$row - 2] = $data;
        }
        $row++;

        
    }
    //performAction($rows, "avg");


}
    //echo(count($listings));
    fclose($handle);
    sql_add($rows);

 ?>

 <?php

 function sql_add($listings) {



        $host = "localhost";
        $user = "root";
        $password = "";
        $connection = mysql_connect($host,$user,$password);

        if(!$connection){
            die('Connection Failed');
        } else{
            $dbconnect = @mysql_select_db('capitalOne234', $connection);

            if(!$dbconnect){
                die('Could not connect to Database');
            } else{

                for($i=0;$i<count($listings);$i++) { // < count()list

                    $current = $listings[$i];
                    $id = $current[0];
                    echo($id . " " . $i . "<br>");
                    $nbhd = $current[38];
                    $nbhd = str_replace("'", "", $nbhd);
                    $isSuper = $current[28];
                    $lat = $current[48];
                    $lon = $current[49];
                    $pType = $current[51];
                    $roomType = $current[52];
                    $numGuests = $current[53];
                    $price = substr($current[60], 1, strlen($current[60]) - 4);
                    $price = str_replace(",","",$price);
                    $avail30 = $current[71];
                    $numReviews = $current[76];
                    $avgReview = $current[79];
                    if($i == 7519) {
                        $instaBook = "f";
                        $cancelPolicy = "";
                    } else {
                       $instaBook = $current[89];
                       $cancelPolicy = $current[90];

                    }


                    $query  = "INSERT INTO `listingsData` (`id`, `nbhd`, `lat`, `lon`, `propType`, `isSuper`, `roomType`, `numGuests`, `price`, `available30`, `numReviews`, `avgReview`, `instantBook`, `cancellation`) VALUES ('$id', '$nbhd', '$lat', '$lon', '$pType', '$isSuper', '$roomType', '$numGuests', '$price', '$avail30', '$numReviews', '$avgReview', '$instaBook', '$cancelPolicy');";
                    mysql_query($query, $connection) or die(mysql_error());

                }


            }
        }

}

 ?>