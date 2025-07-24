export function loadMenu() {
    const content = document.getElementById('content');
    
    const header = document.createElement('h2');
    header.textContent = 'Menu';
    content.appendChild(header);

    // === Starters ===
    const starterHead = document.createElement('h3');
    starterHead.textContent = 'Starters';
    content.appendChild(starterHead);

    const gardenSalad = document.createElement('h4');
    gardenSalad.textContent = 'Garden Fresh Salad';
    content.appendChild(gardenSalad);

    const saladIng = document.createElement('p');
    saladIng.textContent = 'Mixed greens, cherry tomatoes, cucumbers, olives, and lemon vinaigrette';
    content.appendChild(saladIng);

    const mushroomCaps = document.createElement('h4');
    mushroomCaps.textContent = 'Stuffed Mushroom Caps';
    content.appendChild(mushroomCaps);

    const mushroomIng = document.createElement('p');
    mushroomIng.textContent = 'Baked mushrooms filled with herbed ricotta and spinach';
    content.appendChild(mushroomIng);

    const cornFritters = document.createElement('h4');
    cornFritters.textContent = 'Golden Corn Fritters';
    content.appendChild(cornFritters);

    const cornIng = document.createElement('p');
    cornIng.textContent = 'Crispy corn cakes served with avocado-lime dip';
    content.appendChild(cornIng);

    // === Mains ===
    const mainsHead = document.createElement('h3');
    mainsHead.textContent = 'Mains';
    content.appendChild(mainsHead);

    const pestoPasta = document.createElement('h4');
    pestoPasta.textContent = 'Creamy Pesto Pasta';
    content.appendChild(pestoPasta);

    const pastaIng = document.createElement('p');
    pastaIng.textContent = 'Linguine tossed in basil pesto with sun-dried tomatoes and pine nuts';
    content.appendChild(pastaIng);

    const chickpeaCurry = document.createElement('h4');
    chickpeaCurry.textContent = 'Spiced Chickpea Curry';
    content.appendChild(chickpeaCurry);

    const curryIng = document.createElement('p');
    curryIng.textContent = 'Hearty chickpeas in a rich tomato and coconut sauce, served with jasmine rice';
    content.appendChild(curryIng);

    const lasagna = document.createElement('h4');
    lasagna.textContent = 'Roasted Vegetable Lasagna';
    content.appendChild(lasagna);

    const lasagnaIng = document.createElement('p');
    lasagnaIng.textContent = 'Layers of zucchini, bell pepper, eggplant, and béchamel';
    content.appendChild(lasagnaIng);

    // === Sandwiches & Bowls ===
    const sandwichesHead = document.createElement('h3');
    sandwichesHead.textContent = 'Sandwiches & Bowls';
    content.appendChild(sandwichesHead);

    const halloumiWrap = document.createElement('h4');
    halloumiWrap.textContent = 'Grilled Halloumi Wrap';
    content.appendChild(halloumiWrap);

    const wrapIng = document.createElement('p');
    wrapIng.textContent = 'Halloumi, arugula, roasted peppers, and hummus in a warm wrap';
    content.appendChild(wrapIng);

    const quinoaBowl = document.createElement('h4');
    quinoaBowl.textContent = 'Quinoa Power Bowl';
    content.appendChild(quinoaBowl);

    const quinoaIng = document.createElement('p');
    quinoaIng.textContent = 'Quinoa, black beans, avocado, sweet potato, and tahini drizzle';
    content.appendChild(quinoaIng);

    // === Desserts ===
    const dessertsHead = document.createElement('h3');
    dessertsHead.textContent = 'Desserts';
    content.appendChild(dessertsHead);

    const mousse = document.createElement('h4');
    mousse.textContent = 'Vegan Chocolate Mousse';
    content.appendChild(mousse);

    const mousseIng = document.createElement('p');
    mousseIng.textContent = 'Silky smooth mousse made with dark chocolate and coconut cream';
    content.appendChild(mousseIng);

    const carrotCake = document.createElement('h4');
    carrotCake.textContent = 'Carrot Walnut Cake';
    content.appendChild(carrotCake);

    const carrotIng = document.createElement('p');
    carrotIng.textContent = 'Moist spiced cake topped with cream cheese frosting';
    content.appendChild(carrotIng);

    // === Drinks ===
    const drinksHead = document.createElement('h3');
    drinksHead.textContent = 'Drinks';
    content.appendChild(drinksHead);

    const lemonade = document.createElement('h4');
    lemonade.textContent = 'Fresh Mint Lemonade';
    content.appendChild(lemonade);

    const hibiscusTea = document.createElement('h4');
    hibiscusTea.textContent = 'Iced Hibiscus Tea';
    content.appendChild(hibiscusTea);

    const turmericLatte = document.createElement('h4');
    turmericLatte.textContent = 'Golden Turmeric Latte';
    turmericLatte.classList = 'last';
    content.appendChild(turmericLatte);
}