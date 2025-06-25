const socket = io();

const chatbox = document.getElementById("chatbox");

chatbox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    socket.emit("message", chatbox.value);
    chatbox.value = "";
  }
});

//Events
socket.on("log", (data) => {
  const logs = document.getElementById("messageLogs");
  let messages = "";
  data.forEach((message) => {
    messages += "</br>" + message;
  });
  logs.innerHTML = messages;
  console.log(logs);
});
