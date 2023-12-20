function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.ligar = function() {
        console.log('O carro está ligado.');
    };
}

// Para criar uma instância do objeto Carro:
let meuCarro = new Carro('Toyota', 'Corolla', 2020);

// Para chamar o método 'ligar':
meuCarro.ligar(); // Isso imprimirá 'O carro está ligado.' no console.

