// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $("#calculationForm").submit(function (event) {
        event.preventDefault(); // Prevent form from submitting normally
        var hours = $("#hours").val();
        var rate = $("#rate").val();
        var total = hours * rate;
        $("#result").text("Total amount: $" + total); // Display the result
    });
});

