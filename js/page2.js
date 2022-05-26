const product_list = document.getElementById("product-list");
const all_genres = document.getElementById("all-genres");
const genres = document.getElementById("genres");
const name_list = ["Around the bush", "Unhappy accident","Battleborn","Eye for an eye","No basis"
,"Beginner's luck","Death of roses","No justice","Life knowledge","Rain check","Cat napped","Down in flames"
,"Honesty","Greener grass","Beads","Death's dead","Zero experience","First chance","Bank fault"
,"Basket case","Fourth dimension","Five-leaf clover","Sleeping dogs","Atmos","God's advocate","No foundations"
,"Bare to the bone","For two songs","Let's do this","Dark matters","First chance","Devil's advocate"
,"Chaos","Beyond infinity","Hold the phone","All ears","Time flies","Apparatus","Time flies","Once bitten"
,"Emergency","Bonus","Around the bush","Golden lining","Cutting corners","Dedication","MVP","Cookie cutter","Bankrupcy"
,"No comment","Zero gravity","Ice cold","Final hour","Chained down","Tongue and cheeks"];
const genre_list = ["ALL","ROCK","POP","JAZZ","R&B","ELECTRONIC","COUNTRY","R&B","ClASSICS","INDIE","FOLK","ABSOLUTE",
"METAL","WORLD"];
let height = window.innerHeight;
let width = window.innerWidth;
product_list.addEventListener("DOMContentLoaded", createProductList());
genres.addEventListener("DOMContentLoaded", createGenres());
all_genres.addEventListener("click",showAllGenres);
document.getElementById("prev").addEventListener("click",prevPage);
const genre = document.getElementsByClassName("genre");

// responsive design that shows all genres in an individual page
if(width <= 760){
    for (let i = 6; i < 10; i++) {
        genre[i].classList.add("hide");
    }
    all_genres.removeEventListener("click", showAllGenres);
    all_genres.addEventListener("click",mobileGenres);
}

// go to the mobile version of genres
function mobileGenres(){
    window.location.href = "../html/mobile_genres.html";
}

// go to the previous page(shop)
function prevPage(){
    window.location.href = "../html/shop.html";
}

// create all the products and append them to the product list
function createProductList() {
    for (let index = 25; index <= 48; index++) {
        product_list.appendChild(generateAlbum(index));
    }
}

// create all the genres and append them to the genres
function createGenres() {
    for (let index = 1; index <= 10; index++) {
        genres.appendChild(generateGenre(index));
    }
    console.log("Genre created");
}

// show more genres by creating more and append them to the same section
function showAllGenres(){
    for (let index = 11; index <= 14; index++) {
        genres.appendChild(generateGenre(index));
    }
}

// generate a product that is going to be appended to the product list
function generateAlbum(num){
    let container = document.createElement("div");
    container.classList.add("album-container");
    let cover = document.createElement("img");
    cover.setAttribute("src","../album-covers/ac"+ num.toString()+".jpeg");
    let name = document.createElement("p");
    name.classList.add("line-height","red","din");
    name.innerHTML = name_list[num-1];
    let price = document.createElement("p");
    price.classList.add("zero-line-height", "din", "white");
    price.innerHTML = "$50.00 AUD"
    container.appendChild(cover);
    container.appendChild(name);
    container.appendChild(price);
    return container;
}

// generate a genre that's going to be appendd to the genres
function generateGenre(num){
    let container = document.createElement("div");
    container.classList.add("genre");
    let cover = document.createElement("img");
    cover.classList.add("genre-image");
    cover.setAttribute("src","../genres/g"+ num.toString()+".png");
    let name = document.createElement("p");
    name.innerHTML = genre_list[num-1];
    name.classList.add("din", "genre-name", "white");
    container.appendChild(cover);
    container.appendChild(name);
    return container;
}