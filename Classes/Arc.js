const {RoundObject} = require('./RoundObject')
const random = require('canvas-sketch-util/random')
const math = require('canvas-sketch-util/math')
const Constants = require('../Utils/Constants')
const colorPallete = {
    PINK: "#FF1178",
    RED: "#FE0000",
    YELLOW: "#FFF205",
    BLUE: "#01FFF4",
    GREEN: "#7CFF01",
    INDIGO: "#000AFF"
  }
class Arc extends RoundObject{
    constructor(radius, x, y, startAngle, endAngle) {
        super(radius, x, y);
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.lineWidth = math.mapRange(radius, 0, 1000, 2, 8)
        let randomVal = Math.floor(random.range(0, Object.keys(colorPallete).length));
        this.color = colorPallete[Object.keys(colorPallete)[randomVal]];
        this.rotationSpeed = 5000 / (this.radius * this.radius);
    }
    draw(context) {
        context.save()
        context.translate(this.pos.x, this.pos.y)
        context.lineCap = "round";
        context.strokeStyle = this.color
        context.beginPath()
        context.arc(0, 0, this.radius, this.startAngle/Constants.FULL_CIRCLE_DEGREES * Constants.FULL_CIRCLE_RADIANS, this.endAngle/Constants.FULL_CIRCLE_DEGREES * Constants.FULL_CIRCLE_RADIANS)
        context.lineWidth = this.lineWidth
        context.stroke()
        context.restore()
    }
    update(rotationDirection) {
        if (rotationDirection === 1) {
            this.startAngle += this.rotationSpeed;
            this.endAngle += this.rotationSpeed;
        } else {
            this.startAngle -= this.rotationSpeed;
            this.endAngle -= this.rotationSpeed;
        }

    }
}

module.exports = {Arc}