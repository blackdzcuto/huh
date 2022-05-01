module.exports.config = {
  name: "vả",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "KienTran",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Hình Ảnh",
  usages: "tag",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://imgur.com/siBj06c.jpg",
"https://imgur.com/bQ494zc.jpg",
"https://imgur.com/GBbky6l.jpg",
"https://imgur.com/9Z1VERo.jpg",
"https://imgur.com/PREMUNY.jpg",
"https://imgur.com/tcOC1aU.jpg",
"https://imgur.com/2Dz22XX.jpg", 
  ];
	 var callback = () => api.sendMessage({body:`toang ALO nè😏`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };