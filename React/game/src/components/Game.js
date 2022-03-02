import { useEffect, useState } from "react";
import { cardsData } from "../cards";
import Card from "./Card";

function Game() {
  const [cards, setcards] = useState(cardsData);
  const [twoCards, setTwoCards] = useState([]);
  useEffect(() => {
    if (twoCards.length === 2) {
      if (twoCards[0].card.name !== twoCards[1].card.name) {
        setTimeout(() => {
          update(twoCards[0].index, twoCards[1].index);
        }, 1500);
      } else {
        setTwoCards([]);
      }
    }
  }, [twoCards]);

  const update = (index1, index2) => {
    let array = [...cards];
    array[index1].isFlipped = false;
    array[index2].isFlipped = false;
    setcards(array);
    setTwoCards([]);
  };

  const handelClick = (card, index) => {
    console.log("twoCards :>> ", twoCards);

    if (!card.isFlipped) {
      let array = [...cards];

      if (twoCards.length < 2) {
        array[index].isFlipped = true;
        setTwoCards([...twoCards, { card, index }]);
        setcards(array);
      }
    }
  };

  return (
    <section className="memory-game">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          onClick={() => handelClick(card, index)}
        />
      ))}
    </section>
  );
}

export default Game;
