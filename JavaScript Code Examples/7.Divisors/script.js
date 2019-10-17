function getDivisors(x) {
    var result = [];
    for (i = 1; i <= x; i++) {
        if (x % i == 0) {
            result.push(i);
        }
    }
    return result;
}

num = prompt("Please enter a number:");
var divisors = getDivisors(num);
document.write("<ul>");
for (i = 0; i < divisors.length; i++) {
    document.write("<li>" + divisors[i] + "</li>");
}
document.write("</ul>");