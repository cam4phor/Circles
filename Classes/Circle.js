const Constants = require('../Utils/Constants');
const {RoundObject} = require('./RoundObject')
class Circle extends RoundObject{
    constructor(radius, x, y, context) {
        super(radius, x, y, 0, Constants.FULL_CIRCLE_DEGREES, "#01FFF4");
    }
    draw(context) {
        context.save()
        context.translate(this.pos.x, this.pos.y)
        var grd = context.createRadialGradient(0, 0, this.radius*0.1, 0, 0, this.radius);
        grd.addColorStop(0, "#ffffff");
        grd.addColorStop(0.6, "#ff9900")
        grd.addColorStop(1, "#000b1c");
        context.fillStyle = grd
        context.beginPath()
        context.arc(0, 0, this.radius, 0, Constants.FULL_CIRCLE_RADIANS)
        context.fill()
        context.restore()
    }
}

module.exports = {Circle}