
/**
* @author CallmeSun
* @warn Vui lòng không sửa credits cảm ơn !
*/
module.exports.config = {
  name: "boy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Suhao",
  description: "Random Ảnh Trai đệp Cực Bổ Mắt ",
  commandCategory: "random-img",
  usages: "boy",
  cooldowns: 0,
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
"https://i.pinimg.com/564x/90/5a/1c/905a1cf460897e9a3455cbc280edd956.jpg",
"https://i.pinimg.com/564x/2b/30/26/2b3026067d79cef473a5be6610c807f4.jpg",
"https://i.pinimg.com/564x/e4/2a/e8/e42ae8adf065669fc8cecbc22a030790.jpg",
"https://i.pinimg.com/736x/4f/70/f7/4f70f73f47013c6bdf54fc0795354879.jpg",
"https://i.pinimg.com/564x/cc/50/90/cc50909c5515de16aa45a9ed847bc05c.jpg",
"https://i.pinimg.com/736x/62/d9/2b/62d92b4d1f98aa6ff10abf6ba6963cc0.jpg",
"https://i.pinimg.com/564x/4f/7a/1e/4f7a1e99a0d5c5f6688d341227d49d1d.jpg",
"https://i.pinimg.com/564x/7d/c0/e1/7dc0e14efd0a9a7f867e74d07259dead.jpg",
"https://i.pinimg.com/564x/37/7b/b7/377bb78aec5b30aee8a9c3f819853961.jpg",
"https://i.pinimg.com/564x/5c/eb/de/5cebdebf6f7f1c2ae01d4fb79780389a.jpg",
"https://i.pinimg.com/564x/52/d9/25/52d925f38ff710da913d20e642bd4f33.jpg",
"https://i.pinimg.com/564x/37/6b/39/376b396865694cce034e578b729e40bf.jpg",
"https://i.pinimg.com/236x/52/eb/5e/52eb5e22a452dc94b305f27f9a9d2c80.jpg",
"https://i.pinimg.com/564x/3c/23/c1/3c23c1bbb807acbca0ac4928d430bb00.jpg",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/193044034_302994751480833_746461070109271218_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=e7Io_ZLjzwYAX8Zs6id&_nc_ht=scontent.fhan6-1.fna&oh=03_AVLjY3-4RL6hSYjTV5OZe6QRQisGHlRV16jZkAMvTUeDBg&oe=61E618CF",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/263156754_2964154927134983_9192410601831129052_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=kNRnUMKUo48AX-U1H7_&tn=QpiCwYSgvS8RJW0x&_nc_ht=scontent.fhan6-1.fna&oh=03_AVIsIfEXpA4JnaBYPfM3kekEgkkxAjTh9589oZRL91GNgQ&oe=61E6AC95",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/244548531_424537065903428_2429095098690856230_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=l-D1TBuzq_kAX898zLg&_nc_ht=scontent.fhan6-1.fna&oh=03_AVKUpj_SU0hx34pGC3L3Dqksyf0HvNpVeAkFP0ncgfywRQ&oe=61E69E9F",
"https://scontent.fhan6-1.fna.fbcdn.net/v/t1.15752-9/244548531_424537065903428_2429095098690856230_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=l-D1TBuzq_kAX898zLg&_nc_ht=scontent.fhan6-1.fna&oh=03_AVKUpj_SU0hx34pGC3L3Dqksyf0HvNpVeAkFP0ncgfywRQ&oe=61E69E9F",
"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Son_Tung_M-TP_1_%282017%29.png/1200px-Son_Tung_M-TP_1_%282017%29.png",
"https://2sao.vietnamnetjsc.vn/images/2021/07/08/16/13/st.jpg",
"https://i.scdn.co/image/ab6761610000e5ebc48716f91b7bf3016f5b6fbe",
"https://kenh14cdn.com/203336854389633024/2021/8/1/21207462419729092195315591737932611609001844n-16278368061501340741348.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 50) api.sendMessage("Bạn cần 50 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 50})
   var callback = () => api.sendMessage({body:`Mấy bà con gái khoái lắm😼\n» Số dư: -50 đô «`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};
