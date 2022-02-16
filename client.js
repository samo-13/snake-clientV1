const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    port: 50541,
    host: '165.227.47.243'
  });

conn.on('connect', () => {
  console.log('Successfully connected to game server');
  conn.write('Name: CAT');
  // setTimeout (() => {
  //   conn.write('Move: up');
  // }, 100);
  // setTimeout (() => {
  //   conn.write('Move: right');
  // }, 150);
  // setTimeout (() => {
  //   conn.write('Move: up');
  // }, 200);
});
// interpret incoming data as text
conn.setEncoding("utf8");
conn.on('data', () => {
  console.log('you ded cuz you idled')
})
return conn;
}

console.log("Connecting ...")
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = connect;
module.exports = setupInput; 


// Supported move commands:
// ---- "Move: up" - move up one square (unless facing down)
// ---- "Move: down" - move down one square (unless facing up)
// ---- "Move: left" - move left one square (unless facing right)
// ---- "Move: right" - move left one square (unless facing left)