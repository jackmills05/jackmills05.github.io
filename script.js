var products= [
    {
      "productName": "Air Max 95",
      "price": 145,
      "productImage": "productIMG/Shoe1.jpg",
      "brand": "Nike",
      "keyWords": ["BestSeller", 
      "Turning tiny", 
      "Radiation blast"]
    },
    {
      "productName": "Classic Clog",
      "price": 39,
      "productImage": "productIMG/Shoe2.jpg",
      "brand": "Crocs",
      "keyWords": [
        "Million tonne punch",
        "Damprice resistance",
        "Superhuman reflexes"
      ]
    },
    {
        "productName": "Campus",
        "price": 115,
        "productImage": "productIMG/Shoe3.jpg",
        "brand":"Adidas",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
      {
        "productName": "Pegasus 41",
        "price": 145,
        "productImage": "productIMG/Shoe4.jpg",
        "brand": "Nike",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
      {
        "productName": "Dunk Low 1",
        "price": 70,
        "productImage": "productIMG/Shoe5.jpg",
        "brand": "Nike",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
  ]

let navigationActive= false
function navigationBar() {
    navigationActive =!navigationActive
    document.getElementById("toggleable")
    var element = document.getElementById('navBar')
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
    const element = document.getElementById('searchBar')
    if (searchActive) {
        element.innerHTML = `<div id="search"><form onSubmit="javascript:searchSubmit(); return false" action="products.html"><input id="searchInput" type"text" for="productID" name="searchInput"><br><input type="submit" id="submit"></form></div>`
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
    var p = document.getElementsByTagName('p')[0]
    for (var i=0; i < products.length ; i++){
        if (searchInput.toLowerCase() === products[i].productName){
            const previousElement = document.getElementById('search')
            searchActive = false
            previousElement.remove()
            let productReturn = element.innerHTML = `<div class="productDisplay"><a><img src="` + products[i].productImage + `"><br><p class="name">Name:` + products[i].productName + `</p><p><br>£` + products[i].price + `</p><a/></div>`
            document.body.appendChild(element);
        }
           }
        }
function loadMain(){

}
function displayProducts(){
    const element = document.getElementById('products')
    for (var i=0; i < products.length ; i++){
        var productHTML = `<div class="productDisplay" value="` +[i]+ `"><a onclick="productNavigation(` +[i]+ `)"><img src="` + products[i].productImage + `"><br><p class="name">`+ products[i].brand +` `+ products[i].productName + `</p><p class="price"><br>£` + products[i].price + `</p><a/> <button onClick="addToBasket(`+[i]+`)"></button></div>`    
        console.log(JSON.stringify(products[i]))
        element.insertAdjacentHTML("afterbegin", productHTML);
    }
    filterSystem()
    console.log(basket)
}
    
function productNavigation(idOfProduct){
    var element = document.getElementById('products')
    element.remove()
    var productPage = element.innerHTML = `<div id="productPage"><p>`+ products[idOfProduct].productName + `</p><button onClick=addToBasket(`+[idOfProduct]+` class="productBasket")></button> <button onClick=goBack() class="goBack">Go Back</button></div>`
    document.body.appendChild(element)
}
var basketlength = 0 
function addToBasket(idOfProduct){
    let productVal= JSON.stringify(idOfProduct)
    console.log(basket)
    localStorage.setItem(`basket`+[basketlength]+``, JSON.stringify(productVal))
    basketlength++
}
function goBack(){
    const node = document.getElementById('products');
    var element = document.getElementById('productPage')
    node.removeChild(element)  
    displayProducts()

}
function loadBasket(){
    var element = document.getElementById('basket')
    element.innerHTML=`<div class="basket"><a href="basket.html"><button draggable="false"><img src="icons/basketCheckout.svg"></button></a></div>`
    document.body.appendChild(element)
}
function viewBasket(){
    console.log("Hello")
}
function filterSystem(){
    var element = document.getElementById('filter')
    var body = document.getElementById('products')
    element.innerHTML=`<div id="filter"><label onclick="filtration()">Nike<input type=checkbox name="filter" value="Nike"></input><br></label><label onclick="filtration()">Adidas<input type=checkbox name="filter" value="Adidas"></input></label></div>`
    document.body.appendChild(element)
    body.style.marginLeft = "5%";
}
function filtration(){
    var userInput = document.querySelector('input[name="filter"]:checked').value
    document.getElementById("products").innerHTML = "";
    const element = document.getElementById('products')
    for (var i=0; i < products.length ; i++){
        if(products[i].brand == userInput){
            var productHTML = `<div class="productDisplay" value="` +[i]+ `"><a onclick="productNavigation(` +[i]+ `)"><img src="` + products[i].productImage + `"><br><p class="name">`+ products[i].brand +` `+ products[i].productName + `</p><p class="price"><br>£` + products[i].price + `</p><a/> <button onClick="addToBasket(`+[i]+`)"></button></div>`    
            console.log(JSON.stringify(products[i]))
            element.insertAdjacentHTML("afterbegin", productHTML);
        }
    }
    
}
function displayBasket(){
    var element = document.getElementById('displayBasket')
    for (var i=0; i < localStorage.length ; i++){
        var basket = JSON.parse(localStorage.getItem(`basket`+[i]+``))
        console.log(basket)
        var basketHTML = `<div class="basketDisplay" value="` +[basket]+ `"><a onclick="productNavigation(` +[basket]+ `)"><img src="` + products[basket].productImage + `"><br><p class="name">`+ products[basket].brand +` `+ products[basket].productName + `</p><br><p class="price">£` + products[basket].price + `</p><a/>`    
        console.log(JSON.stringify(products[i]))
        element.insertAdjacentHTML("afterbegin", basketHTML);
    }
}