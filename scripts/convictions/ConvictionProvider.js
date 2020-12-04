let convictions = []

export const useConvictions = () =>
  convictions.slice().sort((a, b) => a.name > b.name ? 1 : -1);

export const getConvictions = () => {
  return fetch("https://criminals.glassdale.us/crimes")
    .then(resp => resp.json())
    .then(parsed => {
      convictions = parsed;
    })
}