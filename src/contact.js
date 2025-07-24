export function loadContact() {
    const content = document.getElementById('content');

    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours'
    hoursTitle.classList = 'hourstitle';
    
    const hours1 = document.createElement('p');
    hours1.textContent = 'Monday–Friday: 11am – 10pm'
    
    const hours2 = document.createElement('p');
    hours2.textContent = 'Saturday: 1pm – 11pm;'

    const hours3 = document.createElement('p')
    hours3.textContent = 'Sunday: 12pm - 6pm';

    const address = document.createElement('p');
    address.classList = 'address';
    address.textContent = `
    123 Greenway Blvd
    Portland, OR 97204`
    
    const phone = document.createElement('p');
    phone.classList = 'phone';
    phone.textContent = `
    Phone: (503) 555-1234`

    const email = document.createElement('p');
    email.classList = 'email';
    email.textContent = `Email: hello@vegehaven.com`;

    const text = document.createElement('p');
    text.classList = 'hometext';
    text.textContent = "Delight in the best of plant-based culinary excellence at our vegetarian restaurant. We serve an inspired menu full of flavorful, wholesome dishes made from fresh, local ingredients. From farm-fresh salads to hearty mains and decadent desserts, each plate is crafted to nourish and impress.";
    content.appendChild(text);

    const text2 = document.createElement('p');
    text2.classList = 'hometext2';
    text2.textContent = 'Come experience a warm, inviting space where great taste meets mindful dining.'
    content.appendChild(text2);

    content.appendChild(hoursTitle);
    content.appendChild(hours1);
    content.appendChild(hours2);
    content.appendChild(hours3);
    content.appendChild(address);
    content.appendChild(phone);
    content.appendChild(email);
}