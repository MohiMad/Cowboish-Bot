const { readdirSync } = require("fs");

module.exports = (bot) => {
	const events = readdirSync("./events/").filter(file => file.endsWith(".js"));

	for (const file of events) {
		const evt = require(`../events/${file}`);

		const eName = file.split(".")[0];
		
		if (file == "ready.js") bot.once(eName, evt.bind(null, bot));
		else bot.on(eName, evt.bind(null, bot));
	}
};