/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function() {
        this.left += 100;
        console.log('Right ok: ' + this.left);
    }
    this.moveDown = function() {
        this.top += 100;
        console.log('Bottom ok: ' + this.top);
    }

    this.moveTop = function() {
        this.top -= 100;
        console.log('Top ok: ' + this.top);
    }
    this.moveLeft = function() {
        this.left -= 100;
        console.log('Left: ' + this.left);
    }
}

var hero = new Hero('pikachu.png', 20, 30, 200);
document.write(window.innerWidth);
document.write("<br>")
document.write(window.innerHeight);

function start() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    } else if (hero.top < window.innerWidth - hero.size) {
        hero.moveDown();
    } else if (hero.left = window.innerWidth - hero.size) {
        hero.moveLeft();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 10000)
}

start();