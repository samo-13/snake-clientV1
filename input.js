
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", function(key) { 
    handleUserInput(key);
  })
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  let action;
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    action = "Move: up"
  }
  if (key === 'd') {
    action = "Move: right"
  }
  if (key === 's') {
    action = "Move: down"
  }
  if (key === 'a') {
    action = "Move: left"
  }
  connection.write(action);
};


module.exports = { setupInput }; 
