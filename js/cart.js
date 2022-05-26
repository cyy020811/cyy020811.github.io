const prev = document.getElementById("prev");
const next = document.getElementById("next");
const cancel = document.getElementById("cancel");
const swipers = document.getElementsByClassName("dot");

let itemIndex = 1;
let width = window.innerWidth;
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);
cancel.addEventListener("click", cancelItem);

// Item adjustment for responsive design
if(width < 900){
    document.getElementById("your-cart").classList.remove("margin-left");
}


// show the previous item in the cart
function prevItem(){
    if(itemIndex > 1){
        itemIndex--;
        document.getElementById("item-num").innerHTML = "Item 1 of 2";
        document.getElementById("album-cover").setAttribute("src","../album-covers/ac1.jpeg");
        document.getElementById("album-name").innerHTML = "Ramones";
        document.getElementById("artist-name").innerHTML = "The Beatles";
        prev.classList.add("hide");
        swipers[0].classList.add("bgred");
        swipers[0].classList.remove("bgwhite");
        swipers[1].classList.add("bgwhite");
        swipers[1].classList.remove("bgred");
    }
}

// show the next item in the cart
function nextItem(){
    if(itemIndex == 1){
        itemIndex++;
        document.getElementById("item-num").innerHTML = "Item 2 of 2";
        document.getElementById("album-cover").setAttribute("src","../album-covers/ac2.jpeg");
        document.getElementById("album-name").innerHTML = "Unhappy Accident";
        document.getElementById("artist-name").innerHTML = "The Beatles";
        prev.classList.remove("hide");
        swipers[0].classList.remove("bgred");
        swipers[0].classList.add("bgwhite");
        swipers[1].classList.remove("bgwhite");
        swipers[1].classList.add("bgred");
        console.log("next");
    }
}

// delete the item in the cart
function cancelItem(){
    if(itemIndex == 1){
        nextItem();
    }
    else{
        prevItem();
    }
    document.getElementById("swiper").removeChild(swipers[1]);
    swipers[0].classList.remove("bgwhite");
    swipers[0].classList.add("bgred");
    document.getElementById("switcher").classList.remove("inline-block");
    document.getElementById("switcher").classList.add("hide");
    document.getElementsByClassName("price")[0].innerHTML = "$50.00AUD";
    document.getElementsByClassName("price")[1].innerHTML = "$50.00AUD";
    console.log("hide");
    document.getElementById("item-num").innerHTML = "Item 1 of 1";
}

// proceed to the checkout page
function proceedToCheckout(){
    window.location.href = "../html/checkout.html";
}