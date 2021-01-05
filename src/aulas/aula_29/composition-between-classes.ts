/** Composição entre Classes:
 *
 * Significa que um objeto tem outro objeto como parte dele.
 * Uma relação muito mais forte que agregação.
 *
 * Exemplos:
 * um carro tem composição com o motor.
 * uma pessoa tem composição com o ser humano.
 */

export class Car {
  private readonly motor = new Motor();

  turnOn(): void {
    this.motor.turnOn();
  }

  speedUp(): void {
    this.motor.speedUp();
  }

  stop(): void {
    this.motor.stop();
  }
}

export class Motor {
  turnOn(): void {
    console.log('Motor está ligado...');
  }

  speedUp(): void {
    console.log('Motor está acelerando...');
  }

  stop(): void {
    console.log('Motor está parado...');
  }
}

const car = new Car();
car.turnOn();
car.speedUp();
car.stop();
