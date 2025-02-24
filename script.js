document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    function updateGallery() {
        slides.forEach((slide) => slide.classList.remove("active")); // Hide all slides
        slides[index].classList.add("active"); // Show the current slide

        index = (index + 1) % slides.length; // Move to next image
    }

    setInterval(updateGallery, 3000); // Change image every 3 seconds
});