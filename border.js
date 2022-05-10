

class border {
    constructor(A, B) {
        this.A = A
        this.B = B
    }

    draw() {
        stroke(0)
        strokeWeight(8)
        line(this.A.x, this.A.y, this.B.x, this.B.y)
    }
}