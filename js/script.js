//creiamo il nostro array di immagini
const filmImages = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


//BOTTONE START PAUSE
const btnP = document.querySelector("#replay");
console.log(btnP);
btnP.addEventListener("click", startPause);
//seleziono gli elementi del dom che andranno manipolati
let sliderItemsContainer = document.querySelector(".slider-items"); //contenitore img
let thumbNailsItems = document.querySelector(".thumbnails-image");
const nextUp = document.querySelector(".next-up");// bottone next
const prevDown = document.querySelector(".prev-down");//bottone prev

//genero le grid dell'immagini
imgInAGrid(filmImages);

//setto stato iniziale della pagina
let itemCounter = 0;
const thumbNailsItemsArrey = document.querySelectorAll(".thumb-item");
const sliderItemsArray = document.querySelectorAll(".item");
sliderItemsArray[itemCounter].classList.add("active");
thumbNailsItemsArrey[itemCounter].classList.add("active");

//impostiamo il bottone next
nextUp.addEventListener("click", function () {
    goNext();
    clearInterval(myAutoInterval);
    myAutoInterval = setInterval(goNext, 3000);
});

//imposto il bottone prev
prevDown.addEventListener("click", function () {
    //do al bottone la possibilita di tornrare indietro
    goPreviousl();
    //blocco il vecchio intervallo
    clearInterval(myAutoInterval);
    myAutoInterval = setInterval(goPreviousl, 3000);

});
////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////AUTO PLAY

myAutoInterval = setInterval(goPreviousl, 3000);

////////////////////////////////////////////////////////////////////////////////
///////////////////////////MY FUNCTION

function imgInAGrid(myImgArray) {

    //grid img and thumbnail generator
    myImgArray.forEach((film, index) => {
        sliderItemsContainer.innerHTML +=
            `<div class="item">
                <img src="${film.image}" alt="">
                <section class="image-text">
                    <h2>${film.title}</h2>
                    <p>${film.text}</p>
                </section>
            </div>`;
        
        thumbImg = document.createElement("div");
        thumbImg.classList.add("thumb-item");
        thumbImg.innerHTML = `<img src="${film.image}" alt="">`;
        thumbImg.addEventListener("click", function() {
            clearInterval(myAutoInterval);
            hideDiscoverImg(index);
            myAutoInterval = setInterval(goPreviousl, 3000);

        });
        thumbNailsItems.append(thumbImg);
    });
};

function goPreviousl() {
    if (itemCounter === 0) {
       hideDiscoverImg((sliderItemsArray.length - 1));
    } else {
        hideDiscoverImg((itemCounter - 1));
    };
};

function goNext() {
    if (itemCounter === sliderItemsArray.length - 1) {
        hideDiscoverImg(0);
    } else {
        hideDiscoverImg((itemCounter + 1));
    }
};

function startPause() {
    innerBtn = document.querySelector("#replay-icon");
    if (myAutoInterval === null) {
        myAutoInterval = setInterval(goPreviousl, 3000);
        innerBtn.classList.remove("fa-regular");
        innerBtn.classList.remove("fa-circle-play");
        innerBtn.classList.add("fa-solid");
        innerBtn.classList.add("fa-pause");
    }else {
        clearInterval(myAutoInterval);
        myAutoInterval = null;
        innerBtn.classList.remove("fa-solid");
        innerBtn.classList.remove("fa-pause");
        innerBtn.classList.add("fa-regular");
        innerBtn.classList.add("fa-circle-play");
    }
};

function hideDiscoverImg(counter){
    
    sliderItemsArray[itemCounter].classList.remove("active");
    thumbNailsItemsArrey[itemCounter].classList.remove("active");

    itemCounter = counter; 

    sliderItemsArray[itemCounter].classList.add("active");
    thumbNailsItemsArrey[itemCounter].classList.add("active");
};