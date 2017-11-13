function myResponse(arr, lat, lon) {
	var closestLatLon = 100;
	var closestI = 0;
	for(var i=0;i<arr.length;i++) {
		if(arr[i].available30 != 0 && arr[i].nbhd != "") {
			var difference = Math.abs(arr[i].lat - lat) + Math.abs(arr[i].lon - lon);
			if(difference < closestLatLon) {
				closestLatLon = difference;
				closestI = i;
			}
		}
	}
	var bookAWeek = ((30 - arr[closestI].available30)/4);
	var dollAWeek = arr[closestI].price*bookAWeek;
	var message = "Hello! Your property at latitude " + lat + " and longitude " + lon + " seems to be located in the " + arr[closestI].nbhd + " neighborhood. By analyzing nearby property, I have determined that at a price of " + arr[closestI].price + " dollars a night, booking " + bookAWeek + " nights a week, you could make " + dollAWeek + " dollars a week renting this property through AirBnb.";
	var element = document.getElementById("myIP");
	element.innerHTML = message;	
}

function estimate() {
	var validLat = false;
	var validLon = false;
	var latitude;
	var longitude;
	
	while(!validLat) {
		var latitude = prompt("Please enter a valid latitude", "32");
		if (latitude != null && latitude != "") {
   			validLat = true;
		}
	}
	while(!validLon) {
		var longitude = prompt("Please enter a valid longitude", "-122");
		if (longitude != null && longitude != "") {
   			validLon = true;
		}
	}
	
	var xmlhttp = new XMLHttpRequest();
	var url = "getData.php";

	xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    		var myArr = JSON.parse(this.responseText);
    		myResponse(myArr, latitude, longitude);
    	}
	};

	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}