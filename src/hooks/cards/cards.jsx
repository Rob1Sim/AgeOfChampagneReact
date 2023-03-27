export function handleClick(card) {
    const lastClickedCard = JSON.parse(
      window.sessionStorage.getItem("lastClickedCards") || "[]"
    );
    const cardIndex = lastClickedCard.indexOf(card.id);
    if (cardIndex !== -1) {
      // Remove the card from its current position and add it at the beginning
      lastClickedCard.splice(cardIndex, 1);
      lastClickedCard.unshift(card.id);
    } else {
      lastClickedCard.unshift(card.id);
      if (lastClickedCard.length > 10) {
        lastClickedCard.pop();
      }
    }
    window.sessionStorage.setItem(
      "lastClickedCards",
      JSON.stringify(lastClickedCard)
    );
  }
