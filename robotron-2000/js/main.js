const robotron = document.querySelector('#robotron')
robotron.addEventListener("click", sayHello)
const control = document.querySelectorAll(".controle-ajuste")

function sayHello() {
    console.log("Hello!")
}

control.forEach((element) => {
    element.addEventListener("click", (event) => {
        manageData(event.target.textContent, event.target.parentNode)
    })
})

function manageData(operacao, parentNode) {
    const piece = parentNode.querySelector(".controle-contador")
    if (operacao === "-") {
        piece.value = parseInt(piece.value) - 1
    } else {
        piece.value = parseInt(piece.value) + 1
    }
}