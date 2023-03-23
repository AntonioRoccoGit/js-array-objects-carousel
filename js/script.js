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
    myAutoInterval = setInterval(goPreviousl, 3000);
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

//aggiungiamo la possibilita di avere un clear on hover sullo slider
sliderItemsContainer.addEventListener("mouseenter", function () {
    clearInterval(myAutoInterval);
});
sliderItemsContainer.addEventListener("mouseout", function () {
    myAutoInterval = setInterval(goPreviousl, 3000);
});

//setto stato iniziale del mio intervallo
// let myAutoInterval = false;

// const autoPrevElm = myAutoPrev();

// //imposto l'autoplay
// function myAutoPrev() {
//     if(myAutoInterval === false) {
//         myAutoInterval = setInterval(goPreviousl, 3000);    
//     }

// }

////////////////////////////////////////////////////////////////////////////////
///////////////////////////MY FUNCTION

function imgInAGrid(myImgArray) {

    //grid img and thumbnail generator
    // for (let i = 0; i < myImgArray.length; i++) {

    //     let currentImg = myImgArray[i];

    //     sliderItemsContainer.innerHTML +=
    //         `<div class="item">
    //         <img src="${currentImg}" alt="">
    //         </div>`;
    //     thumbNailsItems.innerHTML +=
    //         `<div class="thumb-item">
    //         <img src="${currentImg}" alt="">
    //         </div>`;
    // };
    myImgArray.forEach((film) => {
        sliderItemsContainer.innerHTML +=
            `<div class="item">
            <img src="${film.image}" alt="">
            </div>`;
        thumbNailsItems.innerHTML +=
            `<div class="thumb-item">
            <img src="${film.image}" alt="">
            </div>`;
    });
}




function goPreviousl() {
    if (itemCounter === 0) {

        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        itemCounter = sliderItemsArray.length - 1;

        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");

    } else {

        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        //aumento il contantore
        itemCounter--;

        //aggiungo la classe  al nuovo item
        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");
    };
}

function goNext() {
    if (itemCounter === sliderItemsArray.length - 1) {

        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        itemCounter = 0;

        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");
    } else {

        //rimuovo classe precedente
        sliderItemsArray[itemCounter].classList.remove("active");
        thumbNailsItemsArrey[itemCounter].classList.remove("active");

        //aumento il contantore
        itemCounter++;

        //aggiungo la classe  al nuovo item
        sliderItemsArray[itemCounter].classList.add("active");
        thumbNailsItemsArrey[itemCounter].classList.add("active");
    }
}