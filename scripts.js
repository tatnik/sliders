// Only for Slider--2
function sliderPlugin(activeSlide = 3, visibleCount = 5) {
  const slider = document.querySelector(".slider--2");
  const slides = slider.querySelectorAll(".slide");

  const slidesArray = Array.from(slides);

  slides[activeSlide].classList.add("active");
  setVisibility();

  /*  slide onClick */
  for (const slide of slides) {
    slide.addEventListener("click", () => {
      // Remove active class from all slides
      clearActiveClasses();
      // Add active class to the clicked slide
      slide.classList.add("active");
      activeSlide = slidesArray.indexOf(slide);
      setVisibility();
    });
  }

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
  }

  function setHide(n, isHide) {
    if (isHide) {
      slides[n].classList.add("hide");
    } else {
      slides[n].classList.remove("hide");
    }
  }

  function setVisibility() {
    let firstSlide = Math.max(0, activeSlide - Math.floor(visibleCount / 2));
    const lastSlide = Math.min(
      slides.length - 1,
      firstSlide + visibleCount - 1
    );
    firstSlide = Math.max(0, lastSlide - visibleCount + 1);
 
    for (let i = 0; i < slides.length; i += 1) {
      setHide(i, i < firstSlide || i > lastSlide);
    }
  }
}

sliderPlugin();
