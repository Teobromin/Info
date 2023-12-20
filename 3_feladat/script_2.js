// Felhasználótól származó sztringek
const userStringList = [];

// Bemeneti mező értékének hozzáadása a listához
function addString() {
    const inputElement = document.getElementById('inputString');
    const userInput = inputElement.value.trim();

    if (userInput !== '') {
        userStringList.push(userInput);
        inputElement.value = ''; // Töröljük a bemeneti mezőt
    } else {
        alert('Kérem, adjon meg érvényes sztringet.');
    }
}

// Véletlenszerű sztringek kiválasztása
function getRandomStrings() {
    if (userStringList.length < 3) {
        alert('Kérem, adjon meg legalább 3 sztringet a választáshoz.');
        return;
    }

    // Véletlenszerűen választunk három sztringet
    const selectedStrings = getRandomElements(userStringList, 3);

    // Az eredmény kiírása a HTML oldalra
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Véletlenszerű sztringek: ' + selectedStrings.join(', ');
}

// Véletlenszerű elemek kiválasztása egy tömbből
function getRandomElements(array, count) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
