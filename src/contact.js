export function loadContact() {
    const content = document.getElementById('content');

    const header = document.createElement('h2');
    header.textContent = 'Contact';
    content.appendChild(header);

    const address = document.createElement('p');
    address.classList = 'address';
    address.textContent = `
    Green Haven Vegetarian Bistro
    123 Greenway Blvd
    Portland, OR 97204`
    
    // const contact = document.createElement('p');
    // contact.classList = 'contact';
    // contact.textContent = `
    // Phone: (503) 555-1234
    // Email: hello@greenhavenbistro.com
    // Website: www.greenhavenbistro.com`
    
    // const hours = document.createElement('p');
    // hours.classList = 'hours';
    // hours.textContent = `
    // Hours:
    // Monday–Friday: 11am – 9pm
    // Saturday–Sunday: 9am – 10pm`;

    content.appendChild(address);
    content.appendChild(contact);
    content.appendChild(hours);
}