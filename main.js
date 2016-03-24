//let's build the html elements

//create a div
var content = document.createElement("div");

//place the content div in the body
document.body.appendChild(content);

//put some words inside the content div
content.innerHTML = "Hello world!";

//increase text size of content div
content.style.fontSize = "50px";

//change background
content.style.backgroundColor = "teal";

//half the screen width
content.style.width = "50%";

//center the text in the content div
content.style.textAlign = "center";

//center the content div
content.style.margin = "10% auto";