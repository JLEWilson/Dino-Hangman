export default class DrawHangman{
  constructor() {
    this.canvas = document.getElementById('hangman');
    this.context = this.canvas.getContext("2d");
    this.draws = [
      'gallows', 
      'head', 
      'body', 
      'rightHarm', 
      'leftHarm',
      'rightLeg',
      'leftLeg',
      'rightFoot',
      'leftFoot',
   ];
   this.step = 0;
  }

  draw(part){
    switch (part) {
    case 'gallows' :
      this.context.strokeStyle = '#444';
      this.context.lineWidth = 10; 
      this.context.beginPath();
      this.context.moveTo(175, 225);
      this.context.lineTo(5, 225);
      this.context.moveTo(40, 225);
      this.context.lineTo(25, 5);
      this.context.lineTo(100, 5);
      this.context.lineTo(100, 25);
      this.context.stroke();
      break;

    case 'head':
      this.context.lineWidth = 5;
      this.context.beginPath();
      this.context.arc(100, 50, 25, 0, Math.PI*2, true);
      this.context.closePath();
      this.context.stroke();
      break;
    
    case 'body':
      this.context.beginPath();
      this.context.moveTo(100, 75);
      this.context.lineTo(100, 140);
      this.context.stroke();
      break;

    case 'rightHarm':
      this.context.beginPath();
      this.context.moveTo(100, 85);
      this.context.lineTo(60, 100);
      this.context.stroke();
      break;

    case 'leftHarm':
      this.context.beginPath();
      this.context.moveTo(100, 85);
      this.context.lineTo(140, 100);
      this.context.stroke();
      break;

    case 'rightLeg':
      this.context.beginPath();
      this.context.moveTo(100, 140);
      this.context.lineTo(80, 190);
      this.context.stroke();
      break;

    case 'rightFoot':
      this.context.beginPath();
      this.context.moveTo(82, 190);
      this.context.lineTo(70, 185);
      this.context.stroke();
    break;

    case 'leftLeg':
      this.context.beginPath();
      this.context.moveTo(100, 140);
      this.context.lineTo(125, 190);
      this.context.stroke();
    break;

    case 'leftFoot':
      this.context.beginPath();
      this.context.moveTo(122, 190);
      this.context.lineTo(135, 185);
      this.context.stroke();
    break;
    } 
 }
 
}
