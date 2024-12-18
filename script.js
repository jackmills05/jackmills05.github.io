var products = [
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
        "brand": "Adidas",
        "keyWords": ["bestsellers",
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
        "keyWords": ["bestsellers",
            "Turning tiny",
            "Radiation blast"]
    },
]

let navigationActive = false
function navigationBar() {
    navigationActive = !navigationActive
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
let searchActive = false
function searchFunction() {
    searchActive = !searchActive
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
    for (var i = 0; i < products.length; i++) {
        if (searchInput.toLowerCase() === products[i].productName.toLowerCase()) {
            const previousElement = document.getElementById('search')
            searchActive = false
            previousElement.remove()
            let productReturn = element.innerHTML = `<div class="productDisplay"><a><img src="` + products[i].productImage + `"><br><p class="name">Name:` + products[i].productName + `</p><p><br>£` + products[i].price + `</p><a/></div>`
            document.body.appendChild(element);
        }
        }
    }

function loadMain() {
    const element = document.getElementById("bestsellers")
    for (var i = 0; i < products.length; i++) {
        if (products[i].keyWords[0] == "bestsellers") {
            var productHTML = `<div id="bestsellingProducts" value="` + [i] + `"><div onclick="productNavigation(` + [i] + `)"><img src="` + products[i].productImage + `"><br><p class="name">` + products[i].brand + ` ` + products[i].productName + `</p><p class="price"><br>£` + products[i].price + `</p><a/> <button onClick="addToBasket(` + [i] + `)"></button></div>`
            element.insertAdjacentHTML("afterbegin", productHTML);
        }
    }
}
function displayProducts() {
    const element = document.getElementById('products')

    for (var i = 0; i < products.length; i++) {
        var productHTML = `<div class="productDisplay" value="` + [i] + `"><a onclick="productNavigation(` + [i] + `)"><img src="` + products[i].productImage + `"><br><p class="name">` + products[i].brand + ` ` + products[i].productName + `</p><p class="price"><br>£` + products[i].price + `</p><a/> <button onClick="addToBasket(` + [i] + `)"></button></div>`
        element.insertAdjacentHTML("afterbegin", productHTML);
    }
    filterSystem()
}

function productNavigation(idOfProduct) {
    var node = document.getElementById('filter')
    node.innerHTML='';
    node.style.all="revert"
    var productPage = `<div id="productPage"><p>`+products[idOfProduct].brand+` `+products[idOfProduct].productName + `</p><img src="`+products[idOfProduct].productImage+`" id="displayIMG"><button onClick= addToBasket(`+[idOfProduct]+`) class="productBasket")></button> <button onClick=goBack() class="goBack">Go Back</button></div>`
    var element = document.getElementById('products')
    element.innerHTML= productPage
    element.style.marginLeft="0%"
    
}
var basketlength = 0
function addToBasket(idOfProduct) {
    let productVal = JSON.stringify(idOfProduct)
    localStorage.setItem(`basket` + [basketlength] + ``, JSON.stringify(productVal))
    basketlength++
    alert("Product has been added into basket")
}
function goBack() {
    const node = document.getElementById('products');
    var element = document.getElementById('productPage')
    node.removeChild(element)
    displayProducts()

}
function clearFilter() {
    const element = document.getElementById('products');
    element.innerHTML = ``
    displayProducts()
}
function loadBasket() {
    var element = document.getElementById('basket')
    element.innerHTML = `<a href="basket.html"><button draggable="false"><img src="icons/basketCheckout.svg"></button></a>`
    document.body.appendChild(element)
}

function filterSystem() {
    var element = document.getElementById('filter')
    element.style.all=""
    var body = document.getElementById('products')
    element.innerHTML = `<label onclick="filtration()">Nike<input type=radio name="filter" value="Nike"></input><br></label><label onclick="filtration()">Adidas<input type=radio name="filter" value="Adidas"></input></label><button onClick=clearFilter() id="ClearFilter"> Clear filter</button>`
    document.body.appendChild(element)
    body.style.marginLeft = "5%";
    var button = document.getElementById(`ClearFilter`)
    button.setAttribute('disabled', '');

}
function filtration() {
    var userInput = document.querySelector('input[name="filter"]:checked').value
    document.getElementById("products").innerHTML = "";
    const element = document.getElementById('products')
    for (var i = 0; i < products.length; i++) {
        if (products[i].brand == userInput) {
            var productHTML = `<div class="productDisplay" value="` + [i] + `"><a onclick="productNavigation(` + [i] + `)"><img src="` + products[i].productImage + `"><br><p class="name">` + products[i].brand + ` ` + products[i].productName + `</p><p class="price"><br>£` + products[i].price + `</p><a/> <button onClick="addToBasket(` + [i] + `)"></button></div>`
            element.insertAdjacentHTML("afterbegin", productHTML);
        }
        var button = document.getElementById(`ClearFilter`)
        button.removeAttribute('disabled', '');
    }

}
function displayBasket() {
    var element = document.getElementById('displayBasket')
    for (var i = 0; i < localStorage.length; i++) {
        var basket = JSON.parse(localStorage.getItem(`basket` + [i] + ``))
        var basketHTML = `<div class="basketDisplay" value="` + [basket] + `"><a onclick="productNavigation(` + [basket] + `)"><img src="` + products[basket].productImage + `"><br><p class="name">` + products[basket].brand + ` ` + products[basket].productName + `</p><br><p class="price">£` + products[basket].price + `</p><a/> <button onclick=removeFromBasket(` + [basket] + `)><img href="Icons/delete.svg)</button></div>`

        element.insertAdjacentHTML("afterbegin", basketHTML);
    }
}

function removeFromBasket() {
    console.log("TEst")
}
function displayCheckout() {
    let displayVal = 0
    for (var i = 0; i < localStorage.length; i++) {
        var basket = JSON.parse(localStorage.getItem(`basket` + [i] + ``))
        displayVal = products[basket].price + displayVal;
        console.log(displayVal)
    }
    var element = document.getElementById('checkout')
    var checkoutHTML = `<div><p>Total = £` + displayVal + `</p><button onClick=checkout()>Check Out</button></div>`
    element.insertAdjacentHTML("afterbegin", checkoutHTML);
}
function checkout() {
    console.log("test")
    localStorage.clear()
    window.location.href = "index.html";

}
