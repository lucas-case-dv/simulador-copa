//Lógica de sorteio

import { buscarTimes } from "./api.js";

const times = await buscarTimes();

export function sortearGrupos() {

    //Divide os times em 8 grupos de 4
    function separarGrupos(array, tamanho) {
        const pedacos = [];
        for (let i = 0; i < array.length; i += tamanho) {
            pedacos.push(array.slice(i, i + tamanho));
        }
        return pedacos;
    }

    const grupos = separarGrupos(times, 4);
    return grupos;
}