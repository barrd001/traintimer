
var name = '';
var destination = '';
var startTime = '';
var freq = '';

$('#add-train').on('click', function(event) {
    event.preventDefault()

    name = $('#train-name').val().trim();
    destination = $('#destination').val().trim();
    startTime = $('#train-time').val().trim();
    freq = $('#frequency').val().trim();

    console.log(name, destination, startTime, freq);
});
