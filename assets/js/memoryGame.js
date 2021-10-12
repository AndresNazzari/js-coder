//document.addEventListener('DOMContentLoaded', () => {

/**************************************************************
*        VARIABLES Y CONSTANTES
***************************************************************/
// Card Options
const cardArray = [
    {
        name: 'fries',
        img: '../assets/img/memoryGame/fries.png'
    }, {
        name: 'fries',
        img: '../assets/img/memoryGame/fries.png'
    }, {
        name: 'cheeseburger',
        img: '../assets/img/memoryGame/cheeseburger.png'
    }, {
        name: 'cheeseburger',
        img: '../assets/img/memoryGame/cheeseburger.png'
    }, {
        name: 'hotdog',
        img: '../assets/img/memoryGame/hotdog.png'
    }, {
        name: 'hotdog',
        img: '../assets/img/memoryGame/hotdog.png'
    }, {
        name: 'ice-cream',
        img: '../assets/img/memoryGame/ice-cream.png'
    }, {
        name: 'ice-cream',
        img: '../assets/img/memoryGame/ice-cream.png'
    }, {
        name: 'milkshake',
        img: '../assets/img/memoryGame/milkshake.png'
    }, {
        name: 'milkshake',
        img: '../assets/img/memoryGame/milkshake.png'
    }, {
        name: 'pizza',
        img: '../assets/img/memoryGame/pizza.png'
    }, {
        name: 'pizza',
        img: '../assets/img/memoryGame/pizza.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const blankCard = '../assets/img/memoryGame/blank.png'
const whiteCard = '../assets/img/memoryGame/white.png'
// Create Board
const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosenName = []
let cardsChosenId = []
let cardsWon = []

/**************************************************************
*        FUNCIONES
***************************************************************/
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img');
        card.setAttribute('src', blankCard)
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

// Check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
        alert('You have clicked the same image!')
        cards[optionOneId].setAttribute('src', blankCard)
        cards[optionTwoId].setAttribute('src', blankCard)
    } else if (cardsChosenName[0] === cardsChosenName[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', whiteCard)
        cards[optionTwoId].setAttribute('src', whiteCard)
        cardsWon.push(cardsChosenName)
    } else {
        alert('Sorry, try again')
        cards[optionOneId].setAttribute('src', blankCard)
        cards[optionTwoId].setAttribute('src', blankCard)
    }
    cardsChosenName = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}
// flip cards
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosenName.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosenName.length === 2) {
        setTimeout(checkForMatch, 500) //set timeout setea un tiempo para que se ejecute la funcion y no sea tan instantaneo
    }
}

/**************************************************************
*        LOGICA
***************************************************************/
createBoard();

//}