AOS.init();

const dataAniversario = new Date("Feb 08, 2025 19:00:00");
const timeStampAniversario = dataAniversario.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAgora = agora.getTime();

    const distanciaAniversario = timeStampAniversario - timeStampAgora;

    const diasMs = 1000 * 60 * 60 * 24;
    const horasMs = 1000 * 60 * 60;
    const minutosMs = 1000 * 60
    
    const dias = Math.floor(distanciaAniversario / diasMs);
    const horas = Math.floor((distanciaAniversario % diasMs) / horasMs);
    const minutos = Math.floor((distanciaAniversario % horasMs) / minutosMs);
    const segundos = Math.floor((distanciaAniversario % minutosMs) / 1000);

    document.getElementById('contador').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s.`

    if (distanciaAniversario < 0 ){
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = `Já passou a data`
    }

},1000)