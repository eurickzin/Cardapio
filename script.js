const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCount = document.getElementById("cart-count");
const adressInput = document.getElementById("adress");
const adressWarn = document.getElementById("adress-warn");

let cart = [];


cartBtn.addEventListener("click", function() {
    cartModal.style.display = 'flex';
});


cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = 'none';
    }
})

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = 'none';
})

menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".add-to-cart-btn");

    if(parentButton){
        const name = parentButton.getAttribute("data-name");
        const price = parseFloat(parentButton.getAttribute("data-price"));

        addToCart(name, price);


    }
})

function addToCart (name, price){
    const existingItem = cart.find(item => item.name === name);

    if(existingItem){
        existingItem.quantity += 1;
        return;

    }

    cart.push({
        name,
        price,
        quantity: 1,
    })
}