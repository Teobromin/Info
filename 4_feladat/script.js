// Definiáljuk a termék típust
function addProduct() {
    const productNameInput = document.getElementById('productName');
    const productPriceInput = document.getElementById('productPrice');

    const productName = productNameInput.value;
    const productPrice = parseFloat(productPriceInput.value);

    if (productName && !isNaN(productPrice)) {
        const newProduct = { name: productName, price: productPrice };
        products.push(newProduct);

        // Frissítjük a termék listát és a statisztikákat
        displayProducts();
        displayStatistics();
    } else {
        alert('Kérlek töltsd ki mindkét mezőt helyesen!');
    }

    // Mezők ürítése
    productNameInput.value = '';
    productPriceInput.value = '';
}

// Függvény a termékek listájának megjelenítéséhez
function displayProducts() {
    const productListDiv = document.getElementById('productList');
    if (!productListDiv) return;

    productListDiv.innerHTML = '';

    products.forEach((product) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `<div class="product-info"><span class="product-name">${product.name}</span>: <span class="product-price">${product.price} Ft</span></div>`;
        productListDiv.appendChild(productDiv);
    });
}

// Függvény a statisztikák megjelenítéséhez
function displayStatistics() {
    const cheapestProductNameSpan = document.getElementById('cheapestProductName');
    const averagePriceSpan = document.getElementById('averagePrice');
    const priceDeviationSpan = document.getElementById('priceDeviation');

    if (!cheapestProductNameSpan || !averagePriceSpan || !priceDeviationSpan) return;

    if (products.length > 0) {
        const cheapestProduct = products.reduce((prev, current) => (prev.price < current.price ? prev : current));
        cheapestProductNameSpan.textContent = cheapestProduct.name;

        const totalPrices = products.reduce((sum, product) => sum + product.price, 0);
        const averagePrice = totalPrices / products.length;
        averagePriceSpan.textContent = averagePrice.toFixed(2);

        const priceDifferences = products.map((product) => Math.abs(product.price - averagePrice));
        const priceDeviation = priceDifferences.reduce((sum, diff) => sum + diff, 0) / products.length;
        priceDeviationSpan.textContent = priceDeviation.toFixed(2);
    } else {
        cheapestProductNameSpan.textContent = '';
        averagePriceSpan.textContent = '';
        priceDeviationSpan.textContent = '';
    }
}

// Tömb a termékek tárolásához
const products = [];
