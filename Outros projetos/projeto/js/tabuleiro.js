import perguntas from './perguntas';

document.getElementById('jogarDado').addEventListener('click', rollDado);

let playerAtual = 1;
let playerPositions = { 1: 0, 2: 0 };

function rollDado() {
    const board = document.querySelector('.board');
    let diceResult;

    switch (board.id) {
        case 'inicio':
            diceResult = Math.floor(Math.random() * 3) + 1;
            break;
        case 'ponte':
            diceResult = Math.floor(Math.random() * 4) + 1;
            break;
        case 'floresta':
        case 'vale':
        case 'vulcao':
        case 'labirinto':
            diceResult = Math.floor(Math.random() * 6) + 1;
            break;
        case 'deserto':
            diceResult = Math.floor(Math.random() * 5) + 1;
            break;
        default:
            break;
    }

    const diceImg = document.getElementById('dadoImg');
    diceImg.src = `img/imgDado/dado-${diceResult}.png`;

    const color = playerAtual === 1 ? 'blue' : 'red';
    movePlayer(color, diceResult);
}

function movePlayer(color, passos) {
    const boards = document.querySelectorAll('.board');
    limparCell(boards, playerPositions[playerAtual]);

    let newPosition = playerPositions[playerAtual] + passos;
    const lastCellIndex = 44;
    newPosition = Math.min(lastCellIndex, newPosition);
    newPosition = Math.max(0, newPosition);

    playerPositions[playerAtual] = newPosition;

    boards.forEach(board => {
        const cellId = `#cell-${newPosition}`;
        const cell = board.querySelector(cellId);

        if (cell) {
            cell.style.backgroundColor = color;
        }
    });

    exibirCard(color);
}

function limparCell(boards, position) {
    boards.forEach(board => {
        const cell = board.querySelector(`#cell-${position}`);
        if (cell) {
            cell.style.backgroundColor = '';
        }
    });
}

function exibirCard(color) {
    const messageDiv = document.getElementById('gameCard');
    messageDiv.style.display = 'block';

    const randomIndex = Math.floor(Math.random() * perguntas.length);
    const { story, question, options } = perguntas[randomIndex];

    document.getElementById('story').textContent = story;
    document.getElementById('question').textContent = question;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';

    options.forEach((option, index) => {
        const label = document.createElement('label');
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = 'resposta';
        radioButton.value = option;
        radioButton.id = 'option-' + index;

        const span = document.createElement('span');
        span.textContent = option;

        label.appendChild(radioButton);
        label.appendChild(span);

        optionsDiv.appendChild(label);
    });

    const responderButton = document.createElement('button');
    responderButton.textContent = 'Responder';
    responderButton.addEventListener('click', () => checkPergunta(color));

    optionsDiv.appendChild(responderButton);
}

function checkPergunta(color) {
    const { correctAnswer } = perguntas.find((pergunta) => pergunta.question === document.getElementById('question').textContent);
    newPosition = playerPositions[playerAtual];

    const selectedOption = document.querySelector('input[name="resposta"]:checked');
    
    if (selectedOption) {
        const resposta = selectedOption.value;

        if (resposta === correctAnswer) {
            alert('Resposta correta! Você avança um passo.');
            movePlayer(color, 1);
            newPosition += 1;
            playerAtual = playerAtual === 1 ? 2 : 1;
        } else {
            alert('Resposta incorreta! Você volta um passo.');
            movePlayer(color, -1);
            newPosition -= 1;
            playerAtual = playerAtual === 1 ? 2 : 1;
        }

        const gameCard = document.getElementById('gameCard');
        gameCard.style.display = 'none';
    } else {
        alert('Selecione uma resposta.');
    }
}