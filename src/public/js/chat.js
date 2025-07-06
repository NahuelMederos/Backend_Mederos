const socket = io({
  autoConnect:false
});
let username

Swal.fire({
  title:"Ingrese usuario",
  icon: "question",
  input:'text',
  inputValidator: (value) =>{
    if(!value){
      return 'Ingresar usuario'
    }
  },
  allowOutsideClick:false,
  allowEscapeKey:false
}).then(response=>{
  username = response.value
  socket.connect()
  socket.emit('auth',username)
})

const chatbox = document.getElementById("chatbox");

chatbox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    if(chatbox.value.trim()){
      socket.emit("message", {username:username, message:chatbox.value.trim()});
      chatbox.value = "";
    }
  }
});

//Events
socket.on("log", data => {
  const logs = document.getElementById("messageLogs");
  let messages = "";
  data.forEach((logItem) => {
    messages += `${logItem.username} dice: ${logItem.message} <br/>`;
  });
  logs.innerHTML = messages;
  console.log(logs);
});

socket.on('newUserConnection', username =>{
  Swal.fire({
    toast:true,
    showConfirmButton:false,
    timer:3000,
    title:`${username} se conecto al chat`,
    icon:'success',
    position:'top-end'
  }) 
})
