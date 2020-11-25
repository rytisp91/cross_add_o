// GETS
const mainContainer = document.getElementById('mainContainer')
const turn = document.getElementById('turn')
const winner = document.getElementById('winner')
const reset = document.getElementById('reset')

// LISTENERS
reset.addEventListener('click', replay)

// VARS
let board = [
    "", "", "",
    "", "", "",
    "", "", ""
]
let answerBoardX = []
let answerBoardO = []
let activePlayer = `X`
let winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let gameOnTrigger = true

// FUNCTIONS

generateBoxes()

function generateBoxes() {

    mainContainer.innerHTML = ""

    reset.style.display = "none"

    board.map((item, index) => {
        let smallBox = document.createElement('div')
        smallBox.classList.add(`smallerBox`)
        smallBox.setAttribute(`id`, index)
        smallBox.innerText = item

        mainContainer.appendChild(smallBox)

        smallBox.addEventListener(`click`, clickOnBox)
    })
}

function clickOnBox(event) {
    let index = Number(event.target.id)

    if (gameOnTrigger) {
        if (activePlayer === `X`) {
            if (board[index] === ``) {
                board[index] = `X`
                answerBoardX.push(index)
                activePlayer = `O`
                turn.innerText = "O turn."
            }
        } else {
            if (board[index] === ``) {
                board[index] = `O`
                answerBoardO.push(index)
                activePlayer = `X`
                turn.innerText = "X turn."
            }
        }
    }

    generateBoxes()
    checkResult()
}

function checkResult() {
    winningConditions.map(item => {
        let a = item[0]
        let b = item[1]
        let c = item[2]

        if (answerBoardX.includes(a) &&
            answerBoardX.includes(b) &&
            answerBoardX.includes(c)) {
            turn.innerText = "X win!"
            gameOnTrigger = false
            reset.style.display = "block"
        }

        if (answerBoardO.includes(a) &&
            answerBoardO.includes(b) &&
            answerBoardO.includes(c)) {
            turn.innerText = "O win!"
            gameOnTrigger = false
            reset.style.display = "block"
        }
    })
    if(!board.includes("")){
        turn.innerText = "Tie!"
        reset.style.display = "block"
    }
}

function replay() {
    activePlayer = `X`
    gameOnTrigger = true
    turn.innerText = "X is starting."
    board = [
        "", "", "",
        "", "", "",
        "", "", ""
    ]
    answerBoardX = []
    answerBoardO = []
    generateBoxes()
}
