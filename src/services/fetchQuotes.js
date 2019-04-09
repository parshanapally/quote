export const fetchQuotes = () => {
  return fetch(`http://calm-everglades-77663.herokuapp.com/quote`);
};

export default fetchQuotes;
