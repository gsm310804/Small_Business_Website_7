
const inputField = document.getElementById('new-headline');  
const updateButton = document.getElementById('update-button');
const ctaHeadline = document.getElementById('cta-headline');

updateButton.addEventListener('click', function() {
    const newText = inputField.value;
    if (newText.trim() !== '') {
        ctaHeadline.textContent = newText;
    }
}   );