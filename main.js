let currentUserData = null;

async function generateUserPage() {
  const users = await getRandomUsers();
  const mainUser = users[0];
  const friends = users.slice(1, 7);
  const quote = await getKanyeQuote();
  const pokemon = await getRandomPokemon();
  const aboutMe = await getAboutMeText();
  currentUserData = { mainUser, friends, quote, pokemon, aboutMe };

  // render all parts of the page
  renderMainUser(mainUser);
  renderFriends(friends);
  renderQuote(quote);
  renderPokemon(pokemon);
  renderAboutMe(aboutMe);
}

function saveUser() {
  if (!currentUserData) return alert("No user to save!");

  const savedUsers = JSON.parse(localStorage.getItem("savedUsers")) || [];
  
  // add current user data and save back to localStorage
  savedUsers.push(currentUserData);
  localStorage.setItem("savedUsers", JSON.stringify(savedUsers));

  alert("User saved");
  renderSavedUsersDropdown(); // update the dropdown with new saved user
}

function renderSavedUsersDropdown() {
  const select = document.getElementById("saved-users-select");
  const savedUsers = JSON.parse(localStorage.getItem("savedUsers")) || [];
 
  // clear existing options except placeholder
  select.options.length = 1;

  savedUsers.forEach((user, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${user.mainUser.name.first} ${user.mainUser.name.last}`;
    select.appendChild(option);
  });
}

// טעינת משתמש שמור על פי הבחירה בתפריט
function loadSavedUser(index) {
  const savedUsers = JSON.parse(localStorage.getItem("savedUsers")) || [];
  const user = savedUsers[index];

  if (!user) return alert("Selected user not found.");

  currentUserData = user;

  renderMainUser(user.mainUser);
  renderFriends(user.friends);
  renderQuote(user.quote);
  renderPokemon(user.pokemon);
  renderAboutMe(user.aboutMe);
}

// אירועים
document.getElementById("generate-btn").addEventListener("click", generateUserPage);
document.getElementById("save-user-btn").addEventListener("click", saveUser);
document.getElementById("saved-users-select").addEventListener("change", e => {
  const index = e.target.value;
  if (index !== "") loadSavedUser(index);
});

// טען רשימת משתמשים שמורים בהתחלה
renderSavedUsersDropdown();

// טען משתמש ראשי כברירת מחדל
generateUserPage();