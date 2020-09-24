const guessedNum = document.getElementById('guessedNum')
const currRange = document.getElementById('currRange')
const spanRange = document.getElementById('spanRange')
const resultMessage = document.getElementById('resultMessage')
const prevGuess = document.getElementById('prevGuess')
const prevAttemptsNum = document.getElementById('prevAttemptsNum')

const maxPlays = 5

let prevGuessesTotal = 0
let guessedNumList = []
let isGameOver = false

let lowerRangeNum = 1
let higherRangeNum = 100

let totalRange = `${lowerRangeNum} - ${higherRangeNum}`

const makeGuess = () => {
  return Math.floor(Math.random() * 100) + 1
}
const resultMachineGuess = makeGuess()
console.log(resultMachineGuess)

const checkNumOfRounds = () => {
  if (prevGuessesTotal >= maxPlays) {
    console.log('game over!')
    isGameOver = true
    resultMessage.textContent = `YOU LOSE!, the number was ${resultMachineGuess}`
  }
}

const guessRound = (e) => {
  if (!isGameOver) {
    if (e.key === 'Enter') {
      const valueGuessedNum = Number(guessedNum.value)
      guessedNumList.push(valueGuessedNum)

      spanRange.textContent = totalRange

      if (valueGuessedNum === resultMachineGuess) {
        console.log('we got a winner')
        prevGuessesTotal++
        prevAttemptsNum.textContent = prevGuessesTotal

        isGameOver = true
        resultMessage.textContent = `Correct! you got in ${prevGuessesTotal} attempt`
      } else if (valueGuessedNum < resultMachineGuess) {
        prevGuess.textContent = guessedNumList
        prevGuessesTotal++
        prevAttemptsNum.textContent = prevGuessesTotal

        valueGuessedNum <= lowerRangeNum
          ? (lowerRangeNum = lowerRangeNum)
          : (lowerRangeNum = valueGuessedNum)
        totalRange = `${lowerRangeNum} - ${higherRangeNum}`
        spanRange.textContent = totalRange

        resultMessage.textContent = 'Your guess is too low'
        guessedNum.value = ''

        checkNumOfRounds()
      } else {
        prevGuess.textContent = guessedNumList
        prevGuessesTotal++
        prevAttemptsNum.textContent = prevGuessesTotal

        valueGuessedNum >= higherRangeNum
          ? (higherRangeNum = higherRangeNum)
          : (higherRangeNum = valueGuessedNum)
        totalRange = `${lowerRangeNum} - ${higherRangeNum}`
        spanRange.textContent = totalRange

        resultMessage.textContent = 'Your guess is too high'
        guessedNum.value = ''

        checkNumOfRounds()
      }
    }
  }
}

guessedNum.addEventListener('keypress', guessRound)
