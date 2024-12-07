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
        "productName": "Originals Campus 00s",
        "price": 115,
        "productImage": "productIMG/Shoe3.jpg",
        "brand":"Adidas",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
      {
        "productName": "Pegasus 41 GORE-TEX",
        "price": 145,
        "productImage": "productIMG/Shoe4.jpg",
        "brand": "Nike",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
      {
        "productName": "Dunk Low",
        "price": 70,
        "productImage": "productIMG/Shoe5.jpg",
        "brand": "Nike",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
  ]
var basket = [
];
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
}   
function productNavigation(idOfProduct){
    var element = document.getElementById('products')
    element.remove()
    var productPage = element.innerHTML = `<div id="productPage"><p>`+ products[idOfProduct].productName + `</p><button onClick=addToBasket(`+[idOfProduct]+` class="productBasket")></button> <button onClick=goBack() class="goBack">Go Back</button></div>`
    document.body.appendChild(element)
}
function addToBasket(idOfProduct){
    let productVal= JSON.stringify(idOfProduct)
    basket.push(productVal);
    console.log(basket)
    localStorage.setItem('basket', JSON.stringify(basket))
}
function loadBasket(){
    var element = document.getElementById('basket')
    element.innerHTML=`<div class="basket"><button draggable="false"><img src="icons/basketCheckout.svg"></button></div>`
    document.body.appendChild(element)
}
function viewBasket(){
    console.log("Hello")
}
function goBack(){
    const node = document.getElementById('products');
    var element = document.getElementById('productPage')
    node.removeChild(element)  
    displayProducts()

}
function filterSystem(){
    var element = document.getElementById('filter')
    var body = document.getElementById('products')
    element.innerHTML=`<div id="filter"><label onclick="filtration()">Nike<input type=radio name="filter" value="Nike"></input></label></div>`
    document.body.appendChild(element)
    body.style.marginLeft = "5%";
}
function filtration(){
    var userInput = document.querySelector('input[name="filter"]:checked').value
    document.getElementById("products").innerHTML = "";
    const element = document.getElementById('products')
    for (var i=0; i < products.length ; i++){
        if(products.brand[i] === userInput){
            var productHTML = `<div class="productDisplay" value="` +[i]+ `"><a onclick="productNavigation(` +[i]+ `)"><img src="` + products[i].productImage + `"><br><p class="name">`+ products[i].brand +` `+ products[i].productName + `</p><p class="price"><br>£` + products[i].price + `</p><a/> <button onClick="addToBasket(`+[i]+`)"></button></div>`    
            console.log(JSON.stringify(products[i]))
            element.insertAdjacentHTML("afterbegin", productHTML);
        }
    }
    
}