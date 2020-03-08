const socket = new WebSocket("ws://localhost:4000");
const messageText = document.querySelector(".chat__messages-text");
const sendButton = document.querySelector(".messages__sendButton");
const listContainer = document.querySelector(".messages__listContainer");

socket.onopen = () => {
  console.log("handshake express-ws ");
};
socket.addEventListener("message", e => {
  addMessage(event.data);
  console.log("Соединение закрыто");
});

socket.addEventListener("error", e => {
  console.log("Соединение закрыто");
});

function addMessage(message) {
  const messageItem = document.createElement("LI");
  messageItem.className = "list-group-item";
  messageItem.textContent = message;

  listContainer.appendChild(messageItem);
  listContainer.scrollTop = listContainer.scrollHeight;
}

function sendMessage() {
  socket.send(messageText.value);
  messageText.value = "";
}

sendButton.addEventListener("click", sendMessage);
sendButton.addEventListener("change", sendMessage);
// import "../scss/main.scss";

// import ApiVK from "./modules/api.vk";
// import Controller from "./MVC/controller";
// import config from "./config.json";

// const apiVK = new ApiVK(config.vk.apiID, config.vk.perms, config.vk.version);
// const controller = new Controller(apiVK);
