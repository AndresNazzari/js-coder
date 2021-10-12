
/**************************************************************
*        ENTIDAD
***************************************************************/


/**************************************************************
*        VARIABLES Y CONSTANTES
***************************************************************/
dibujarTablero();

const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
let baseInterval = 1000
let result = 0
let currentTime = timeLeft.textContent

/**************************************************************
*        FUNCIONES
***************************************************************/
function dibujarTablero() {
    const grid = document.querySelector('.grid')
    for (let i = 0; i < 9; i++) {
        let casilla = document.createElement('div')
        casilla.setAttribute('class', 'square')
        casilla.setAttribute('id', i + 1)
        grid.appendChild(casilla)
    }

}

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    });
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assigna el id de la posicion random a hitPosition
    hitPosition = randomPosition.id
}

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, baseInterval)

}

function countDown() {
    currentTime -= 1
    timeLeft.textContent = currentTime
    if (currentTime === 0) {
        clearInterval(timerId)
        alert("GAME OVER! Your Final score is " + result)
    }
}



/**************************************************************
*        LOGICA
***************************************************************/



square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id == hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})
let timerId = setInterval(countDown, 1000);

moveMole()