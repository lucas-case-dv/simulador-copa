//Arquivo para interações com a API
async function buscarTimes() {
    const url = 'https://development-internship-api.geopostenergy.com/WorldCup/GetAllTeams';

    const cabecalho = {
        'git-user': 'lucas-case-dv'
    };

    try {
        const resposta = await fetch(url, {
            method: 'GET',
            headers: cabecalho
        });

        if (!resposta.ok)
            throw new Error(`Erro na requisição. Status: ${resposta.status}`);

        const times = await resposta.json();

        return times;
    } catch (e) {
        console.error("Erro ao buscar os times:", e);
        return [];
    }
}
