module.exports.config = {
    name: "tx",
    version: "1.0.2",
    hasPermssion: 0,
    creditss: "J-Kyle",
    description: "Tài or xỉu",
    commandCategory: "Game",
    usages: "[tài/ xỉu]",
    cooldowns: 2
};
module.exports.run = async ({ api, event, args, Currencies }) => {
    const { getData, increaseMoney, decreaseMoney } = Currencies;
    const { createReadStream } = require("fs-extra");
    const { threadID, messageID, senderID } = event;
    // const axios = global.nodemodule["axios"];
    const data1 = (await Currencies.getData(senderID)).data || {};
    // const { data } = await axios.get(`https://le31.glitch.me/game/taixiuchanle?chon=xỉu`)
    var taixiucac = ["tài", "xỉu","chẵn","lẻ"];
    const rdm = taixiucac[Math.floor(Math.random() * taixiucac.length)]
    const money = (await getData(senderID)).money;
    var moneyBet = parseInt(args[1]);
    if (isNaN(moneyBet) || moneyBet < 50)
        return api.sendMessage('Không đúng định dạng hoặc số tiền đặt cược dưới 50 đô', threadID, messageID);
    if (moneyBet > money)
        return api.sendMessage('Số dư của bạn không đủ.', threadID, messageID);
    api.sendMessage({
        body: 'Vui lòng đợi 10s để lắc',
        attachment: createReadStream(__dirname + '/cache/baucua.gif')
    }, threadID, (err, info) => {
        if (err) console.log(err);// send lỗi ra cho bố mày cái địt mẹ cốt như lồn
        setTimeout(() => {
            api.unsendMessage(info.messageID);
            if (args[0] == rdm) {
                return api.sendMessage({
                    body: `Nhà cái ra: ${rdm} \nBạn chọn: ${args[0]}\nBạn thắng và nhận được ${moneyBet * 3}$\nSố tiền còn lại của bạn: ${money + moneyBet}$`
                }, threadID, () => Currencies.increaseMoney(senderID, moneyBet * 3), messageID);
            } else if (args[0] != rdm) {
                return api.sendMessage({
                    body: `\nNhà cái ra: ${rdm} \nBạn chọn: ${args[0]}\nBạn thua và bị trừ ${moneyBet}$\nSố tiền còn lại của bạn: ${money - moneyBet}$`
                }, threadID, () => Currencies.decreaseMoney(senderID, moneyBet), messageID);
            } else {
                return api.sendMessage("Lỗi gòi đéo biết fix đâu", threadID, messageID);
            }
        }, 1000);
    }, messageID);
          }