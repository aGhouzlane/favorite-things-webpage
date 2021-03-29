$(document).ready(function () {

  $("form").submit(function (e) {
    e.preventDefault();

    const fInput = document.getElementById("input1").value;
    const sInput = document.getElementById("input2").value;
    const tInput = document.getElementById("input3").value;

    var inputs = [fInput, sInput, tInput];

    console.log(inputs);

  });



});