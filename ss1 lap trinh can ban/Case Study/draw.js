const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let dir, score, balls, food;
const foodImg = new Image();
foodImg.src = "images/food.png";
let dead = new Audio();
dead.src = "audio/dead.mp3"
let eat = new Audio();
eat.src = "audio/eat.mp3";
let up = new Audio();
up.src = "audio/up.mp3";
let right = new Audio();
right.src = "audio/right.mp3";
let left = new Audio();
left.src = "audio/left.mp3";
let down = new Audio();
down.src = "audio/down.mp3";

function init() {
    dir = "right";
    score = 0;
    balls = [
        { x: 40, y: 40 },
        { x: 60, y: 40 },
        { x: 80, y: 40 }
    ];

    createFood();
}
init();

function createFood() {
    food = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) }
    for (let i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if (food.x === ball.x && food.y === ball.y) {
            createFood();
        }
    }
}

document.addEventListener("keydown", function(e) {
    let keyCode = e.keyCode;
    if (keyCode == 37 && dir != "right") {
        left.play();
        dir = "left";
    }
    if (keyCode == 38 && dir != "down") {
        up.play();
        dir = "up";
    }
    if (keyCode == 39 && dir != "left") {
        right.play();
        dir = "right";
    }
    if (keyCode == 40 && dir != "up") {
        down.play();
        dir = "down";
    }
});

function add() {
    let lastBall = balls[balls.length - 1];
    if (dir == "right") {
        balls.push({ x: lastBall.x + 20, y: lastBall.y })
    }
    if (dir == "left") {
        balls.push({ x: lastBall.x - 20, y: lastBall.y })
    }
    if (dir == "up") {
        balls.push({ x: lastBall.x, y: lastBall.y - 20 })
    }
    if (dir == "down") {
        balls.push({ x: lastBall.x, y: lastBall.y + 20 })
    }

}

function ani() {
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = "red";
    balls.shift();
    add();
    lastBall = balls[balls.length - 1];
    if (lastBall.x == food.x * 20 && lastBall.y == food.y * 20) {
        eat.play();
        score += 5;
        add();
        createFood();
    }
    for (let i = 0; i < balls.length; i++) {
        ball = balls[i];
        if (i == balls.length - 1) {
            ctx.fillStyle = "green";
        }
        if (ball.x > 580) {
            ball.x = 0;
        }
        if (ball.x < 0) {
            ball.x = 580;
        }
        if (ball.y > 580) {
            ball.y = 0;
        }
        if (ball.y < 0) {
            ball.y = 580;
        }
        if (ball.x === lastBall.x && ball.y === lastBall.y && i < balls.length - 2) {
            dead.play();
            alert("Game Over, Điểm Của Bạn Là : " + score);
            init();
        }
        ctx.fillRect(ball.x, ball.y, 19, 19);
        ctx.fillRect(food.x * 20, food.y * 20, 19, 19);
        ctx.font = "20px Georgia";
        ctx.fillText("Điểm: " + score, 500, 580);
    }
}
setInterval(ani, 200);
ani();