var products= [
    {
      "productName": "shoe1",
      "price": 29,
      "productImage": "productIMG/Shoe1.jpg",
      "keyWords": ["Radiation resistance", 
      "Turning tiny", 
      "Radiation blast"]
    },
    {
      "productName": "shoe2",
      "price": 39,
      "productImage": "productIMG/Shoe1.jpg",
      "keyWords": [
        "Million tonne punch",
        "Damprice resistance",
        "Superhuman reflexes"
      ]
    },
    {
        "productName": "shoe3",
        "price": 29,
        "productImage": "productIMG/Shoe1.jpg",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
      {
        "productName": "shoe4",
        "price": 29,
        "productImage": "productIMG/Shoe1.jpg",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
      {
        "productName": "shoe5",
        "price": 29,
        "productImage": "productIMG/Shoe1.jpg",
        "keyWords": ["Radiation resistance", 
        "Turning tiny", 
        "Radiation blast"]
      },
  ]
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
};
let searchActive= false
function searchFunction() {
    searchActive =! searchActive
    const element = document.createElement('div')
    var body = document.getElementsByTagName('body')[0]
    if (searchActive) {
        element.innerHTML = `<div id="search"><form onSubmit="javascript:searchSubmit(); return false" action="products.html"><input id="searchInput" type"text" for="productID" name="searchInput" ><br><input type="submit"></form></div>`
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
           else{
            location.replace("error.html")
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
    console.log(products[idOfProduct])
    
}