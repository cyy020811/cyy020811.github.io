const prev = document.getElementById("prev-img");
const next = document.getElementById("next-img");
const swipers = document.getElementsByClassName("dot");
let itemIndex = 1;
let swiperIndex = 0;

// show the previos ad
function prevImg(){
    if(itemIndex > 1){
        swipers[swiperIndex].classList.remove("yellow-dot");
        swiperIndex--;
        itemIndex--;
        document.getElementById("ad").setAttribute("src","../resources/ad"+itemIndex.toString()+".png");
        swipers[swiperIndex].classList.add("yellow-dot");
    }
}

// show the next ad
function nextImg(){
    if(itemIndex < 3){
        swipers[swiperIndex].classList.remove("yellow-dot");
        swiperIndex++;
        itemIndex++;
        document.getElementById("ad").setAttribute("src","../resources/ad"+itemIndex.toString()+".png");
        swipers[swiperIndex].classList.add("yellow-dot");
    }
}

// go to the shop page
function shopNow(){
    window.location.href = "../html/shop.html";
}