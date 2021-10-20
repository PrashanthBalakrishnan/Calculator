class Calculator {
    constructor(perviousCalNumber, currentCalNumber) {
        this.perviousCalNumber = perviousCalNumber
        this.currentCalNumber = currentCalNumber
        this.clear
    }

    clear() {
        this.currentCalNumber = ''
        this.perviousCalNumber = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}


const numberButtons = document.querySelectorAll('data-number')
const numberButtons = document.querySelectorAll('data-operation')
const equalsButton = document.querySelector('data-equals')
const deleteButton = document.querySelector('data-delete')
const allClearButton = document.querySelector('data-all-clear')
const perviousCalNumber = document.querySelector('data-pervious')
const currentCalNumber = document.querySelector('data-current')


const calculator = new calculator(perviousCalNumber, currentCalNumber)

number.deleteButton.foreach