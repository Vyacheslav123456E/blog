const app  = require('express')()
const server = require('http').createServer(app )
const io = require('socket.io')(server, {
  cors: {
    origin: function (origin, callback) {
      if (origin === "http://localhost:3000")  //Сделать через базу данных
        callback(null, true)
      else callback(null, false)
    },
    credentials: true,
    methods: ["GET", "POST"]
  },
  allowEIO3: true,
  transports: ['polling', 'websocket']
})
const fs = require('fs');
const moment = require('moment')
moment.locale('ru')

io.of("/").on('connection', (socket) => {
  socket.on('save_article', (payload, callback) => {
    let obj = [];
    fs.readFile('./data.json', 'utf8', function readFileCallback(err, data) {
      if (err) {
        console.log(err);
      } else {
        obj = JSON.parse(data);
        let lastItem = obj.data[0].id;
        obj.data.unshift({
          id: lastItem + 1,
          title: payload.title,
          sub_text: payload.subtext,
          src: payload.src,
          date: moment(new Date()).format('DD MMMM YYYY, hh:mm'),
          text: payload.article
        })
        fs.writeFile("./data.json", JSON.stringify(obj), (err) => {
          if (err) {
            console.error(err);
            return;
          }
          const page = payload.page;
          const limit = payload.limit;
          const startIndex = (page - 1) * limit;
          const endIndex = page * limit;
          let res =  obj.data.slice(startIndex,endIndex);
          io.sockets.emit('resSaveArticle', {success: 0,data: res, count: obj.data.length})
        });
      }
    })
  });

  socket.on('get_article',async (payload, callback) => {
   const page = payload.page;
   const limit = payload.limit;
   const startIndex = (page - 1) * limit;
   const endIndex = page * limit;
    const data = await fs.readFileSync("./data.json", "utf-8");
    let jsons =  JSON.parse(data)
    let res = jsons.data.slice(startIndex,endIndex);
    callback({success: 0,data: res, count: jsons.data.length})
  });
});

module.exports = {app, server}
