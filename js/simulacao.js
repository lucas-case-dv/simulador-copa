//Arquivo para lógica de simulação das partidas e pontos

import { sortearGrupos } from "./sorteio.js";

const grupos = sortearGrupos();

function criarPartidas() {

    const todosOsJogos = grupos.map((grupo, index) => {
        //Define os jogos de um grupo
        const partidas = [

            {timeA: grupo[0], timeB: grupo[1], rodada: 1},
            {timeA: grupo[2], timeB: grupo[3], rodada: 1},

            {timeA: grupo[2], timeB: grupo[0], rodada: 2},
            {timeA: grupo[1], timeB: grupo[3], rodada: 2},

            {timeA: grupo[0], timeB: grupo[3], rodada: 3},
            {timeA: grupo[2], timeB: grupo[1], rodada: 3},
        ];
        return {
            grupo: String.fromCharCode(65 + index),
            jogos: partidas,
            equipes: grupo
        };
    });

    return todosOsJogos;
}

function simularGrupos(cronograma) {
    cronograma.forEach(itemGrupo => {
        //Percorre cada partida de um grupo
        itemGrupo.jogos.forEach(partida => {
            processarResultado(partida);
        });
    });
}

function processarResultado(partida) {
    // Gera gols aleatórios de 0 a 5
    const golsA = Math.floor(Math.random() * 6);
    const golsB = Math.floor(Math.random() * 6);

    partida.placarA = golsA;
    partida.placarB = golsB;

    partida.timeA.golsMarcados += golsA;
    partida.timeA.golsSofridos += golsB;
    partida.timeA.saldoGols = partida.timeA.golsMarcados - partida.timeA.golsSofridos;

    partida.timeB.golsMarcados += golsB;
    partida.timeB.golsSofridos += golsA;
    partida.timeB.saldoGols = partida.timeB.golsMarcados - partida.timeB.golsSofridos;

    if (golsA > golsB) {
        partida.timeA.pontos += 3;
    } else if (golsB > golsA) {
        partida.timeB.pontos += 3;
    } else {
        partida.timeA.pontos += 1;
        partida.timeB.pontos += 1;
    }
}

//Define posições
function ordenarGrupo(grupo) {
    grupo.sort((a, b) => {
        if (b.pontos !== a.pontos) {
            return b.pontos - a.pontos;
        }

        if (b.saldoGols !== a.saldoGols) {
            return b.saldoGols - a.saldoGols;
        }

        // Sorteia no caso de empate dos outros critérios
        return Math.random() - 0.5;
    });
}

function processarFaseDeGrupos(cronograma) {
    const classificadosOitavas = [];

    cronograma.forEach(itemGrupo => {

        ordenarGrupo(itemGrupo.equipes);

        classificadosOitavas.push({
            grupo: itemGrupo.grupo,
            primeiro: itemGrupo.equipes[0],
            segundo: itemGrupo.equipes[1]
        });
    });

    return classificadosOitavas;
}

const cronograma = criarPartidas();
simularGrupos(cronograma);
console.log(processarFaseDeGrupos(cronograma));


