let latitude, longitude, destination;

function initGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        alert("Sorry. Your browser does not support Geolocation service.")
    }
}

function success(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;

    mapboxgl.accessToken = "pk.eyJ1IjoiaHVtYW5hYXo3ODYiLCJhIjoiY2xjcjgyMWUzMGQ5ZTNubGg0bjRrZnQxcyJ9.1uvDobFXbyXGrDdCa_U-RA";

    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 4
    });

    var img1 = document.querySelector("#amber");
    var marker1 = new mapboxgl.Marker({
        element: img1
    })
        .setLngLat([75.85133, 26.98547])
        .addTo(map);

    var img2 = document.querySelector("#gateway");
    var marker2 = new mapboxgl.Marker({
        element: img2
    })
        .setLngLat([72.8347, 18.922])
        .addTo(map);

    var img3 = document.querySelector("#gate");
    var marker3 = new mapboxgl.Marker({
        element: img3
    })
        .setLngLat([77.2295, 28.6129])
        .addTo(map);

    var img4 = document.querySelector("#lotus");
    var marker4 = new mapboxgl.Marker({
        element: img4
    })
        .setLngLat([77.2588, 28.5535])
        .addTo(map);

    var img5 = document.querySelector("#victoria");
    var marker5 = new mapboxgl.Marker({
        element: img5
    })
        .setLngLat([88.3426, 22.5448])
        .addTo(map);

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
            .on("result", function (e) {
                destination = e.result.center;
            })
    );
}

$(document).ready(function () {
    initGeolocation();
    alert("Please allow the app to know your location.");
});

$(function() {
    $("#navigate-button").click(function() {
        window.location.href = `ar-weather.html?dest=${destination.lat};${destination.lng}`;
    });
});