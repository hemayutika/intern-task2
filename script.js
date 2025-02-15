let slideIndex = 0;
let startX = 0;

showSlides(slideIndex);

// Function to change slide manually
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to set a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n - 1);
}

// Function to display slides
function showSlides(n) {
    let slides = document.querySelectorAll(".slide");
    let thumbnails = document.querySelectorAll(".thumbnail");

    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.style.display = "none");
    thumbnails.forEach(thumb => thumb.classList.remove("active"));

    slides[slideIndex].style.display = "block";
    thumbnails[slideIndex].classList.add("active");
}

// Auto Slide every 3 seconds
setInterval(() => {
    changeSlide(1);
}, 3000);

// Touch/Swipe Support
document.querySelector(".slider-container").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector(".slider-container").addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX > endX + 50) changeSlide(1); // Swipe Left
    if (startX < endX - 50) changeSlide(-1); // Swipe Right
});