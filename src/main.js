const alunos = [
    {nome: 'João', nota: 7},
    {nome: 'Maria', nota: 5},
    {nome: 'Carlos', nota: 8},
    {nome: 'Ana', nota: 6},
    {nome: 'Pedro', nota: 4}
]

const alunosAprovados = alunos.filter(alunos => alunos.nota >= 6)

console.log(alunosAprovados)

