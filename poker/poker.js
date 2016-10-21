// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}

$(function() {
  $(".deal").on("click", function(event)
    {event.preventDefault()

      var c1=getDeck()
      c1.shuffle()

      var c2=getDeck()
      c2.remove(c1[0])
      c2.shuffle()


      var c3=getDeck()
      c3.shuffle()

      var c4=getDeck()
      c4.shuffle()

      var c5=getDeck()
      c5.shuffle()

        console.log(c1)
        console.log(c2)
        console.log(c3)
        console.log(c4)
        console.log(c5)


          $("#c1").attr("src", "http://golearntocode.com/images/cards/" + c1[0] + ".png")
          $("#c2").attr("src", "http://golearntocode.com/images/cards/" + c2[0] + ".png")
          $("#c3").attr("src", "http://golearntocode.com/images/cards/" + c3[0] + ".png")
          $("#c4").attr("src", "http://golearntocode.com/images/cards/" + c4[0] + ".png")
          $("#c5").attr("src", "http://golearntocode.com/images/cards/" + c5[0] + ".png")
      })
    })
  // Your code goes here!
