var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
unsafe_div.innerHTML = "Hello to you " + username;

var unsafe_div2 = window.document.getElementById("vulnerable-div2");
unsafe_div2.innerHTML = "Hello to you " + username;
