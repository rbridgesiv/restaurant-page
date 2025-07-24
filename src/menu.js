export function loadMenu() {
    const content = document.getElementById('content');
    const container = document.createElement('div');
    content.appendChild('container');
    
    const header = document.createElement('h2');
    header.textContent('Menu');
    container.appendChild('header');

    const menu = document.createElement('p');
    menu.textContent = `Green Haven – Vegetarian Bistro Menu

    Starters
    • Garden Fresh Salad – Mixed greens, cherry tomatoes, cucumbers, olives, and lemon vinaigrette
    • Stuffed Mushroom Caps – Baked mushrooms filled with herbed ricotta and spinach
    • Golden Corn Fritters – Crispy corn cakes served with avocado-lime dip
    
    Mains
    • Creamy Pesto Pasta – Linguine tossed in basil pesto with sun-dried tomatoes and pine nuts
    • Spiced Chickpea Curry – Hearty chickpeas in a rich tomato and coconut sauce, served with jasmine rice
    • Roasted Vegetable Lasagna – Layers of zucchini, bell pepper, eggplant, and béchamel
    
    Sandwiches & Bowls
    • Grilled Halloumi Wrap – Halloumi, arugula, roasted peppers, and hummus in a warm wrap
    • Quinoa Power Bowl – Quinoa, black beans, avocado, sweet potato, and tahini drizzle
    
    Desserts
    • Vegan Chocolate Mousse – Silky smooth mousse made with dark chocolate and coconut cream
    • Carrot Walnut Cake – Moist spiced cake topped with cream cheese frosting
    
    Drinks
    • Fresh Mint Lemonade
    • Iced Hibiscus Tea
    • Golden Turmeric Latte`;
    
    container.appendChild('menu');

}