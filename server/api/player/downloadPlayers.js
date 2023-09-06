export default defineEventHandler(async (event) => {

    async function parseFile(url) {
      return fetch(url)
        .then(response => response.json())
      }
  
    return parseFile("https://publicapi.fantamaster.it/playersstats/");
  
  })