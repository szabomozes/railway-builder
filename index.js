// Szelektorok
const menu = document.querySelector("#menu");
const nameInput = document.querySelector("#nameInput");
const easy_button = document.querySelector("#easy_button");
const hard_button = document.querySelector("#hard_button");
const description_button = document.querySelector("#description_button");
const start_button = document.querySelector("#start_button");
const back = document.querySelector("#back");
const game_easy = document.querySelector("#game_easy");
const game_hard = document.querySelector("#game_hard");
const win = document.querySelector("#win");
const win2 = document.querySelector("#win2");




//Eseménykezelők
let level = null;

//Gombok
easy_button.addEventListener("click", eClick);
function eClick() {
    if (level === "hard") {
        hard_button.style.backgroundColor = "";
    }
    level = "easy";
    easy_button.style.backgroundColor = "green";
}

hard_button.addEventListener("click", hClick);
function hClick() {
    if (level === "easy") {
        easy_button.style.backgroundColor = "";
    }
    level = "hard";
    hard_button.style.backgroundColor = "green";
}

description_button.addEventListener("click", showDescription);
function showDescription() {
    menu.setAttribute("hidden", "");
    description.removeAttribute("hidden");
}

back.addEventListener("click", bClick);
function bClick() {
    description.setAttribute("hidden", "");
    menu.removeAttribute("hidden");
}

start_button.addEventListener("click", startGame);
function startGame() {
    let name = nameInput.value;
    if (name === "" && level === null) {
        easy_button.style.backgroundColor = "red";
        hard_button.style.backgroundColor = "red";
        setTimeout(() => {
            easy_button.style.backgroundColor = "";
            hard_button.style.backgroundColor = "";
        }, 500);

        nameInput.style.borderColor = "red";
        nameInput.style.backgroundColor = "lightcoral";
        setTimeout(() => {
            nameInput.style.borderColor = "";
            nameInput.style.backgroundColor = "";
        }, 500);
        return;
    }
    if (level === null) {
        easy_button.style.backgroundColor = "red";
        hard_button.style.backgroundColor = "red";
        setTimeout(() => {
            easy_button.style.backgroundColor = "";
            hard_button.style.backgroundColor = "";
        }, 500);
        return;
    }
    if (name === "") {
        nameInput.style.borderColor = "red";
        nameInput.style.backgroundColor = "lightcoral";
        setTimeout(() => {
            nameInput.style.borderColor = "";
            nameInput.style.backgroundColor = "";
        }, 500);
        return;
    }
    if (level === "easy") {
        game_easy.removeAttribute("hidden");
        menu.setAttribute("hidden", "");
        game_function(name);
    }
    else {
        game_hard.removeAttribute("hidden");
        menu.setAttribute("hidden", "");
        game_function(name);
    }
}

//TIMER
let seconds;
let minutes;

function timer(time_space) {
    let timerInterval;
    seconds = 0;
    minutes = 0;
    function startTimer() {
        if (timerInterval) return;

        timerInterval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateTimerDisplay();
        }, 1000);
    }
    function updateTimerDisplay() {
        time_space.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    return { startTimer, stopTimer };
}


//Információk a játékosról 
function game_function(name) {
    const name_spaces = document.querySelectorAll("#name");
    const time_spaces = document.querySelectorAll("#time");
    let num;
    if (level === "easy") {
        num = 0;
    }
    else {
        num = 1;
    }
    name_spaces[num].innerHTML = name.toUpperCase();
    const gameTimer = timer(time_spaces[num]);
    gameTimer.startTimer();
}

//Random pályák

//5x5-ös pályák
function random_easy() {
    const easy_alap = [
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"]
    ];

    const e1 = easy_alap.map(row => row.slice());
    e1[0][1] = "pics/mld.png";
    e1[0][4] = "pics/o.png";
    e1[1][3] = "pics/bf.png";
    e1[1][4] = "pics/o.png";
    e1[2][0] = "pics/bf.png";
    e1[2][2] = "pics/mlu.png";
    e1[3][3] = "pics/o.png";
    e1[4][2] = "pics/mru.png";

    const e2 = easy_alap.map(row => row.slice());
    e2[0][0] = "pics/o.png";
    e2[0][2] = "pics/bv.png";
    e2[1][1] = "pics/mlu.png";
    e2[1][4] = "pics/mlu.png";
    e2[2][0] = "pics/bf.png";
    e2[2][1] = "pics/o.png";
    e2[2][2] = "pics/mru.png";
    e2[3][3] = "pics/o.png";

    const e3 = easy_alap.map(row => row.slice());
    e3[0][2] = "pics/bv.png";
    e3[1][4] = "pics/bf.png";
    e3[2][1] = "pics/mlu.png";
    e3[2][2] = "pics/bf.png";
    e3[3][1] = "pics/o.png";
    e3[4][1] = "pics/bv.png";
    e3[4][4] = "pics/mlu.png";

    const e4 = easy_alap.map(row => row.slice());
    e4[0][3] = "pics/bv.png";
    e4[2][0] = "pics/bf.png";
    e4[2][2] = "pics/mld.png";
    e4[2][4] = "pics/mld.png";
    e4[4][2] = "pics/o.png";
    e4[4][3] = "pics/mru.png";

    const e5 = easy_alap.map(row => row.slice());
    e5[0][2] = "pics/bv.png";
    e5[1][1] = "pics/mrd.png";
    e5[2][0] = "pics/bf.png";
    e5[2][3] = "pics/mru.png";
    e5[3][2] = "pics/bf.png";
    e5[3][3] = "pics/o.png";
    e5[4][1] = "pics/mlu.png";

    pályák = [e1, e2, e3, e4, e5];
    const random = Math.floor(Math.random() * 5);
    console.log(random);
    render(pályák[random]);
}

//7x7-es pályák
function random_hard() {
    const hard_alap = [
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
        ["pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png", "pics/e.png"],
    ];

    const h1 = hard_alap.map(row => row.slice());
    h1[0][1] = "pics/mld.png";
    h1[0][2] = "pics/o.png";
    h1[0][3] = "pics/o.png";
    h1[0][5] = "pics/bv.png";
    h1[1][0] = "pics/bf.png";
    h1[2][2] = "pics/bf.png";
    h1[3][3] = "pics/mru.png";
    h1[4][0] = "pics/mru.png";
    h1[4][2] = "pics/mld.png";
    h1[4][4] = "pics/bv.png";
    h1[4][6] = "pics/o.png";
    h1[6][3] = "pics/bv.png";

    const h2 = hard_alap.map(row => row.slice());
    h2[0][2] = "pics/o.png";
    h2[1][0] = "pics/bf.png";
    h2[1][2] = "pics/bv.png";
    h2[1][5] = "pics/mlu.png";
    h2[2][2] = "pics/bv.png";
    h2[2][6] = "pics/bf.png";
    h2[3][0] = "pics/mrd.png";
    h2[4][1] = "pics/o.png";
    h2[4][3] = "pics/mld.png";
    h2[5][1] = "pics/mrd.png";
    h2[6][2] = "pics/o.png";

    const h3 = hard_alap.map(row => row.slice());
    h3[0][2] = "pics/bv.png";
    h3[1][6] = "pics/bf.png";
    h3[2][0] = "pics/o.png";
    h3[2][2] = "pics/mru.png";
    h3[4][1] = "pics/o.png";
    h3[4][2] = "pics/mru.png";
    h3[4][4] = "pics/bv.png";
    h3[5][0] = "pics/bf.png";
    h3[5][5] = "pics/mld.png";
    h3[6][2] = "pics/o.png";
    h3[6][3] = "pics/mru.png";

    const h4 = hard_alap.map(row => row.slice());
    h4[1][3] = "pics/bf.png";
    h4[1][5] = "pics/mlu.png";
    h4[2][2] = "pics/mru.png";
    h4[3][1] = "pics/bv.png";
    h4[3][3] = "pics/o.png";
    h4[3][5] = "pics/bv.png";
    h4[4][2] = "pics/mlu.png";
    h4[4][4] = "pics/mld.png";
    h4[5][0] = "pics/bf.png";
    h4[5][5] = "pics/mru.png";

    const h5 = hard_alap.map(row => row.slice());
    h5[1][5] = "pics/mrd.png";
    h5[2][1] = "pics/bv.png";
    h5[2][2] = "pics/bv.png";
    h5[2][4] = "pics/mld.png";
    h5[4][2] = "pics/mrd.png";
    h5[4][4] = "pics/o.png";
    h5[5][1] = "pics/mlu.png";
    h5[5][3] = "pics/bf.png";


    pályák = [h1, h2, h3, h4, h5];
    const random = Math.floor(Math.random() * 5);
    console.log(random);
    render(pályák[random]);
}


//Pálya kirajzolása
function render(matrix) {
    let rows;
    if (matrix.length === 5) {
        rows = document.querySelectorAll("#palya_konnyu tr");
    }
    else {
        rows = document.querySelectorAll("#palya_nehez tr");
    }

    matrix.forEach((row, i) => {
        const cells = rows[i].querySelectorAll("td");
        row.forEach((cell, j) => {
            cells[j].querySelector("img").src = cell;
        });
    });
}
random_easy();
random_hard();


//Elemek lehelyezése

// Üres mező eseteén
const eTiles = document.querySelectorAll('img[src="pics/e.png"]');
eTiles.forEach(tile => {
    tile.dataset.rotation = "0";
    tile.addEventListener("click", () => {
        if (tile.src.includes("pics/sr.png")) {
            tile.src = "pics/cr.png";
            tile.dataset.rotation = "0";
            tile.style.transform = "rotate(0deg)";
        } else {
            tile.src = "pics/sr.png";
            tile.dataset.rotation = "0";
            tile.style.transform = "rotate(0deg)";
        }
        logBoardMatrix()
    });
    tile.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        let rotation = parseInt(tile.dataset.rotation);
        if (tile.src.includes("pics/sr.png")) {
            rotation = rotation === 0 ? 90 : 0;
        } else if (tile.src.includes("pics/cr.png")) {
            rotation = (rotation + 90) % 360;
        }
        logBoardMatrix()

        tile.style.transform = `rotate(${rotation}deg)`;
        tile.dataset.rotation = rotation.toString();
    });
    tile.addEventListener("mousedown", (event) => {
        if (event.button === 1) {
            event.preventDefault();
            tile.src = "pics/e.png";
            tile.style.transform = "rotate(0deg)";
            tile.dataset.rotation = "0";
            win.innerHTML = "";
            win2.innerHTML = "";

        }
    });
});


// A további mezők esetei
function setupTileBehavior(originalSrc, alternateSrc) {
    const tiles = document.querySelectorAll(`img[src="${originalSrc}"]`);
    tiles.forEach(tile => {
        tile.dataset.originalSrc = originalSrc;
        tile.addEventListener("click", () => {
            if (tile.src.includes(originalSrc)) {
                tile.src = alternateSrc;
            } else {
                tile.src = originalSrc;
            }
            logBoardMatrix()
        });
        tile.addEventListener("mousedown", (event) => {
            if (event.button === 1) {
                event.preventDefault();
                tile.src = tile.dataset.originalSrc;
                win.innerHTML = "";
                win2.innerHTML = "";
            }
        });
    });

}
setupTileBehavior("pics/bf.png", "pics/bfr.png");
setupTileBehavior("pics/bv.png", "pics/bvr.png");
setupTileBehavior("pics/mld.png", "pics/mldr.png");
setupTileBehavior("pics/mlu.png", "pics/mlur.png");
setupTileBehavior("pics/mrd.png", "pics/mrdr.png");
setupTileBehavior("pics/mru.png", "pics/mrur.png");


//Pálya ellenőrzése nyerés esetén
function logBoardMatrix() {
    const rows = level === "easy" ? document.querySelectorAll("#palya_konnyu tr") : document.querySelectorAll("#palya_nehez tr");
    const boardMatrix = [];
    rows.forEach(row => {
        const rowArray = [];
        const cells = row.querySelectorAll("td img");
        cells.forEach(cell => {
            const cellType = cell.src.split("/").pop();
            rowArray.push(cellType);
        });
        boardMatrix.push(rowArray);
    });

    const unwantedCells = ["e.png", "mld.png", "mrd.png", "mlu.png", "mru.png", "bf.png", "bv.png"];
    const hasUnwantedCells = boardMatrix.some(row =>
        row.some(cell => unwantedCells.includes(cell))
    );
    if (hasUnwantedCells) {
    } else {
        if (minutes > 0) {
            win.innerHTML = "Sikeresen teljesítetted a pályát " + minutes + " perc " + seconds + " másodperc alatt!";
            win2.innerHTML = "Sikeresen teljesítetted a pályát " + minutes + " perc " + seconds + " másodperc alatt!";
        }
        else {
            win.innerHTML = "Sikeresen teljesítetted a pályát " + seconds + " másodperc alatt!";
            win2.innerHTML = "Sikeresen teljesítetted a pályát " + seconds + " másodperc alatt!";
        }
    }
}



