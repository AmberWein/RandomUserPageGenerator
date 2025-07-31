async function generateUserPage() {
  const users = await getRandomUsers();
  const mainUser = users[0];
  const friends = users.slice(1, 7);
  const quote = await getKanyeQuote();
  const pokemon = await getRandomPokemon();
  const aboutMe = await getAboutMeText();

  renderMainUser(mainUser);
  renderFriends(friends);
  renderQuote(quote);
  renderPokemon(pokemon);
  renderAboutMe(aboutMe);
}

document
.getElementById("generate-btn") .addEventListener("click", generateUserPage);

generateUserPage();
