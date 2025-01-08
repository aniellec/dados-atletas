class Atleta {
    constructor (nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
     }

    obtemNomeAtleta(){
        console.log("Nome: " + this.nome);
    }

    obtemIdadeAtleta(){
        console.log("Idade: " + this.idade);
    }

    obtemPesoAtleta(){
        console.log("Peso: " + this.peso);
    }

    obtemAlturaAtleta(){
        console.log("Altura: " + this.altura);
    }

    obtemNotasAtleta(){
        console.log("Notas: " + this.notas);
    }

     calculaCategoria() {
         if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 15) {
            return "Juvenil";
        } else if (this.idade >= 16 && this.idade <= 19) {
            return "Júnior";
        } else if (this.idade >= 20 && this.idade <= 40) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
     }

     calculaIMC() {
        console.log("IMC: " + this.peso / (this.altura ** 2));
    }

}



const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

atleta.obtemNomeAtleta();
atleta.obtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemAlturaAtleta();
atleta.obtemNotasAtleta();
console.log("Categoria: " + atleta.calculaCategoria());
atleta.calculaIMC();



function sortfunction(a, b){
  return (a - b);
}

let notasValidas = atleta.notas.sort(sortfunction).slice(1,4);
   console.log(`Notas Válidas: ${notasValidas}`);
   let mediaValida = notasValidas.reduce((soma, nota) => soma + nota, 0) / notasValidas.length;
   console.log(`Média Válida: ${mediaValida}`);

/* Exemplo de saída:

Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9,25333333 */
