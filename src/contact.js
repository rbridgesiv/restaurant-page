export function loadContact() {
    const content = document.getElementById('content');

    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours'
    
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

    
    
    content.appendChild(hoursTitle);
    content.appendChild(hours1);
    content.appendChild(hours2);
    content.appendChild(hours3);
    content.appendChild(address);
    content.appendChild(phone);
    content.appendChild(email);
}