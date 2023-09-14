import React, { useState } from 'react';

function Card() {
  const [selectedCards, setSelectedCards] = useState([]);

  // Function to toggle card selection
  const toggleCardSelection = (cardIndex) => {
    if (selectedCards.includes(cardIndex)) {
      setSelectedCards(selectedCards.filter((index) => index !== cardIndex));
    } else {
      setSelectedCards([...selectedCards, cardIndex]);
    }
  };

  return (
    <div className="card-container">
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className={`card ${selectedCards.includes(index) ? 'selected' : ''}`}
          onClick={() => toggleCardSelection(index)}
        >
          <div className="card-body">
            Card {index + 1} content
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
