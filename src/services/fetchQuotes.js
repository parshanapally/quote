export const fetchQuotes = () => {
  return fetch(`http://calm-everglades-77663.herokuapp.com/quote`).then(res =>
    res.json()
  );
};

export default fetchQuotes;
