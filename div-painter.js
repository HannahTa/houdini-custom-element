class DivPainter {
 static get inputProperties() {
   return ['--div-color'];
 }
  
  paint(context, geometry, properties) {
    const color = properties.get('--div-color');
    context.fillStyle = color;
    context.fillRect(0, 0, geometry.width, geometry.height);
    context.stroke();
  }
}

registerPaint('divPainter', DivPainter);