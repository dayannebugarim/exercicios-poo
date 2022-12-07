class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;

        this.endereco = `${this.rua}, ${this.bairro}, ${this.cidade} ${this.estado}`;
    }

    mudarEndereco() {
        return this.endereco = `${this.rua}, ${this.bairro}, ${this.cidade} ${this.estado}`;
    }

    mudarRua(rua) {
        this.rua = rua;
        this.mudarEndereco();
    }

    mudarBairro(bairro) {
        this.bairro = bairro;
        this.mudarEndereco();
    }

    mudarCidade(cidade) {
        this.cidade = cidade;
        this.mudarEndereco();
    }

    mudarEstado(estado) {
        this.estado = estado;
        this.mudarEndereco();
    }
}

let meuEndereco = new Endereco('Rua Fulanos', 'Frei Damião', 'Juazeiro do Norte', 'CE');

console.log(meuEndereco.endereco);

meuEndereco.mudarBairro('São José')

console.log(meuEndereco.endereco);