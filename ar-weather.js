let coordinates = {}

function getCoordinates() {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("dest")) {
        let dest = searchParams.get("dest");
        coordinates.lat = dest.split(";")[0];
        coordinates.lng = dest.split(";")[1];
    } else {
        alert("Coordinates not selected.");
        window.history.back();
    }
}

function renderElements() {
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lng}&appid=4a39cccc04388f2ab50a1f2de3bb6680`,
        type: "get",
        success: function (res) {
            let name = res.name;
            let weather = res.weather[0].main;
            $("#scene_container").append(
                `
                    <a-entity gps-entity-place="latitude: ${res.coord.lat}; longitude: ${res.coord.lon};">
                        <a-entity>
                            <a-text height="50" value="Weather forecast is ${weather} at ${name}"></a-text>
                        </a-entity>
                    <a-entity>
                `
            )
        }
    });
}