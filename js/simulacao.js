//Arquivo para lógica de simulação das partidas e pontos

import { sortearGrupos } from "./sorteio.js";

const grupos = sortearGrupos();

function criarPartidas(grupo) {

    //Define os jogos de um grupo
    const partidas = [

        {timeA: grupo[0], timeB: grupo[1], rodada: 1},
        {timeA: grupo[2], timeB: grupo[2], rodada: 1},

        {timeA: grupo[2], timeB: grupo[0], rodada: 2},
        {timeA: grupo[1], timeB: grupo[3], rodada: 2},

        {timeA: grupo[0], timeB: grupo[3], rodada: 3},
        {timeA: grupo[2], timeB: grupo[1], rodada: 3},
    ];

    return partidas;
}

//Define partidas para cada grupo
for (let i = 0; i < grupos.length; i++) {
    criarPartidas(grupos[i]);
}
