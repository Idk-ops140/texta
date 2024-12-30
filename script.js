// Placeholder for user data and community data
let user = localStorage.getItem("username") || null;
let communities = JSON.parse(localStorage.getItem("communities")) || [];

document.addEventListener("DOMContentLoaded", function () {
  if (user) {
    document.getElementById("username").style.display = "none";
    displayCommunities();
  }
});

// Login Functionality
function login() {
  user = document.getElementById("username").value;
  if (user) {
    localStorage.setItem("username", user);
    document.getElementById("username").style.display = "none";
    displayCommunities();
  }
}

// Community Search
function searchCommunities() {
  const keyword = document.getElementById("search-bar").value.toLowerCase();
  const filteredCommunities = communities.filter(community =>
    community.name.toLowerCase().includes(keyword)
  );
  displayCommunities(filteredCommunities);
}

// Display Communities
function displayCommunities(filtered = communities) {
  const communityList = document.getElementById("community-list-items");
  communityList.innerHTML = '';
  filtered.forEach(community => {
    const li = document.createElement("li");
    li.textContent = community.name;
    communityList.appendChild(li);
  });
}

// Create a Community
function createCommunity() {
  const name = document.getElementById("community-name").value;
  const description = document.getElementById("community-description").value;
  const rules = document.getElementById("community-rules").value;
  
  if (name && description && rules) {
    const newCommunity = {
      name,
      description,
      rules,
      messages: []
    };
    communities.push(newCommunity);
    localStorage.setItem("communities", JSON.stringify(communities));
    alert("Community Created!");
    window.location.href = "index.html";  // Redirect to home
  } else {
    alert("Please fill in all fields.");
  }
}
