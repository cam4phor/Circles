const {Arc} = require('./Arc');
const random = require('canvas-sketch-util/random')
const math = require('canvas-sketch-util/math');
const Constants = require('../Utils/Constants');
class ArcGroup {
    constructor(radius, x, y){
      this.parts = Math.floor(random.range(1, 15))
      this.rotationDirection = Math.floor(random.range(0, 2))
      this.arcs = []

      let constant = math.mapRange(radius, 0, 1000, 5, 50)
      for (let i = 0; i<this.parts; i++){
        let startAngle = random.range((Constants.FULL_CIRCLE_DEGREES/this.parts)*i, (Constants.FULL_CIRCLE_DEGREES/this.parts)*(i+1));
        let endAngle = random.range(startAngle, (Constants.FULL_CIRCLE_DEGREES/this.parts)*(i+1))
        this.arcs.push(new Arc(radius*constant, x, y, startAngle, endAngle))
      }
    }
    draw(context){
      this.arcs.forEach(arc => {
        arc.draw(context)
      })
    }
    update(){
      this.arcs.forEach(arc => {
        arc.update(this.rotationDirection)
      })
    }
  }

  module.exports = {ArcGroup}