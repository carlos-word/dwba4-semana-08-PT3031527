class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
      this.primeiroNome = primeiroNome;
      this.segundoNome = segundoNome;
      this.primeiraNota = primeiraNota;
      this.segundaNota = segundaNota;
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
    new Aluno("João", "Silva", 4, 7.5),
    new Aluno("Maria", "Martins", 2, 8),
    new Aluno("Carlos", "Souza", 4.5, 7.5),
    new Aluno("Laura", "Costa", 5, 6),
    new Aluno("Isabely", "Gonsalves", 10, 8)
  ];
  
  alunos.slice(0, 3).forEach(aluno => {
    alert(`Nome: ${aluno.nomeCompleto()()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
  });
  
