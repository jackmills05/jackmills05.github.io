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
        element.innerHTML = `
        <div id="search">
            <form onSubmit="javascript:searchSubmit()" action="products.html">
                <input id="searchInput" type"text" for="productID" name="searchInput" >
                <br>
                <input type="submit">
            </form>
        </div>
        `
        document.body.appendChild(element)
    } else {
        const element = document.getElementById('search')
        element.remove()
    }
}
function searchSubmit(){
    var searchInput = document.getElementById("searchInput").value;
    const obj = JSON.parse(searchInput)
    console.log(searchInput)
    document.getElementById("products").innerHTMl = obj.Date[1]
}