function relogio() {
    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);//em milisegundos
        return data.toLocaleTimeString('pt-BR',
            {
                hour12: false,
                timeZone: 'UTC'
            });
        //Uitlizei o timezone UTC para zerar o tempo e
        //utilizei o toLocaleTimeString para formatar o tempo.
    };

    const relogio = document.querySelector('.relogio');

    let sec = 0;
    let timer;

    function startsClock() {
        timer = setInterval(function () {
            sec++;
            relogio.innerHTML = getTimeFromSeconds(sec);
        }, 1000);
    }

    //AGORA VAMOS OTIMIZAR O SCRIPT PARA QUE AS FUNÇÕES DOS BOTÕES SEJAM SELECIONADOS ATRAVÉS DE CONDIÇÕES
    //e.target -> diz qual elemento esta sendo clicado
    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            startsClock();
        }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
        }
        if (el.classList.contains('zerar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            sec = 0;
        }
    })
};
relogio();