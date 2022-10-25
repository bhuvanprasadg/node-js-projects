const { WebSocketServer } = require("ws");
const wss = new WebSocketServer({ port: 8000 });

wss.on("connection", function connection(ws) {
    console.log("Connection done");
    ws.on("message", function message(data) {
    console.log("received: %s", data);

    if (data.slice(-1).toString() == 'C' || data.slice(-1).toString() == 'c'){
      let intPart = parseInt(data);
      let fahrenheit = (intPart *1.8)+32;
      ws.send(`${data} - ${fahrenheit.toFixed(1)}F`);
    }

    else if(data.slice(-1).toString() == 'F' || data.slice(-1).toString() == 'f'){
      let floatPart = parseFloat(data);
      let celsius = (floatPart-32)* 0.5556
      ws.send(`${data} - ${celsius.toFixed(1)}C`);
    }

    else{
      ws.send(`unknown data part`);
    }
  });

});