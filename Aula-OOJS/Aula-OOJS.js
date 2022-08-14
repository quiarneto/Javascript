class ContaBancaria {
	constructor(agencia, numero, tipo){
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

	get saldo(){
		return this._saldo;
	}

	set saldo(valor){
		this._saldo = valor;
	}

	sacar(valor){
		if (valor > this._saldo) {
			return "Operação negada"
		}
		this._saldo = this._saldo - valor;

		return this._saldo;
	}

	depositar(valor){
		this._saldo = this._saldo + valor;

		return this._saldo;
	}
}

class ContaCorrent extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito){
		super(agencia, numero); //pega os dados e manda pra classe pai ContaBancaria
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero){
		super(agencia, numero); //pega os dados e manda pra classe pai ContaBancaria
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero){
		super(agencia, numero); //pega os dados e manda pra classe pai ContaBancaria
		this.tipo = 'Universitária';
	}

	sacar(valor) {
		if (valor > 500) {
			return 'Operação Negada'
		}

		this._saldo = this._saldo - valor;
	}
}

/* no console:

const minhaConta = new ContaCorrent(1, 234, true)
minhaConta.saldo ---- 0
minhaConta.depositar(1000) ---- 1000
minhaConta.sacar(500) ---- 500
minhaConta.saldo ---- 500
minhaConta.sacar(600) --- Operação Negada

const contaUni = new ContaUniversitaria(1, 22)
contaUni.depositar(1000) ---- 1000
contaUni.sacar(550) ---- Operação Negada

*/