// GETS
const mainContainer = document.getElementById('mainContainer')

// LISTENERS

// VARS
let board = [
    "", "", "",
    "", "", "",
    "", "", ""
]
let answerBoardX = []
let answerBoardO = []
let activePlayer = `X`
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// FUNCTIONS

generateBoxes()

function generateBoxes() {

    mainContainer.innerHTML = ""

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

    if (activePlayer === `X`) {
        if (board[index] === ``) {
            board[index] = `X`
            answerBoardX.push(index)
            activePlayer = `O`
        }
    } else {
        if (board[index] === ``) {
            board[index] = `O`
            answerBoardO.push(index)
            activePlayer = `X`
        }
    }

    generateBoxes()
    checkResult()
    // console.log(answerBoardX, answerBoardO)
}

function checkResult() {
    winningConditions.map(item => {
        let a = item[0]
        let b = item[1]
        let c = item[2]
        if (answerBoardX.includes(a) && answerBoardX.includes(b) && answerBoardX.includes(c)) {
            alert(`X wins`)
        }

        if (answerBoardO.includes(a) && answerBoardO.includes(b) && answerBoardO.includes(c)) {
            alert(`O wins`)
        }
    })

}


// XPlayerWin.map(item=>{
//     console.log(item)
// })

// [0,1,2],
// [3,4,5],
// [6,7,8]