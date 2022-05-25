const seeTracklist = document.getElementById("see-tracklist");
const seeInfo = document.getElementById("see-info");
const tracklist = document.getElementById("tracklist");
const info = document.getElementById("info");
const text = document.getElementById("text");
const addToCartBtn = document.getElementById("add-to-cart-btn");
const mobileAddToCartBtn = document.getElementById("mobile-add-to-cart-btn");
let isTracklist = false;

seeTracklist.addEventListener("click", showTracklist);
seeInfo.addEventListener("click", showInfo);
addToCartBtn.addEventListener("click", addToCart);
mobileAddToCartBtn.addEventListener("click", mobileAddToCart);
function showTracklist(){
    if(isTracklist == false){
        info.classList.add("hide");
        tracklist.classList.remove("hide");
        text.classList.remove("white-bg");
        text.classList.add("red-bg");
        isTracklist = true;    
    }
}

function showInfo(){
    if(isTracklist == true){
        tracklist.classList.add("hide");
        info.classList.remove("hide");
        text.classList.remove("red-bg");
        text.classList.add("white-bg");
        isTracklist = false;
    }
}

function mobileAddToCart(){
    const mobilePrice = document.getElementById("mobile-price");
    mobilePrice.classList.add("hide");
    mobilePrice.classList.remove("inline-block");
    mobileAddToCartBtn.classList.add("hide");
    mobileAddToCartBtn.classList.remove("inline-block");
    document.getElementById("mobile-added-to-cart").classList.remove("hide");
}

function addToCart(){
    const price = document.getElementById("price");
    price.classList.add("hide");
    price.classList.remove("inline-block");
    addToCartBtn.classList.add("hide");
    addToCartBtn.classList.remove("inline-block");
    document.getElementById("added-to-cart").classList.remove("hide");
}