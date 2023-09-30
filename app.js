const cartList = document.querySelector(".cart-list");
const displayTotal = document.querySelector(".display");
const pricingDisplay = document.querySelector(".pricing");
const chargesDisplay = document.querySelector(".charges");
const totalDisplay = document.querySelector(".total");

var total = 0;
var servicetax = 0;
var gst = 0;
var grandtotal = 0;

function idAddOne(num) {
    const cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-1")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/burger.jpg" alt="burger"/>
    <div class="item-name">
        <p>Burger</p>
    </div>
    <div class="item-price">
        <p>+ $4.50</p>
    </div>        
       <button onclick="removeOne()">-</button>`;
    cartList.appendChild(cartItem);    
    addItemPrice(1,4.50);
}

function idAddTwo() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-2")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/buritto.jpeg" alt="buritto" />
    <div class="item-name">
       <p>Burito</p>
    </div>
    <div class="item-price">
       <p>+ $6.50</p>
    </div>        
    <button onclick="removeTwo()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(2,6.50);
}

function idAddThree() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-3")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/fish-n-chip.jpg" alt="fish and chips" />
    <div class="item-name">
       <p>Fish n Chip</p>
    </div>
    <div class="item-price">
       <p>+ $8.50</p>
    </div>        
    <button onclick="removeThree()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(3,8.50);
}

function idAddFour() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-4")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = ` <img src="./assets/fried chicken.jpg" alt="fried chicken" />
    <div class="item-name">
       <p>Fried Chicken</p>
    </div>
    <div class="item-price">
       <p>+ $3.50</p>
    </div>        
    <button onclick="removeFour()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(4,3.50);
}

function idAddFive() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-5")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `  <img src="./assets/hotdog.webp" alt="hotdog" />
    <div class="item-name">
       <p>Hotdog</p>
    </div>
    <div class="item-price">
       <p>+ $5.50</p>
    </div>        
    <button onclick="removeFive()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(5,5.50);
}

function idAddSix() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-6")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/pizza.jpg" alt="pizza" />
    <div class="item-name">
       <p>Pizza</p>
    </div>
    <div class="item-price">
       <p>+ $9.50</p>
    </div>        
    <button onclick="removeSix()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(6,9.50);
}

function idAddSeven() {
    let cartItem = document.createElement('div')
    cartItem.setAttribute("id","item-7")
    cartItem.classList.add("cart-item");    
    cartItem.innerHTML = `<img src="./assets/taco.jpg" alt="taco" />
    <div class="item-name">
       <p>Taco</p>
    </div>
    <div class="item-price">
       <p>+ $7.50</p>
    </div>        
    <button onclick="removeSeven()">-</button>`;
    cartList.appendChild(cartItem);  
    addItemPrice(7,7.50);
}

function removeOne() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-1");    
    cartList.removeChild(cartItem);    
    addItemPrice(1,-4.50);    
}

function removeTwo() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-2");    
    cartList.removeChild(cartItem);   
    addItemPrice(2,-6.50);     
}

function removeThree() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-3");    
    cartList.removeChild(cartItem);   
    addItemPrice(3,-8.50);    
}

function removeFour() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-4");    
    cartList.removeChild(cartItem);   
    addItemPrice(4,-3.50);    
}

function removeFive() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-5");    
    cartList.removeChild(cartItem);   
    addItemPrice(5,-5.50);    
}

function removeSix() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-6");    
    cartList.removeChild(cartItem);   
    addItemPrice(6,-9.50);    
}

function removeSeven() {    
    const cartList = document.querySelector(".cart-list");
    const cartItem = document.querySelector("#item-7");    
    cartList.removeChild(cartItem);   
    addItemPrice(7,-7.50);    
}

function addItemPrice(id,price) {
    console.log(id);
    total += price;
    servicetax = Number((total*0.1).toFixed(2));  
    gst = Number((total*0.06).toFixed(2));
    grandtotal = Number((total + servicetax + gst).toFixed(2));
    let costDisplay = document.createElement('div')    
    costDisplay.classList.add("cost") 
    displayTotal.innerHTML = "";   
    costDisplay.innerHTML = ` <div class="pricing charges" id="price-1">
    <div class="cost-title">Service tax</div>
    <div class="cost-value">$${servicetax}</div>
    </div>
    <div class="pricing charges" id="price-2">
        <div class="cost-title">GST</div>
        <div class="cost-value">$${gst}</div>
    </div>
    <div class="pricing total" id="price-total">
        <div class="cost-title">Total</div>
        <div class="cost-value">$${grandtotal}</div>
    </div>
    <button>Checkout</button>`
    displayTotal.appendChild(costDisplay);    
    return total;    
}