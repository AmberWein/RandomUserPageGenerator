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

function renderQuote(quote) {
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = `"${quote}" - Kanye West`;
}

function renderPokemon(pokemon) {
  document.getElementById("pokemon-name").textContent = pokemon.name;
  const img = document.getElementById("pokemon-img");
  img.src = pokemon.image;
  img.alt = pokemon.name;
}

function renderAboutMe(text) {
  const aboutMeElement = document.getElementById("about-text");
  aboutMeElement.textContent = text;
}

