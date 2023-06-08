const robotron = document.querySelector('#robotron')
robotron.addEventListener("click", sayHello)
const control = document.querySelectorAll(".controle-ajuste")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)

function sayHello() {
    console.log("Hello!")
}

control.forEach((element) => {
    element.addEventListener("click", (event) => {
        manageData(event.target.dataset.controle, event.target.parentNode)
        atualizaEstatisticas(event.target.dataset.peca)
    })
})

function manageData(operacao, peca) {
    const piece = peca.querySelector("[data-contador]")
    if (operacao === "-") {
        piece.value = parseInt(piece.value) - 1
    } else {
        piece.value = parseInt(piece.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]
    })
}

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}