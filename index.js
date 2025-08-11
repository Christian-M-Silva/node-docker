console.log("Servidor reiniciado com sucesso")

const task = setInterval(() => {
  console.log("Executando...");
}, 1000);

setTimeout(() => {
  clearInterval(task);
  console.log("Parou após 5 segundos");
}, 5000);
