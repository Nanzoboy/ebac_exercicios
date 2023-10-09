function Pessoa (nome){
    this.nome = nome;
    this.dizoi = function(){
        console.log(this.nome + ' diz ola')
    }
    this.dizCargo = function(){
        console.log(this.cargo)
    }
}

function Funcionario (nome, cargo, salario){
    this.cargo = cargo
    this.salario = salario

    Pessoa.call(this, nome)
}

const funcionario1 = new Funcionario ('Maria', 'Dev Front End', 5000)
funcionario1.dizoi()
funcionario1.dizCargo()
