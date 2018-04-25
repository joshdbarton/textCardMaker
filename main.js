const button = document.getElementById('button')
const textarea = document.getElementById('textarea')
const cardHolder = document.getElementById('card-holder')

const buildCard = () => {
    const card = document.createElement('div')
    card.className = 'card'
    const text = document.createElement('p')
    text.textContent = textarea.value
    card.appendChild(text)
    const deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteButton')
    deleteButton.setAttribute('onclick', 'this.parentNode.remove()')
    deleteButton.textContent = 'Delete'
    card.appendChild(deleteButton)
    document.querySelector('#card-holder').appendChild(card)
}


button.addEventListener('click', function() {
    buildCard()
})


