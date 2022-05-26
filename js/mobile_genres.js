const genre_list = ["ALL","ROCK","POP","JAZZ","R&B","ELECTRONIC","COUNTRY","R&B","ClASSICS","INDIE","FOLK","ABSOLUTE",
"METAL","WORLD"];
const genres_container = document.getElementById("genres-container");
genres_container.addEventListener("DOMContentLoaded", createGenres());

// create all the genres and append it to the container
function createGenres(){
    for (let index = 1; index <= 14; index++) {
        genres_container.appendChild(generateGenre(index));
    }
}

// generate one genre 
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

// return to the shop
function returnShop(){
    window.location.href = "../html/shop.html";
}