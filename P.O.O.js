function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular;
  this.saldoInicial = saldoInicial;

  this.depositar = function (monto) {
    return (this.saldoInicial = this.saldoInicial + monto);
  };

  this.extraer = function (monto) {
    return (this.saldoInicial = this.saldoInicial - monto);
  };

  this.consultarSaldo = function () {
    return console.log("Saldo actual: ", this.saldoInicial);
  };
}

const juan = new CuentaBancaria("juan", 500);

juan.consultarSaldo();

juan.extraer(209);
juan.consultarSaldo();
juan.depositar(400);
juan.consultarSaldo();
