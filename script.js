//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('btn');
    const outputDiv = document.getElementById('output');

    button.addEventListener('click', async () => {
        const text = document.getElementById('text').value;
        const delay = parseInt(document.getElementById('delay').value);

        if (!text || isNaN(delay)) {
            outputDiv.textContent = "Please enter valid text and delay.";
            return;
        }

        outputDiv.textContent = "Loading...";

        await displayMessageAfterDelay(text, delay);
    });

    async function displayMessageAfterDelay(message, delay) {
        await new Promise(resolve => setTimeout(resolve, delay));
        outputDiv.textContent = message;
    }
});