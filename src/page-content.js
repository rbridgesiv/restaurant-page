export function loadPageContent() {
    const content = document.getElementById('content');

    const header = document.createElement('h2');
    header.textContent = 'Welcome to Vegetarian Haven'
    content.appendChild(header);

    const headline = document.createElement('h5');
    headline.textContent = 'Where the garden meets the table.'
    headline.classList = 'headline';
    content.appendChild(headline);

    const img = document.createElement('img');
    img.src = "/images/restaurant_image.png";
    content.appendChild(img);

    
};