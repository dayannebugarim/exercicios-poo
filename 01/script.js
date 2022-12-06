class Conta {
    constructor(saldo){
        this.saldo = saldo;
    }

    get verSaldo() {
        return `Saldo: R$ ${this.saldo}`;
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Você depositou R$ ${valor}`);
        console.log(this.verSaldo);
    }

    sacar(valor) {
        this.saldo -= valor;
        console.log(`Você sacou R$ ${valor}`);
        console.log(this.verSaldo);
    }
}

let minhaConta = new Conta(500);
console.log(minhaConta.verSaldo);

minhaConta.depositar(200);
minhaConta.sacar(70);