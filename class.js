class CuentaBancaria {
  #saldo;
  constructor(nombreTitular, saldo) {
    this.titular = nombreTitular;
    this.#saldo = saldo;
  }

  get saldo() {
    return this.#saldo;
  }
  set depositar(monto) {
    if (monto < 0) {
      console.log("No se puede depositar un monto negativo");
    } else {
      this.#saldo += monto;
      console.log("saldo depositado correctamente");
    }
  }
  set retirar(monto) {
    if (monto < 0) {
      console.log("No se puede depositar un monto negativo");
    }
    if (this.#saldo - monto < 0) {
      console.log("El saldo no puede quedar en negativo");
    } else {
      this.#saldo -= monto;
      console.log("saldo retirado correctamente");
    }
  }
}

const pepe = new CuentaBancaria("pepe", 500);
console.log("soy", pepe.titular);
console.log(pepe.saldo);

pepe.depositar = 500;
console.log(pepe.saldo);

pepe.retirar = 500;
console.log(pepe.saldo);
