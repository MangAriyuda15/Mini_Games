/*? no js js needed from me */
const canvas = document.querySelector("canvas");
const board = canvas.getContext("2d");

canvas.width = DISPLAY_PIXEL.WIDTH * ASPECT_NATIO.WIDTH;
canvas.height = DISPLAY_PIXEL.HEIGTH * ASPECT_NATIO.HEIGTH;

const playerProperty = {
  width: 50,
  height: 50,
  speed: 1,
  color: "red",
  position: {
    x: 100,
    y: canvas.height - 50,
  },
};

canvas.height = DISPLAY_PIXEL.HEIGTH * ASPECT_NATIO.HEIGTH;

const enemyProperty = {
  width: 50,
  height: 50,
  speed: 1,
  color: "black",
  position: {
    x: canvas.width - 50,
    y: canvas.height - 50,
  },
};

const ground = new Ground(canvas.width, canvas.height, "lightblue");

const player = new Player(playerProperty);
const enemy = new Player(enemyProperty);

function animate() {
  ground.create();
  player.create();
  enemy.create();

  player.update();
  enemy.update();
  window.requestAnimationFrame(animate);
}

window.addEventListener("keydown", function (callback) {
  console.log(callback);
});
animate();
