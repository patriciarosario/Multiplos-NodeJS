//Espera linha de comando "node index.js 'numero' 'mult'"

const numero = parseInt(process.argv[2]);       //Array que recebe a posição 2 da linha de comando, numero limite
const mult = parseInt(process.argv[3]);         //Array que recebe a posição 3 da linha de comando, numero que se refere os múltiplos
const multiplos = [];                           //Array que receberá a lista de números multiplos

for(let i = 0; i < numero; i++){
    if(i % mult === 0){                         //Se resto da divisão for 0 é pq é múltiplo
        multiplos.push(i);                      //Guarda número no array
    }
}

console.log(multiplos);                         //Exibe array contendo múltiplos