document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');

    galleryItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            const img = item.querySelector('.image-container img');
            img.style.filter = 'grayscale(100%) blur(5px) brightness(40%)';
            img.style.transform = 'scale(1.05)';
        });

        item.addEventListener('mouseout', () => {
            const img = item.querySelector('.image-container img');
            img.style.filter = 'none';
            img.style.transform = 'none';
        });

        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('.image-container img').src;
            lightboxImg.src = imgSrc;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});