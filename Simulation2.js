
const numberOfCars = 1
let blueStripCar, greenStripCar, redStripCar, whiteStripCar
cars = []

let blueStripSprite, greenStripSprite, redStripSprite, whiteStripSprite

let borderLeft, borderTop
let borders = []
let changeZones = []

function preload() {
    blueStripSprite = loadImage('images/BlueStrip.png')
    greenStripSprite = loadImage('images/GreenStrip.png')
    redStripSprite = loadImage('images/RedStrip.png')
    whiteStripSprite = loadImage('images/WhiteStrip.png')
    blackOutSprite = loadImage('images/BlackOut.png')
    pinkStripSprite = loadImage('images/PinkStrip.png')
    buildingOne = loadImage('images/building1.jpeg')
    buildingCluster = loadImage('images/buildingCluster.png')
    townCluster = loadImage('images/townCluster.png')
    town = loadImage('images/town.png')
    house = loadImage('images/house.png')
    houseTwo = loadImage('images/house2.png')
    houseThree = loadImage('images/house3.png')
    houseFour = loadImage('images/house4.png')
    buildingTwo = loadImage('images/building3.png')
    houseFive = loadImage('images/house5.webp')
    houseSix = loadImage('images/house6.jpg')
    houseSeven = loadImage('images/house7.png')
}


function setup() {
    createCanvas(800, 600)
    // Cars
    blueStripCar = new Car(180, 85, 0, createVector(2, 0), blueStripSprite)
    greenStripCar = new Car(85, height + 20, 270, createVector(0, -2), greenStripSprite)
    redStripCar = new Car(150, 375, 0, createVector(2, 0), redStripSprite)
    whiteStripCar = new Car(550, 375, 0, createVector(2, 0), whiteStripSprite)
    blackOutCar1 = new Car(525, 425, 90, createVector(0, 2), blackOutSprite)
    blackOutCar2 = new Car(280, 85, 0, createVector(2, 0), blackOutSprite)
    pinkStripCar = new Car(85, 240, 270, createVector(0, -2), pinkStripSprite
    )


    cars = [blueStripCar, greenStripCar, redStripCar, whiteStripCar, blackOutCar1, blackOutCar2, pinkStripCar]

    // Borders
    borders = [
        new Border(createVector(0, 60), createVector(60, 60)),
        new Border(createVector(0, 120), createVector(60, 120)),
        new Border(createVector(60, 60), createVector(60, 0)),
        new Border(createVector(120, 60), createVector(120, 0)),
        new Border(createVector(120, 60), createVector(500, 60)),
        new Border(createVector(500, 60), createVector(500, 0)),
        new Border(createVector(560, 60), createVector(560, 0)),
        new Border(createVector(560, 60), createVector(width, 60)),
        new Border(createVector(width, 120), createVector(560, 120)),
        new Border(createVector(120, 120), createVector(500, 120)),
        new Border(createVector(60, 120), createVector(60, 350)),
        new Border(createVector(120, 120), createVector(120, 350)),
        new Border(createVector(120, 350), createVector(500, 350)),
        new Border(createVector(500, 350), createVector(500, 120)),
        new Border(createVector(60, 350), createVector(0, 350)),
        new Border(createVector(560, 120), createVector(560, 350)),
        new Border(createVector(560, 350), createVector(width, 350)),
        new Border(createVector(0, 410), createVector(60, 410)),
        new Border(createVector(120, 410), createVector(500, 410)),
        new Border(createVector(560, 410), createVector(width, 410)),
        new Border(createVector(60, 410), createVector(60, height)),
        new Border(createVector(120, 410), createVector(120, height)),
        new Border(createVector(500, 410), createVector(500, height)),
        new Border(createVector(560, 410), createVector(560, height))
    ]

    // change zones
    changeZones = [
        // inner change zones
        new changeZone(60, 60, 60, 60, (index) => {
            cars[index].speed.set(2, 0)
            cars[index].rotation = 0
        }),
        new changeZone(500, 60, 60, 60, (index) => {
            cars[index].speed.set(2, 0)
            cars[index].rotation = 0
        }),
        new changeZone(60, 350, 60, 60, (index) => {
            let possibleRotations = [0, 180, 270]
            let possibleSpeeds = [createVector(2, 0), createVector(-2, 0), createVector(0, -2)]
            let newIndex = random([0, 1, 2])
            cars[index].speed.set(0, 0)
            cars[index].rotation = possibleRotations[newIndex]
            cars[index].speed.set(possibleSpeeds[newIndex])
        }),
        new changeZone(500, 350, 60, 60, (index) => {
            let possibleRotations = [270, 90, 0]
            let possibleSpeeds = [createVector(0, -2), createVector(0, 2), createVector(2, 0)]
            let newIndex = random([0, 1, 2])
            cars[index].speed.set(possibleSpeeds[newIndex])
            cars[index].rotation = possibleRotations[newIndex]
        }),
        // outer change zones
        new changeZone(width + 60, 60, 60, 60, (index) => {
            cars[index].speed.set(0, 0)
            cars[index].speed.set(0, -2)
            cars[index].rotation = 270
            cars[index].pos.set(85, height + 20)
        }),
        new changeZone(-60, 350, 60, 60, (index) => {
            cars[index].speed.set(0, 0)
            cars[index].speed.set(0, 2)
            cars[index].rotation = 90
            cars[index].pos.set(525, random[-50, -110])
        }),
        new changeZone(500, height + 60, 60, 60, (index) => {
            cars[index].speed.set(0, 0)
            cars[index].speed.set(2, 0)
            cars[index].rotation = 0
            cars[index].pos.set(random[-50, -100], 85)
        }),
        new changeZone(width + 60, 350, 60, 60, (index) => {
            cars[index].speed.set(0, 0)
            cars[index].speed.set(0, 2)
            cars[index].rotation = 90
            cars[index].pos.set(85, random[-60, -100])
        })
    ]
}

const drawBorders = (borders) => {
    fill(50)
    noStroke()
    rect(0, 60, width, 60)
    rect(0, 350, width, 60)
    rect(60, 0, 60, height)
    rect(500, 0, 60, height)
    for (let i = 0; i < borders.length; i++) {
        borders[i].draw()
    }
}

function draw() {
    background(40, 245, 100)

    drawBorders(borders)
    //image(buildingOne, 300, 200, 100, 100)
    image(buildingCluster, 105, 145, 250, 250)
    //image(townCluster, 120, 145, 140, 100)
    image(buildingCluster, 320, 145, 200, 250)
    image(town,570, 400, 280, 230)
    image(town, 570, 100, 280, 230)
    image(house, 125, 420, 150, 150)
    image(houseTwo, 270, 420, 230, 150)
    image(houseThree, 120, 1, 60, 50)
    image(houseThree, 190, 1, 60, 50)
    image(houseThree, 260, 1, 60, 50)
    image(houseThree, 330, 1, 60, 50)
    image(houseThree, 410, 1, 60, 50)
    //image(houseFour, 520, 1, 60, 50)
    //image(buildingTwo, 550, 1, 60, 100)
    //image(houseFive, 550, 1, 60, 50)
    image(houseSeven, 565, 1, 60, 50)
    image(houseSeven, 650, 1, 60, 50)
    image(houseSeven, 735, 1, 60, 50)


    for (let i = 0; i < changeZones.length; i++) {
        //changeZones[i].draw()
        for (let j = 0; j < cars.length; j++) {
            let inX = cars[j].pos.x >= changeZones[i].pos.x + 20 && cars[j].pos.x + cars[j].w + 20 <= changeZones[i].pos.x + 20 + changeZones[i].w
            let inY = cars[j].pos.y - 20 >= changeZones[i].pos.y && cars[j].pos.y - 20 + cars[j].h <= changeZones[i].pos.y - 20 + changeZones[i].h
            if (inX && inY) {
                changeZones[i].action(j)
            }
        }
    }

    for (let i = 0; i < cars.length; i++) {
        let move = true
        push()
        for (let j = 0; j < cars.length; j++) {
            if (i != j) {
                if (cars[i].pos.x + cars[i].w <= cars[j].pos.y - cars[j].h) {
                    notMove = false
                }
            }
        }
        if (move) {
            cars[i].update()
        }
        cars[i].draw()
        pop()
    }

}