# Airbnb Web-App


*Simple web-app for visualizing and computing with live and previously collected Airbnb data. Live at:* [neilj.me/charts.html](http://www.neilj.me/charts.html)

## File Descriptions
### Live Files

- charts.html : This html file is the view for the charts tab on my live site. This file contains inline Javascript to load the first graph. The first graph is loaded from my SQL server through PHP, made through an XMLHttp request to the database. The data is manipulated in typeVPrice.php to get average price per type of house.

- script.js : Linked to charts.html. Has controllers for creating the second and third graphs. The second graph uses live data from server through getCPolicy.php, and graphs price in relation to various cancellation policies. The third graph does not use live data, but is pulled from the dataset as how price differs between host-status.

- estimation.html & estScript.js: Contain the view and controller for the estimation tab of my web-app. The estimation takes any latitude and longitude and finds the closest listing with the necessary data using javascript and the live data fetched by PHP from my sql server. The average bookings per week ((30 - available_30)/4) is multiplied with price per night to determine an estimate of how much one would make per week.

- optimization.html & optiScript.js: View and controller for optimization tab. Finds the neighborhood your listing is in by comparing latitude and longitude, then goes back and finds the listing who's price is under 1000 and who's revenue per week is the highest. This allows the script to suggest a price and target bookings per week to get optimal revenue. (note: location-based identification would ideally use geofencing in production)

- typeVPrice.php, getData.php, getCPolicy.php: used to make API calls and return data ti javascript for manipulation on screen.

- chartSheet.css: basic css stylesheet shared among html files.

### Data Migration Files

- cOneDatabase.php: takes listings.csv and ports specific data points I use in my web-app to a local SQL server. This database is then exported to capitalOne234.sql which is uploaded to my live sql server, ready for API calls.

- capitalOne234.sql: contains the exported trimmed airbnb data optimized to be used live on my server.
## Code References/Libraries Used
  - [Charts.js](http://www.chartjs.org/) to handle visualization of collected data.
  - [W3Schools](https://www.w3schools.com/) for brushing up on html and css properties and structure.

## License

All code is made available under [MIT license](http://opensource.org/licenses/MIT).
