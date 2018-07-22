var mymap = L.map('map').setView([31, 120], 8);//shanghai

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ3JhY2V6aWppbiIsImEiOiJjamp3OXB3Nm4wOHlpM2twZjV2bmR3aTZzIn0.sUOvwcZxXhq6lj6Ic0wGMg'
}).addTo(mymap);