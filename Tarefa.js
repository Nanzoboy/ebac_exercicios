function Animal(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.emitirSom = function() {
        console.log(`${this.nome} faz um som.`)
    }
    this.dormir = function() {
        console.log(`${this.nome} está dormindo.`)
    }
}
function Cachorro(nome, idade, raca) {
    Animal.call(this, nome, idade)
    this.raca = raca
    this.latir = function() {
        console.log(`${this.nome} (${this.raca}) está latindo.`)
    }
}

function Gato(nome, idade, cor) {
    Animal.call(this, nome, idade)
    this.cor = cor
    this.miar = function() {
        console.log(`${this.nome} (${this.cor}) está miando.`)
    }
}

const cachorro1 = new Cachorro("Rex", 3, "Labrador")
const gato1 = new Gato("Whiskers", 2, "Siamese")
const cachorro2 = new Cachorro("Buddy", 5, "Golden Retriever")

cachorro1.emitirSom()
gato1.miar()
cachorro2.latir()