const resetButton = document.getElementById('reset-button');

const bombCountHundreds = document.getElementById('bombs-hundreds');
const bombCountTens = document.getElementById('bombs-tens');
const bombCountOnes = document.getElementById('bombs-ones');

const timerHundreds = document.getElementById('timer-hundreds');
const timerTens = document.getElementById('timer-tens');
const timerOnes = document.getElementById('timer-ones');

let startButtons;
let gameButtons;

// Handles the 'bombs-left' element
let bombCount = { // bombCount object to store data
    totalBombs: 0,
    hundreds: 0,
    tens: 0,
    ones: 0
}
function setBombCount (totalBombs) {
    bombCount.totalBombs = totalBombs;

    // Setting up bombCount object
    bombCount.hundreds = Math.floor(bombCount.totalBombs/100);
    bombCount.tens = Math.floor((bombCount.totalBombs - (bombCount.hundreds*100))/10);
    bombCount.ones = (bombCount.totalBombs-(bombCount.hundreds * 100) - (bombCount.tens * 10));

    // Modifying HTML for webpage
    bombCountHundreds.innerHTML = bombCount.hundreds;
    bombCountTens.innerHTML = bombCount.tens;
    bombCountOnes.innerHTML = bombCount.ones;
}

// Handles the 'timer' element
let timer = {
    time: 0,
    hundreds: 0,
    tens: 0,
    ones: 0
}
function setTime (currentTime) {
    timer.time = currentTime;

    // Setting up timer Object
    timer.hundreds = Math.floor(timer.time/100);
    timer.tens = Math.floor((timer.time - (timer.hundreds*100))/10);
    timer.ones = (timer.time - (timer.hundreds * 100) - (timer.tens * 10));

    // Modifying HTML for webpage
    timerHundreds.innerHTML = timer.hundreds;
    timerTens.innerHTML = timer.tens;
    timerOnes.innerHTML = timer.ones;
}

const minesweeperBoard = document.getElementById('minesweeper-tiles')

let tileArray = []; // Stores tile objects

let bombLocations = [];
let firstTile = 0;

const leftEdgeTiles = [0, 17, 34, 51, 68, 85, 102, 119, 136];
const rightEdgeTiles = [16, 33, 50, 67, 84, 101, 118, 135, 152];
const topEdgeTiles = [0, 1, 2, 3, 4, 5, 6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16];
const bottomEdgeTiles = [136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152];

let adjacency = {
    /*
        -18 -17 -16
        -1   0  +1
        +16 +17 +18
    */
    suroundingAdd: (tile) => {
        (!leftEdgeTiles.includes(tile) && !topEdgeTiles.includes(tile) && !bombLocations.includes(tile-18)) && (tileArray[tile-18].value += 1); // Top left
        (!leftEdgeTiles.includes(tile) && !bombLocations.includes(tile-1)) && (tileArray[tile-1].value += 1); // Middle left
        (!leftEdgeTiles.includes(tile) && !bottomEdgeTiles.includes(tile) && !bombLocations.includes(tile+16)) && (tileArray[tile+16].value +=1); // Bottom Left

        (!topEdgeTiles.includes(tile) && !bombLocations.includes(tile-17)) && (tileArray[tile-17].value += 1); // Top
        (!bottomEdgeTiles.includes(tile) && !bombLocations.includes(tile+17)) && (tileArray[tile+17].value += 1); // Bottom

        (!rightEdgeTiles.includes(tile) && !topEdgeTiles.includes(tile) && !bombLocations.includes(tile-16)) && (tileArray[tile-16].value += 1); // Top Right
        (!rightEdgeTiles.includes(tile) && !bombLocations.includes(tile+1)) && (tileArray[tile+1].value += 1); // Middle Right
        (!rightEdgeTiles.includes(tile) && !bottomEdgeTiles.includes(tile) && !bombLocations.includes(tile+18)) && (tileArray[tile+18].value +=1); // Bottom Right
    },

    revealAdjacentZeros: (tile) => {
        tileArray[tile].revealed =  true;
        (!leftEdgeTiles.includes(tile) && !topEdgeTiles.includes(tile)) && ((tileArray[tile-18].value === 0 && !tileArray[tile-18].revealed) ? adjacency.revealAdjacentZeros(tile-18) : tileArray[tile-18].revealed = true); // Top left
        (!leftEdgeTiles.includes(tile)) && ((tileArray[tile-1].value === 0 && !tileArray[tile-1].revealed) ? adjacency.revealAdjacentZeros(tile-1) : tileArray[tile-1].revealed = true); // Middle left
        (!leftEdgeTiles.includes(tile) && !bottomEdgeTiles.includes(tile)) && ((tileArray[tile+16].value === 0 && !tileArray[tile+16].revealed) ? adjacency.revealAdjacentZeros(tile+16) : tileArray[tile+16].revealed = true); // Bottom left

        (!topEdgeTiles.includes(tile)) && ((tileArray[tile-17].value === 0 && !tileArray[tile-17].revealed) ? adjacency.revealAdjacentZeros(tile-17) : tileArray[tile-17].revealed = true); // Top
        (!bottomEdgeTiles.includes(tile)) && ((tileArray[tile+17].value === 0 && !tileArray[tile+17].revealed) ? adjacency.revealAdjacentZeros(tile+17) : tileArray[tile+17].revealed = true); // Bottom

        (!rightEdgeTiles.includes(tile) && !topEdgeTiles.includes(tile)) && ((tileArray[tile-16].value === 0 && !tileArray[tile-16].revealed) ? adjacency.revealAdjacentZeros(tile-16) : tileArray[tile-16].revealed = true); // Top right
        (!rightEdgeTiles.includes(tile)) && ((tileArray[tile+1].value === 0 && !tileArray[tile+1].revealed) ? adjacency.revealAdjacentZeros(tile+1) : tileArray[tile+1].revealed = true); // Middle right
        (!rightEdgeTiles.includes(tile) && !bottomEdgeTiles.includes(tile)) && ((tileArray[tile+18].value === 0 && !tileArray[tile+18].revealed) ? adjacency.revealAdjacentZeros(tile+18) : tileArray[tile+18].revealed = true); // Bottom right
    }
}

function startBoard(totalTiles) {
    // Creates a board of blank tiles and displays it
    for(let i = 0; i < totalTiles; i++) { // Populates the array with tile objects
        tileArray[i] = {
            value: 0,
            revealed: false,
            htmlOfTile: ''
        }

        tileArray[i].htmlOfTile = `<button class="blank-tile start-tile" id="${i}"></button>`; // Also assigns it classes
        minesweeperBoard.innerHTML += tileArray[i].htmlOfTile; // Make sure that the minesweeperBoard is empty before running
    }

    //
    startButtons = document.querySelectorAll('.start-tile');
    startButtons.forEach(startButton => {
        startButton.addEventListener('click', function() {
            const id = Number(this.id) // Changes the id from string to number
            createBoard(153, id); // Runs the create board function with the id that was clicked

            console.log(`clicked on = ${id}, with value of ${tileArray[id].value}`);
            tileArray[id].revealed = true; // Reveals tile

            (tileArray[id].value === 0) && (adjacency.revealAdjacentZeros(id));

            tileArray.forEach((tileObject, index) => {
                if (tileObject.revealed) {
                    document.getElementById(index).className = 'revealed-tile';
                    tileObject.value === 0 ? document.getElementById(index).innerHTML = '' : document.getElementById(index).innerHTML = tileObject.value;
                }
            });

            //console.log(tileArray);
            console.log(minesweeperBoard.innerHTML);
        });
    });
}

function updateBoard(totalTiles) {
    for(let i = 0; i < totalTiles; i ++) {
        tileArray[i].htmlOfTile = `<button class="blank-tile game-tile" id="${i}"></button>`;

        minesweeperBoard.innerHTML += tileArray[i].htmlOfTile; // Make sure that the minesweeperBoard is empty before running

        gameButtons = document.querySelectorAll('.game-tile'); // All gameButtons on the board

        gameButtons.forEach(gameButton => {
            gameButton.addEventListener('click', function() { // Run function for any one button clicked
                const id = Number(this.id); // Changes the id from string to number
                tileArray[id].revealed = true; // Reveals tile

                console.log(`clicked on = ${id}, with value of ${tileArray[id].value}`);

                (tileArray[id].value === 0) && (adjacency.revealAdjacentZeros(id)); //If the the tile is a 0 run adjacency code

                tileArray.forEach((tileObject, index) => { // Runs through every object in the array
                    if (tileObject.revealed) { // Checks if it has been revealed
                        document.getElementById(index).className = 'revealed-tile';
                        if (tileObject.value === -1) {
                            document.getElementById(index).innerHTML = '<i class="fa-solid fa-bomb fa-2xl bomb"></i>'
                        } else {
                            tileObject.value === 0 ? document.getElementById(index).innerHTML = '' : document.getElementById(index).innerHTML = tileObject.value; // For tiles with the value of 0 set them to blank otherwise print their value
                        }
                    }
                });
            });
        });
    }
}

function clearBoard (totalTiles) {
    // Clears the arrays
    tileArray = [];
    tileArray.length = 153;
    bombLocations = [];
    minesweeperBoard.innerHTML = '';

    startBoard(153);
}

function createBoard (totalTiles, firstTile) {
    // Clears the board
    minesweeperBoard.innerHTML = '';

    // Generates the bombs
    for(let i = 0; i < bombCount.totalBombs; i++) {
        let randint = Math.floor(Math.random() * totalTiles) // Finds a random tile
        while(bombLocations.includes(randint) || randint == firstTile) { // Checks if the tile is already listed as a bomb
            randint = Math.floor(Math.random() * totalTiles); // Finds a new random tile
        }
        tileArray[randint].value = -1;
        bombLocations.push(randint);
    }

    for(let i = 0; i < bombLocations.length; i++) {
        adjacency.suroundingAdd(bombLocations[i]);
    }

    updateBoard(153);
}

clearBoard(153); // Creates the first board
setBombCount(30); // Default bomb count

resetButton.addEventListener('click', () => {
    clearBoard(153);
    setBombCount(30);
});













