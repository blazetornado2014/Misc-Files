const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const scaledCanvas = {
    width: canvas.width / 4,
    height: canvas.height / 4,
}
const gravity = 0.1

//Break it down into multiple arrays with 1 row
const floorCollisions2D = []
for (let i = 0; i < floorCollisions.length; i += 36){
    floorCollisions2D.push(floorCollisions.slice(i, i + 36))
}

//For each row, find collision blocks and determine where to put block
const collisionBlocks = [] 
floorCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 202) {
            collisionBlocks.push(
                new CollisionBlock({
                    position: {
                        x: x * 16,
                        y: y * 16,
                    },
                })
            )
        }
    })
})

//Break it down into multiple arrays of 1 row
const platformCollisions2D = []
for (let i = 0; i < platformCollisions.length; i += 36){
    platformCollisions2D.push(platformCollisions.slice(i, i + 36))
}

//For each row, note down collision blocks
const platformBlocks = [] 
platformCollisions2D.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 202) {
            platformBlocks.push(
                new CollisionBlock({
                    position: {
                        x: x * 16,
                        y: y * 16,
                    },
                    height: 4,
                })
            )
        }
    })
})

console.log(platformBlocks)

const player = new Player({
    position: {
        x: 100,
        y: 400,
    },
    //Two diff types of syntax in lines below
    collisionBlocks,
    platformBlocks: platformBlocks,
})

const keys = {
    d: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
}

const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: './Image/background.png'
})

const camera = {
    position: {
        x: 0,
        y: -432 + scaledCanvas.height,
    },
}
function animate(){
    window.requestAnimationFrame(animate)
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvas.width, canvas.height)
    
    //All scaling functions are between .save and .restore
    context.save()

    //To make map bigger
    context.scale(4,4)
    context.translate(camera.position.x, camera.position.y)
    background.update()

    //Add red rectangles for floor and platform
    //collisionBlocks.forEach((collisionBlock) => {
    //    collisionBlock.update()
    //})
    //platformBlocks.forEach((platformBlock) => {
    //    platformBlock.update()
    //})
    player.update()

    player.velocity.x = 0
    if (keys.d.pressed){
        player.velocity.x = 1
        player.panCameraLeft({canvas, camera})
    }
    else if (keys.a.pressed){
        player.velocity.x = -1
        player.panCameraRight({canvas, camera})
    }

    if (player.velocity.y < 0 ){
        player.panCameraDown({canvas, camera})
    }
    else if (player.velocity.y > 0 ){
        player.panCameraUp({canvas, camera})
    }
    context.restore()

    
}

animate()

window.addEventListener('keydown', (event) =>{
    switch (event.key){
        case 'd': 
            keys.d.pressed = true
            break
        case 'a': 
            keys.a.pressed = true
            break
        case 'w': 
            player.velocity.y = -3
            break
    }
}) 

window.addEventListener('keyup', (event) =>{
    switch (event.key){
        case 'd': 
            keys.d.pressed = false
            break
        case 'a': 
            keys.a.pressed = false
            break
    }
}) 