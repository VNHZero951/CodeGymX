const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let dir, score, balls, food;


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
}

document.addEventListener("keydown", function(e) {
    let keyCode = e.keyCode;
    if (keyCode == 37 && dir != "right") {
        dir = "left";
    }
    if (keyCode == 38 && dir != "down") {
        dir = "up";
    }
    if (keyCode == 39 && dir != "left") {
        dir = "right";
    }
    if (keyCode == 40 && dir != "up") {
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
    ctx.fillStyle = "#ff0000";
    balls.shift();
    add();
    lastBall = balls[balls.length - 1];
    if (lastBall.x == food.x * 20 && lastBall.y == food.y * 20) {
        score += 5;
        add();
        createFood();
    }



    for (let i = 0; i < balls.length; i++) {
        ball = balls[i];
        if (i == balls.length - 1) {
            ctx.fillStyle = "blue";
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
        ctx.fillRect(ball.x, ball.y, 19, 19);
        ctx.fillRect(food.x * 20, food.y * 20, 19, 19);
        ctx.font = "20px Georgia";
        ctx.fillText("Điểm: " + score, 500, 580);

    }
}
setInterval(ani, 200);
ani();