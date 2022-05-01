module.exports.config = {
	name: "help",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "J-Kyle",
	description: "Hướng dẫn cho người mới",
	commandCategory: "Danh sách lệnh",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: false,
		delayUnsend: 10
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "╭───────╮\n    %1\n╰───────╯ \n📜Mô tả: %2\n\n➢ ✅Credit: %7\n➢ 📄Hướng dẫn cách dùng: %3\n➢ 🔱Thuộc nhóm: %4\n➢ ⏱Thời gian chờ: %5 giây(s)\n➢ 👥Quyền hạn: %6\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏✘\n📣𝘿𝙪̛𝙤̛̣𝙘 𝙙𝙞𝙚̂̀𝙪 𝙝𝙖̀𝙣𝙝 𝙗𝙮 KienTran 🔰",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
	const { commands } = global.client;
	const { threadID, messageID, body } = event;

	if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
	const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 20;
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += `: ${value.config.description}`;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
    for (let item of returnArray) msg += `➢${++i}🍁🍂${item}\n\n`;
    
    const randomText = [ "📣J-Kyle🌺",];
    const text = `➢Kyle's Autobot n◆━━━━━━━━━━━◆\n📜𝑻𝒓𝒂𝒏𝒈 (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)})✔\n✅𝑮𝒐̃: "${prefix}𝒉𝒆𝒍𝒑 <𝒕𝒆̂𝒏 𝒍𝒆̣̂𝒏𝒉>" 𝘿𝒆̂̉ 𝑩𝒊𝒆̂́𝒕 𝑻𝒉𝒆̂𝒎 𝑪𝒉𝒊 𝑻𝒊𝒆̂́𝒕 𝑳𝒆̣̂𝒏𝒉 𝘿𝒐́✔\n📲𝑯𝒊𝒆̣̂𝒏 𝑻𝒂̣𝒊 Đ𝒂𝒏𝒈 𝑪𝒐́ ${arrayInfo.length} 𝑳𝒆̣̂𝒏𝒉 𝑪𝒐́ 𝑻𝒉𝒆̂̉ 𝑺𝒖̛̉ 𝑫𝒖̣𝒏𝒈 𝑻𝒓𝒆̂𝒏 𝑩𝒐𝒕 𝑵𝒂̀𝒚\n🌺BOT KYLE 🥀\n📩𝑫𝒖̀𝒏𝒈 ${prefix}𝒉𝒆𝒍𝒑 <𝒔𝒐̂́ 𝒕𝒓𝒂𝒏𝒈>📄\n______________________________\n[🧐𝑩𝒂̣𝒏 𝑪𝒐́ 𝑩𝒊𝒆̂́𝒕🤔] : ${randomText[Math.floor(Math.random()*randomText.length)]}`;
    return api.sendMessage(msg + "\n\n" + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};