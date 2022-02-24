const canvasSketch = require('canvas-sketch');
const {ArcGroup} = require('./Classes/ArcGroup')
const {Circle} = require('./Classes/Circle');
const Constants = require('./Utils/Constants');
// import RoundObject from './Classes/RoundObject.js'
const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

// Create Black Circle around which
// will revolve strings in circles

const num = Constants.NUM_RINGS;
const sketch = ({ context, width, height }) => {
  const start_x = width/3;
  const start_y = height/4;
  let arcGroups = []
  for(var i = 17; i<num; i++){
    let arcGroup = new ArcGroup(i, start_x, start_y)
    arcGroups.push(arcGroup);
  }
  return ({ context, width, height }) => {
    context.fillStyle = '#000b1c';
    context.fillRect(0, 0, width, height);
    let circle = new Circle(Constants.INNER_CIRCLE_RADIUS, start_x, start_y, context)
    circle.draw(context)
    arcGroups.forEach(arcGroup => {
      arcGroup.draw(context)
      arcGroup.update()
    })
  };
};

canvasSketch(sketch, settings);



