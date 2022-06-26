const btn = document.querySelector('.btn');

const ask = ['De quem é a famosa frase “Penso, logo existo"', 
'Qual o nome do presidente do Brasil que ficou conhecido como Jango',
'O feudalismo é uma característica de qual período histórico?',
'Que nome recebeu a lei que foi assinada pela princesa Isabel e que proibiu a escravidão no Brasil?',
'A palavra mesopotâmia é de origem grega e significa "terra entre rios". Essa região, localiza-se entre os rios'];

const feedback = ['descartes', 'joão goulart' ,'idade média', 'lei áurea', 'tigre e eufrates'];

//Gerador de perguntas aleaórias.
let question = document.querySelector('.question');

let randomic = Math.floor(Math.random() * ask.length);;

question.innerHTML = `${ask[randomic]}`;

function enviar() {
    answer = document.querySelector('.answer').value
    let result = document.querySelector('.result')
    const right = document.querySelector('.right')
    const wrong = document.querySelector('.wrong')
    
    if (ask[0], answer == feedback[0]) {
        result.right.innerHTML = right.setAttribute('style', 'visibility:visible')
    } else if (ask[1], answer == feedback[1]) {
        result.right.innerHTML = right.setAttribute('style', 'visibility:visible')
    } else if (ask[2], answer == feedback[2]) {
        result.right.innerHTML = right.setAttribute('style', 'visibility:visible')
    } else if (ask[3], answer == feedback[3]) {
        result.right.innerHTML = right.setAttribute('style', 'visibility:visible')
    } else if (ask[4], answer == feedback[4]) {
        result.right.innerHTML = right.setAttribute('style', 'visibility:visible')
    } else {
        result.wrong.innerHTML = wrong.setAttribute('style', 'visibility:visible')
    }


}

