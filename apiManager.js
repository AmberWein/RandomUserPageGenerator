async function getRandomUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=7");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching random users:", error);
  }
}

async function getKanyeQuote() {
  try {
    const response = await fetch("https://api.kanye.rest");
    const data = await response.json();
    return data.quote;
  } catch (error) {
    console.error("Error fetching Kanye quote:", error);
    return "Could not fetch quote.";
  }
}

async function getRandomPokemon() {
  const randomId = Math.floor(Math.random() * 1025) + 1;
  const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      name: capitalize(data.name),
      image: data.sprites.front_default
    };
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    return {
      name: "Unknown",
      image: ""
    };
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function getAboutMeText() {
  try {
    const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=1");
    const data = await response.json(); // returns an array of strings
    return data[0];
  } catch (error) {
    console.error("Error fetching about-me text:", error);
    return "About me text unavailable.";
  }
}