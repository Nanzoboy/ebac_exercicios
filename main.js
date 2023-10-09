function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo,
    this. fabricante = fabricante,
    this.anoModelo = anoModelo,
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log('VRUUM')
    }
}

const carroJoao = new Carro('Fiesta', 'Ford', 2020, 2019)
const carroMaria = new Carro('Ka', 'Ford', 2023, 2022) 

console.log(carroJoao)
console.log(carroMaria)