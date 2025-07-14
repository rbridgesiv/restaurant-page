export function loadPageContent() {
    const content = document.getElementById('content');

    const header = document.createElement('h2');
    header.textContent = 'Welcome to Our Vegetarian Haven'
    content.appendChild(header);

    const img = document.createElement('img');
    img.src = "../public/images/restaurant_image.png";
    content.appendChild(img);

    const text = document.createElement('p');
    text.textContent = "Delight in the best of plant-based culinary excellence at our vegetarian restaurant. We serve an inspired menu full of flavorful, wholesome dishes made from fresh, local ingredients. From farm-fresh salads to hearty mains and decadent desserts, each plate is crafted to nourish and impress. Come experience a warm, inviting space where great taste meets mindful dining.";
    content.appendChild(text);
};