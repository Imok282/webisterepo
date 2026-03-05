// script.js for the Ross AI landing page

document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
    const formattedDate = currentDate.toLocaleString('en-GB', options).replace(',', ''); // Format to YYYY-MM-DD HH:MM:SS

    // Display current date and time on the landing page
    const dateElement = document.createElement('div');
    dateElement.id = 'current-date';
    dateElement.textContent = `Current Date and Time (UTC): ${formattedDate}`;
    document.body.appendChild(dateElement);

    // Interactive functionality for additional actions
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.addEventListener('click', () => {
        alert('Button clicked! This is an interactive feature.');
    });
    document.body.appendChild(button);
});
