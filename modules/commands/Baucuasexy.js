 /*
* @Mod game by VanNhat đc mod từ baucua by DuyVuong
* @No edit credits
* @Ban user edit credits
*/
module.exports.config = {
    name: "baucuasexy",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "J-Kyle",//được VanNhat mod lại từ baucua
    description: "Game ảnh gái có đặt cược ",
    commandCategory: "economy",
    usages: "<[gái/loli/body/mông/dú/sexy] hoặc[❤️️/💙/🖤/💜/💚/🧡]> <Số tiền cược (lưu ý phải trên 50$)>",
    cooldowns: 0
  };
  
  module.exports.run = async function({ api, event, args, Currencies, getText, permssion }) {
    try {
      const { threadID, messageID, senderID } = event;
      const { getData, increaseMoney, decreaseMoney } = Currencies;
      const request = require('request');
      const axios = require('axios');
      if (this.config.credits != 'J-Kyle') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » Đổi credits con cặc đjt mẹ mày luôn đấy con chó:))');
        return api.sendMessage('[ WARN ] Phát hiện người điều hành bot ' + global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"', threadID, messageID);
      }
      const { readdirSync, readFileSync, writeFileSync, existsSync, copySync, createWriteStream, createReadStream } = require("fs-extra");
      const slotItems = ["gái", "mông", "body", "sexy", "loli", "dú"];
      const money = (await getData(senderID)).money;
      if (isNaN(args[1]) == true) return api.sendMessage('Nội dung "Số tiền cược" mà bạn nhập không phải 1 con số hợp lệ!', threadID, messageID);
      var moneyBet = parseInt(args[1]);
      if (isNaN(moneyBet) || moneyBet <= 50) return api.sendMessage('Số tiền đặt cược không được dưới 50 𝐯𝐧𝐝', threadID, messageID);
      if (moneyBet > money) return api.sendMessage('𝐓𝐚̀𝐢 𝐤𝐡𝐨𝐚̉𝐧 𝐜𝐮̉𝐚 𝐛𝐚̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 đ𝐮̉ , 𝐜𝐨́ 𝐦𝐮𝐨̂́𝐧 𝐛𝐚́𝐧 𝐧𝐡𝐚̀ đ𝐞̂̉ 𝐜𝐡𝐨̛𝐢 𝐤𝐡𝐨̂𝐧𝐠.', threadID, messageID);
      var number = [], list = [], listimg = [], win = false;
      var baucua1 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua2 = slotItems[Math.floor(Math.random() * slotItems.length)];
      var baucua3 = slotItems[Math.floor(Math.random() * slotItems.length)];
      // ARGS
      let content = args[0];
      var content1;
      if (content == 'gái' || content == '❤️️') {
        content1 = 'gai';
      }
      else if (content == 'body' || content == '💜') {
        content1 = 'body';
      }
      else if (content == 'sexy' || content == '💙') {
        content1 == 'sexy';
      }
      else if (content == 'loli' || content == '🖤') {
        content1 = 'lolo';
      }
      else if (content == 'mông' || content == '💚') {
        content1 = 'mong';
      }
      else if (content == 'dú' || content == '🧡') {
        content1 = 'dú';
      }
      else {
        return api.sendMessage(`Sai định dạng\n${global.config.PREFIX}${this.config.name} <[gái/loli/body/mông/dú/sexy] hoặc[❤️️/💙/🖤/💜/💚/🧡]> <Số tiền cược (lưu ý phải trên 50$)>`, threadID, messageID);
      }
      // request
      if (!existsSync(__dirname + '/cache/gai.jpg')) {
        request('https://i.imgur.com/lqVSFSi.jpg').pipe(createWriteStream(__dirname + '/cache/gai.jpg'));
      }
      if (!existsSync(__dirname + '/cache/body.jpg')) {
        request('https://i.imgur.com/Maw3xlB.jpg').pipe(createWriteStream(__dirname + '/cache/body.jpg'));
      }
      if (!existsSync(__dirname + '/cache/loli.jpg')) {
        request('https://i.imgur.com/m5I7bMw.jpg').pipe(createWriteStream(__dirname + '/cache/loli.jpg'));
      }
      if (!existsSync(__dirname + '/cache/mong.jpg')) {
        request('https://i.imgur.com/dZ3lwyV.jpg').pipe(createWriteStream(__dirname + '/cache/mong.jpg'));
      }
      if (!existsSync(__dirname + '/cache/sexy.jpg')) {
        request('https://i.imgur.com/GrkpDYt.jpg').pipe(createWriteStream(__dirname + '/cache/sexy.jpg'));
      }
      if (!existsSync(__dirname + '/cache/du.jpg')) {
        request('https://i.imgur.com/yOrp8Pz.jpg').pipe(createWriteStream(__dirname + '/cache/du.jpg'));
      }
      if (!existsSync(__dirname + '/cache/baucua.gif')) {
        request('https://i.imgur.com/BZ211jO.gif').pipe(createWriteStream(__dirname + '/cache/baucua.gif'));
      }
      // baucua 1
      if (baucua1 == 'gái') {
        var bau1 = 'gai';
        var bau_1 = __dirname + '/cache/gai.jpg';
      }
      else if (baucua1 == 'body') {
        var bau1 = 'body';
        var bau_1 = __dirname + '/cache/body.jpg';
      }
      else if (baucua1 == 'dú') {
        var bau1 = 'du';
        var bau_1 = __dirname + '/cache/du.jpg';
      }
      else if (baucua1 == 'mông') {
        var bau1 = 'mong';
        var bau_1 = __dirname + '/cache/mong.jpg';
      }
      else if (baucua1 == 'sexy') {
        var bau1 = 'sexy';
        var bau_1 = __dirname + '/cache/sexy.jpg';
      }
      else if (baucua1 == 'loli') {
        var bau1 = 'loli';
        var bau_1 = __dirname + '/cache/loli.jpg';
      }
      // baucua 2
      if (baucua2 == 'gái') {
        var bau2 = 'gai';
        var bau_2 = __dirname + '/cache/gai.jpg';
      }
      else if (baucua2 == 'body') {
        var bau2 = 'body';
        var bau_2 = __dirname + '/cache/body.jpg';
      }
      else if (baucua2 == 'dú') {
        var bau2 = 'du';
        var bau_2 = __dirname + '/cache/du.jpg';
      }
      else if (baucua2 == 'mông') {
        var bau2 = 'mong';
        var bau_2 = __dirname + '/cache/mong.jpg';
      }
      else if (baucua2 == 'sexy') {
        var bau2 = 'sexy';
        var bau_2 = __dirname + '/cache/sexy.jpg';
      }
      else if (baucua2 == 'loli') {
        var bau2 = 'loli';
        var bau_2 = __dirname + '/cache/loli.jpg';
      }
      // baucua 3
      if (baucua3 == 'gái') {
        var bau3 = 'gai';
        var bau_3 = __dirname + '/cache/gai.jpg';
      }
      else if (baucua3 == 'body') {
        var bau3 = 'body';
        var bau_3 = __dirname + '/cache/body.jpg';
      }
      else if (baucua3 == 'dú') {
        var bau3 = 'du';
        var bau_3 = __dirname + '/cache/du.jpg';
      }
      else if (baucua3 == 'mông') {
        var bau3 = 'mong';
        var bau_3 = __dirname + '/cache/mong.jpg';
      }
      else if (baucua3 == 'sexy') {
        var bau3 = 'sexy';
        var bau_3 = __dirname + '/cache/sexy.jpg';
      }
      else if (baucua3 == 'loli') {
        var bau3 = 'loli';
        var bau_3 = __dirname + '/cache/loli.jpg';
      }
      // array baucua
      list.push(bau1);
      list.push(bau2);
      list.push(bau3);
      // array img
      listimg.push(createReadStream(__dirname + '/cache/' + bau1 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau2 + '.jpg'))
      listimg.push(createReadStream(__dirname + '/cache/' + bau3 + '.jpg'))
      // ICON
      // icon 1
      if (bau1 == 'gai') {
        var icon1 = '❤️️';
      }
      else if (bau1 == 'du') {
        var icon1 = '🧡'
      }
      else if (bau1 == 'mong') {
        var icon1 = '💙';
      }
      else if (bau1 == 'body') {
        var icon1 = '🖤';
      }
      else if (bau1 == 'sexy') {
        var icon1 = '💜';
      }
      else if (bau1 == 'loli') {
        var icon1 = '💚';
      }
      // icon 2
      if (bau2 == 'gai') {
        var icon2 = '❤️️';
      }
      else if (bau2 == 'du') {
        var icon2 = '🧡'
      }
      else if (bau2 == 'mong') {
        var icon2 = '💙';
      }
      else if (bau2 == 'body') {
        var icon2 = '🖤';
      }
      else if (bau2 == 'sexy') {
        var icon2 = '💜';
      }
      else if (bau2 == 'loli') {
        var icon2 = '💚';
      }
      // icon 3
      if (bau3 == 'gai') {
        var icon3 = '❤️️';
      }
      else if (bau3 == 'du') {
        var icon3 = '🧡'
      }
      else if (bau3 == 'mong') {
        var icon3 = '💙';
      }
      else if (bau3 == 'body') {
        var icon3 = '🖤';
      }
      else if (bau3 == 'sexy') {
        var icon3 = '💜';
      }
      else if (bau3 == 'loli') {
        var icon3 = '💚';
      }
      // sendMessage
      api.sendMessage({
        body: '🌸đ𝐚𝐧𝐠 𝐤𝐢𝐞̂́𝐦 𝐠𝐡𝐞̣̂ 𝐜𝐡𝐨 𝐛𝐚̣𝐧\n🌸 𝐜𝐡𝐨̛̀ 𝐭𝐲́ !',
        attachment: createReadStream(__dirname + '/cache/baucuasexy.gif')
      }, threadID, (err, info) => {
        if (err) return api.sendMessage(err, threadID, messageID);
        setTimeout(() => {
          api.unsendMessage(info.messageID);
          var check = list.findIndex(i => i.toString() == content1);
          var check2 = list.includes(content1);
          //console.log(check);
          //console.log(icon1 + icon2 + icon3);
          if (check >= 0 || check2 == true) {
            return api.sendMessage({
              body: `🌸𝐮𝐥𝐚𝐭𝐫𝐨𝐢: ${icon1} | ${icon2} | ${icon3}\n🌸𝐜𝐡𝐮́𝐜 𝐦𝐮̛̀𝐧𝐠 𝐞𝐦 𝐧𝐡𝐚̣̂𝐧 đ𝐮̛𝐨̛̣𝐜 𝐜𝐨𝐧 𝐠𝐡𝐞̣̂ +${moneyBet * 3} 𝐯𝐧𝐝`,
              attachment: listimg
            }, threadID, () => Currencies.increaseMoney(senderID, moneyBet * 3), messageID);
          }
          else if (check < 0 || check2 == false) {
            return api.sendMessage({
              body: `🌸𝐞𝐦 đ𝐞𝐧 𝐥𝐚̆́𝐦: ${icon1} | ${icon2} | ${icon3}\n 🌸𝐭𝐚̣𝐢 𝐦𝐚̀𝐲 𝐱𝐚̂́𝐮 𝐧𝐞̂𝐧 𝐛𝐢̣ 𝐛𝐨̂̀ đ𝐚́ ! -${moneyBet} 𝐯𝐧𝐝`,
              attachment: listimg
            }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
          }
          else {
            return api.sendMessage('[𝐄𝐑𝐑𝐎𝐑]', threadID, messageID);
          }
        }, 3000);
      }, messageID);
    }
    catch (err) {
      console.error(err);
      return api.sendMessage(err, event.threadID, event.messageID);
    }
      }