class Car {
    constructor(color, motorPower, pitStopTime, position) {
      this.color = color;
      this.motorPower = motorPower;
      this.pitStopTime = pitStopTime;
      this.position = position;
      this.element = this.createCarElement();
    }
  
    createCarElement() {
      //Yeni bir div elementi olusturuluyor ve aracin rengini alir
      //Araclari ve pisti görsel olarak temsil eder
      const carElement = $('<div>').addClass('car').css('background-color', this.color);
      $('#race-track').append(carElement);
      return carElement;
    }
  
    move() {
      this.position += this.motorPower;
      this.element.css('left', this.position + 'px');
    }
  
    pitStop() {
      setTimeout(() => {
        // Pit stop işlemleri
        console.log(`${this.color} aracı pit stop yaptı.`);
      }, this.pitStopTime * 1000);
    }
  }
  