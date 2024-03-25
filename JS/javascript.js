document.addEventListener('DOMContentLoaded', function() {
    // Example function to display a welcome message in the console
    function displayWelcomeMessage() {
        console.log('Welcome to Coug Cafe!');
    }

    // Call the displayWelcomeMessage function
    displayWelcomeMessage();

    // Example function to handle newsletter subscription
    function handleNewsletterSubscription() {
        const subscriptionForm = document.querySelector('form');
        subscriptionForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission to server
            let emailInput = document.querySelector('input[type="email"]').value;
            if (emailInput) {
                console.log(`Thank you for subscribing, ${emailInput}!`);
                // You can add code here to handle the subscription, such as sending it to a server or displaying a confirmation message.
            } else {
                console.log('Please enter a valid email address.');
            }
        });
    }

    // Call the handleNewsletterSubscription function if the form exists
    if(document.querySelector('form')) {
        handleNewsletterSubscription();
    }
});
