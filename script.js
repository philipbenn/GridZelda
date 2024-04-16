// Model
window.addEventListener("load", startGame);

const playerModel = {
  x: 200,
  y: 40,
  regX: 6,
  regY: 10,
  speed: 100,
  moving: false,
  direction: undefined,
  hitbox: {
    x: 0,
    y: 0,
    w: 12,
    h: 12,
  }
}

const itemsModel = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], //1
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //2
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //11
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //12
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //13
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //14
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //15
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //16
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //17
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //18
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //19
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //20
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //21
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //22
];

const visualItemGrid = []; 

const tilesModel = [
// 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35
  [7, 7, 7, 7, 16, 16, 16, 0, 9, 0, 9, 0, 9, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 9, 0, 0, 9, 0, 9], //1
  [7, 7, 7, 12, 16, 15, 16, 9, 8, 0, 13, 13, 13, 13, 13, 0, 0, 0, 0, 9, 8, 0, 0, 0, 9, 0, 16, 16, 16, 16, 16, 0, 0, 0, 0], //2
  [7, 7, 12, 12, 0, 1, 0, 0, 0, 0, 13, 14, 14, 14, 13, 9, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 16, 19, 19, 19, 16, 0, 9, 0, 0], //3
  [7, 7, 12, 0, 1, 1, 1, 0, 0, 9, 13, 14, 14, 14, 13, 0, 9, 0, 0, 0, 0, 9, 0, 0, 9, 0, 16, 19, 19, 19, 16, 9, 8, 0, 9], //4
  [7, 12, 12, 0, 1, 1, 1, 0, 8, 0, 13, 13, 2, 13, 13, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 0, 16, 16, 18 , 16, 16, 0, 0, 0, 0], //5
  [12, 12, 0, 0, 1, 1, 1, 0, 9, 0, 0, 11, 1, 11, 0, 0, 9, 0, 8, 0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0], //6
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 9, 0, 0, 0, 0, 9, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 9, 0], //7
  [0, 0, 9, 8, 1, 1, 1, 0, 9, 0, 0, 1, 1, 1, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 8, 9, 0, 0, 9, 8, 0, 0, 0], //8
  [0, 9, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 9, 0, 0, 9, 0, 9, 8, 0, 0, 9, 0, 0, 0, 0, 0, 0, 9, 0, 0], //9
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0], //10
  [0, 8, 9, 0, 0, 9, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 9, 0, 11, 10, 11, 0, 9, 0, 0, 0, 9, 0, 9, 0, 0], //11
  [0, 0, 0, 0, 0, 0, 9, 8, 0, 9, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 11, 17, 11, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0], //12
  [0, 9, 0, 0, 0, 8, 0, 0, 9, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], //13
  [0, 0, 0, 9, 0, 9, 0, 0, 0, 0, 0, 1, 1, 1, 0, 9, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], //14
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 9, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 9, 0, 0], //15
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 9, 0, 0, 0, 0, 9  , 0, 0, 9, 0, 0, 1, 1, 9, 0, 0, 0, 9], //16
  [0, 0, 0, 0, 8, 0, 0, 9, 0, 0, 0, 9, 0, 0, 0, 0, 0, 8, 0, 0, 12, 12, 12, 12, 12, 12, 9, 0, 1, 1, 0, 0, 12, 12, 12], //17
  [0, 0, 9, 0, 0, 9, 0, 0, 8, 9, 0, 0, 0, 0, 9, 0, 9, 0, 9, 0, 12, 6, 6, 6, 6, 12, 9, 0, 1, 1, 8, 0, 12, 6, 6], //18
  [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 8, 0, 0, 9, 0, 0, 12, 6, 6, 6, 6, 12, 0, 9, 0, 9, 0, 0, 12, 6, 6], //19
  [0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0, 9, 0, 0, 0, 0, 0, 0, 12, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 6, 6], //20
  [12, 12, 12, 12, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6], //21
  [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]  //22
// 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35
];

const GRID_WIDTH = tilesModel[0].length;
const GRID_HEIGHT = tilesModel.length;
const TILE_SIZE = 16;

function getTileAtCoord({ row, col }) {
  return tilesModel[row][col];
}

function coordFromPos({ x, y }) {
  const row = Math.floor(y / TILE_SIZE);
  const col = Math.floor(x / TILE_SIZE);
  const coord = { row, col };
  return coord;
}

function posFromCoord({ row, col }) {

}

function getTilesUnderPlayer(playerModel) {
  const tiles = [];
  const topLeft = { x: playerModel.x - playerModel.regX + playerModel.hitbox.x, y: playerModel.y };
  const topRight = { x: playerModel.x - playerModel.regX + playerModel.hitbox.x + playerModel.hitbox.w, y: playerModel.y };
  const bottomLeft = { x: playerModel.x, y: playerModel.y + playerModel.hitbox.h };
  const bottomRight = { x: playerModel.x + playerModel.hitbox.w, y: playerModel.y + playerModel.hitbox.h };
}

// View
function createItems() {
 const visualItems = document.querySelector("#items");

  for (let row = 0; row < GRID_HEIGHT; row++) {
    visualItemGrid[row] = [];
    for (let col = 0; col < GRID_WIDTH; col++) {
      const modelItem = itemsModel[row][col];
      if(modelItem !== 0) {
        const visualItem = document.createElement("div");
        visualItem.classList.add("item");
        visualItem.classList.add("gold");
        visualItem.style.setProperty("--row", row);
        visualItem.style.setProperty("--col", col);
        visualItems.appendChild(visualItem);

        visualItemGrid[row][col] = visualItem;
      }
    }
  }
}

function checkForItems() {
  const items = getItemsUnderPlayer();
  if(items.length > 0) {  
    console.log(`There are ${items.length} items under player!`);
  }
}

function getItemsUnderPlayer() {
  const items = [];
  const visualItems = document.querySelectorAll("#items .item");

  for (let i = 0; i < visualItems.length; i++) {
    const visualItem = visualItems[i];
    const row = parseInt(visualItem.style.getPropertyValue("--row"));
    const col = parseInt(visualItem.style.getPropertyValue("--col"));

    if (isItemUnderPlayer({ row, col })) {
      items.push({ row, col });
    }
  }

  return items;
}

function isItemUnderPlayer({ row, col }) {
  const playerCoord = coordFromPos(playerModel);
  return playerCoord.row === row && playerCoord.col === col;
}

function takeItem(coords) {
  const itemValue = itemsModel[coords.row][coords.col];

  if(itemValue !== 0) {
    itemsModel[coords.row][coords.col] = 0;

    const visualItem = visualItemGrid[coords.row][coords.col];
    visualItem.classList.remove("gold");
  }
}

function checkForItems() {
  const items = getItemsUnderPlayer();

  if(items.length > 0) {
    items.forEach(takeItem);
  }
}

function createTiles() {
  const background = document.querySelector("#background");

  for (let row = 0; row < GRID_HEIGHT; row++) {
    for (let col = 0; col < GRID_WIDTH; col++) {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      background.appendChild(tile);

    }
  }
  background.style.setProperty("--GRID_WIDTH", GRID_WIDTH)
  background.style.setProperty("--GRID_HEIGHT", GRID_HEIGHT)
  background.style.setProperty("--TILE_SIZE", TILE_SIZE + "px")
}

function displayTiles() {
  const visualTiles = document.querySelectorAll("#background .tile");

  for (let row = 0; row < GRID_HEIGHT; row++) {
    for (let col = 0; col < GRID_WIDTH; col++) {

      const modelTile = getTileAtCoord({ row, col });
      const visualTile = visualTiles[row * GRID_WIDTH + col];

      visualTile.classList.add(getClassNameForTile(modelTile));

    }
  }
}

function getClassNameForTile(tile) {
  switch (tile) {
    case 0:
      return "grass";
    case 1:
      return "path";
    case 2:
      return "door";
    case 3:
      return "wall";
    case 4:
      return "chest";
    case 5:
      return "floor";
    case 6:
      return "water";
    case 7:
      return "lava";
    case 8:
      return "tree";
    case 9:
      return "flowers";
    case 10:
      return "fencehori";
    case 11:
      return "fencevert";
    case 12:
      return "cliff";
    case 13:
      return "redwall";
    case 14:
      return "floorcarpet";
    case 15: 
      return "mine";
    case 16:
      return "floor_stone";
    case 17:
      return "well";
    case 18:
      return "gate";
    case 19:
      return "abyss";
  }
  

}

function displayPlayerAtPosition() {
  const visualPlayer = document.querySelector("#player");
  visualPlayer.style.transform = `translate(${playerModel.x - playerModel.regX}px, ${playerModel.y - playerModel.regY}px)`;
}

function displayPlayerAnimation() {
  const visualPlayer = document.querySelector("#player");

  if (playerModel.moving) {
    visualPlayer.classList.add("animate");
    visualPlayer.classList.remove("left", "right", "up", "down");
    visualPlayer.classList.add(playerModel.direction);
  } else {
    visualPlayer.classList.remove("animate");
  }
}

// Controller
const controlsController = {
  left: false,
  right: false,
  up: false,
  down: false,
};

function handleKeyDown(event) {
  switch (event.key) {
    case "ArrowLeft":
    case "a":
      controlsController.left = true;
      break;
    case "ArrowRight":
    case "d":
      controlsController.right = true;
      break;
    case "ArrowUp":
    case "w":
      controlsController.up = true;
      break;
    case "ArrowDown":
    case "s":
      controlsController.down = true;
      break;
  }
}

function handleKeyUp(event) {
  switch (event.key) {
    case "ArrowLeft":
    case "a":
      controlsController.left = false;
      break;
    case "ArrowRight":
    case "d":
      controlsController.right = false;
      break;
    case "ArrowUp":
    case "w":
      controlsController.up = false;
      break;
    case "ArrowDown":
    case "s":
      controlsController.down = false;
      break;
  }
}

function movePlayer(deltaTime) {
  playerModel.moving = false;

  const newPos = {
    x: playerModel.x,
    y: playerModel.y,
  };

  if (controlsController.left) {
    playerModel.moving = true;
    playerModel.direction = "left";
    newPos.x -= playerModel.speed * deltaTime;
  } else if (controlsController.right) {
    playerModel.moving = true;
    playerModel.direction = "right";
    newPos.x += playerModel.speed * deltaTime;
  }

  if (controlsController.up) {
    playerModel.moving = true;
    playerModel.direction = "up";
    newPos.y -= playerModel.speed * deltaTime;
  } else if (controlsController.down) {
    playerModel.moving = true;
    playerModel.direction = "down";
    newPos.y += playerModel.speed * deltaTime;
  }

  if (canMoveTo(newPos)) {
    playerModel.x = newPos.x;
    playerModel.y = newPos.y;
  }
}

function canMoveTo(pos) {
  const { row, col } = coordFromPos(pos);

  if (row < 0 || row >= GRID_HEIGHT || col < 0 || col >= GRID_WIDTH) {
    return false;
  }

  const tileType = getTileAtCoord({ row, col });

  switch (tileType) {
    case 0:
    case 1:
    case 2:
    case 5:
    case 9: 
    case 14:
    case 19:
      return true;
  }
}

let lastTimestamp = 0;

function tick(timestamp) {
  requestAnimationFrame(tick);

  const deltaTime = (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;

  movePlayer(deltaTime);

  checkForItems();

  displayPlayerAtPosition();
  displayPlayerAnimation();

  showDebugging();
}

// Debugging

function showDebugPlayerRegistrationPoint() {
  const visualPlayer = document.querySelector("#player");

  if (!visualPlayer.classList.contains("show-reg-point")) {
    visualPlayer.classList.add("show-reg-point");
  }

  visualPlayer.style.setProperty("--regX", playerModel.regX + "px");
  visualPlayer.style.setProperty("--regY", playerModel.regY + "px");
}

function showDebugPlayerRect() {
  const visualPlayer = document.querySelector("#player");

  if (!visualPlayer.classList.contains("show-rect")) {
    visualPlayer.classList.add("show-rect");
  }
}

function showDebugging() {
  showDebugTileUnderPlayer();
  showDebugPlayerRect();
  showDebugPlayerRegistrationPoint();
}

let lastPlayerCoord = { row: 0, col: 0 };

function showDebugTileUnderPlayer() {
  const coord = coordFromPos(playerModel);

  if (coord.row != lastPlayerCoord.row || coord.col != lastPlayerCoord.col) {
    unhighlightTile(lastPlayerCoord);
    highlightTile(coord);
  }

  lastPlayerCoord = coord;

  highlightTile(coord);
}

function highlightTile({ row, col }) {
  const visualTiles = document.querySelectorAll("#background .tile");
  const visualTile = visualTiles[row * GRID_WIDTH + col];
  visualTile.classList.add("highlight");

}

function unhighlightTile({ row, col }) {
  const visualTiles = document.querySelectorAll("#background .tile");
  const visualTile = visualTiles[row * GRID_WIDTH + col];
  visualTile.classList.remove("highlight");
}

// Initialization
function startGame() {
  console.log("Game started");
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
  requestAnimationFrame(tick);
  createTiles();
  createItems();
  displayTiles();
}

