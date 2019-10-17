var colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'cyan',
    'pink',
    'brown'
];

function printColors() {
    for (i = 0; i < colors.length; i++) {
        document.write(
            '<p style="color:' + colors[i] + '">' +
            colors[i].toUpperCase() +
            '</p>'
        );
    }
}