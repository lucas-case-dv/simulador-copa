//Lógica de sorteio

import {buscarTimes} from "./api.js";

const timesApi = await buscarTimes();

export function sortearGrupos() {

    //Adiciona os devidos campos
    const times = timesApi.map (time => {
        return {
            token: time.token,
            nome: time.nome,
            pontos: 0,
            golsMarcados: 0,
            golsSofridos: 0,
            saldoGols: 0
        };
    });

    //Divide os times em 8 grupos de 4
    function separarGrupos(array, tamanho) {
        const pedacos = [];
        for (let i = 0; i < array.length; i += tamanho) {
            pedacos.push(array.slice(i, i + tamanho));
        }
        return pedacos;
    }

    return separarGrupos(times, 4);
}

