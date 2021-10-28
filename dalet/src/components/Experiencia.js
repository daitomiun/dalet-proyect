import React from "react";
import button from "../assets/right-arrow.png";


const Experiencia = () => {
  React.useEffect(() => {
    //----carousel logic----//
  
    // const myRef = React.useRef();
   
    const track = document.querySelector(".carousel__track");
    const slides= Array.from(track.children);
    const nextButton=document.querySelector('.carousel__button--right');
    const prevButton = document.querySelector(".carousel__button--left");
    const dotsNavs= document.querySelector('.carousel__nav');
    const dots= Array.from(dotsNavs.children);
    // console.log(track,nextButton,dotsNavs, prevButton, dots, slides)
    const slideWidth = slides[0].getBoundingClientRect().width;
    // console.log(slideSize, slideWidth)
    
    //arrange the slides next to one another



    const setSlidePosition=(slide,index)=>{
      slide.style.left = slideWidth * index + "px";

    }
    slides.forEach(setSlidePosition);

    const moveToSLide=(track,currentSlide, targetSlide)=>{
      track.style.transform = "translateX(-" + targetSlide.style.left + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    }

    const uptadeDots=(currentDot, targetDot)=>{
      currentDot.classList.remove("current-slide");
      targetDot.classList.add("current-slide");
    }

    const hideShowArrows=(slides,prevButton,nextButton,targetIndex)=>{
      if (targetIndex === 0) {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove("is-hidden");
      } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add("is-hidden");
      } else {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
      }
    }
    //when i click left, move slides to the left
    prevButton.addEventListener('click', e=>{
      const currentSlide = track.querySelector(".current-slide");
      const prevSlide = currentSlide.previousElementSibling;
      const currentDot = dotsNavs.querySelector(".current-slide");
      const prevDot = currentDot.previousElementSibling;
      const prevIndex = slides.findIndex((slide) => slide === prevSlide);

      
      moveToSLide(track, currentSlide, prevSlide);
      uptadeDots(currentDot, prevDot);
      hideShowArrows(slides, prevButton, nextButton, prevIndex);



    })


    //when i click right, move slides to the right
    nextButton.addEventListener('click', e=>{

      const currentSlide= track.querySelector('.current-slide');
      const nextSlide=currentSlide.nextElementSibling;
      const currentDot=dotsNavs.querySelector('.current-slide')
      const nextDot= currentDot.nextElementSibling;
      const nextIndex=slides.findIndex(slide=>slide===nextSlide)

      moveToSLide(track, currentSlide, nextSlide)
      uptadeDots(currentDot, nextDot);
      hideShowArrows(slides, prevButton, nextButton, nextIndex);

      

      // console.log(amountToMove)
    })

    dotsNavs.addEventListener('click', e=>{
      //whaat indicator was clicked on?
      const targetDot=e.target.closest('button');
 
      if(!targetDot) return;
      
      const currentSlide= track.querySelector('.current-slide');
      const currentDot= dotsNavs.querySelector('.current-slide');
      const targetIndex= dots.findIndex(dot=>dot===targetDot);
      const targetSlide = slides[targetIndex];

      moveToSLide(track, currentSlide, targetSlide);
      uptadeDots(currentDot, targetDot);
      hideShowArrows(slides, prevButton, nextButton, targetIndex);
      
      // currentDot.classList.remove('current-slide');
      // targetDot.classList.add('current-slide');

    })



    //when I click the nav idicators,move to that slide

  }, []);


  return (
    <>
      <div className="background red">
        <h1>experiencia</h1>
        <div className="carousel">
          <button className="carousel__button carousel__button--left is-hidden">
            <img className="left" srcset={button} alt=""></img>
          </button>

          <div className="carousel__track-container">
            <ul className="carousel__track">
              <li className="carousel__slide current-slide">
                <img
                  className="carousel__image"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt=""
                  srcset=""
                />
              </li>
              <li className="carousel__slide">
                <img
                  className="carousel__image"
                  src="https://www.gettyimages.es/gi-resources/images/500px/983794168.jpg"
                  alt=""
                  srcset=""
                />
              </li>
              <li className="carousel__slide">
                <img
                  className="carousel__image"
                  srcSet=""
                  alt=""
                  srcset=""
                />
              </li>
            </ul>
          </div>

          <button className="carousel__button carousel__button--right">
            <img className="right" srcSet={button} alt=""></img>
          </button>

          <div className="carousel__nav">
            <button className="carousel__indicator current-slide"></button>
            <button className="carousel__indicator"></button>
            <button className="carousel__indicator"></button>
          </div>
        </div>
      </div>
    </>
  );
    
  
};

export default Experiencia;
