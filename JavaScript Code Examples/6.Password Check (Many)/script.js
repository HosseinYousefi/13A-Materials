var pass;
var acceptablePasswords = [
    "password123",
    "helloworld",
    "byeuniverse"
];

function isAcceptable(password) {
    for (i = 0; i < acceptablePasswords.length; i++) {
        if (acceptablePasswords[i] == password) {
            return true;
        }
    }
    return false;
}

while (!isAcceptable(pass)) {
    pass = prompt("Please enter your password");
}

document.write("<h1>Welcome!</h1>");