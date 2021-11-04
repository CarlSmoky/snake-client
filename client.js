// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
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
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 100);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 150);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 200);
  //   setTimeout(() => {
  //     conn.write("Move: right");
  //   }, 250);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 300);
  //   // setInterval(() => {
  //   //   conn.write("Move: left");
  //   // }, 50);
  //   setTimeout(() => {
  //     conn.write("Move: right");
  //   }, 350);
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 400);
  //   setTimeout(() => {
  //     conn.write("Move: left");
  //   }, 450);
  //   setTimeout(() => {
  //     conn.write("Move: down");
  //   }, 500);
  //   setTimeout(() => {
  //     conn.write("Move: right");
  //   }, 550);
  //   setTimeout(() => {
  //     conn.write("Move: up");
  //   }, 600);
    
  // });



  return conn;
};

module.exports = { connect };