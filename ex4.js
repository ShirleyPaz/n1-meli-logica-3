// 1- Crie uma função construtora para Terreno, cada terreno deve ter:
// largura, comprimento, area(largura x comprimento)
class Terreno {
    constructor(largura, comprimento) {
        this.largura = largura;
        this.comprimento = comprimento;
        this.area = largura * comprimento;
    }

    detalhar() {
        return `O tenho tem ${this.largura}m de largura, ${this.comprimento}m de comprimento e 
        ${this.area}m de área total`;
    }
}


Terreno.prototype.calculaPreco = function () {
    this.preco = this.area * 1000;

    return `O preco do terreno é R$${this.preco}`;
    // - calcularPreco -> que vai ser a area x 1000 reais.
}

Terreno.prototype.mostrarInfos = function () {
    return `A área do terreno é ${this.area} e o preço é ${this.preco}`
    // - mostrarInfos -> que mostrar a area e o preço do terreno.
}

const meuTerreno = new Terreno(12, 5)

// console.log(meuTerreno.detalhar());
// console.log(meuTerreno.calculaPreco());
// console.log(meuTerreno.mostrarInfos());
// console.log(meuTerreno);

// 2 crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais.
// - mostrarInfos -> que mostrar a area e o preço do terreno.

// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)
// 4 - use a função calcular preco para que todas as instancias tenham seus precos.

const terreno1 = new Terreno(5, 2);
const terreno2 = new Terreno(2, 5);
const terreno3 = new Terreno(3, 7);
const terreno4 = new Terreno(4, 3);
const terreno5 = new Terreno(2, 5);

terreno1.calculaPreco();
terreno2.calculaPreco();
terreno3.calculaPreco();
terreno4.calculaPreco();
terreno5.calculaPreco();


// 5 - crie uma array vazia chamada terrenos.
const terrenos = [];

terrenos.push(terreno1, terreno2, terreno3, terreno4, terreno5);

// console.log(terrenos, 'terrenos');


// 6 - insira as instancias criadas(que os precos já tenham sido calculados) na array terrrenos.

// 7 - Imprima na tela o último terreno da array terrenos.

// console.log(terrenos[terrenos.length-1], 'ultimo');
console.log(terrenos[2].area, 'terceiro');
// 8 - Imprima a area do terceiro item da array terrenos
// 9 - Usando um loop, execute o método mostrarInfos de todos os terrenos.
for (i = 0; i < terrenos.length; i++) {
    // console.log(terrenos[i].mostrarInfos());
}


// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro.

function ordenaTerrenos(arrTerrenos) {
    const terrenosPrecos = arrTerrenos.sort((a, b) => a.preco - b.preco);
    console.log(terrenosPrecos);
}

ordenaTerrenos(terrenos);

    // for (const item of terrenos) {
    // console.log(item.mostrarInfos());
    // }   



// 11 - Crie uma função que Imprima o mais barato
// console.log('barato', terrenosPrecos[0]);
// console.log('caro', terrenosPrecos[terrenosPrecos.length-1]);
// 12 - Crie uma função que Imprima o mais caro.