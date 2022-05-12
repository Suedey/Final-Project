

class changeZone {
    constructor(x, y, w, h, action) {
        this.pos = createVector(x, y)
        this.w = w, this.h = h
        this.action = action
    }

    draw() {
        fill(0, 255, 0)
        rect(this.pos.x, this.pos.y, this.w, this.h)
    }
}