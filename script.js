// GETS
const mainContainer = document.getElementById('mainContainer')

// LISTENERS

// VARS
let board = [
    "", "", "",
    "", "", "",
    "", "", ""
]
let activePlayer = `X`

// FUNCTIONS

generateBoxes()

function generateBoxes() {

    mainContainer.innerHTML = ""

    board.map((item, index)=>{
        let smallBox = document.createElement('div')
        smallBox.classList.add(`smallerBox`)
        smallBox.setAttribute(`id`, index)
        smallBox.innerText = item

        mainContainer.appendChild(smallBox)

        smallBox.addEventListener(`click`, clickOnBox)
    })
}

function clickOnBox(event){
    let index = event.target.id
    if(activePlayer === `X`){
        if(board[index] === ``){
            board[index] = `X`
            activePlayer = `O`
        }
    } else {
        if(board[index] === ``) {
            board[index] = `O`
            activePlayer = `X`
        }
    }

    generateBoxes()
}