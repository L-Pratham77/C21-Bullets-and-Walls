var Bullet, Wall, Speed, Weight, Damage, thickness;

function setup() {
  createCanvas(1600, 400);

  Speed = random(223, 321)
  thickness = random(22, 83)
  Weight = random(30, 52)
  Damage = (0.5 * Weight * Speed * Speed) / (thickness * thickness * thickness);
  Bullet = createSprite(100, 200, 50, 30);
  Bullet.velocityX = Speed;
  Bullet.shapeColor = "blue";

  wall = createSprite(1550, 200, thickness, 150);
  wall.shapeColor = "white";
}

function draw() {
  background(0);
  fill("cyan");
  textSize(20);
  text("Speed: " + Math.round(Speed), 20, 30);
  text("Weight: " + Math.round(Weight), 140, 30);
  text("Thickness: " + Math.round(thickness), 260, 30);
  text("Damage: " + Math.round(Damage), 400, 30);

  if (hasCollided(Bullet, wall)) {

    if (Damage > 10) {
      wall.shapeColor = color(225, 0, 0)
    }
    if (Damage < 10) { wall.shapeColor = color(0, 225, 0) }
  }
  drawSprites();
}