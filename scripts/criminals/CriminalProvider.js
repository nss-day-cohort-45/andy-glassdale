let criminals = [];

export const useCriminals = () => {
  return criminals.slice();
};

export const getCriminals = () => {
  return fetch("https://criminals.glassdale.us/criminals")
    .then(resp => resp.json())
    .then(parsedCriminals => {
      console.table(parsedCriminals);
      criminals = parsedCriminals;
    })
}