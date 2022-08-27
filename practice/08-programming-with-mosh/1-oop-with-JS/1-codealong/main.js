// *OBJECT LITERALS
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1,
//     },

//     draw: function() {
//         console.log('draw')
//     }
// }

// *FACTORY FUNCTION
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw')
//         }
//     }
// }

// const circle = createCircle(1)

// *CONSTRUCTOR FUNCTION
function Circle(radius) {
    this.radius = radius,
        this.draw = function () {
            console.log('draw')
        }
}

const circle = new Circle(2)

console.log(circle.radius)
circle.draw()