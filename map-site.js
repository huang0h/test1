$(document).ready(function() {
    $('#map').click(function() {
        $('#map').fadeOut();
        document.getElementById("select_map").style.display = "none";
        document.getElementById("return_map").style.display = "block";
        $("#info_holder").delay(700).fadeIn();
    })

    $('#return_map').click(function() {
        $('#info_holder').fadeOut();
        document.getElementById("return_map").style.display = "none";
        document.getElementById("select_map").style.display = "block";
        $('#map').delay(700).fadeIn();
    })
})