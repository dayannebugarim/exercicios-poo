class CarrinhoCompras {
    constructor(){
        this.items = [];
        this.qtdTotal = 0;
        this.valorTotal = 0;
    }

    get verItens() {
        this.items.map(item => {
            console.log(item);
        });
    }

    get verCarrinho() {
        console.log(`
            Quantidade Total de Itens: ${this.qtdTotal}\n
            --------------------------------\n
            Valor total: R$ ${this.valorTotal.toFixed(2)}
        `);
    }

    adicionarItem(nome, valor, quantidade = 1){
        this.items.push({
            id: this.items.length + 1,
            nome: nome,
            valor: valor,
            quantidade: quantidade,
        });

        this.qtdTotal += quantidade;
        this.valorTotal += valor * quantidade;
    }

    removerItem(nome, quantidade = 1) {
        this.items.map(item => {
            if(item.nome === nome && quantidade === item.quantidade) {
                const index = this.items.indexOf(item);

                this.qtdTotal -= item.quantidade;
                this.valorTotal -= item.valor;

                this.items.splice(index, index + 1);
            } else if (item.nome === nome && quantidade < item.quantidade) {
                //index = this.items.indexOf(item);
                item.quantidade -= quantidade;
                this.qtdTotal -= quantidade;
                this.valorTotal -= item.valor * quantidade;
            }
        })
    }
}

let meuCarrinho = new CarrinhoCompras();

meuCarrinho.adicionarItem('Sabonete', 3.50);
meuCarrinho.adicionarItem('Pasta de dente', 4.15, 3);
meuCarrinho.adicionarItem('Peito de Frango', 15);
meuCarrinho.removerItem('Pasta de dente', 2);
meuCarrinho.adicionarItem('Queijo', 6.89, 2);
meuCarrinho.adicionarItem('Presunto Premium', 26.89, 2)

meuCarrinho.verItens;
meuCarrinho.verCarrinho;