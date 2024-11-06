function gerarBoletim() {
    // Coleta das notas
    const notas = {
        materia1: [
            parseFloat(document.getElementById('materia1-sem1').value),
            parseFloat(document.getElementById('materia1-sem2').value),
        ],
        materia2: [
            parseFloat(document.getElementById('materia2-sem1').value),
            parseFloat(document.getElementById('materia2-sem2').value),
        ],
        materia3: [
            parseFloat(document.getElementById('materia3-sem1').value),
            parseFloat(document.getElementById('materia3-sem2').value),
        ],
        materia4: [
            parseFloat(document.getElementById('materia4-sem1').value),
            parseFloat(document.getElementById('materia4-sem2').value),
        ],
    };

    const media = 5;
    let resultado = '';
    let aprovado = true;

    // Função para calcular a média
    function calcularMedia(notas) {
        return (notas[0] + notas[1]) / 2;
    }

    // Função para verificar o status
    function verificarStatus(media) {
        if (media > 10) {
            return 'Nota não localizada';
        } else if (media >= media) {
            return 'Aprovado';
        } else if (media >= 4) {
            return 'Recuperação';
        } else {
            return 'Reprovado';
        }
    }

    // Gerar boletim
    let tabelaBoletim =
        '<table><tr><th>Matéria</th><th>Semestre 1</th><th>Semestre 2</th><th>Média</th><th>Status</th></tr>';

    for (let i = 1; i <= 4; i++) {
        const materia = `materia${i}`;
        const mediaMateria = calcularMedia(notas[materia]);
        const statusMateria = verificarStatus(mediaMateria);

        if (statusMateria !== 'Aprovado') {
            aprovado = false;
        }

        tabelaBoletim += `<tr><td>Matéria ${i}</td><td>${
            notas[materia][0]
        }</td><td>${notas[materia][1]}</td><td>${mediaMateria.toFixed(
            2
        )}</td><td>${statusMateria}</td></tr>`;
    }

    tabelaBoletim += '</table>';

    // Mostrar o resultado
    document.getElementById('boletim').innerHTML = tabelaBoletim;
    document.getElementById('resultado').innerText = aprovado
        ? 'Aprovado'
        : 'Reprovado/Recuperação';
}
