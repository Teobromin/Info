// Paralelogramma objektum létrehozása
function Paralelogramma(sideA, sideB, height, angle) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.height = height;
    this.angle = angle;

    // Terület számolása magassággal
    this.calculateAreaWithHeight = function() {
        return this.sideA * this.height;
    };

    // Terület számolása szöggel és két oldallal
    this.calculateAreaWithAngle = function() {
        return this.sideA * this.sideB * Math.sin((this.angle * Math.PI) / 180);
    };
}

// Számolás és eredmények megjelenítése
function calculateArea() {
    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var height = parseFloat(document.getElementById("height").value);
    var angle = parseFloat(document.getElementById("angle").value);

    if (isNaN(sideA) || isNaN(sideB) || isNaN(height) || isNaN(angle) || sideA <= 0 || sideB <= 0 || height <= 0 || angle <= 0) {
        alert("Kérlek, adj meg érvényes pozitív számokat minden mezőben.");
        return;
    }

    // Paralelogramma objektum létrehozása
    var paralelogramma = new Paralelogramma(sideA, sideB, height, angle);

    // Terület számolása és eredmények megjelenítése
    var areaWithHeight = paralelogramma.calculateAreaWithHeight();
    var areaWithAngle = paralelogramma.calculateAreaWithAngle();

    document.getElementById("resultWithHeight").innerHTML = "Terület a magassággal: " + areaWithHeight;
    document.getElementById("resultWithAngle").innerHTML = "Terület a szöggel és két oldallal: " + areaWithAngle;
}
