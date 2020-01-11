module.exports = {
    name: 'identify',
    description: "identifies ur friends",
    execute(message, args){

        let target = message.mentions.users.first() || message.author;
        
                    var infos = [
                    target.username + " Is the coordinator who misses her flare gun",

                    target.username +` Is the gardener who says "Foucus on decoding" while dismantling a rocket chair...`, 

                    target.username + " is the wilding who only decode the whole match, dude u better be a minds eye", 
                    target.username + " is the prospector who removes the hunter's attack recovery animation after getting hit, good job!",
                    target.username +" is this the guy who can't kite for shit?", 
                    target.username + " is the guy who drops the pallet down infront of his teammates face... we aren't playing blackjack are we?",
                    target.username + " is the player who begs for gifts in the server chat",
                    target.username + ` is the player who sends "Camp = report" before the match starts, probably got camped on.`, 
                    'Hey!' +  target.username + " plz stop getting terror shocked!",
                    target.username + ` is the "i was laggy" excuse user`, 
                    target.username + " always disconnects early game and gets found first... GG",
                    target.username + ": tries to surrenders but unable to cuz the hunter downed the whole team too early", 
                    target.username + ": WhY dO I gEt fOuND fIrST!", 
                    target.username + " is guy who only talks shit in global chat", 
                    target.username + " is the guy who thinks that idv is a dating game, it's not Tinder V bro", 
                    "Pls hunter be friendly i luv u :heart: thats what " + target.username + ' usually says' ,
                    target.username + " toxics at the exit gate and gets dragged by the gamekeepers hook..",
                    target.username + ` is the "Don't move i'm coming" mindseye, gg`, 
                    "Omg these randoms are soo baaad, stop complaining about randoms, " + target.username,
                    target.username + " thinks he is the hero cowboi, heh"];

                    var info = Math.floor(Math.random() * infos.length);

                    message.channel.send(infos[info]);
                

    }
}