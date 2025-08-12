// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Change the text of an element when a button is clicked
    const btn = document.getElementById('changeTextBtn');
    const output = document.getElementById('outputText');

    btn.addEventListener('click', function () {
        output.textContent = 'Hello, JavaScript is working!';
    });

    // Simple form validation
    const form = document.getElementById('sampleForm');
    const nameInput = document.getElementById('nameInput');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (nameInput.value.trim() === '') {
            errorMsg.textContent = 'Name is required!';
        } else {
            errorMsg.textContent = '';
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
