module.exports.config = {
  name: "tobar",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "J-Kyle",
  description: "ảnh dìm cực mạnh của các con vợ tổ Bar.",
  commandCategory: "Hình Ảnh",
  usages: "",
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
"https://imgur.com/vmUAtzq.jpg",
"https://imgur.com/kik47tT.jpg",
"https://imgur.com/2c1691g.jpg",
"https://imgur.com/QMVyhPm.jpg",
"https://imgur.com/zpweJIY.jpg",
"https://imgur.com/OoOmXHp.jpg",
"https://imgur.com/OqBmpkm.jpg",
"https://imgur.com/Vr7lN35.jpg",
"https://imgur.com/95OJQh5.jpg",
"https://imgur.com/bbMBCKJ.jpg",
"https://imgur.com/0u9KV2G.jpg",
"https://imgur.com/WwKlm3D.jpg",
"https://imgur.com/mSWSVGh.jpg",
"https://imgur.com/DpaOcqC.jpg",
"https://imgur.com/O6rsgsO.jpg",
"https://imgur.com/abjsGB2.jpg",
"https://imgur.com/1i243f6.jpg",
"https://imgur.com/XuAloS5.jpg",
"https://imgur.com/YG5qDov.jpg",
"https://imgur.com/565a8Rt.jpg",
"https://imgur.com/OPfBZ1F.jpg",
"https://imgur.com/2IvqzrX.jpg",
"https://imgur.com/sYDbM8U.jpg",
"https://imgur.com/mUfLbsp.jpg",
"https://imgur.com/OyALM4T.jpg",
"https://imgur.com/GxnS3RE.jpg",
"https://imgur.com/Gp5Hro1.jpg",
"https://imgur.com/Of7JDiw.jpg",
"https://imgur.com/FLP9V8K.jpg",
"https://imgur.com/lcTzVEU.jpg",
"https://imgur.com/p9HwkDD.jpg",
"https://imgur.com/cm62YTC.jpg",
"https://imgur.com/ul1KXRI.jpg",
"https://imgur.com/b9LHGzK.jpg",
"https://imgur.com/BCPvbNG.jpg",
"https://imgur.com/pr7rjCJ.jpg",
"https://imgur.com/Gc4RZHK.jpg",
"https://imgur.com/GF5V4QI.jpg",
  ];
	 var callback = () => api.sendMessage({body:`Ảnh dìm tổ Bar đây \nSố Ảnh hiện có: ${link.length}`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };