document.addEventListener('DOMContentLoaded', () => {
            //card options
            const cardArray = [{
                    name: 'fries',
                    img: 'fries.png'
                },
                {
                    name: 'cheeseburger',
                    img: 'cheeseburger.png'
                },
                {
                    name: 'ice-cream',
                    img: 'ice-cream.png'
                },
                {
                    name: 'pizza',
                    img: 'pizza.png'
                },
                {
                    name: 'milkshake',
                    img: 'milkshake.png'
                },
                {
                    name: 'hotdog',
                    img: 'hotdog.png'
                },
                {
                    name: 'fries',
                    img: 'fries.png'
                },
                {
                    name: 'cheeseburger',
                    img: 'cheeseburger.png'
                },
                {
                    name: 'ice-cream',
                    img: 'ice-cream.png'
                },
                {
                    name: 'pizza',
                    img: 'pizza.png'
                },
                {
                    name: 'milkshake',
                    img: 'milkshake.png'
                },
                {
                    name: 'hotdog',
                    img: 'hotdog.png'
                }
            ]

            cardArray.sort(() => 0.5 - Math.random())

            const grid = document.querySelector('.grid')
            const resultDisplay = document.querySelector('#result')
            var cardsChosen = []
            var cardsChosenId = []
            var cardsWon = []

            //create your board
            function createBoard() {
                for (let i = 0; i < cardArray.length; i++) {
                    const card = document.createElement('img')
                    card.setAttribute('src', 'blank.png')
                    card.setAttribute('data-id', i)
                    card.addEventListener('click', flipCard)
                    grid.appendChild(card)
                }
            }

            //check for matches
            function checkForMatch() {
                var cards = document.querySelectorAll('img')
                const optionOneId = cardsChosenId[0]
                const optionTwoId = cardsChosenId[1]
                if (cardsChosen[0] === cardsChosen[1]) {
                    alert('You found a match😁😁😁')
                    cards[optionOneId].setAttribute('src', 'white.png')
                    cards[optionTwoId].setAttribute('src', 'white.png')
                    cardsWon.push(cardsChosen)
                } else {
                    alert('Sorry, it does not match. Try again🤔🤔🤔')
                    cards[optionOneId].setAttribute('src', 'blank.png')
                    cards[optionTwoId].setAttribute('src', 'blank.png')
                }
                cardsChosen = []
                cardsChosenId = []
                resultDisplay.textContent == cardsWon.length
                if (resultDisplay === cardArray.length/2) {
                    alert('Congratulations! You found them all!!!🥳🥳🥳')
                }
            }



            //flip your card
            function flipCard() {
                var cardId = this.getAttribute('data-id')
                cardsChosen.push(cardArray[cardId].name)
                cardsChosenId.push(cardId)
                this.setAttribute('src', cardArray[cardId].img)
                if (cardsChosen.length=== 2) {
                    setTimeout(checkForMatch, 500)
                }
            }

            createBoard()
        })