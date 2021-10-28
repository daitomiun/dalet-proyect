

//----carousel logic----//

const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNavs = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNavs.children);
console.log(track, nextButton, dotsNavs, prevButton);


//when i click left, move slidees to the left
//when i click right, move slidees to the right
//when I click the nav idicators,move to that slide