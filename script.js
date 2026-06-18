const colorCodeContainer = document.getElementById("color-code")
const optionContainer = document.getElementById("options-container")

let randomColor = null;

let score = 0;

function generateRandomNumberBetween(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function generateRandomColorRGB() {
    const red = generateRandomNumberBetween(0, 255);
    const green = generateRandomNumberBetween(0, 255);
    const blue = generateRandomNumberBetween(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function incrementScore() {
    score += 1;
    document.getElementById('score').innerText = score;
}

function validateResult(el) {
    const selectedColor = el.target.style.backgroundColor;

    if (selectedColor === randomColor) {
        incrementScore();
        startGame();
    }
}

function startGame() {
    optionContainer.innerHTML = "";

    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

    const ansIndex = generateRandomNumberBetween(0, 5);

    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');

        if (i === ansIndex) {
            div.style.backgroundColor = randomColor;
        } else {
            div.style.backgroundColor = generateRandomColorRGB();
        }

        div.addEventListener("click", validateResult);

        optionContainer.append(div);
    }
}

window.addEventListener("load", () => startGame())