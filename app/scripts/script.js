var input = document.getElementById("todoBox__input")
var inputBtn = document.getElementById("todoBox__btn")
var listBox = document.getElementById("todoBox__list")

listBox.addEventListener('click', event => {
    if(event.target.localName === "li") {
        event.target.classList.toggle('is-clicked')
    } else if(event.target.localName === "button") {
        event.target.parentNode.remove()
    }
})

function createListItem() {
        var newItem = document.createElement("li")
        newItem.classList.add("todoBox__list-item")
        var newText = document.createElement("span")
        newText.classList.add('todoBox__list-item-text')
        var newBtn = document.createElement("button")
        newBtn.classList.add('todoBox__del-btn')

        newBtn.append(document.createTextNode('-'))
        newText.append(document.createTextNode(input.value))
        newItem.appendChild(newText)
        newItem.appendChild(newBtn)
        listBox.appendChild(newItem)

        input.value = ""
}


function isInputValid() {
    return input.value.length
}

function createAfterClick() {
    if (isInputValid() > 0) {
        createListItem()
    }
}

function createAfterEnter(e) {
    if (e.which === 13 && isInputValid() > 0) {
        createListItem()
    }
}

inputBtn.addEventListener("click", createAfterClick)
input.addEventListener("keypress", createAfterEnter)