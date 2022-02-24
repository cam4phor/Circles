const Constants = require("../Utils/Constants");

class Vector{
    constructor(x, y){
      this.x = x;
      this.y = y;
    }
  }
class RoundObject{
    constructor(radius, x, y, startAngle, endAngle, color) {
        this.pos = new Vector(x, y)
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.color = color
    }
    draw(context) {
        context.save()
        context.translate(this.pos.x, this.pos.y)
        context.fillStyle = this.color
        context.beginPath()
        context.arc(0, 0, this.radius, 0, Constants.FULL_CIRCLE_RADIANS)
        context.fill()
        context.restore()
    }
}
module.exports = {
    RoundObject
}