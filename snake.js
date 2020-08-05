function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.gameOver = false;
    this.update = () => {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xSpeed * scl;
        this.y = this.y + this.ySpeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }
    this.score = () => {
        fill(100);
        textSize(16);
        text('score: ' + score, 50, 30);

    }
    this.death = () => {
        for (let i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            var l = dist(this.x, this.y, tackle.x, tackle.y);
            var b = dist(this.x, this.y, tackle.x + scl, tackle.y);
            if (d < 1 || l < 1 || b < 1) {
                this.total = 0;
                this.tail = [];
                gameOver = true;
            }
        }


    }
    this.through = () => {
        if (this.x > width - scl) {
            this.x = 0;
        }
        if (this.y < height - scl) {
            this.y = 0 + scl;
        }
        if (this.x < 0) {
            this.x = width;
        }
        if (this.y > 0) {
            this.y = height;
        }
    }
    //לעבור דרך הקיר
    // this.lose = () => {

    //     textSize(32);
    //     text('Game Over', 200, 150);
    //     fill(0, 102, 153);

    //     this.gameOver = true;
    //     textSize(32)
    //     text('press enter button to start', 100, 250);
    //     fill(255);

    // }
    this.eat = (pos) => {

        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        } else { return false };
    }
    this.show = () => {
        fill(255);
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }
    this.dir = (x, y) => {
        this.xSpeed = x;
        this.ySpeed = y;
    }

}     