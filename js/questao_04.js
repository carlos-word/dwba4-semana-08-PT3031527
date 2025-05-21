class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;a
  }

  nomeCompleto() {
    return `${this.primeiroNome} ${this.segundoNome}`;
  }

  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }

  situacao() {
    return this.media() > 6 ? "Aprovado" : "Reprovado";
  }
}

const alunos = [
  new Aluno("João", "Silva", 7, 8.5),
  new Aluno("Maria", "Parreira", 6, 7),
  new Aluno("Carlos", "Souza", 8, 5),
  new Aluno("Isabely", "Matos", 5, 6),
  new Aluno("Pedro", "Golsalves", 9, 8)
];

alunos.slice(0, 3).forEach(aluno => {
  alert(`Nome: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
});
