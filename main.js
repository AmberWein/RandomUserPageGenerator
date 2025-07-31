async function getRandomUsers() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=7");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching random users:", error);
  }
}

function renderMainUser(user) {
  const mainUserSection = document.getElementById("main-user");
  mainUserSection.innerHTML = `
    <h2>${user.name.first} ${user.name.last}</h2>
    <img src="${user.picture.large}" alt="User picture" />
    <p>Location: ${user.location.city}, ${user.location.state}</p>
  `;
}

function renderFriends(friends) {
  const friendsList = document.getElementById("friends-list");
  friendsList.innerHTML = "";

  friends.forEach(friend => {
    const li = document.createElement("li");
    li.textContent = `${friend.name.first} ${friend.name.last}`;
    friendsList.appendChild(li);
  });
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

function renderQuote(quote) {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = `"${quote}" - Kanye West`;
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

function renderPokemon(pokemon) {
  document.getElementById("pokemon-name").textContent = pokemon.name;
  const img = document.getElementById("pokemon-img");
  img.src = pokemon.image;
  img.alt = pokemon.name;
}

async function generateUserPage() {
  const users = await getRandomUsers();
  const mainUser = users[0];
  const friends = users.slice(1, 7);
  const quote = await getKanyeQuote();
  const pokemon = await getRandomPokemon();

  renderMainUser(mainUser);
  renderFriends(friends);
  renderQuote(quote);
  renderPokemon(pokemon);
}

generateUserPage();