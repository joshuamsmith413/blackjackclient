export const getDecks = async() => {
  return function(dispatch) {
    const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
    const data = await res.json();
    dispatch({
      type: REQUEST_DECKS,
      payload: data
    })
  }
}
