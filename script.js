﻿let navigationActive= false
var products= [
    {
      "productName": "Shoe1",
      "price": 29,
      "productImage": "",
      "keyWords": ["Radiation resistance", 
      "Turning tiny", 
      "Radiation blast"]
    },
    {
      "productName": "Shoe2",
      "price": 39,
      "productImage": "",
      "keyWords": [
        "Million tonne punch",
        "Damprice resistance",
        "Superhuman reflexes"
      ]
    }
  ]
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
};

let searchActive= false
function searchFunction() {
    searchActive =! searchActive
    const element = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]
    if (searchActive) {
        element.innerHTML = `
        <div id="search">
            <form onSubmit="javascript:searchSubmit(); return false" action="products.html">
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
};
function searchSubmit() {
    var searchInput = document.getElementById("searchInput").value;
    const element = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]

    for (var i=0; i < products.length ; i++){
        if (searchInput === products[i].productName){
            const previousElement = document.getElementById('search')
            previousElement.remove()
            console.log("Yes")
            let productReturn = element.innerHTML = `<div>hello</div>`;
            break;
        }
           else{
            let productReturn = element.innerHTML = `<div>Search not found</div>`
           }
        
        }
        document.body.appendChild(element);
    }