

class Car {
    constructor(x, y, rotation, speed, sprite) {
        this.pos = createVector(x, y)
        this.w = 60, this.h = 60
        this.speed = speed
        this.sprite = sprite
        this.rotation = rotation

        // Corners
        this.topLeft = createVector(this.pos.x, this.pos.y)
        this.bottomLeft = createVector(this.pos.x, this.pos.y + this.h)
        this.topRight = createVector(this.pos.x + this.w, this.pos.y)
        this.bottomRight = createVector(this.pos.x + this.w, this.pos.y + this.h)

        this.borders = [
            new border(this.topLeft, this.bottomLeft),
            new border(this.topLeft, this.topRight),
            new border(this.topRight, this.bottomRight),
            new border(this.bottomLeft, this.bottomRight)
        ]
    }

    update() {
        this.pos.add(this.speed)
    }

    checkForBorders() {
        if (this.rotation === 0) {
            if (this.pos.x + 50 > width - 25) {
                this.rotation = 90
                this.speed.set(0, 3)
            }
        } else if (this.rotation === 90) {
            if (this.pos.y + 50 > height - 25) {
                this.rotation = 180
                this.speed.set(-3, 0)
            }
        } else if (this.rotation === 180) {
            if (this.pos.x - 50 < 25) {
                this.rotation = 270
                this.speed.set(0, -3)
            }
        } else if (this.rotation === 270) {
            if (this.pos.y - 50 < 25) {
                this.rotation = 0
                this.speed.set(3, 0)
            }
        }
    }

    draw() {
        imageMode(CENTER)
        translate(this.pos.x, this.pos.y)
        rotate(PI / 180 * this.rotation)
        image(this.sprite, 0, 0, this.w, this.h)
        stroke(255, 0, 0)
        strokeWeight(4)
    }

}