"use strict";

var alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Carlos',
  nota: 8
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Pedro',
  nota: 4
}];
var alunosAprovados = alunos.filter(function (alunos) {
  return alunos.nota >= 6;
});
console.log(alunosAprovados);