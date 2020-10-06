const { findMember } = require("../functions.js");

module.exports = {
    name: 'identify',
    description: "identifies ur friends",
    execute: async (message, args) => {


        let target = await findMember(message, args.slice(1).join(" "));

        if (!target) target = message.author.username;
        else target = target.user.username;

        var infos = [
            target + " Is the coordinator who misses her flare gun",
            target + ` Is the gardener who says "Focus on decoding" while dismantling a rocket chair...`,
            target + " is the wildling who decodes all the ciphers... Dude, you better be a Minds eye",
            target + " is the prospector who removes the hunter's attack recovery animation after getting hit... Good job!",
            target + " is this the guy who can't kite for shit?",
            target + " is the guy who drops the pallet down infront of their teammate's face... We aren't playing blackjack are we?",
            target + " is the player who begs for gifts in the server chat",
            target + ` is the player who sends "Camp = report" before the match starts... They probably got camped on.`,
            'Hey! ' + target + ", stop getting terrorshocked!",
            target + ` is the "i was laggy" excuse user`,
            target + " always disconnects early game and gets found first... GG",
            target + ": tries to surrender but unable to because the hunter downed the whole team too early",
            target + ": WhY dO I gEt fOuND fIrST!",
            target + " is guy who only talks shit in global chat",
            target + " is the guy who thinks that idv is a dating game, it's not Tinder V bro",
            '"Pls hunter be friendly i luv u ❤" thats what ' + target + ' usually says',
            target + " toxics at the exit gate and gets dragged by the gamekeepers hook...",
            target + ` is the "Don't move i'm coming" mindseye, gg`,
            "Omg these randoms are soo baaad, stop complaining about randoms, " + target,
            target + " thinks he is the hero cowboi, heh"
        ];

        var info = Math.floor(Math.random() * infos.length);

        message.channel.send(infos[info]);

    }
}