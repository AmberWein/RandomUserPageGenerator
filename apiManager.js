async function fetchJsonWithCheck(url, errorPrefix) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${errorPrefix}: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function getRandomUsers() {
  try {
    const data = await fetchJsonWithCheck("https://randomuser.me/api/?results=7", "Users API Error");
    if (!data.results?.length) throw new Error("Users API returned empty result");
    return data.results;
  } catch (error) {
    throw new Error(`Error fetching random users: ${error.message}`);
  }
}

async function getKanyeQuote() {
  try {
    const data = await fetchJsonWithCheck("https://api.kanye.rest", "Kanye API Error");
    return data.quote;
  } catch (error) {
    throw new Error(`Error fetching Kanye quote: ${error.message}`);
  }
}

function capitalize(str) {
  if (typeof str !== 'string') return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getRandomPokemon() {
  try {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const data = await fetchJsonWithCheck(`https://pokeapi.co/api/v2/pokemon/${randomId}`, "Pokemon API Error");
    return {
      name: capitalize(data.name),
      image: data.sprites.front_default
    };
  } catch (error) {
    throw new Error(`Error fetching Pokemon: ${error.message}`);
  }
}

async function getAboutMeText() {
  try {
    const data = await fetchJsonWithCheck("https://baconipsum.com/api/?type=meat-and-filler&paras=1", "AboutMe API Error");
    if (!data.length) throw new Error("AboutMe API returned empty result");
    return data[0];
  } catch (error) {
    throw new Error(`Error fetching AboutMe: ${error.message}`);
  }
}