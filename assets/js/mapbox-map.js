/*PART I
1. LOAD MAPBOX API
2. SET GEOJSON DATABASE FOR MARKERS
3. PLACE THE MARKERS ACCORDING TO THE COORDINATE
4. SET THE POPUP */
// 1. MAPBOX API STARTS HERE
mapboxgl.accessToken = 'pk.eyJ1IjoiMTkxMzY0OCIsImEiOiJjazZxOGt0ZGUxYnpqM25seWs5dmd3OXAwIn0.1s0vMz3TjjKdS2bioM9_KQ';
var map = new mapboxgl.Map({
    container: 'map',
    hash: true,
    style: 'mapbox://styles/1913648/ck7rdfc6t0k8t1iqrvyml7i1z', //MAP LAYER STYLE
    center: [-2.141, 57.119], //CENTRE COORDINATES OF THE MAP WHEN THE FIRST TIME THE MAP IS LOADED
    zoom: 16 //ZOOM LEVEL 16
    // hash:true,
});
// map.addControl(new mapboxgl.NavigationControl()); // Add zoom and rotation controls to the map.

// 2. SET GEOJSON DATABASE FOR MARKERS

map.on('load', function() {
    map.loadImage(
        'assets/images/campus.png',
        function(error, image) {
            if (error) throw error;
            map.addImage('cat', image);
            map.addSource('places', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {'type': 'Feature',
                            'properties': {
                                'description': 'The Sir Ian Wood Building',
                                'SEM1':"SEMESTER 1 & 2",
                                'SEM2':"SEMESTER 3",
                                'OTHERS1':"Monday - Friday",
                                'OTHERS2':"Saturday & Sunday",
                                'oh1': '07:00 - 23:00',
                                'OH2': '09:00 - 21:00',
                                'OH3': '07:00 - 23:00',
                                'OH4': '09:00 - 19:00',
                                'DP1': '- School Of Engineering',
                                'DP2': '- School Of Computing Science & Digital Media',
                                'DP3': '- School Of Pharmacy & Life Sciences',
                                'DP4': '- The Scott Sutherland School of Architecture & Built Environment',},
                            'geometry': {'type': 'Point', 'coordinates': [-2.134156, 57.118633],}},
                        {'type': 'Feature',
                            'properties': {
                            'description': 'The Ishbel Gordon Building',
                                'SEM1':"SEMESTER 1 & 2",
                                'SEM2':"SEMESTER 3",
                                'OTHERS1':"Monday - Friday",
                                'OTHERS2':"Saturday & Sunday",
                                'oh1': '07:00 -19:00',
                                'OH2': 'CLOSED',
                                'OH3': '07:00 -19:00',
                                'OH4': 'CLOSED',
                                'DP1': '- School Of Nursing & Midwifery',
                                'DP2': '- School Of Health Sciences',
                                'DP3': '- School Of Applied Social Sciences',
                                'DP4': '- The Graduate School',},
                            'geometry': {'type': 'Point', 'coordinates': [-2.136099, 57.118950]}},
                        {'type': 'Feature', 'properties': {
                            'description': 'Aberdeen Business School',
                                'SEM1':"SEMESTER 1 & 2",
                                'SEM2':"SEMESTER 3",
                                'OTHERS1':"Monday - Friday",
                                'OTHERS2':"Saturday & Sunday",
                                'oh1': '07:00 -19:00',
                                'OH2': 'CLOSED',
                                'OH3': '07:00 -19:00',
                                'OH4': 'CLOSED',
                                'DP1': '- The Law School',
                                'DP2': '- School of Creative and Cultrual Business',
                                'DP3': '- Aberdeen Business School',
                                'DP4': "",},
                            'geometry': {'type': 'Point', 'coordinates': [-2.138698, 57.118749]}},
                        {'type': 'Feature', 'properties': {
                            'description': 'Grays School Of Art',
                                'SEM1':"SEMESTER 1 & 2",
                                'SEM2':"SEMESTER 3",
                                'OTHERS1':"Monday - Friday",
                                'OTHERS2':"Saturday & Sunday",
                                'oh1': '07:00 - 22:00',
                                'OH2': '09:30 - 18:00 & 09:30 - 15:00',
                                'OH3': '07:00 -19:000',
                                'OH4': 'CLOSED',
                                'DP1': '',
                                'DP2': '',
                                'DP3': '',
                                'DP4': "",
                            },
                            'geometry': {'type': 'Point', 'coordinates': [-2.148245, 57.118385]}},
                        {'type': 'Feature', 'properties': {
                            'description': 'RGU Sport',
                                'SEM1':"SEMESTER 1 & 2",
                                'SEM2':"SEMESTER 3",
                                'OTHERS1':"Peak",
                                'OTHERS2':"Off Peak",
                                'oh1': '06:00 - 22:00',
                                'OH2': '09:00 - 19:00',
                                'OH3': 'Valid all opening hours',
                                'OH4': 'Monday to Friday 06:00 - 16:00, Saturday and Sunday 09:00 - 19:00',
                                'DP1': '',
                                'DP2': '',
                                'DP3': '',
                                'DP4': "",
                            },
                            'geometry': {'type': 'Point', 'coordinates': [-2.137708, 57.118856]}},
                        {'type': 'Feature', 'properties': {
                            'description': 'ICRGU International College',
                                'SEM1':"",
                                'SEM2':"",
                                'OTHERS1':"Monday - Friday",
                                'OTHERS2':"Saturday & Sunday",
                                'oh1': '08:30 - 17:30',
                                'OH2': 'CLOSED',
                                'OH3': '',
                                'OH4': '',
                                'DP1': '',
                                'DP2': '',
                                'DP3': '',
                                'DP4': "",
                            },
                            'geometry': {'type': 'Point', 'coordinates': [-2.137445, 57.118303]}},
                        {'type': 'Feature', 'properties': {'description': 'Garthdee House Annexe',
                                'SEM1':"9 SEPTEMBER 2019 TO 30 JUNE 2020",
                                'SEM2':"1 JULY TO 6 SEPTEMBER 2020\n",
                                'OTHERS1':"",
                                'OTHERS2':"",
                                'oh1': '07:00 - 22:00',
                                'OH2': '09:30 - 18:00 & 09:30 - 15:00',
                                'OH3': 'Monday - Friday',
                                'OH4': 'Saturday & Sunday',
                                'DP1': '',
                                'DP2': '',
                                'DP3': '',
                                'DP4': "",
                            },
                            'geometry': {'type': 'Point', 'coordinates': [-2.144340, 57.118220]}},
                    ]
                }
            });
            map.addLayer({
                'id': 'places',
                'type': 'symbol',
                'source': 'places',
                'layout': {
                    'icon-image': 'cat',
                    'icon-size': 0.35
                }
            });
            map.on('click', 'places', function(e) { //when the location from database is clicked, execute the below function
                var coordinates = e.features[0].geometry.coordinates.slice();  //set coordinates as variable and assign to the coordinate from geojson data
                var description = e.features[0].properties.description;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                    coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                }
                //4. CREATE POPUP
                new mapboxgl.Popup({ offset: -5})  //set the pop up
                    .setLngLat(coordinates) //go to the coordinate to set the pop up
                    .setHTML(
                        '<h3>' + e.features[0].properties.description + '</h3>'+
                        '<div class="tabset">'+
                        '<input type="radio" name="tabset" id="tab1" aria-controls="info" checked>'+
                        '<label for="tab1">Info</label>' +
                        '<input type="radio" name="tabset" id="tab2" aria-controls="department">'+
                        '<label for="tab2">Departments</label>'+
                        '<div class="tab-panels">'+
                        '<section id="info" class="tab-panel">'+
                        '<p>'+ '<b>' + "OPENING HOURS" + '</b>' + '<br>'+ '<br>'+
                        '<b>'+e.features[0].properties.SEM1+
                        '<ul>' +'<li>'+'</b>'+ "MONDAY - FRIDAY"+'&nbsp;'+ e.features[0].properties.oh1 + '</li>' +
                        '<li>'+ "SATURDAY & SUNDAY"+'&nbsp;'+ e.features[0].properties.OH2 + '</li>'+ '</ul>'+
                        '<p>'+ '<b>'+e.features[0].properties.SEM2+
                        '<ul>' +'<li>'+'</b>'+ e.features[0].properties.OTHERS1+'&nbsp;'+ e.features[0].properties.OH3 + '</li>' +
                        '<li>'+ e.features[0].properties.OTHERS2+'&nbsp;'+ e.features[0].properties.OH4 + '</li>'+ '</ul>'+
                        '</p>' +
                        ' </section>'+
                        '<section id="department" class="tab-panel">'+
                         e.features[0].properties.DP1 + '</br>' +
                        '</br>'+ e.features[0].properties.DP2 + '</br>' +
                        '</br>'+ e.features[0].properties.DP3 + '</br>' +
                        '</br>'+ e.features[0].properties.DP4 +
                        ' </section>'+
                        '</div>'
                    ) //put the "description" from the geojson to the popup content
                    .addTo(map); //add pop up to the map
            });
            map.on('mouseenter', 'places', function() { // WHEN THE MOUSE IS ON THE MARKER
                map.getCanvas().style.cursor = 'pointer'; //CHANGE TO POINTER
            });
            map.on('mouseleave', 'places', function() { //WHEN THE MOUSE LEAVES THE MARKER
                map.getCanvas().style.cursor = ''; //CHANGE BACK TO CURSOR
            });

        }
    );
});
//END OF PLACING STATIC MARKERS & POPUP
/*PART II SEARCH FUNCTION STARTS HERE
**Important: I've created a file named called customData.geojson.js and attached to this html so that i can create database there and link back here.
REFER TO THE EXAMPLE: https://docs.mapbox.com/mapbox-gl-js/example/forward-geocode-custom-data/ */

function forwardGeocoder(query) { //CREATE FUNCTION CALLED FORWARDGEOCODER
    var matchingFeatures = []; //CREATE VARIABLE CALLED MATCHING FEATURES
    for (var i = 0; i < customData.features.length; i++) { //USE FOR LOOP FOR GEOJSON DATA ('CUSTOMDATA')
        var feature = customData.features[i];
        if (
            feature.properties.title //IN THE SEARCH BAR, THE USER WILL SEARCH BASED ON TITLE ATTRIBUTES
                .toLowerCase()   // handle queries with different capitalization than the source data by calling toLowerCase()
                .search(query.toLowerCase()) !== -1 //not sure what it means, got it from the mapbox documentation
        ) {
            //below codes are from the mapbox documentation  https://docs.mapbox.com/mapbox-gl-js/example/forward-geocode-custom-data
            feature['place_name'] = feature.properties.title;
            feature['center'] = feature.geometry.coordinates;
            feature['place_type'] = ['Feature'];
            matchingFeatures.push(feature);
        }
    }
    return matchingFeatures; //return the matching keyword
}
map.on('load', function(){
    map.addSource('single-point', {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": []
        }
    });
    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken, //setting mapbox api
        localGeocoder: forwardGeocoder, //use "forwardgeocoder" function
        zoom: 17, //zoom level after search
        placeholder: 'Enter search e.g. N105', //search bar placeholder
        bbox: [-2.150487589787133,57.1175191529322,-2.1295870552029896,57.12004068267734], // set search boundary, (only to RGU campus)
        mapboxgl: mapboxgl //just followed the mapbox documentation
    });
    var popup = new mapboxgl.Popup({ offset: 10})
    var marker = new mapboxgl.Marker()

    geocoder.on('result', function(ev) {
        map.getSource('single-point').setData(ev.result.geometry);
        if (popup!=undefined) popup.remove();
        if (marker!=undefined) marker.remove();
        popup.setLngLat([ev.result.geometry.coordinates[0], ev.result.geometry.coordinates[1]])
        popup.setHTML(
            '<h3>' + ev.result.place_name + '</h3>'+
            '<div class="tabset" ">'+
            '<input type="radio" name="tabset" id="tab1" aria-controls="info" checked>'+
            '<label for="tab1" style="border: none">Info</label>' +
            '<div class="tab-panels">'+
            '<section id="info" class="tab-panel">'+
            '<h4>'+ "Located in level" +'&nbsp;'+  ev.result.properties.Level + '&nbsp;'+ "Of" + '&nbsp;' + ev.result.properties.BuildingName + '<br>'+
           // '<a href="#img1">'+'<img class="thumbnail" src="'+ ev.result.properties.Floorplan  +'" style="width:314px;height:234px;">'+'</a>'+
            '</h4>' +
            ' </section>'+ '</div>'
        )
        popup.addTo(map);
        marker.setLngLat([ev.result.geometry.coordinates[0],+ ev.result.geometry.coordinates[1]])
        marker.setPopup(popup) // sets a popup on this marker
        marker.addTo(map);
    });
    map.addControl(geocoder);
})