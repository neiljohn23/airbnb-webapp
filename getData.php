<?php
    $host='localhost';
    $user='getData35';
    $password='ib2bXq';
    
    $lat = $_GET['lat'];
    $lon = $_GET['lon'];
    $isEst = $_GET['est'];
    
    $connection = mysql_connect($host,$user,$password) or die('cannot connect : '. mysql_error());
    
    if(!$connection){
        die('Connection Failed');
    }
    else{
        $dbconnect = @mysql_select_db('capitalOne2345', $connection);
        
        if(!$dbconnect){
            die('Could not connect to Database');
        }
        else{
        
            $query = 'SELECT nbhd, lat, lon, price, available30, avgReview FROM `listingsData`';
           
           
            $resultset = mysql_query($query, $connection);
            
            $records= array();
            
            while($r = mysql_fetch_assoc($resultset)){
                $records[] = $r;
            }
            
            echo json_encode($records);

        }
    }

?>