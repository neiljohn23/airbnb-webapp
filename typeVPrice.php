<?php
    $host='localhost';
    $user='getData35';
    $password='ib2bXq';

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
            $query = 'SELECT propType, price FROM `listingsData`';
            $resultset = mysql_query($query, $connection);
            
            $records= array();
            
            while($r = mysql_fetch_assoc($resultset)){
                $records[] = $r;
            }
            
            //echo json_encode($records);
            returnData($records);
        }
    }

    function sumOf($array) {
        $sum = 0;
        for($i=0;$i<count($array);$i++) {
            $sum = $sum + $array[$i];
        }
        return $sum;
    }

    function returnData($data) {
        $typeVPrice = array();
        $typeKeys = array();
        $returnArray = array();
        foreach ($data as $row) {
            $type = $row['propType'];
            $price = $row['price'];
            if(isset($typeVPrice[$type])) {
                array_push($typeVPrice[$type], $price);
            } else {
                $typeVPrice[$type] = array();
                array_push($typeVPrice[$type], $price);
                array_push($typeKeys, $type);
            }
        }

        foreach($typeKeys as $listType) {
            $subArr = $typeVPrice[$listType];
            //$typeVPrice[$listType] = sumOf($subArr)/count($subArr);
            $returnArray[$listType] = sumOf($subArr)/count($subArr);
        }
        echo json_encode($returnArray);

    }

?>