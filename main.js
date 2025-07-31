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

async function generateUserPage() {
  const users = await getRandomUsers();
  const mainUser = users[0];
  const friends = users.slice(1, 7);

  renderMainUser(mainUser);
  renderFriends(friends);
}

generateUserPage();

function renderFriends(friends) {
  const friendsList = document.getElementById("friends-list");
  friendsList.innerHTML = "";

  friends.forEach(friend => {
    const li = document.createElement("li");
    li.textContent = `${friend.name.first} ${friend.name.last}`;
    friendsList.appendChild(li);
  });
}