const courses = {
  HTML: "Learn HTML basics: tags, forms, and layout.",
  CSS: "Learn CSS basics: styling, layouts, and animations.",
  JavaScript: "Learn JS: DOM, ES6+, and event handling.",
  Python: "Learn Python: syntax, data types, and libraries.",
  Java: "Learn Java: OOP, syntax, and project setup.",
  React: "Learn React: components, props, and hooks.",
  DevOps: "Learn DevOps: pipelines, CI/CD, and automation.",
  AWS: "Learn AWS: cloud setup and services.",
};

// Show Splash Screen
window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash-screen").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
  }, 2000);
};

// Login Simulation
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    alert("Login Successful!");
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("home-page").classList.remove("hidden");
  } else {
    alert("Please fill in your login details.");
  }
}

// Search for Courses
function searchCourse() {
  const searchValue = document
    .getElementById("search-course")
    .value.toLowerCase();
  const courseContainer = document.getElementById("course-container");
  courseContainer.innerHTML = "";

  for (const course in courses) {
    if (course.toLowerCase().includes(searchValue)) {
      const courseCard = document.createElement("div");
      courseCard.className = "course-card";
      courseCard.textContent = `${course}: ${courses[course]}`;
      courseContainer.appendChild(courseCard);
    }
  }

  if (searchValue) {
    document.getElementById("course-results").classList.remove("hidden");
  } else {
    document.getElementById("course-results").classList.add("hidden");
  }
}

// Open Chat
function openChat(contactName) {
  document.getElementById("home-page").classList.add("hidden");
  document.getElementById("chat-screen").classList.remove("hidden");
  document.getElementById("chat-header").textContent = contactName;
}

// Close Chat
function closeChat() {
  document.getElementById("chat-screen").classList.add("hidden");
  document.getElementById("home-page").classList.remove("hidden");
}

// Activate AI Assistant
function activateAI() {
  alert("AI Voice Assistant Activated!");
}

// Send Message
function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim()) {
    const sentMessage = document.createElement("div");
    sentMessage.className = "sent";
    sentMessage.textContent = input.value;
    chatBox.appendChild(sentMessage);
    input.value = "";

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
