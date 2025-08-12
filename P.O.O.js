function CuentaBancaria(titular, saldoInicial) {
  this.titular = titular;
  this.saldoInicial = saldoInicial;
}
CuentaBancaria.prototype.depositar = function (monto) {
  this.saldoInicial += monto;
  console.log("Monto depositado correctamente");
};

CuentaBancaria.prototype.retirar = function (monto) {
  this.saldoInicial -= monto;
  console.log("Monto extraido correctamente");
};

CuentaBancaria.prototype.consultarSaldo = function () {
  console.log("Saldo actual: ", this.saldoInicial);
};

const juan = new CuentaBancaria("juan", 500);

juan.consultarSaldo();

juan.retirar(209);
juan.consultarSaldo();
juan.depositar(400);
juan.consultarSaldo();
