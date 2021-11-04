// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', function () {
    console.log('Successfully connected to game server.');
  });
  conn.on('connect', () => {
    conn.write("Name: KHT");
  });
  // conn.on('connect', () => {
  //   conn.write("Move: up");
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 50);
  //   // setInterval(() => {
  //   //   conn.write("Move: left");
  //   // }, 50);
    
  // });



  return conn;
};

module.exports = { connect };