
const numberOfCars = 1
let blueStripCar, greenStripCar, redStripCar, whiteStripCar
cars = []

let blueStripSprite, greenStripSprite, redStripSprite, whiteStripSprite

let borderLeft, borderTop
let borders = []

function preload() {
    blueStripSprite = loadImage('images/BlueStrip.png')
    greenStripSprite = loadImage('images/GreenStrip.png')
    redStripSprite = loadImage('images/RedStrip.png')
    whiteStripSprite = loadImage('images/WhiteStrip.png')
}

function setup() {
    createCanvas(800, 600)

    // Cars
    blueStripCar = new Car(75, 75, 0, createVector(3, 0), blueStripSprite)
    greenStripCar = new Car(width - 100, 75, 90, createVector(0, 3), greenStripSprite)
    redStripCar = new Car(width - 100, height - 100, 180, createVector(-3, 0), redStripSprite
    )
    whiteStripCar = new Car(75, height - 100, 270, createVector(0, -3), whiteStripSprite)

    cars = [blueStripCar, greenStripCar, redStripCar, whiteStripCar]

    // Borders
    // Outer Borders
    borderLeft = new border(createVector(25, 25), createVector(25, height - 25))
    borderTop = new border(createVector(25, 25), createVector(width - 25, 25))
    borderRight = new border(createVector(width - 25, 25), createVector(width - 25, height - 25))
    borderBottom = new border(createVector(25, height - 25), createVector(width - 25, height - 25))
    // Inner Borders
    innerLeft = new border(createVector(150, 130), createVector(150, height - 130))
    innerTop = new border(createVector(150, 130), createVector(width - 150, 130))
    innerRight = new border(createVector(width - 150, 130), createVector(width - 150, height - 130))
    innerBottom = new border(createVector(150, height - 130), createVector(width - 150, height - 130))

    borders = [borderLeft, borderTop, borderRight, borderBottom, innerLeft, innerTop, innerRight, innerBottom]
}

const drawBorders = (borders) => {

    for (let i = 0; i < borders.length; i++) {
        borders[i].draw()
    }

}

function draw() {
    background(50)

    drawBorders(borders)

    for (let i = 0; i < cars.length; i++) {
        push()
        cars[i].update()
        cars[i].checkForBorders()
        cars[i].draw()
        pop()
    }

}