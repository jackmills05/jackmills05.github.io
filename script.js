let navigationActive= false

function navigationBar() {
    navigationActive =!navigationActive
    document.getElementById("toggleable")
    var element = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]
    if (navigationActive) {
        element.innerHTML = `
        <div id="taskbar">
        <a href="/index.html">Home</a>
        <hr>
        <a href="/products.html">All Products</a>
        </div>
        `;
        document.body.appendChild(element)
        body.style.marginLeft = "10%";

    } else {
        const element = document.getElementById("taskbar")
        element.remove();        
        body.style.marginLeft = "0%";
    }
}
let searchActive= false
function searchFunction() {
    searchActive =! searchActive
    var element = document.createElement('div')
    if (searchActive) {
        element.innerHTML = `<div id="search">
        <input type"search" id="userSearch" onkeyup="searchSubmit()">
        </div>
        `
        document.body.appendChild(element)
    } else {
        const element = document.getElementById('search')
        element.remove()
    }
}
function searchSubmit(){
    alert("hello hello")
}