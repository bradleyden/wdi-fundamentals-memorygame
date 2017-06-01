var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = [];
var playerScore = 0;

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
      var victory = document.getElementById("message-box");
      victory.textContent = "Congratulations! You found a match!";
      var scoreUpdate = document.getElementById("score-board");
      playerScore = playerScore + 1;
      scoreUpdate.textContent = "Score: " + playerScore;
    } else {
      var defeat = document.getElementById("message-box");
      defeat.textContent = "Sorry, try again!";
    }
}

var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute("src", cards[cardId].cardImage);

    if (cardsInPlay.length === 2) {
	  checkForMatch();
    };
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById("game-board").appendChild(cardElement);
		document.getElementById('reset').addEventListener('click', resetBoard);
	}
};

var resetBoard = function() {
	cardsInPlay = [];
	var clearBoard = document.getElementById("game-board");
	while (clearBoard.firstChild) {
    clearBoard.removeChild(clearBoard.firstChild);
    }
    var clearMessage = document.getElementById("message-box");
    while (clearMessage.firstChild) {
    clearMessage.removeChild(clearMessage.firstChild);
    }
    clearMessage.innerHTML = "<br>";
	createBoard();
};

createBoard();