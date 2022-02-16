
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", function(key) { 
    handleUserInput(key);
  })
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
  if (key === 'm') {
    action = "Say: Move, please!"
  }
  connection.write(action);
};


module.exports = { setupInput }; 
