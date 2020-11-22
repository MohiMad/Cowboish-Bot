const { findMember } = require("../functions.js");

module.exports = {
    name: 'identify',
    description: "identifies ur friends",
    execute: async (message, args) => {


        let target = await findMember(message, args.slice(1).join(" "));

        if (!target) target = message.author.username;
        else target = target.user.username;

        var infos = [
            `$target is the Coordinator who misser her flare gun... You had one job`,
            `$target is the Gardener who sends "Focus on decoding" while dismantling a Rocket Chair...`,
            `$target is the Wildling with 400% decoding... Better be a Mind's eye -v-`,
            `$target is the Prospector who removes the Hunter's attack recovery animation after getting hit... Well done!`,
            `The match is automatically a loss if $target gets found first`,
            `$target is the player who drops the pallet infront of their teammate's face, such a betrayal...`,
            `$target is the guy who drops the pallet infront of their teammate's face... We aren't playing Blackjack are we?`,
            `$target is the player who begs for gifts in the server chat...`,
            `$target is the player who sends "Camp = report" before the match starts... Probably got camped on...`,
            `Someone tell $target to stope getting terrorshocked .-.`,
            `$target is the "I was laggy" excuse user`,
            `$target: *disconnects early-game and gets found first*... GG`,
            `$target: *tries to surrender but unable to because the hunter downed the whole team too early*`,
            `No one: ...\n$target: "WhY dO I gEt fOuND fIrST??!"`,
            `$target is the complainant in the global-chat`,
            `$target is the guy who thinks that Idv is a dating game, It's not Tinder V bruh .-.`,
            `No one: ...\n$target every single match: "Pls hunter be friendly I luv u ❤"`,
            `$target: *toxics at the exit gate and gets dragged by the gamekeepers hook*... And there goes the win :'D`,
            `$target is the "Don't move I'm coming" Mind's eye... GG`,
            `"Omg these randoms are soo baaad, stop complaining about randoms"... Stop complaining about randoms, $target`,
            `$target thinks they're the hero Cowboi, heh`,
            `$target is a first-class simp.`,
            `$target is the player to ask for a character nerf before it hasn't even gotten released`,
            `$target is the Geisha using blink 😂😂`,
            `$target begs for Friendly Hunter in chat but becomes salty when the hunter only chairs them`,
            `$target fails to prime cipher because of lag and accidentally pops it. Ouch.`
                `$target: *sends an owl too late and gets a "Thank You!"*`,
            `$target is frustrated with perfect or nothing calibrations`,
            `$target always pings the wrong chat when kiting`,
            `$target tries to kite looking backwards and accidentally gets stuck.`,
            `$target is a full-fledged stalking Seer`,
            `$target is the Forward who uses their rugby ball to run away`,
            `$target is the decoder who gets found first, kites for half the game just to see 3 ciphers remaining... How sad.`,
            `$target is an Enchantress main. How does it feel to be one of the most annoying survivors?`,
            `$target is a prospector main that repels their teammates into the hunter. Biggest screw ups but became a joke?`,
            `$target spams "Thank You!" For everything. E. V. E. R. Y. T. H. I. N. G.`,
            `$target is a Photographer main who is more blind than Mind's Eye.`,
            `$target screams Meow meow when they see Disciple's cat.`
        ];

        var info = Math.floor(Math.random() * infos.length);

        message.channel.send(infos[info].replace("$target", target));

    }
}