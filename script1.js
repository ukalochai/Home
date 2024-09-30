let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].classList.remove('active');
    
    // Update current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides; 

    // Show the new slide
    slides[currentSlide].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-images');
    slides.forEach((slide, index) => {
        if (index !== currentSlide) {
            slide.style.display = 'none'; // Hide all but the first set of images
        } else {
            slide.style.display = 'flex'; // Show first set of images
            slide.classList.add('active'); // Set the first slide as active
        }
    });
});

