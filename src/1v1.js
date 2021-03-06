const { randomizeAnIndex } = require("./functions.js");

const states = [
    {
        emoji: "<:knockedDownState:815176964926734379>",
        des: "Knocked down"
    },
    {
        emoji: "<:halfHealthState:815176964528144416>",
        des: "Half Health"
    },
    {
        emoji: "<:healthyState:815176965002362880>",
        des: "Full Health"
    }
];

const distance = [
    {
        e: "<:yas:671454198365421581>",
        des: "Close"
    },
    {
        e: "🔸",
        des: "Medium"
    },
    {
        e: "<:nae:671454247505625110>",
        des: "Far"
    }
];

let attachment = "";

const attachments = {
    blink: {
        hit: "",
        miss: "",
        predict: "",
        far: ""
    },
    chase: ["", "", ""],
    attack: {
        hit: "",
        far: ""
    },
    stun: {
        miss: "",
        hit: "",
        late: "",
        miss_hit: ""
    }
}

class Player {
    constructor(data) {
        this.data = data;
        this.Moves = [];
        this.Surrendered = false;

        return this;
    }

    sendMessage(message, toSend) {
        return message.channel.send(toSend).then((m) => m.delete({ timeout: 15500 }).catch(e => console.log(e)));
    }

}

class Hunter extends Player {
    constructor(data) {
        super(data);

        this.isStunned = false;
        this.hasBlink = false;
        this.Distance = 2;
        this.Turn = true;
    }

    blink(message, SurvivingUser) {
        if (this.hasBlink == false) {
            return this.sendMessage(message, `**${this.data.toString()} your Blink is still on cooldown!**`);

        }
        if (this.isStunned) {
            return this.sendMessage(message, `${this.data.toString()}, you're still stunned! Can't blink atm.`);
        }

        let ch = ["hit", "hit", "hit", "miss", "predict"];

        if (this.Distance === 1) ch = [...ch, "miss", "far", "far", "hit"];
        else if (this.Distance == 2) {
            this.sendMessage(message, `**${this.data.toString()} you were too far away and missed your blink!**`);

            return this.hasBlink = false;
        }

        const chances = ch[Math.floor(Math.random() * ch.length)];

        switch (chances) {
            case "hit":
                SurvivingUser.Health--;

                if (SurvivingUser.Health < 1) {
                    return this.sendMessage(message, `**${this.data.username}** knocked **${SurvivingUser.data.username}** down!\n${SurvivingUser.data.username}'s Health State: ${states[SurvivingUser.Health].emoji}`);
                }

                this.sendMessage(message, `**${this.data.toString()} used their blink and hit ${SurvivingUser.data.username}!**\n${SurvivingUser.data.username}'s Health State: ${states[SurvivingUser.Health].emoji}`);
                break;

            case "miss":
                this.sendMessage(message, `**${this.data.toString()} used their blink but missed!**`);
                break;

            case "predict":
                this.sendMessage(message, `**${this.data.toString()} used their blink but ${SurvivingUser.data.username} predicted it!**`);
                break;

            case "far":
                this.sendMessage(message, `**${this.data.toString()} used their but they were to far away and missed!**`);
                break;
        }
        this.hasBlink = false;

    }

    chase(message, SurvivingUser) {
        if (this.isStunned) {
            return this.sendMessage(message, `**You're still stunned, ${this.data.toString()}**`);


        }
        if (this.Distance === 0) {
            return this.sendMessage(message, `**You're already close enough to the Surivor**\nTry attacking once it's your turn again...`);

        }

        this.Distance -= 1;
        this.sendMessage(message, `**${this.data.toString()} made their way towards ${SurvivingUser.data.username}**\nDistance from the survivor is now: ${distance[this.Distance].e} ${distance[this.Distance].des}`);
    }

    attack(message, SurvivingUser) {
        if (this.Distance >= 1) {
            return this.sendMessage(message, `What are you doing, ${this.data.toString()}? You're too far away from ${SurvivingUser.data.username} to be able to hit them`);

        }

        SurvivingUser.Health--;

        if (SurvivingUser.Health < 1) {
            return this.sendMessage(message, `**${this.data.username}** knocked **${SurvivingUser.data.username}** down! The 1vs1 is over!`);

        }

        return this.sendMessage(message, `**${this.data.username} hit ${SurvivingUser.data.username}**\n${states[SurvivingUser.Health].emoji} ${SurvivingUser.data.username} is now half health!`);
    }
    hit(message, SurvivingUser) {
        return this.attack(message, SurvivingUser);
    }
    surrender(message, SurvivingUser) {
        this.Surrendered = true;

        this.sendMessage(message, `${this.data.toString()} surrendered... **${SurvivingUser.data.username}** won the 1v1!`);
    }
}
class Survivor extends Player {
    constructor(data) {
        super(data);

        this.Health = 2;
        this.Kited = 0;
        this.Turn = false;
    }

    tightkite(message, HuntingUser) {
        if (this.Moves[this.Moves.length - 1] === "kite") {
            return this.sendMessage(message, `${this.data.toString()} you're already tightkiting ${HuntingUser.data.username}...`);

        }

        this.Moves.push("kite");
        if (HuntingUser.Distance != 0) HuntingUser.Distance--;
        this.sendMessage(message, `${this.data.toString()} is now looping around a kiting area.`);
    }
    kite(message, HuntingUser) {
        return this.tightkite(message, HuntingUser);
    }

    transition(message, HuntingUser) {

        if (this.Moves[this.Moves.length - 1] == "transition") {
            this.Health--;
            this.Moves.push("x");

            if (this.Health == 0) {
                return this.sendMessage(message, `${this.data.toString()} transitioned too much that they came to a dead end. ${HuntingUser.data.username} made their way to them and kocked them down ${states[this.Health].emoji}\nThe 1v1 is over!`);
            }

            return this.sendMessage(message, `${this.data.toString()} transitioned too much that they came to a dead end. ${HuntingUser.data.username} made their way to them and hit them.\n${this.data.username} is now ${states[this.Health].emoji} ${states[this.Health].des}`);

        }

        this.Moves.push("transition");

        if (HuntingUser.Distance != 2) HuntingUser.Distance++;

        if (HuntingUser.Distance == 0) {
            this.Health--;

            if (this.Health == 0) {
                return this.sendMessage(message, `${this.data.toString()} tried to transition away but ${HuntingUser.data.username} were too close and kocked them down. The 1v1 is over!`);
            }

            return this.sendMessage(message, `${this.data.toString()} tried to transition away but ${HuntingUser.data.username} were too close and hit them.\n${states[SurvivingUser.Health].emoji} ${SurvivingUser.data.username} is now half health!`);

        }

        return this.sendMessage(message, `${this.data.toString()} began transitioning to another area.\nDistance is now: ${distance[HuntingUser.Distance].e} ${distance[HuntingUser.Distance].des}`);

    }

    stun(message, HuntingUser) {
        let chances = ["stun", "stun", "stun", "miss", "miss", "miss_hit", "late"];

        if (HuntingUser.Distance > 1) {
            return this.sendMessage(message, `**${this.data.toString()}, you were too far away to land a stun, but you shut a pallet down...**`);

        }
        if (HuntingUser.isStunned) {
            return this.sendMessage(message, `Whao take it easy **${this.data.toString()}**, you can't stun an already stunned Hunter...\nPoor **${HuntingUser.data.username}** T-T`);

        }

        switch (chances[randomizeAnIndex(chances)]) {

            case "stun":
                this.Kited += 3000;
                HuntingUser.Distance++;
                HuntingUser.isStunned = true;

                this.sendMessage(message, `${this.data.toString()} stunned **${HuntingUser.data.username}** with a pallet... The stun lasts for 7 seconds.\nDistance now is: ${distance[HuntingUser.Distance].e} ${distance[HuntingUser.Distance].des}`);

                setTimeout(() => {
                    HuntingUser.isStunned = false;
                }, 7000);
                break;

            case "miss":
                this.sendMessage(message, `**${this.data.toString()} tried to stun ${HuntingUser.data.username} with a pallet but failed.**`);
                break;

            case "miss-hit":
                this.Health--;

                if (this.Health == 0) return this.sendMessage(message, `**${this.data.toString()} tried to stun but ${HuntingUser.data.username} swong and hit them.**\n${this.data.username}'s health state is: ${states[this.Health].emoji} ${states[this.Health].des}. The match ended!`);
                else this.sendMessage(message, `**${this.data.toString()} tried to stun but ${HuntingUser.data.username} swong and hit them.**\n${this.data.username}'s health state is: ${states[this.Health].emoji} ${states[this.Health].des}`);

                break;

            case "late":
                this.Health--;

                if (this.Health == 0) {
                    return this.sendMessage(message, `**${this.data.toString()} tried to stun but they shut the pallet down too late.**\n${HuntingUser.data.username} walked by the the pallet and hit them.\n${this.data.username}'s health state is: ${states[this.Health].emoji} ${states[this.Health].des}.\nMatch ended!`);
                } else {
                    this.sendMessage(message, `**${this.data.toString()} tried to stun but they shut the pallet down too late.**\n${HuntingUser.data.username} walked by the the pallet and hit them.\n${this.data.username}'s health state is: ${states[this.Health].emoji} ${states[this.Health].des}.`);
                }
                break;


        }


    }
    pallet(message, HuntingUser) {
        return this.stun(message, HuntingUser);
    }
    surrender(message, HuntingUser) {
        this.Surrendered = true;

        this.sendMessage(message, `${this.data.toString()} surrendered... **${HuntingUser.data.username}** won the 1v1!`);
    }
}

module.exports.Survivor = Survivor;
module.exports.Hunter = Hunter;
module.exports.states = states;
module.exports.distance = distance;
module.exports.attachment = attachment;




