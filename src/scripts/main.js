AOS.init();

const dataDoEvento = new Date("Sep 20, 2025 19:00:00");
const stampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){

    const dataHoje = new Date();
    const stampDeHoje = dataHoje.getTime();

    const distanciaAteOEvento = stampDoEvento - stampDeHoje;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);

        document.getElementById('contador-zerado').innerHTML = 'Meu aniversário já acabou !';
        document.getElementById('contador-zerou').innerHTML = '';
        document.getElementById('contador').innerHTML = '';
    }


}, 1000)