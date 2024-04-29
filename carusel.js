function initializeImageSlider(containerSelector) {
    let currentImageIndex = 0;
    const container = document.querySelector(containerSelector);
    const images = container.querySelectorAll('img');
    const totalImages = images.length;
    const countSpan = container.querySelector('.count');

    // Function to show current image
    function showImage(index) {
        images.forEach(image => {
            image.style.display = 'none';
        });
        images[index].style.display = 'block';
        countSpan.textContent = `[${index + 1}/${totalImages}]`;
    }

    showImage(currentImageIndex);

    // Function to handle next image
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    // Function to handle previous image
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
        
    }

    // Add event listener to the image container
    container.addEventListener('click', function(event) {
        const containerWidth = container.offsetWidth;
        const clickX = event.clientX - container.getBoundingClientRect().left;

        if (clickX < containerWidth / 2) {
            prevImage(); // Clicked on the left side of the image
        } else {
            nextImage(); // Clicked on the right side of the image
        }
    });

    
}


initializeImageSlider('.img_carusel1.img_slider');
initializeImageSlider('.img_carusel2.img_slider');
initializeImageSlider('.img_carusel3.img_slider');
initializeImageSlider('.img_carusel4.img_slider');
initializeImageSlider('.img_carusel5.img_slider');
initializeImageSlider('.img_carusel6.img_slider');
initializeImageSlider('.img_carusel7.img_slider');
initializeImageSlider('.img_carusel8.img_slider');
initializeImageSlider('.img_carusel9.img_slider');
initializeImageSlider('.img_carusel10.img_slider');
initializeImageSlider('.img_carusel11.img_slider');
initializeImageSlider('.img_carusel12.img_slider');
initializeImageSlider('.img_carusel13.img_slider');
initializeImageSlider('.img_carusel14.img_slider');