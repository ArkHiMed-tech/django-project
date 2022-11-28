var speed = document.querySelector('#calculate');
var outputDry = document.querySelector('#calculate-output-dry');
var outputWet = document.querySelector('#calculate-output-wet');
var outputSnow = document.querySelector('#calculate-output-snow');
var outputIce = document.querySelector('#calculate-output-ice');

var distanceDry;
var distanceWet;
var distanceSnow;
var distanceIce;

speed.addEventListener('input', function (evt) {
    evt.preventDefault();
    var speedValue = speed.value;
    distanceDry = (speedValue * speedValue / (254 * 0.7)).toFixed(2);
    distanceWet = (speedValue * speedValue / (254 * 0.4)).toFixed(2);
    distanceSnow = (speedValue * speedValue / (254 * 0.2)).toFixed(2);
    distanceIce = (speedValue * speedValue / (254 * 0.1)).toFixed(2);

    outputDry.value = distanceDry;
    outputWet.value = distanceWet;
    outputSnow.value = distanceSnow;
    outputIce.value = distanceIce;
});
