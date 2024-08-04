document.addEventListener('DOMContentLoaded', () => {
    const showPhotoBtn = document.getElementById('showPhotoBtn');
    const photoPopup = document.getElementById('photoPopup');
    const closeBtn = document.getElementById('closeBtn');

    showPhotoBtn.addEventListener('click', () => {
        photoPopup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        photoPopup.style.display = 'none';
    });

    // Close the popup if the user clicks outside of the photo
    window.addEventListener('click', (event) => {
        if (event.target === photoPopup) {
            photoPopup.style.display = 'none';
        }
    });
});
