var products= [
    {
      "productName": "Shoe1",
      "price": 29,
      "productImage": "productIMG/Shoe1.jpg",
      "keyWords": ["Radiation resistance", 
      "Turning tiny", 
      "Radiation blast"]
    },
    {
      "productName": "Shoe2",
      "price": 39,
      "productImage": "productIMG/Shoe1.jpg",
      "keyWords": [
        "Million tonne punch",
        "Damprice resistance",
        "Superhuman reflexes"
      ]
    },
    {
        "productName": "Shoe3",
        "price": 29,
        "productImage": "productIMG/Shoe1.jpg",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
      {
        "productName": "Shoe4",
        "price": 29,
        "productImage": "productIMG/Shoe1.jpg",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
      {
        "productName": "Shoe5",
        "price": 29,
        "productImage": "productIMG/Shoe1.jpg",
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
            let productReturn = element.innerHTML = `<div class="productDisplay"><a><img src="` + products[i].productImage + `"><br><p value="1">Name:` + products[i].productName + `</p><p><br>£` + products[i].price + `</p><a/></div>`
            document.body.appendChild(element);
        }
           }
        }
        
function displayProducts(){
    const element = document.getElementById('products')
    for (var i=0; i < products.length ; i++){
        var productHTML = `<div class="productDisplay" value="` +[i]+ `"><a><img src="` + products[i].productImage + `"><br><p value="1">Name:` + products[i].productName + `</p><p><br>£` + products[i].price + `</p><a/> <button onClick="productNavigation(`+[i]+`)">Shop now</button></div>`    
        console.log(JSON.stringify(products[i]))
        element.insertAdjacentHTML("afterbegin", productHTML);
        
    }
    console.log()
}
    
function productNavigation(idOfProduct){
    var element = document.getElementById('products')
    element.remove()
    var productPage = element.innerHTML = `<h1>`+ products[idOfProduct].productName + `</h1> <div><button onClick=addToBasket(`+[idOfProduct]+`)>Add to basket</button> <button onClick=displayProducts()>Go Back</button></div>`
    document.body.appendChild(element)
}

function addToBasket(idOfProduct){

    let productVal= JSON.stringify(idOfProduct)
    basket.push(productVal);
    console.log(basket)
}
function goBack(){
    const element = document.getElementById('products')
    for (var i=0; i < products.length ; i++){
        var productHTML = `<div class="productDisplay" value="` +[i]+ `"><a><img src="` + products[i].productImage + `"><br><p value="1">Name:` + products[i].productName + `</p><p><br>£` + products[i].price + `</p><a/> <button onClick="productNavigation(`+[i]+`)">Shop now</button></div>`    
        console.log(JSON.stringify(products[i]))
        element.insertAdjacentHTML("afterbegin", productHTML);
        
    }
    console.log()
}