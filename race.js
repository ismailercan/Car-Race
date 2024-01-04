class Race {
  constructor(trackLength, carCount) {
    this.trackLength = trackLength;
    this.carCount = carCount;
    this.cars = [];
    this.isRaceStarted = false;
  }


  //Belirtilen sayi kadar arac olusturuyoruz
  initialize() {
    for (let i = 0; i < this.carCount; i++) {
      const randomColor = this.getRandomColor();
      //1 ile 5 arasinda rastgele bir motor gücü olusturur
      const randomPower = Math.ceil(Math.random() * 5) + 1;
      //1 ile 5 arasinda bir pitstop süresi belirliyor
      const randomPitStopTime = Math.ceil(Math.random() * 5);
      this.cars.push(new Car(randomColor, randomPower, randomPitStopTime, 0));
    }
  }

  startRace() {
    if (!this.isRaceStarted) {
      this.isRaceStarted = true;
      const raceInterval = setInterval(() => {
        this.cars.forEach(car => {
          car.move();
          if (car.position >= this.trackLength) {
            clearInterval(raceInterval);
            this.showWinner(car);
          }
        });
      }, 100);
    }
  }

  showWinner(winner) {
    $('body').css('background-color', winner.color);
    console.log(`${winner.color} aracı birinciliği kazandı!`);
  }


  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
      //Hexadecimal renk kodu 6 karakterden olustugu icin 6 kez döngü calisir
    for (let i = 0; i < 6; i++) {
      //Hexadecimal renk kodlari 0 ile 15 arasinda sayi aldigi icin 16 ile carpiyoruz
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}

$(document).ready(function () {
  const trackLength = prompt('Pist uzunluğunu giriniz:');
  const carCount = prompt('Araç sayısını giriniz:');

  const race = new Race(parseInt(trackLength), parseInt(carCount));
  race.initialize();

  $('#start-race').on('click', function () {
    race.startRace();
  });
});
