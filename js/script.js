// document.querySelectorAll('.quick-view').forEach(button => {
//     button.addEventListener('click', () => {
//         alert('Quick view button clicked');
//     });
// });

// about js

document.addEventListener('DOMContentLoaded', () => {
    // Thumbnail click event to change the main image
    document.querySelectorAll('.thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            document.querySelector('.main-img').src = this.src;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Get all the "Quick View" buttons
    const quickViewButtons = document.querySelectorAll('.btn-danger');

    // Add click event listener to each button
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the product name
            const productName = this.parentElement.querySelector('.card-title').innerText;
            // Show an alert with the product name
            alert(`Quick View: ${productName}`);
        });
    });
});
