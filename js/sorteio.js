//Lógica de sorteio

import { buscarTimes } from "./api.js";

const times = await buscarTimes();

function sortearGrupos() {

    //Embaralha os 32 times recebidos
    function embaralhar(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const timesEmbaralhados = embaralhar(times);

    //Divide os times embaralhos em 8 grupos de 4
    function separarGrupos(array, tamanho) {
        const pedacos = [];
        for (let i = 0; i < array.length; i += tamanho) {
            pedacos.push(array.slice(i, i + tamanho));
        }
        return pedacos;
    }

    const grupos = separarGrupos(timesEmbaralhados, 4);

}

sortearGrupos();
