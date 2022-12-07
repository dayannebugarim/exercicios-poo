class CarrinhoCompras {
    constructor(){
        this.items = [];
        this.qtdTotal = 0;
        this.valorTotal = 0;
    }

    get verItens() {
        if (this.items.length === 0) {
            console.log("Carrinho vazio :(")
        } else {
            this.items.sort((x, y) => {
                return x.id - y.id;
            })
            this.items.map(item => {
                console.log(item);
            });
        }
    }

    get verCarrinho() {
        console.log(`
            Quantidade Total de Itens: ${this.qtdTotal}\n
            --------------------------------\n
            Valor total: R$ ${this.valorTotal.toFixed(2)}
        `);
    }

    adicionarItem(nome, valor, quantidade = 1){
        let qtd = 0;
        let id;
        this.items.map(item => {
            if (item.nome === nome ) {
                id = item.id;
                qtd = item.quantidade;
                const index = this.items.indexOf(item);
                this.items.splice(index, index + 1);
            }
        })
        this.items.push({
            id: id ? id : this.items.length + 1,
            nome: nome,
            valor: valor,
            quantidade: quantidade + qtd,
        });
        id = undefined;
        qtd = 0;

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

meuCarrinho.adicionarItem('Queijo', 6.90, 2);
meuCarrinho.adicionarItem('Presunto Premium', 26.78, 2);
meuCarrinho.adicionarItem('Sabonete', 3.50);
meuCarrinho.adicionarItem('Sabonete', 3.50, 3);
meuCarrinho.adicionarItem('Chocolate', 12.10, 3);

meuCarrinho.verItens
meuCarrinho.verCarrinho;

let outroCarrinho = new CarrinhoCompras();

outroCarrinho.verItens;
outroCarrinho.verCarrinho;