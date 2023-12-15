document.addEventListener('DOMContentLoaded', function () {
    // Your existing code...

    // Get all project images
    const projectImages = document.querySelectorAll('.project img');

    // Add click event listener to each project image
    projectImages.forEach(image => {
        image.addEventListener('click', function () {
            // Create a modal for displaying the larger image
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `<img src="${this.src}" alt="Large Project Image">`;

            // Add the modal to the body
            document.body.appendChild(modal);

            // Close the modal when clicking outside the image
            modal.addEventListener('click', function () {
                document.body.removeChild(this);
            });
        });
    });
});