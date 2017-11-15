/**
 * Creates a canvas element and upon it draws
 * small gauge that can display from 0 to 100%
 * in the form of a one-slice pie chart.
 * @param  {Number} value is a number between 0 and 100
 * @param  {Object} where in the document to insert the generated
 * @return {Object}       a handle to the created canvas object.
 */
function gauge(value, where) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const TAU = 2*Math.PI;
  const offset = -(Math.PI/2)
  const angle = offset + (value/100) * TAU;

  canvas.width=200;
  canvas.height=200;

  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.arc(100,100,96,offset,angle);
  ctx.closePath();
  ctx.fillStyle="red";
  ctx.lineStyle="black";
  ctx.lineWidth="4";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.arc(100,100,92,offset,angle);
  ctx.closePath();
  ctx.lineWidth="2";
  ctx.strokeStyle="white";
  ctx.stroke();

  if (where) {
    where.appendChild(canvas)
  }
  return canvas;
}

module.exports = gauge;
