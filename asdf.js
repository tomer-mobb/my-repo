var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerHTML = "Hello to you ";
// here's an XSS:
unsafe_div.innerHTML = "Hello to you " + username;
