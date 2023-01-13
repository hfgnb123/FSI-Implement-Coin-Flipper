let numberHeads = 0
let numberTails = 0
let pctHeads = 0
let pctTails = 0
let total = 0
const flipButton = document.querySelector("#flip")
const clearButton = document.querySelector("#clear")
const statusMessage = document.querySelector(".status")
const image = document.querySelector("img")
const numberHeadsCell = document.querySelector("#heads")
const numberTailsCell = document.querySelector("#tails")
const pctHeadsCell = document.querySelector("#heads-percent")
const pctTailsCell = document.querySelector("#tails-percent")
    flipButton.addEventListener("click", function(e){
      console.log("I've been clicked")
      total ++
      let result = Math.round(Math.random() * 101)
      console.log("result:", result)
      if (result < 51){
        numberHeads ++
        statusMessage.textContent = "You flipped heads"
        image.src = "../FSI-Implement-Coin-Flipper/assets/images/penny-heads.jpg"
      } 
        else {
        numberTails ++
        statusMessage.textContent = "You flipped tails"
        image.src = "../FSI-Implement-Coin-Flipper/assets/images/penny-tails.jpg"
      }
      console.log(numberHeads, numberTails)
      pctHeads = Math.round(numberHeads/total * 100)
      pctTails = Math.round(numberTails/total * 100)
      console.log("percentages", pctHeads, pctTails)
      numberHeadsCell.textContent = `${numberHeads}`
      numberTailsCell.textContent = `${numberTails}`
      pctHeadsCell.textContent = `${pctHeads}%`
      pctTailsCell.textContent = `${pctTails}%`
    })
    clearButton.addEventListener("click", function(e){
      console.log("i was clicked")
      total = 0
      pctHeads = 0
      pctTails = 0
      numberHeads = 0
      numberTails = 0
      numberHeadsCell.textContent = `${numberHeads}`
      numberTailsCell.textContent = `${numberTails}`
      pctHeadsCell.textContent = `${pctHeads}%`
      pctTailsCell.textContent = `${pctTails}%`
      statusMessage.textContent = "Let's Get Rolling"
      image.src = "./assets/images/penny-heads.jpg"
    })