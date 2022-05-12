

class Car {
    constructor(x, y, rotation, speed, sprite) {
        this.pos = createVector(x, y)
        this.w = 30, this.h = 30
        this.speed = speed
        this.sprite = sprite
        this.rotation = rotation

        // Corners
        this.topLeft = createVector(this.pos.x, this.pos.y)
        this.bottomLeft = createVector(this.pos.x, this.pos.y + this.h)
        this.topRight = createVector(this.pos.x + this.w, this.pos.y)
        this.bottomRight = createVector(this.pos.x + this.w, this.pos.y + this.h)

        this.borders = [
            new Border(this.topLeft, this.bottomLeft),
            new Border(this.topLeft, this.topRight),
            new Border(this.topRight, this.bottomRight),
            new Border(this.bottomLeft, this.bottomRight)
        ]
    }

    update() {
        this.pos.add(this.speed)
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