class Carro {
    constructor(marca, cor, gasolina, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo;
    }

    dirigir(km) {
        this.gasolina -= (km / this.consumo).toFixed(1); // 13km -> - 1l
    }

    abastecer(l) {
        this.gasolina += l;
    }
}

let onix = new Carro('Chevrolet', 'Branco', 50, 13);

console.log(onix);

onix.dirigir(31);

console.log(onix);

onix.abastecer(20);

console.log(onix);