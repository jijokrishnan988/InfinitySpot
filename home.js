// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all action buttons
    const actionButtons = document.querySelectorAll('.action-btn');

    // Add click event to each button
    actionButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Get the movie title from the card
            const movieTitle = e.target.parentElement.querySelector('h3').innerText;
            
            // Show a simple alert message
            alert(`Thanks for supporting ${movieTitle}! Don't forget to subscribe to our channel.`);
        });
    });

});
