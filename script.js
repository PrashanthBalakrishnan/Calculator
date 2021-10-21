class Calculator {
    constructor(perviousCalNumberText, currentCalNumberText) {
        this.perviousCalNumberText = perviousCalNumberText
        this.currentCalNumberText = currentCalNumberText
        this.clear()
    }

    clear() {
        this.currentCalNumber = ''
        this.perviousCalNumber = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.currentCalNumber = this.currentCalNumber.toString() + number.toString()
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentCalNumberText.innerText = this.currentCalNumber
    }
}


const numberButtons = document.querySelectorAll('[data-numbers]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const perviousCalNumberText = document.querySelector('[data-pervious]')
const currentCalNumberText = document.querySelector('[data-current]')


const calculator = new Calculator(perviousCalNumberText, currentCalNumberText)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()

    })

})