// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn;
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  } else if (key === 'j') {
    connection.write("Say: YEAH!!");
  } else if (key === 'k') {
    connection.write("Say: Boo---");
  } else if (key === 'h') {
    connection.write("Say: HELP!");
  } else if (key === 't') {
    connection.write("Say: tired!");
  } else if (key === 'h') {
    connection.write("Say: hard!");
  }
};

module.exports = { setupInput };