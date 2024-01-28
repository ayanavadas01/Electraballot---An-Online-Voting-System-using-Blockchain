function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for (var i in uiBathrooms) {
        if (uiBathrooms[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1; // Invalid Value
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for (var i in uiBHK) {
        if (uiBHK[i].checked) {
            return parseInt(i) + 1;
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var city = document.getElementById("city-select");
    var location = document.getElementById("uiLocations");
    var buyPrice = document.getElementById("buy-price");
    var rentPrice = document.getElementById("rent-price");

//    var url = "https://housepredictionprediction.herokuapp.com/predict_home_price"; //Use this if you are NOT using nginx which is first 7 tutorials
    var url = "/predict_home_price"; // Use this if  you are using nginx. i.e tutorial 8 and onwards

    $.post(url, {
        total_sqft: parseFloat(sqft.value),
        bhk: bhk,
        bath: bathrooms,
        location: location.value,
        city: city.value
    }, function(data, status) {
        data = data.estimated_price;
        console.log(data);
        buyPrice.value = data[0].toString() + " Lakhs";
        rentPrice.value = data[1].toString() + " Thousands";
        console.log(status);
    });
}


$(document).ready(function () {
    $('#city-select').change(function() {
        console.log("City selected");
        // var url = "https://housepredictionprediction.herokuapp.com/get_location_names"; // Use this if you are NOT using nginx which is first 7 tutorials
        var url = "/get_location_names?city=" + $(this).val(); // Use this if  you are using nginx. i.e tutorial 8 and onwards
        $.get(url, function(data, status) {
            console.log("got response for get_location_names request");
            if (data) {
                var locations = data.locations;
                var uiLocations = document.getElementById("uiLocations");
                $('#uiLocations').empty();
                for (var i in locations) {
                    var opt = new Option(locations[i]);
                    $('#uiLocations').append(opt);
                }
                $("#uiLocations").removeAttr('disabled');
            }
        });
    });
});

