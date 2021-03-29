$(document).ready(function () {

  $("form").submit(function (e) {
    e.preventDefault();

    const fInput = document.getElementById("input1").value;
    const sInput = document.getElementById("input2").value;
    const tInput = document.getElementById("input3").value;

    var inputs = [fInput, sInput, tInput];

    var newArray = [];
    newArray.push(inputs[0]);
    newArray.push(inputs[1]);
    newArray.push(inputs[2]);


    $("ul").append("<li>" + newArray[0] + "</li>");
    $("ul").append("<li>" + newArray[1] + "</li>");
    $("ul").append("<li>" + newArray[2] + "</li>");

  });



});