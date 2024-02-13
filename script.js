var map = L.map('map').setView([48.541160, 14.207041], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var greenIcon = L.icon({
//     iconUrl: 'nr.png',
//     // shadowUrl: 'leaf.png',

//     iconSize: [40, 45], // size of the icon
//     shadowSize: [50, 64], // size of the shadow
//     // iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//     shadowAnchor: [4, 62],  // the same for the shadow
//     popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
// });
// L.marker([48.541160, 14.207041], { icon: greenIcon }).addTo(map);


// // L.control.scale().addTo(map);

// // Control 3: This add a Search bar
//     var searchControl = new L.esri.Controls.Geosearch().addTo(map);

//     var results = new L.LayerGroup().addTo(map);

//       searchControl.on('results', function(data){
//         results.clearLayers();
//         for (var i = data.results.length - 1; i >= 0; i--) {
//           results.addLayer(L.marker(data.results[i].latlng));
//         }
//       });

let lokacion = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "Country": "Sweden",
                "City": "Stockholm",
                "marker-color": "#ffc629",
                "marker-size": "medium",
                "marker-symbol": "circle"
            },
            "geometry": {
                "coordinates": [
                    18.045977389632327,
                    59.340954469303085
                ],
                "type": "Point"
            },
            "id": 0
        },
        {
            "type": "Feature",
            "properties": {
                "Country": "German",
                "City": "Kiel",
                "marker-color": "#ffb83d",
                "marker-size": "medium",
                "marker-symbol": "circle"
            },
            "geometry": {
                "coordinates": [
                    10.138194455352647,
                    54.32263066863757
                ],
                "type": "Point"
            },
            "id": 1
        },{
            "type": "Feature",
            "properties": {
              "Country": "Norway",
              "City": "Bergen",
              "marker-color": "#57fffc",
              "marker-size": "medium",
              "marker-symbol": "circle"
            },
            "geometry": {
              "coordinates": [
                5.326389285772308,
                60.39336456758258
              ],
              "type": "Point"
            },
            "id": 2
          }
    ]
};

for (let i = 0; i < lokacion.features.length; i++) {
    let fea = lokacion.features[i];
    let kordi = fea.geometry.coordinates.reverse();
    let marker = L.marker(kordi).addTo(map).bindPopup(fea.properties.City)
}