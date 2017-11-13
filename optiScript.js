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
	var nbhood = arr[closestI].nbhd;
	var mostAWeek = 0;
	var bookPerWeek;
	for(var i=0;i<arr.length;i++) {
		if(arr[i].available30 != 0 && arr[i].nbhd != "" && arr[i].price < 1000) {
			var bookAWeek = (30 - arr[i].available30)/4;
			var total = bookAWeek*arr[i].price;
			if(total > mostAWeek) {
				mostAWeek = total;
				highestRevIndex = i;
				bookPerWeek = bookAWeek;
			}
		}
	}
	var message = "Hello! Your property at latitude " + lat + " and longitude " + lon + " seems to be located in the " + arr[closestI].nbhd + " neighborhood. By analyzing nearby property, I have determined that in order to maximize your profit, you should set a price of " + arr[highestRevIndex].price + " and aim to book on average " + bookPerWeek + " nights a week. At this rate, under optimal conditions, you would be making " + mostAWeek + " dollars a week.";
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