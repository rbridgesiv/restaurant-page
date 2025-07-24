export function loadContact() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    content.appendChild('container');

    const header = document.createElement('h2');
    header.textContent = 'Contact';
    container.appendChild('header');

    const info = document.createElement('p');
    info.textContent = `Contact Us

    Green Haven Vegetarian Bistro
    123 Greenway Blvd
    Portland, OR 97204
    
    Phone: (503) 555-1234
    Email: hello@greenhavenbistro.com
    Website: www.greenhavenbistro.com
    
    Hours:
    Monday–Friday: 11am – 9pm
    Saturday–Sunday: 9am – 10pm`;

    container.appendChild('info');
    
}