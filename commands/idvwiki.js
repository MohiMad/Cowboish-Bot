const Discord = require("discord.js");

const { ErrorMsg } = require("../functions.js");

module.exports = {
    name: 'idvwiki',
    description: "Survivor/Hunter wikipedia",
    execute: async (message, args, bot, prefix) => {



        let hunterIcon = "https://gamepedia.cursecdn.com/identityv_gamepedia_en/f/fc/IconHelpLoading_hunter.png?version=048b1ceaca92d49b3189ec9889405eb0";

        let survivorIcon = "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/b/b3/IconHelpLoading_survivor.png/42px-IconHelpLoading_survivor.png?version=6a063b3ea459f7d72fadeb63f4508de7";

        let notusedembed = new Discord.RichEmbed()
            .setAuthor("", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Overview:**\nTEXTHERE\n\n**Background:**\nTEXTHERE\n\n**《 External traits 》**\n\n")
            .setFooter(`The Survivors - Page x of 28 | Information taken from IdentityV wiki`)
            .setImage("");


        let luckyguy = new Discord.RichEmbed()
            .setAuthor("Lucky Guy", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Overview:**\nLucky Guy specializes in versatility, able to manually select certain items from a chest (increasing his odds of receiving it) and always having the right tool for the job. Additionally, he lacks a debuff, making him a relatively low-risk character. His decoding speed is normal/average.\n\n**Background:**\nHis world is like a slot machine that he always wins at. But who knows what will happen when he stops playing.\n\n**Rumor:**\nNo one knows how many people have taken part in this game; we know that he played the game.\n\n**《 External traits 》**\n\n**Lucky Guy**: It is perfectly natural for someone with nothing to rely on luck. Wishing for an item before you open a chest will significantly increase your chances of receiving it.\n\n**Veterans:** Veterans are more vigilant than novices and gain an additional **2s** boost when hit.")
            .setFooter(`The Survivors - Page 1 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/687700563282231391/Lucky_Guy_Portrait.png")


        let doctor = new Discord.RichEmbed()
            .setAuthor("Emily Dyer - The Doctor", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Overview:**\nEmily Dyer is a Survivor that boosts her team's survival time as well as her own.\n\n**Background:**\nShe is ambitious and extremely clever, yet unobtrusive. But she is not all she seems. To survive in this crazy world, you have to do something out of the ordinary. Tired of constantly moving around, Emily hopes to use this chance to find a place she can call 'home' and ultimately enjoy a life of security and stability, one that she has never had. But before that, she needs to solve a few 'problems' from her past. [Read more](https://identityv.gamepedia.com/Emily_Dyer)\n\n**《 External traits 》**\n\n**Med Master:** Carries around a syringe and can heal herself when wounded. Due to her medical background, syringes are not depleted when used.\n\n**Med Elite:** Can detect and heal even the slightest injuries. The speed of healing others is increased by **60%** and self-healing speed increased by **20%**. All teammates' healing speed is increased by 5%.\n\n**Weak:** Physically weak. Vaulting speed is decreased by **10%**.\n\n**Veterans:** Veterans are more vigilant than novices and gain an additional **2s** boost when hit.")
            .setFooter(`The Survivors - Page 2 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/710143048411119747/Emily_Dyer_Portrait.png")


        let gardener = new Discord.RichEmbed()
            .setAuthor("Emma Woods - The Gardener", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nEmma Woods was born as Lisa Beck to a factory owner around 1887. Her father made her small toys and treated her well. However, her father was severely in-debt with the factory that he was tricked into buying by the Lawyer. He burned himself in the fire after sending Lisa to an orphanage, where she stayed for five years.\nThe orphanage resulted in children suffering psychological trauma, so Lisa was sent away to a clinic. At the clinic, she was operated on by Dr. Lydia Jones After this, Lisa fled and changed her name to Emma Woods.\n[Read more](https://identityv.gamepedia.com/Emma_Woods)\n\n**《 External traits 》**\n\n**Ingenuity:** Carries around a toolkit that is used to destroy Rocket Chairs. Hunters are able to repair destroyed Rocket Chairs. The toolkit has a **12** seconds cooldown after each use.\n\n**Protection:** With the memories of the past, the Gardener is able to block one incoming damage during the first **50** seconds of the game. This effect will be lost when attacked by the Hunter or when the duration ends.\n\n**Confidence:** Due to her familiarity with the structure of Rocket Chairs, Gardener is less scared and is able to locate Rocket Chairs nearby. When she's near the Rocket Chair, her Vaulting Speed is increased by **10%** and Rocket Chair's Takeoff Speed is decreased by **10%**. Gardener will also leave the Rocket Chairs with irreparable damage when destroying them so that their Takeoff Speed is decreased by **10%**.\n\n**Veterans:** Veterans are more vigilant than novices and gain an additional **2s** boost when hit.")
            .setFooter(`The Survivors - Page 3 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/a/ad/Emma_Woods.png/150px-Emma_Woods.png?version=37d7fd584d404d7c92d3a44a303ff71f");

        let lawyer = new Discord.RichEmbed()
            .setAuthor("Freddy Riley - The Lawyer", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Overview:**\nThe Lawyer is an objectives-oriented survivor, using his Map to locate Cipher Machines and teammates to boost their efficiency and rush towards the endgame.\n\n**Background:**\nSince a botched lawsuit, Freddy has been toiling away at a menial job with a pathetic wage. But he hopes to find a way to escape his past and live the life he has never had: he dreams of receiving a huge bonus, or an opportunity to become a partner in a law firm. Of course, first he needs to find the culprit who ruined his perfect life.\n\n**《 External traits 》**\n\n**Foresight:** Carries around a map that can be used to check the locations of Cipher Machines that haven't been decoded, Exit Gates, The Survivors and Hunters.\n\n**Heartless:** With lies running through his blood, Lawyer is never shaken by Terror Shock in any interactions.\n\n**Weak:** Physically weak. Vaulting speed is decreased by **10%**.\n\n**Veterans:** Veterans are more vigilant than novices and gain an additional **2s** boost when hit.")
            .setFooter(`The Survivors - Page 4 of 28 | Information taken from IdentityV Wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/710145599407915068/Freddy_Riley_Portrait.png")


        let theif = new Discord.RichEmbed()
            .setAuthor("Kreacher Pierson - The Theif", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nAfter handing over control of the orphanage on White Sand Street to the Church, Kreacher hasn’t indulged in extravagance. His thoughts have since been preoccupied on whether he should try to help more children, but perhaps it’s time others help foot the bill. He also took in Emma Woods (Gardener) into the orphanage as soon as she was sent there.\n\n**《 External traits 》**\n\n**Cunning:** Carries around a flashlight and can incapacitate hunters by shining light on them for a certain time. An ample power supply allows him to use flashlights **100%** longer.\n\n**Flexibility:** Flexible body. Obstacle vaulting speed is increased by **15%**.\n\n**Hoarder:** Old habits die hard. He often steals parts when decoding. All teammates' chance of triggering a calibration is increased by **10%**, and the scope of success decreased by **10%**.\n\n**Lock Pick:** Talented lock pick. Thanks to him, all members' chest opening speed is increased by **100%**.")
            .setFooter(`The Survivors - Page 5 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/712246534439174154/Kreacher_Pierson_Portrait.png")


        let magician = new Discord.RichEmbed()
            .setAuthor("Servais Le Roy - The Magician", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nServais Le Roy began his magic career in Belgium and moved to London to open his own magic shop. Despite his proficiency in disappearing tricks, he has not gained approval from the public. In Oletus Manor, which has produced countless famous artists, could he find some new inspiration?\n\n**《 External traits 》**\n\n**Illusion:** Carries around a wand that can be used to create an illusion. When used he will become invisible for several seconds. If the Magician is struck when invisible, he will be Terror Shocked. __Exclusive__ Due to the Magicians's professional skills, his movement speed is increased by **40%** when invisible.\n\n**Dexterous:** Has extremely dexterous hands. The chance of triggering a calibration is decreased by **20%**, and the scope of success is increased by **20%**.\n\n**Real or Fake:** The Magician's deceptive performances leads his teammates to question the identity of the man on the chair. Rescue time is increased by 60% when rescuing the Magician from a rocket chair. The Magician will instantly use Escape Artist upon being rescued from a Rocket Chair and leave an illusion on the chair to make himself invisible for 2 seconds.")
            .setFooter(`The Survivors - Page 6 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/712247760447078470/Servais_Le_Roy_Portrait.png")

        let explorer = new Discord.RichEmbed()
            .setAuthor("Kurt Frank - The Explorer", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nKurt is an experienced explorer, passionate about exploring the limits of humanity. He has sailed across the English Channel, flown over old-growth forests in a hot air balloon, and, of course, joined a life-or-death game. As a master of survival, maybe he has a good shot at winning?[Read more](https://identityv.gamepedia.com/Kurt_Frank)\n\n**《 External traits 》**\n\n**Fantasy:** Carries around the novel Gulliver's Travels and can turn into a tiny Lilliputian after reading it. He is undetectable by the Hunter's 'radar' after shrinking, but cannot perform most actions.[Read more](https://identityv.gamepedia.com/Kurt_Frank)\n**Explore:** Possesses superior survival skills and knows how to hide his tracks. His tracks last for **1s** less. Also, vaulting obstacles will not alert the hunter.\n\n**Curiosity:** Can hardly control his curiosity and tends to attempt risky operations when decoding. The chance of triggering a calibration is increased by 30% and scope of success decreased by **30%**.\n**Energy Reserves:** After plenty of rest the Explorer is ready to Dash Hit. Stop moving for **10** seconds to increase your movement speed by **40%** for **1** second. This effect can only be triggered once every **80** seconds")
            .setFooter(`The Survivors - Page 7 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/712249321432809482/Kurt_Frank_Portrait.png");

        let mercenary = new Discord.RichEmbed()
            .setAuthor("Naib Subedar - The Mercenary", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nAlthough not tall and physically strong, Naib is like most Gurkhas, and the rugged terrain has trained their strong body and indomitable spirit. Naib used to be a mercenary for the East India Company, but because he believed in the idea of ​​equality for human beings, his dislike of war reached its peak and refused to sell for the British. He then became a free mercenary, but he has long since left his bloodthirsty life after retirement. Perhaps a dangerous game can give him the same experience on the battlefield?\n\n**《 External traits 》**\n\n**Iron Dash:** Possesses elbow pads, which triggers upward Dash Hit boost when he propels himself off a passing wall\n\n**Skilled:** Military trained. Vaulting speed is increased by **10%**.\n\n**Steel Will:** The countdown speed of rocket chairs he is fastened to is reduced by 30% and the increase of fear is delayed by 15 seconds.\n\n**Shell Shocked:** Machines and his decoding speed is decreased by 25%.\nHealing time is increased by 20% and can reach 100%.")
            .setFooter(`The Survivors - Page 8 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/712618464606552174/Naib_Subedar_Portrait.png");

        let coordinator = new Discord.RichEmbed()
            .setAuthor("Martha Behamfil - The Coordinator", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nMartha was good at riding and shooting when she was young and attained the rank of captain after joining the cavalry. Not content to just gallop on horseback, Martha learned basic piloting skills and fell in love with flying. She quit her position in the cavalry and joined the Air Force. However, instead of becoming a pilot, as she had wished, Martha was required to perform signal guide work on the ground. To fly her own plane, she has to find a reliable 'sponsor'\n\n**《 External traits 》**\n\n**Precise Aim:** Carries around a flare gun that she uses with deadly accuracy. The speed at which hunters recover when stunned after hit with a flare gun is decreased by **30%**.\n\n**Steel Will:** Hardened military training. The rocket chair countdown is decreased by **10%**.\n\n**Army Bond:** Appreciates camaraderie. The speed at which she decodes ciphers and opens exit gates is decreased by **30%** when a teammate is placed on a rocket chair.\n\n**Skilled:** Military trained. Vaulting speed is increased by **10%**.")
            .setFooter(`The Survivors - Page 9 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/712620299442716703/Martha_Behamfil_Portrait.png");


        let mechanic = new Discord.RichEmbed()
            .setAuthor("Tracy Reznik - The Mechanic", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nHaving been wrapped up in her 'useless' little inventions and obsessed with gunpowder experiments, the Mechanic Tracy was soon in debt because of the high cost of these experiments. The invitation letter promised a golden prize, but what truly attracted Tracy were the secret gadgets in the manor…\n\n**《 External traits 》**\n\n**Operator:** Carries around a life-size doll, which can be destroyed with a single strike.\nThe Mechanic can control the deployed doll when incapacitated or when placed on a Rocket Chair, but at a higher cost. Control will be interrupted if the Mechanic is rescued.\n\n**Fragile:** Physically weak. Obstacle vaulting speed is decreased by **30%**.\n\n**Mech Master:** Her proficiency in machine manufacturing and various mechanical traps increases her cipher machine decoding speed by 25%. When operating a doll, its decoding speed is also increased by 25%. The Mechanic's teammates become **3%** faster at decoding cipher machines.\n\n**Cowardly:** Years of indoor work have exacerbated the Mechanic's timidity. The mechanic becomes scared when a teammate is wounded or placed on a rocket chair; therefore, her decoding speed is decreased by **45%** and her gate opening speed is decreased by **15%**. This effect can be stacked up to **2** times.")
            .setFooter(`The Survivors - Page 10 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/712621838114750535/100px-Tracy_Reznik.png");

        let forwardy = new Discord.RichEmbed()
            .setAuthor("William Ellis - The Forward", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Overview:**\nWhen playing him, players can use the football to dash forward and knock the hunter off balance. The Forward will be stunned when exhausted. If he pushes the hunter into an object, the hunter will be stunned for longer. His decoding speed is slower than most The Survivors. His main job is to rescue The Survivors that are being carried by the hunter. Stunning the hunter into an object while the hunter carries a survivor will release the carried survivor. He also has 10% increase in struggling speed if captured by the hunter, allowing him to free himself if carried by balloons.\n\n**Background:** Rugby football is attracting attention, but William Ellis, who claims to be the founder of this new sport, is being forgotten. He joined a small rugby club, but not everything went his way. Can the owner of Oletus Manor help him?\n\n**《 External traits 》**\n\n**Rush:** Carries around a rugby ball. He dashes forward with his rugby ball, but will be stunned when exhausted. The Forward's superior physique allows him to knock the hunter off balance after dashing for a short distance. If the hunter is knocked into other objects, they will be stunned for a longer period of time.\n\n**Athletic:** Athletically gifted and monstrously strong. Obstacle vaulting speed is increased by **20%**, and pallet pulling speed is increased by **50%**. The recovery time of hunters stunned by the Forward is decreased by **15%**.\n\n**All Thumbs:** Clumsy and terrible with machines. Decoding speed is decreased by **30%**.\n\n**Struggle:** His strong physique makes it easier for him to escape the hunter's clutches. Struggling speed is increased by **10%**.")
            .setFooter(`The Survivors - Page 11 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/712625290173481030/William_Ellis_Portrait.png");


        let mindseye = new Discord.RichEmbed()
            .setAuthor("Helena Adams - The Mind's eye", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nHelena lost her vision in a fever when she was 1 year old, but she still learned how to read and write from her parents and a tutor. However, Helena has a greater ambition: getting a college degree. Can the owner of Oletus Manor pay for her tuition? That's what the braille invitation letter suggested, at least.\n\n**《 External traits 》**\n\n**Echo:** Continuously detect nearby Hunter's location while moving. Using the skill will allow players to know the Hunter's location on the entire map. When she strikes the ground with her Cane a sound waves sweeps across the map revealing the Hunter's position, which is shared with teammates. Decoded cipher machines and moving teammates can also be detected.\n\n**Mind's Eye:** Blindness has sharpened the Mind's Eye's other senses. When she decode cipher machines, almost no calibrations are triggered and her decoding speed is increased by **30%**.\n\n**Fragile:** Physically weak. Obstacle vaulting speed is decreased by **30%**.")
            .setFooter(`The Survivors - Page 12 of 28 | Information taken from IdentityV wiki`)
            .setImage("");

        let priestess = new Discord.RichEmbed()
            .setAuthor("Fiona Gilman - The Priestess", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nFiona Gilman was born into an unknown class, interested in occultism and geography. As a mystic, she claims to be a follower of the time and space of Cthulhu mythology, Yog-Sothoth. she carry’s with her a strange metal ring. She claimed that the Lord led her to the Oletus manor, and the “Holy Key”, as she calls the ring, is the evidence.\n\n**《 External traits 》**\n\n**Holy Key:** Creates a passage between self and Teammates. Other The Survivors crossing the passage will leave a residual image that can be attacked by Hunters.\nThe Priestess carries the Holy Key around and can choose to generate either a Straight Passage or an Ultra-Long Passage. Both passages created will not lead to contaminated earth or areas, and Hunter can destroy passages.\n__Straight Passage__\nBoth The Survivors and Hunters can pass through. Passages entered by Hunters will be destroyed after they squeeze through. At the same time, the Hunter will be stunned for a period of time, and the stun duration increases with the passage's length.\n\n__Ultra-Long Passage__\nThe Survivors entering the portal will be quickly transported to the other side after a few seconds. A residual image of The Survivors that use the Ultra-Long Passage will remain at the entrance of the passage when using it. The time they remain is determined by the length of the portal. The Hunter can attack these images. When the images are attacked, the damage and special effects inflicted are transferred to the Survivor, and the Survivor becomes visible for 10s. Hunters cannot pass through the Ultra-Long Passage.\n\n**Fragile:** Physically weak. Obstacle vaulting speed is decreased by **10%**.\n\n**Spiritualist:** Not good with machines. Decoding speed is decreased by 10%. Chances of triggering a calibration and difficulty of performing a calibration are both increased by **30%**\n\n**Blessed:** Prays devoutly for blessings. Time needed to healing teammates is decreased by **10%** and time needed for the Priestess is decreased by **30%**")
            .setFooter(`The Survivors - Page 13 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://media.discordapp.net/attachments/673091096946933790/713515937948631091/150px-Fiona_Gilman_Portrait.png");

        let perfumer = new Discord.RichEmbed()
            .setAuthor("Vera Nair - The Perfumer", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nA famous perfumer from Grasse. After years of searching, she received inspiration from a mysterious perfume recipe and created 'Euphoria', Which also came with a letter from an Oletus manor, a perfume that helps you to forget about your worries. Unfortunately, the aroma doesn't last long enough. She has no other choice but to go to the source of the formula and find a way to improve it. Hopefully the owner of the manor can help her to relieve all of her worries.\n\n**《 External traits 》**\n\n**Euphoria:** The Perfumer sprays some Euphoria perfume and enters an immersed state. She is able to remember her condition and position at that very moment. While the skill is active she can choose to forget what has just happened and return to the moment when she sprayed her perfume. As the maker of this perfume, she can use this item more than other The Survivors.\n\n**Blackout:** The Perfumer often wears Euphoria. If she has a blackout and fails to calibrate a cipher machine, calibration progress will be reduced 3 times as much as normal characters.\n\n**Special Physique:** The Perfumer is very scentsitive and doesn't like the smell of medical equipment. Healing time is increased by 30%.")
            .setFooter(`The Survivors - Page 14 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/9/95/Vera_Nair_Portrait.png?version=c19b27ff2c6de7f2af301a3d7c44a248");


        let cowboy = new Discord.RichEmbed()
            .setAuthor("Kevin Ayuso - The Cowboy", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nA cowboy from the North America who befriended a young girl from an native American tribe when he was younger and learned how to use the lasso. Many years later, he was saved by the native Americans when he suffered misfortune and the passionate Kevin Alonso remained with the tribe. But good things never last and the tribe died out. He didn't want to stay, so he decided to roam the European continent.\n\n**《 External traits 》**\n\n**Lasso Skill:** Charge to increase hit rate. Hooked Teammates will gain acceleration effect.\nThe Cowboy is good at using the Lasso. When a teammate is lassoed, they are placed on the Cowboy's back and the Cowboy receives an acceleration boost. If the Hunter is lassoed, the Cowboy will fly past the Hunter's head and land on the other side of the Hunters. If a Pallet or Cipher Machine is lassoed, the Cowboy will be pulled towards it.\nThe Cowboy can lasso and save teammates tied to balloons and Rocket Chairs.\n**Hero:** The hero on horseback is both brave and tough. When he hits a hunter with a pallet, it is stunned for **20%** longer than normal.\n\n**Wild:** As he is free, undisciplined and dislikes complex machines he decodes 10% slower than other The Survivors; however, when he decodes together with a female character, his urge to impress garners him 10% increased decoding speed. He feels exceptionally exhausted while decoding with males and decodes 30% slower.\n\n**Protective:** If hit by the Hunter while carrying a female, his strong protective instincts will kick in and the Cowboy will take damage twice (the teammate won't take damage). If carrying a male, both The Survivors will take damage once.")
            .setFooter(`The Survivors - Page 15 of 28 | Information taken from IdentityV wiki`)
            .setImage(bot.user.displayAvatarURL);

        let dancer = new Discord.RichEmbed()
            .setAuthor("Margaretha Zelle - The Female Dancer", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nMargaretha is a gorgeous dancer and is used to the good life. After an accident, however, she lost her husband, and with him all financial security. Margaretha, not knowing how to making a living, has gained a new understanding of 'freedom'. How could she pass up an opportunity to become a millionaire?\n\n**《 External traits 》**\n\n**Duet:** Switch the Music type and place the Music Box to increase or decrease Movement Speed.\nShe possesses a music box that plays two different pieces of music. The speed of actions and interactions (including movement, pallet and window interaction, decoding, rocket chair countdown, attacking, etc) performed by The Survivors and Hunters within hearing range of her music will have their speed increased or decreased depending on the music played - but the change in speed varies.\nThe effect is reduced in areas where same music overlaps.\n\n**Dancer:** The Dancer has an ear for duets and won't be affected by slowing music.\n\n**Acrobatics:** The Dancer, born in the circus, is skilled and graceful. When she falls from a height, she gains **30%** increased movement speed for **3** seconds. Has a **40** second cooldown.")
            .setFooter(`The Survivors - Page 16 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/a/ab/Dancer_Portrait2.png?version=1b361c97e666d685ead497c1625c3c75");



        let seer = new Discord.RichEmbed()
            .setAuthor("Eli Clark - The Seer", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nFrom an early age, Eli could see 'visions' and interactions with these visions caused Eli to view the world with an all-new perspective. However, this ability didn't improve his finances and a promise he made to his fiancée forced him to accept the invitation from Oletus Manor. Will his marvelous ability help him overcome his financial difficulties?\n(But that was Seer's initial idea, before his release he was called Fortune Teller, and in his deduction his motive is completely different, but NetEase kept its background unchanged.Please be noted.)\n\n**《 External traits 》**\n\n**Owl:** The Seer is accompanied by his trusted owl. When the match begins, the owl will patrol the map and mark the position of all teammates. When the owl returns, the Seer can order his owl to follow a teammate's scent, find them and grant vision of them. The owl can be ordered to block damage for a period of time at critical moments. If the Seer or his owl continues to observe the hunter while it commits atrocities, he will gain additional block attempts.\n\n**Prophesy:** The Seer's potent ability to anticipate the future enables him to see the hunter's position for 5 seconds after spotting them.\n\n**Great Eye:** The Seer can see the hunter's position for 5 seconds when the match begins.\n\n**Taxing:** Whenever the Seer's owl blocks damage for himself or a teammate, the speed at which the Seer vaults obstacles is decreased by **10%**.")
            .setFooter(`The Survivors - Page 17 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/a/ac/Eli_Clark_Portrait.png?version=feb84b03e6129744d4046042a5068bb1");


        let embalmer = new Discord.RichEmbed()
            .setAuthor("Aesop Carl - The Embalmer", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nThe end of the journey of life is always the same, and Aesop Carl is the ultimate destination for most people's dreams. He strictly follows each step of the procedure and gives the greatest respect to those who arrive at the terminal. So when he found the letter in a beautiful traveler, Aesop decided to complete his last wish for the unfortunate mother.\n\n**《 External traits 》**\n\n**Embalm:** He carries his makeup box everywhere. Opening it will summon a coffin with a surrogate in it, and immediately provide the Rebirth ability. When placed on the Rocket Chair, the player can be resurrected in that coffin using a surrogate and also receive the Tide Turner effect for 15 seconds. Every time a teammate rescues the player from a Rocket Chair, the number coffin summons for the Embalmer will increase, but an Embalmer can only summon and use one coffin at a time.\n\n**Artist:** The Embalmer can record and copy the appearance of other The Survivors on to surrogates. The The Survivors whose appearance was copied will receive the Rebirth ability. Once the Embalmer finishes copying their appearance, he will lose his own Rebirth.\n\n**Unconcerned:** The time that the Embalmer can persist for when wrapped up in a cocoon or placed on a Rocket Chair is increased by 10%. The Embalmer cannot embalm The Survivors who have lost mobility, who have been placed on a Rocket Chair several times or who have been placed on a Rocket Chair for a long time.\n\n**Anxious:** Extremely sensitive to the presence of others. He is able to detect the presence of all The Survivors at the beginning of the game for 15 seconds. While deciphering with other The Survivors, his own deciphering speed is decreased by 15%.")
            .setFooter(`The Survivors - Page 18 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/7/71/Aesop_Carr.png?version=a18911ad3feea36165f7fb0e220748c6");



        let prospector = new Discord.RichEmbed()
            .setAuthor("Norton Campbell - The Prospector", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Overview:**\nThe Prospector carries magnets and can accumulate up to 3 Magnets. Each Magnet has two polarities, with blue being the South magnetic pole and red being the North magnetic pole. The Prospector can switch the polarity of the magnets every 3 seconds. Magnets with different colors attract each other, while magnets with same colors repel. Players with magnets will be stunned if they collide with objects. Hunters with The Survivors tied to a balloon will also be stunned, freeing the tied Survivor.\n\n**《 External traits 》**\n\n**Magnet:** The Prospector carries a Meteorite Magnet with him. The thrown out Magnet will attach itself to players nearby, causing positive/negative polarities that last for 20 seconds.\nif players with Magnet are close to each other, a link will be triggered; getting closer will trigger Attraction or Repulsion, and getting further will break the link.\nif a Hunter breaks the link, the polarity will lose its effects.\nThe strong magnetic force of the magnetic field will also cause polarized players to become stunned when they collide with objects. The further the distance of the Repulsion and Attraction before impact, the longer players will be stunned.\n\n**Outdoor Skills:** Exploration in the wilderness has made the Prospector physically strong. Healing Speed is increased by **20%**.\n\n**Disruption:** The Meteorite Magnet's magnetic field affects the normal operation of Cipher Machines. The Prospector's chance of triggering a Calibration during Decoding is increased by **50%**, and Calibration difficulty is increased by **30%**.\n***Attraction:** The Prospector can use the Attraction between the Magnet and iron items to increase his Movement speed. Whenever Cipher Machines or Lockers are within a certain range, the Prospector's speed will be increased by 50 for 2 seconds, and can only be triggered once every 80 seconds.")
            .setFooter(`The Survivors - Page 19 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/5/56/Norton_Campbell.png/225px-Norton_Campbell.png?version=ca01595cec989fbc178acf1d63a5302b");

        let enchantress = new Discord.RichEmbed()
            .setAuthor("Patricia Dorval - The Enchantress", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nPatricia Dorval was born on a slave ship where her mother drew her last breath. Little Patrica reached New Orleans alive, the shipowner left her on the street. She thus found a new “mother”. Patricia followed her “mother”, learning herbs, healing and cursing, and when she reached adulthood she decided to go back to her foreign homeland to look for her origin. Patricia never thought that the curse hidden in her blood would gradually emerge at the moment she stepped onto the land. After running away for a decade, she finally arrived at Oletus Manor with the curse.\n\n**《 External traits 》**\n\n**Ape Curse:** The Enchantress carries the Cursed Emblem. She can consume 1 stack of Guard to temporarily paralyze the nearest Hunter within a certain range. When the Guard reaches 3 stacks, it can be detonated by tapping on the special icon and using 3 stacks of Guard to paralyze the Hunter for several seconds.\n\n**Guard:** When a Hunter gets near the Enchantress, the Guard is triggered and the effects are stacked over time against the Hunter. The nearer the Hunter gets to the Cursed Emblem, the faster the Guard effect stacks. All Enchantress' Guards (whether detonated or not) now have a reduced rate of 7%, and a maximum reduction of 70%.\nThe Enchantress will immediately gain 1 stack of Guard if the Hunter inflicts damage to the Enchantress. The Guard effect on the Hunter has a maximum of 5 stacks.\n\n**Blessing:** The Survivors healing the Enchantress or getting healed by the Enchantress will gain Enchantress' blessings. When a Hunter inflicts damage on a Survivor that has the Enchantress' blessings, the Enchantress will also gain a stack of Guard effect.\n\n**Karma:** Continuously inflicts pain on the Enchantress, and healing time is increased by 20%.")
            .setFooter(`The Survivors - Page 20 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/c/cf/Patricia_Dorval_FP.png/120px-Patricia_Dorval_FP.png?version=3b336d62399e6d76a53d39191b70feb6");

        let wildling = new Discord.RichEmbed()
            .setAuthor("Murro - The Wildling", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nMurro grew up in the Hullabaloo circus locked up in a cage by his presumed uncle Bernard, the ringmaster, with only his boar to accompany him. Throughout growing up he refers to his experience as one similar to Hauser | Kaspar Hauser. The idea of him growing up in the woods seems to have been a cover up by Bernard.\n\n**《 External traits 》**\n\n**Wildling Partner:** Murro moves slower than other The Survivors in this state. He can command his partner to Howl, disrupting the Hunter's hearing, causing Tinnitus and Listen to lose effect temporarily for 10 seconds.\n*Rage*: The partner gains Rage by moving around, and its movement speed increases as Rage accumulates. When Rage is full, the partner will unlock the Bump ability in a fixed direction. Bump will not stun Hunters. Bumping the Hunter into an object will reset the skill's cooldown and regain a large amount of Rage. Bumping the Hunter directly will dramatically increase the partner's Rage accumulating speed.\n*Relax*: When Murro's stops moving, the partner will calm down, causing Rage to drop rapidly.\n*Fatigue*: Murro's partner will feel fatigue, and it can't be ridden for more than 90 seconds. If there are many Wildling Partners in a match, the partner will feel fatigue faster.\n**Nature Guardian:** Wildling Partner can block incoming damage for Murro in Riding State. When the partner runs out of HP, it will be wounded and escape temporarily. During the period, Murro will not be able to guide his partner. Hunters attacking the Wildling Partner will not trigger blade-wiping motion.\n\n**Feral Instincts:** While riding, with the help of its partner, Murro's terrain interaction speed is increased by 10%, and he is even able to cross low terrains. His partner will leave additional Footprints, causing Murro's Footprints to be remained by an additional 2 seconds.\n\n**All Thumbs:** Murro, who has lived in the wild for a long time, is terrible with Machines. Decoding speed is decreased by 30%.")
            .setFooter(`The Survivors - Page 21 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/5/52/Murro_Portrait.png/225px-Murro_Portrait.png?version=c1ee3e93881743313ecde0d15de88612");

        let acrobat = new Discord.RichEmbed()
            .setAuthor("Mike Morton - The Acrobat", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nMike’s birth circumstances are virtually unknown, however, at some point in his early childhood, he was taken in by a man named Bernard, whom he saw as a father figure. He was raised in Bernard's circus called 'Hullabaloo' which is where he learned acrobatics and juggling. Bernard would often scold Mike for his mischief, such as wanting to put stones in his juggling balls. At some point, a bottle of strong acid was stolen from Mike; coincidentally, around the same time that Joker's face was burned. \n[Read More](https://identityv.gamepedia.com/Mike_Morton)\n\n**《 External traits 》**\n\n**Risky Acrobatics:** The Acrobat carries 3 different types of Bomb around. When a Bomb explodes, it will temporarily change the ground's surface, creating a circular zone. Hunters stepping into this zone during the Aftereffect period will be affected by its effects, and thus returning the ground immediately to its original state.\n__Sticky Bomb__: Slightly reduces Hunter's Movement Speed. If the Hunter is hit by the exploding Sticky Bomb or if the Hunter is repeatedly affected by its Aftereffects, the Hunter's Movement Speed will be greatly reduced.\n__Nitro Bomb__: Slightly reduces Hunter's Interaction Speed. If the Hunter is hit by the exploding Nitro Bomb or if the Hunter is repeatedly affected by its Aftereffects, the Hunter's Interaction Speed will be greatly reduced.\n__Fire Bomb__: It can burn Hunters and disable all Hunter skills for a period of time. If the Hunter is hit by the exploding Fire Bomb or if the Hunter is repeatedly affected by its Aftereffects, all Hunter skills will be disabled for an extended period.\n\n**Impromptu:** [Read more](https://identityv.gamepedia.com/Mike_Morton)\n\n**Half-Hearted:** The Acrobat is always coming up with new ideas and this makes it difficult for him to concentrate. Door opening speed is decreases by 30%.")
            .setFooter(`The Survivors - Page 22 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/3/3c/Mike_Morton_Portrait.png?version=3bf485c5257a7508e9ee6d57eceeab47");


        let officer = new Discord.RichEmbed()
            .setAuthor("Jose Baden - The 1st Officer", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nJosé Baden once known as the Great/famous Chief Officer who escorted the British Queen's Marine Empire along with his father(who's the Captain of the ship).\nThey were rich, heroic, powerful and very punctual. No matter it was protecting the British ships or carrying the treasures of the Queen. The Baden family was never late.\nLegend said that the punctual secret of the Baden family was related to a pocket watch which blessed by the sea god. The tides and waves will always obey him and never delay his journey. Because of this, the family were highly valued by the British Queen, and as an outsider, they were also awarded by the Queen herself... [Read more](https://identityv.gamepedia.com/Jose_Baden)\n\n**《 External traits 》**\n\n**Poseidon Watch:** The First Officer uses a Pocket Watch to hypnotize Hunters on the entire map.\nHunters affected by the Hypnosis will experience hallucinations and can only see the image of the First Officer 1 second ago within 20 seconds and gain some Movement Speed bonus when hypnotized. The hypnotic effects will be removed when the First Officer touches a Rocket Chair or is hit by the Hunter, and can be used 2 times in a single game.\n**Vanish:** Whenever the First Officer rescues Teammates from the Rocket Chair, he will cast a hypnotic effect on his surroundings.\nHypnotic effects will allow rescued The Survivors to be “Disguised“ as the First Officer. Once the Survivor uses a Skill or is knocked down, the “Disguise' effect will be removed.\n\n**Self-Hint:** Confusion and deception will finally devour First Officer. Rocket Chair's initial flight speed is decreased by **20%**, and Decoding Speed is decreased by **20%**.\n\n**Hypnosis Dispel:** Pain may be the only cure. First Officer's hypnotic effects will be immediately removed when receiving damage.")
            .setFooter(`The Survivors - Page 23 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/9/9e/Jose_Baden_FP.png/225px-Jose_Baden_FP.png?version=6fa821314e9acd9116855c7e8afc372a");

        let barmaid = new Discord.RichEmbed()
            .setAuthor("Demi Bourbon - The Barmaid", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nDemi was not healthy as a kid and her brother was always taking care of her. He was always at her side, protecting her due to her being weak. When they first arrived in Europe, she never even knew her ancestors were from there as well. Dovlin, the drink that her brother mixed seemed to gain a popularity hence them opening up Bourbon Bar. However, the popularity of Dovlin caused Demi's brother to receive an invitation to the manor and to never return back home.\n[Read more](https://identityv.gamepedia.com/Demi_Bourbon)\n\n**《 External traits 》**\n\n**Dovlin:** Carries a wine barrel around to mix Strong Dovlin.\n\n__Strong Dovlin__\nStrong Dovlin can be drank when the Barmaid or Teammates are injured, but they will become Tipsy and their Fear will be reduced.\n\n__D.U.P.H.R.I.N__\nThe Barmaid carries 1 bottle of D.U.P.H.R.I.N. around. After drinking it, the stimulation of D.U.P.H.R.I.N. can cause the drinker's Fear to to increase by half and the Hard Drinker effects will increase the drinker's Movement Speed by 50% for 2 seconds, and induces Tipsy to reduce Fear.\n**Mixing:** Mixing drinks costs energy. After mixing, the cost energy will immediately increase the Barmaid's Fear by half. However, the Barmaid will also gain 1 bottles of Strong Dovlin and become Tipsy, thus decreasing Fear.\nThe maximum number of stored Dovlin is 1 bottles. Due to limited ingredients, only 2 bottles can be mixed in a single game.\nD.U.P.H.R.I.N. cannot be mixed in the Manor.\nThe Barmaid is unable to mix when injured.\n**Tipsy:** Mixing or drinking the alcohol will put The Survivors in a Tipsy state, and after it ends, Survivor's Fear will be decreased by half immediately.\nMixing will cause The Survivors to be Tipsy for 8 seconds.\n\n**Hangover:** Whenever the Barmaid or other The Survivors become Tipsy, their maximum Decoding Speed will be reduced by 8% and the effects can be stacked up to 2 times.")
            .setFooter(`The Survivors - Page 24 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/e/e2/Demi_Bourbon_FP.png/317px-Demi_Bourbon_FP.png?version=7d3b97865e6e54e5303283ec855a77de");


        let postman = new Discord.RichEmbed()
            .setAuthor("Victor Granz - The Postman", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nVictor has always been a quiet, non-verbal individual who neither enjoys talking nor considers himself good at it. He avoids eye contact when possible, and while he speaks very formally and politely, Victor chooses instead to write down his thoughts. Even more so, the young postman likes to see people's reactions to his letters... [Read more](https://identityv.gamepedia.com/Victor_Granz)\n\n**《 External traits 》**\n\n**Mail:** The Postman carries letters around with him and sends them to their designated recipients with the Post Dog. After receiving the letter, the recipient will obtain the attached buff. When a letter is sent, it will enter into cooldown and refresh. There are several rules for refreshing.\n**Letter Type**\n__Urgent Letter__: Increases the recipient's Movement Speed by 10% for 15 seconds.\n__Farewell Letter__: If the recipient vaults over a window or a pallet within 90 seconds, the recipient's Movement Speed will increase by 40% for 3 seconds. This effect can only be triggered 1 time and has a lower triggering priority than Knee Jerk Reflex and Broken Windows.\n__Tranquillity Letter__: Increases recipient's Decoding Speed by 20% for 30 seconds.\n__Bravery Letter__: Increases recipient's Rescue Speed by 30%. Also increases recipient's Movement Speed by 10% for 180 seconds when nearing Rocket Chairs with The Survivors on it.\n__Inspiring Letter__: Permanently increases recipient's Vaulting Speed by 10%.\n__Hope Letter__: Permanently increases recipient's Exit Gate Opening Speed by 30% and gains continuous vision on the Dungeon's location.\n\n**Post Dog:** The Post Dog will take on the actual task of Letter Delivery. After the Postman confirms the target recipient, the Post Dog automatically carries the letter to deliver.\nIf the Post Dog is attacked while delivering letters, the Letter Delivery will be terminated. [Read more](https://identityv.gamepedia.com/Victor_Granz)\n\n**Empathy:** ...\n\n**Expectation:** ...")
            .setFooter(`The Survivors - Page 25 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/a/a8/Victor_Grantz.png/225px-Victor_Grantz.png?version=dceca6eefdcda4adbc55834761c6fb6b");


        let gravekeeper = new Discord.RichEmbed()
            .setAuthor("Andrew Kreiss - The Gravekeeper", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nFor Andrew, life even from an early age was living hell. Born with albinism and having a fear of the sun, the young child was constantly plagued with the violent rumors of being cursed, even going as far to being called ”The White Haired Monster”. His only wish was to be like other younger children, to be able to play out in the sun and have fun, but the hatred forced him to recluse from society, completely isolating him from the beautiful and kind things the world had to offer.\n[Read more](https://identityv.gamepedia.com/Andrew_Kreiss)\n\n**《 External traits 》**\n\n**Dig to escape:** Carries a shovel, enabling him to enter underground sneak mode;\n__Underground Sneak__\n\nIn underground Sneak mode, Gravekeeper can dig and move underground;\nHe can go under pallets that are knocked down, but he can't go through other obstacles in fear of them collapsing;\nGiven the limited oxygen underground, there is a time limit for underground Sneak mode, but Gravekeeper can stop digging and resurface to the ground at any time.\nIf he is attacked in underground Sneak mode, he can shield damage once and resurface to the ground;\nIn underground Sneak mode, if there is sufficient space underground, he can go down a level digging downwards, leaving a pothole behind at the same spot. The pothole will disappear after a duration.\n\n**Claustrophobia:** As a result of his claustrophobia, Gravekeeper's movement speed is increased by **10%** in underground Sneak mode\n\n**At Ease:** When Grave Keeper chooses to resurface to the ground without receiving any damage, he becomes at ease, increasing his rescue speed by **50%** for **5** seconds.\n\n**All Thumbs:** Having lived by himself throughout the year in the cemetery, he hasn't communicated with or learned from the living. His eyesight is also poor as a result of illness. Therefore he's clumsy and terrible with machines, which decreases his decoding speed by **15%**.")
            .setFooter(`The Survivors - Page 26 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/3/3c/Andrew_Kress.png/225px-Andrew_Kress.png?version=8639e572f3e70ce67f07c9f4fe291ac3");

        let prisoner = new Discord.RichEmbed()
            .setAuthor("Luca Balsa - The Prisoner", survivorIcon)
            .setColor("#15f153")
            .setDescription("**Background:**\nBorn to an unknown family in unknown circumstances, inventor Luca Balsa was known to the public as a friendly and pleasant individual who trusted other people easily. Despite not knowing where this boy came from or why, it was obvious that he had good education, good confidence, and the brains needed for inventing.\n[Read more](https://identityv.gamepedia.com/Luca_Balsa)\n\n**《 External traits 》**\n\n**Circuit Control:** The Prisoner is extremely familiar with the electric circuits under the Manor. He can change the connection status of the wires to alter the connection of the Cipher Machines. Once connected, the transmission of Decoding Progress between Cipher Machines is enabled.\n__Connection__\nThe Prisoner can connect two inactive Cipher Machines and form a Connection, with a cooldown of 30 seconds. Each Prisoner can only generate 1 Connection, and there can only be 2 Cipher Machines on each Connection. All The Survivors will be able to see the Connection.\n[Read more](https://identityv.gamepedia.com/Luca_Balsa)\n\n**Super Circuit:** To play it safe, the Prisoner set up a connection between the two Exit Gates in advance. While the Exit Gates are opened, the coded lock will connect automatically, allowing transmission of the Decoding Progress between the two coded locks.\n\n**Obsession:** The decoding speed of the Prisoner is increased by 10% when decoding a Cipher Machine on a connection. Once a calibration fails, his rigid time is decreased by **30%**.\nHowever, such obsession also weakens the Prisoner's perception of his surroundings, such that the distance of his detection of the Hunters is decreased by **20%**.\n\n**Conductor:** An incident changed the Prisoner's body composition and made him a Conductor capable of accumulating electric charges. When the Prisoner decodes a Cipher Machine in a Connection, an electrical area will be formed as a result of electrical charges focusing around the Cipher Machine.\n[Read more](https://identityv.gamepedia.com/Luca_Balsa)")
            .setFooter(`The Survivors - Page 27 of 28 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/d/d9/Luca_Balsa.png/225px-Luca_Balsa.png?version=d2822008f2db811a142d36eb03b6b81b");

        let entomologist = new Discord.RichEmbed()
            .setAuthor("The Entomologist - Melly Pliny", survivorIcon, "https://id5.fandom.com/wiki/Entomologist")
            .setColor("#15f153")
            .setDescription("**Backstory:**\nPliny has always been an object of interest in the world of biology, partly because of her talent, from a poor housemaid on a Farm to a rising star in biology.\nThe story doesn't always have listeners, not to mention that in insect research, it also has extremely unique ideas, especially regarding winged insects. She seems to have the ability to control these flying creatures and can understand their every move. While more and more rumors were spreading about her appearance, Melly rarely appeared in public. Compared to the craving for learning, it seems to have been more dependent on wandering through dense forests, swamps, and deserts. There she could find strange insects.\nShe appeared several times in public in heavy headdresses that covered her entire face. Someone said it was only because she was ugly and didn't want to look at people with her true face. Someone said that it was only because she was very beautiful and afraid that people would focus all their attention on her appearance rather than on her research.\n\n**《 External traits 》**\n\n**Entomology:** The Entomologist carries a net that can assemble a swarm of insects in front of her.\nThe swarm will form a barrier so that Hunters passing through it will be disrupted and their movement speed will be reduced by **70%**. Survivors won't be affected. At the same time, the barrier can block certain abilities.\n\nOnce the insects are assembled, the Entomologist can switch her camera and manipulate the swarm of insects to turn left or right, or move forwards.\nWhen the swarm of insects moves at high speed, it will propel forward Survivors (including the Entomologist herself) who have no other operations engaged. It can also disrupt the Hunters' movement.\nHunters can disperse the swarm of insects by attacking twice (without triggering attack recovery).")
            .addField("Reagent:", "A special reagent created from a mixture of extracts from various insects. It can lubricate pallets and windows when vaulting to increase Survivors' vaulting speed by **10%**.")
            .addField("Fragrance:", "Her location is shown for an additional **5** seconds upon leaving a Hunter's line of sight as her body's fragrance lingers.")
            .setFooter(`The Survivors - Page 28 of 28 | Information taken from IdentityV fandom`)
            .setImage("https://vignette.wikia.nocookie.net/id5/images/b/b4/Entomologist.jpg/revision/latest/top-crop/width/480/height/480?cb=20200611044849");

        //Some embed valuesa

        //Hunter embeds starts HEREEEEE


        let notusedHUNTERembed = new Discord.RichEmbed()
            .setAuthor("", hunterIcon, "")
            .setColor("RED")
            .setDescription("**Background:**\nTEXTHERE\n\n**《 External traits 》**\n\n**《 Abilities 》**\n\n")
            .setFooter(`The Hunters - Page x of 17 | Information taken from IdentityV wiki`)
            .setImage("");

        let hellember = new Discord.RichEmbed()
            .setAuthor("Hell Ember - Leo Beck", hunterIcon, "https://identityv.gamepedia.com/Leo_Beck")
            .setColor("RED")
            .setDescription("**Background:**\nThe factory manager was married in 1874. Three years later, his daughter was born. He operated a small textile factory and was flexible in handiwork. He also made small toys for his daughter. Though he didn't have a big career, he loved his family.\nThe factory owner suffered a career issue, and many years of friends and lawyers helped him. After taking the advice of his friend Freddy Riley, he bought a small gun factory that was severely in debt. Before Leo realized the poor conditions of the factory, his wife and Freddy Riley made off with all his possessions and disappeared.\n[Read more](https://identityv.gamepedia.com/Leo_Beck)\n\n**《 External traits 》**\n\n**Infernal Soul:** When Leo pursues a survivor, is stunned or when the survivors decode a cipher machine with none of the survivors incapacitated, he becomes furious. When he has accumulated enough Fury, it will turn to Rage, and he can use it to activate his Awaken skill.\n\n**《 Abilities 》**\n\n**Awaken:** Tap the skill button to awaken Phantoms for **25** seconds; hold the skill button to transmit Rage to you Puppet and order it to pursue nearby Survivors.\nWhen the Puppet hits a Survivor or if you change places with the Puppet, it will stop moving.\n\n__Phantom__\nPhantoms will automatically pursue nearby Survivors. Tap the skill button again during this period to recall the Phantoms. After recalling the Phantoms, a percentage of Rage will be recovered according to the remaining time.\n\n**Puppet Control:** For an unknown reason, Leo is connected to his Puppet. After tapping Deploy or Cast, the Puppets can detect surrounding Survivors and alert Leo. Leo can switch positions with the Puppet, gaining an acceleration boost for a short period. The Puppet can be dismantled by Survivors, during which time Leo is unable to switch positions.\n\n**Multiple Puppet Control:** Leo acquires a second Puppet.")
            .setFooter(`The Hunters - Page 1 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/3/34/Leo_Beck.png/212px-Leo_Beck.png?version=66f37472b515f01f23a3578eb8ce1a37");

        let clown = new Discord.RichEmbed()
            .setAuthor("The Smiley Face - Joker", hunterIcon, "https://identityv.gamepedia.com/Joker")
            .setColor("RED")
            .setDescription("**Background:**\nJoker was once the star of the circus. His naturally sullen face made him the best crying clown. However, the advantage changed when the handsome smile clown Segi and the glamorous acrobat and actress Natalie joined the circus, and Joker realized it's time for him to change his 'professional track'. Obviously, after getting his eternal smile, Joker can go nuts in new comedy shows.\n\n**《 External traits 》**\n\n**Rocket Modification:** Joker can collect parts scattered around the Map to modify his weapon. Modification is lost after an attack or a Rocket Dash.\n\n__Wind Wings__:\nIncreases Attack Speed and Rocket Dash Speed\n\n__Drill__:\nSurvivors take a longer time to heal when hit by normals attacks or skills.\n\n__Propeller__:\nIncreases the effect of Rocket Dash once, but the weight is also increased, thus slightly decreasing its speed.\n\n**《 Abilities 》**\n\n**Rocket Dash:** Brandishing a rocket, Joker dashes forward quickly and destroys all targets in his way. [**Cooldown**: **12** seconds]\n\n**Crazed Dash:** After multiple intimate collaborations, Joker can dash further and faster with his rocket. [**Cooldown**: **12** seconds]")
            .setFooter(`The Hunters - Page 2 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/3/3b/Joker2.png/150px-Joker2.png?version=27c3316d234669f44bde3652bb892391");


        let ripper = new Discord.RichEmbed()
            .setAuthor("Jack - The Ripper", hunterIcon, "https://identityv.gamepedia.com/Jack")
            .setColor("RED")
            .setDescription(`**Background:**\nBefore becoming "The Ripper", he was a student of James Whistler, a renowned artist influenced by Edgar Degas. Who would guess that a well-dressed gentleman during the day will, when darkness falls, walk into an alley and stalk poor women? As "The Ripper" gained infamy, the boundary between his two identities began to fade. Of course, before you see his true face, "The Ripper" is still happy to take a walk at night.\n\n**《 External traits 》**\n\n**Freezing Fog:** The fog's chill can be felt in one's bones. Fog Blades are created as fog collects onto The Ripper's bladed hand. When a certain amount of fog has been amassed, The Ripper's attacks will trigger flying Fog Blades.\n\n**《 Abilities 》**\n\n**Freezing Fog:** Every once in awhile The Ripper's attack will trigger a flying Fog Blade. Fog Blades will leave Fog on its path. Survivors hit by Fog Blades will also leave a trail of fog behind them as they move around. [**Cooldown**: **20 **seconds]\n\n__Fog__\nWhile in the Fog, The Ripper has increased Movement Speed and greatly reduced Hidden Mist countdown.\n\n**Hidden in Mist:** When not striking or vaulting, The Ripper will gradually enter Hidden in Mist mode and gain accelerated Movement Speed. [**Cooldown**: **17** seconds]\n\n**Hidden in Shadows:** The Ripper will enter Hidden in Mist mode quicker and will move faster. [**Cooldown**: **14** seconds]`)
            .setFooter(`The Hunters - Page 3 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/4/46/Jack.png/224px-Jack.png?version=928726e2df9e0810bd7f04c324aed8ab");

        let gamekeeper = new Discord.RichEmbed()
            .setAuthor("Bane Perez - The Gamekeeper", hunterIcon, "https://identityv.gamepedia.com/Bane_Perez")
            .setColor("RED")
            .setDescription("Bane Perez was in charge of the forest farm and patrol cabin at Oletus Manor. He raised a black-nosed moose like a child. However, accidents always happen, and a new hunting season was coming. Bane wondered how he could hide the black-nose to ensure its safety, but he was too late. A team of fully armed poachers had already arrived.\nThe gunshots rang through the forest. When Bane arrived, he saw that the black-nose had fallen to the ground. He recognized a familiar face from the poacher's team. It was the boy that he had rescued a few years prior. However, when Bane pleaded with him, they cruelly wanted to turn him into a Minotaur. They cut off his tongue and put the head of the black-nose moose on him. They locked him up with a steel-jaw bear trap and began a massacre in the forest.\n[Read more](https://identityv.gamepedia.com/Bane_Perez)\n\nSuffocation: Hitting different targets with Bane's Chain Hook will trigger different effects.\nWhen Bane is dragged forwards by his Chain Hook and lands, it will generate shockwaves that decrease Movement Speed of Survivors within a certain range by 20% for 5 seconds. Getting hit by the shockwaves again during this period will further slow down Survivors.\nWhen hit by the Chain Hook, Survivors will be marked by the scent of rotting leaves and their location will be periodically exposed 2 times within 60 seconds, and Bane's attack recovery rate will be increased when he hits the exposed Survivors.\n\n《 Abilities 》\n\nChain Hook: Bane hooks survivors and pulls them to him or hooks a wall and pulls himself towards the wall. Long press to aim more precisely.\n\nThorny Chain Hook: Survivors' Manifestation of Horror are the thorns on the Chain Hook, when Bane's Chain Hook hits a Survivor, it will deal 50% of normal attack damage.\n**Fury Hook:** Furious Bane won't let an intruder escape his Chain Hook. If the Chain Hook hits an object, Bane can cast the Chain Hook again within 7 seconds up to 2 times, until the Chain Hooks hits a Survivor or misses")
            .setFooter(`The Hunters - Page 4 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/9/9a/Bane.png/244px-Bane.png?version=5d81fbd6505b6154928c6b6fc9e5923c");

        let soulweaver = new Discord.RichEmbed()
            .setAuthor("Violetta - The Soul Weaver", hunterIcon, "https://identityv.gamepedia.com/Violetta")
            .setColor("RED")
            .setDescription("Violetta was once a famous freak show performer, later reduced to performing in third-rate circuses after the audience lost interest in her. She's always wanted to get back on stage and once again become the much-anticipated star. With the help of a mechanic, Violetta installed flexible mechanical prostheses and a few sophisticated gadgets on herself and created a new show—Human Spider Show. Her old boss refused to let her perform, but Violetta didn't give up. She has accepted an invitation to perform, and is going to hold her comeback show at Oletus Manor. Of course, for safety reasons, audiences shouldn't watch it up close\n\n**《 External traits 》**\n\n**Cocoon Death:** Violetta can wrap up a Survivor in a Cocoon with 60 threads, and eliminate them on the spot without Rocket Chairs.\n\n**Entangled:** When Survivors are ensnared by Violetta's trap they will become Entangled, which can stack up to 3 layers.\n**__Special__**\n\n__1 Layer__: Reveals Survivor's location and decreases their Interaction Speed.\n\n__2 Layers__: Additionally decreases Survivor's Movement Speed.\n\n__3 Layers__: Greatly decreases Survivor's Movement and Interaction Speed.\n\n**《 Abilities 》**\n\n**Webbing:** Spinning webs is Violetta's natural instinct. Hold down the skill button and select a suitable place to release **Entangled**.\n**Entangled**\nVioletta will gain a brief acceleration that gradually slows when passing cobweb traps. This effect can be stacked up to 3 times by using new webs.\nVioletta will be alerted to the location of Survivors that step on a trap and Survivors will become entangled with one layer of webbing; Survivors can be entangled with up to 3 layers of webbing.\n\n**Spinning:** Spits out a ball of web that Entangles its target. Each successful hit deals half the damage of a normal attack and the target is Entangled with 1 layer of webbing, up to a maximum of 3 layers.\n\n**Web Attack:** As time passes, the Soul Weaver's spinning ability becomes stronger, speeding up the spinning action and reducing its cost.")
            .setFooter(`The Hunters - Page 5 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/f/f1/Violetta.png/375px-Violetta.png?version=9a77c1ce44b1ceb193b63cca814a07b6");

        let geisha = new Discord.RichEmbed()
            .setAuthor("Michiko - The Geisha", hunterIcon, "https://identityv.gamepedia.com/Michiko")
            .setColor("RED")
            .setDescription("**Background:**\nOnce the best dancer in Yoshiwara, Michiko gave up everything to marry her true love Mr. Miles. The Geisha met Miles, a foreign army officer at a banquet where they fell in love soon after. She was curious and excited as a kid on this foreign land, but only found the marriage to be the beginning of the miseries. After they got married and returned to Miles’ homeland together. His father was particularly vocal in his opposition to their marriage. He was cynical of her and hoped to drive her out of the family home.\n[Read more](https://identityv.gamepedia.com/Michiko)\n\n**《 External traits 》**\n\n**Triple Phases:**\nMichiko has three different moods and forms. She assums the Beauty form when calm: in this form her fear radius is smaller, but has higher movement speed; when angry she assumes the Prajna form: in this form her fear radius is larger, but has lower movement speed; she enters Panic form when her face is seen by a survivovr: her fear radius remains unchanged, but has lower movement speed.\n\n**《 Abilities 》**\n\n**Dash Hit:**\nMichiko enters genesis mode and assumes the Prajna form. She ignores the terrain and rushes toward the survivor closest to the middle of where she is looking. But, should Michikos face be gazed upon by a survivor, Panic form will be activated and special abilities negated.\n\n**Soul Departure:** Michiko enters genesis mode and changes into Prajna form and jumps into the air to overlook the surrounding environment. Her Dash Hit also gains casting distance. But, should Michiko's face be seen by a survivor, Panic form will be activated and the skill will lose its effect.\n\n**Dash Hit:** Survivors' fear increases the Michiko's powers. Michiko can now dash towards survivors at a higher speed.")
            .setFooter(`The Hunters - Page 6 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/d/db/Michiko.png/303px-Michiko.png?version=5fb97528042c68305c0389bf2e9ac18e");

        let feaster = new Discord.RichEmbed()
            .setAuthor("Hastur - The Feaster", hunterIcon, "https://identityv.gamepedia.com/Hastur")
            .setColor("RED")
            .setDescription("**Background:**\nOnce a messenger appeared clad in a yellow robe prophesying the catastrophic arrival of a dynasty; this messenger was known as the Feaster, him who Is not to be named. He is the embodiment of calamity and suffering, but those with curious hearts have always tried to seek him out in the hope of being enlightened and learning the truth of the world.\n\n**《 External traits 》**\n\n**Shape of Terror:** Terror is generated and Tentacles will appear when a Survivor is injured or when a Teammate is knocked down. Hastur is also able to use Tentacles to attack nearby Survivors.\n\n__Special__\nTentacles will decrease nearby Survivors' decoding, gate opening, vaulting and healing speed.\n\nTentacles will also disappear faster when there are Survivors tied to Rocket Chairs.\n\n**Terrified:** Survivors will continuously charge Hastur's Tentacles when they are within the Terror Radius. The more Survivors within range, the faster they charge. Every time it's charged, Hastur will gain a Tentacle summon usage up to **5** times.\n\n**《 Abilities 》**\n\n**Nightmare Attack:** Hastur can control nearby tentacles. Tap and hold the skill button to hit the nearest survivor with the tentacle.\n\n**Tentacles:** Hastur can absorb the Survivors' Terror to charge and summon the Tentacles. Hastur can also release the Tentacles at a specific location by long holding it.\n\n**Condensation of Terror:** On top of absorbing Survivors' Terror, Hastur's Tentacles will also gain additional charge over time, up to **5** times. [**Cooldown**: **40** seconds]\n\n**Nightmare Gaze:** Hastur can choose to stare at a Survivor. After being stared at by Hastur over **20** seconds, Hastur can tap the Skill button repeatedly to attack Survivors passing the Tentacles. [**Cooldown**: **5** seconds]")
            .setFooter(`The Hunters - Page 7 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/2/27/Hastur.png/316px-Hastur.png?version=543aa625f334de496f3664bd2e483185");

        let wuchang = new Discord.RichEmbed()
            .setAuthor("Black and White - Wu Chang", hunterIcon, "https://identityv.gamepedia.com/Wu_Chang")
            .setColor("RED")
            .setDescription("**Background:**\nXie Bi'an and Fan Wujiu (the White and Black Guards) have always been like brothers. As they traveled to Nantai Bridge one day, they noticed it was going to rain. Xie told Fan to wait under the bridge while he returned home to get an umbrella. After Xie left, the rain began to pour and the river rose, but Fan, reluctant to break his promise, stayed under the bridge. Shortly after, Xie returned with the umbrella only to find that the bridge was now submerged and Fan nowhere to be seen... He had drowned.\n[Read more](https://identityv.gamepedia.com/Wu_Chang)\n\n**《 External traits 》**\n\n**Dual Soul:** The White and Black Guards had their souls imbued into an umbrella and their souls can be switched by using Summon. The White Guard excels at patrol and pursuit and moves swiftly but has slow stun recovery and attack speed; the Black Guard excels at melee combat and has fast stun recovery and attack speed, but moves slowly.\n\n**《 Abilities 》**\n\n**Infinite Nirvana:** Throws the Umbrella at the target location, where it will stay for 5 seconds. Outlines of Survivors in the area covered by the Umbrella will be shown, with their movement speed and vaulting speed slightly decreased, and other interaction speeds significantly decreased. Outlines of these Survivors will still be shown for 5 seconds after they move outside the area. For the duration where the Umbrella is active, Wu Chang can choose to teleport to where the Umbrella is and switch to Dual Soul mode, or retrieve the Umbrella to recover skill countdown. Without the Umbrella, Wu Chang's movement speed and window vaulting speed is increased. The Umbrella will return to Wu Chang when the 5 seconds are up.\n\n**Summon:** Use the skill to switch into Dual Soul mode, or hold down the skill button to charge up and toss the soul umbrella forward and then switch to Dual Soul mode and teleport to where the umbrella lands. The longer you charge the skill the further you can toss the umbrella.")
            .addField("Siphon Soul & Wavering Soul", "The White Guard's body moves with ease, and when it fully enters the spiritual realm it won't be able to interact with anything for **5** seconds. However, its movement speed is greatly increased and it will siphon the souls of nearby Survivors. If it manages to fully siphon a Survivor's soul, their soul will be lost.\n\n__**Lost Soul**__\nBedazzled and unable to interact with the environment.\n\nWhen the Black Guard rings the bell and casts Wavering Soul, all Survivors that hear the ringing have to steel their resolve and calibrate with precision. Should they fail the calibration, the will become horrified for **60** seconds; if they fail another calibration during that time, their soul will waver.**__Spiritless__**\n\nMovement directions will be reversed.\n\n**Summon - Enhanced:** Reduces the time it takes to switch souls in Dual Soul mode and you will immediately perform a powerful Siphon Soul or Wavering Soul upon switching.")
            .setFooter(`The Hunters - Page 8 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/d/da/Black_and_White.png/267px-Black_and_White.png?version=317f1bc2f89b07026f5590c2faec413d");

        let photographer = new Discord.RichEmbed()
            .setAuthor("Joseph - The Photographer", hunterIcon, "https://identityv.gamepedia.com/Joseph")
            .setColor("RED")
            .setDescription("**Background:**\nComing from an affluent aristocratic family, Joseph, also known as Ex-Count Desaulniers, was born in France alongside his twin brother, Claude. During the early years of his life, it is implied his family was forced to flee France and move to England, likely because of the mass emigration to Britain during the French Revolution. Not too long after, his brother passed away from illness, and the pain of losing his dear twin and trusted companion caused Joseph to become emotionlessly absorbed with art and photography. He hoped that he would be able to save the appearances of the people and objects he took photos of to liven up his pictures. Despite being arrogant, biased, and overly sentimental, the count was a wealthy and well-respected man, his French accent, and elegance alluring to the many people who were willing to model for his hobby. However, suspicions and rumors about the now-elderly Joseph began to spread amongst the maids and workers of the Desaulniers Manor when the population of the hamlet began to drop rapidly. Now seemingly slipping into a dark place, a panic-stricken mob forced their way into Joseph's residence, but the old gentleman was nowhere to be seen. On the wall of his studio, however, were all kinds of lifelike portraits of people that seemed to be looking right at them; it seemed that Joseph's shutter took more than photos, after all.\n\n**《 External traits 》**")
            .addField("Camera World", "After Joseph takes a photo with his Camera, he can replicate the Survivors and environment from that moment and create a static Camera World. Joseph can enter the Camera World at will to find the Survivor from that moment and place them upon a Rocket Chair.\nWhile in the static Camera World, Survivors cannot escape the Manor or be sent back there from Rocket Chairs; similarly, Survivors in the real world can enter the Camera World through recorded images.\nSurvivors who do this can decode Cipher Machines for progress but cannot decode them completely.\nThose in the Camera World will not apply team buffs or debuffs to Survivors.\nAfter Joseph takes a photo with his camera, he can replicate the Survivors and environment from that moment and create a static Camera World. Joseph can enter the Camera World at will to find the Survivor from that moment and place them upon a Rocket Chair.")
            .addField("Spacetime", "Grants the power of two spacetimes. Regular attacks deal 1.5x the damage.\n\n**Recorded Moment:** A recorded moment which can be used while Camera World is active. Joseph may use it to enter and exit the Camera World freely.\n\n**Time Jump:** Joseph records last **15** seconds in time as he moves. Return to your desired point in time by holding down the skill button for the corresponding number of seconds.")
            .setFooter(`The Hunters - Page 9 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/2/2f/Photographer.png/287px-Photographer.png?version=13286090bacdb8beeabfcca4e4874c88");

        let madeyes = new Discord.RichEmbed()
            .setAuthor("Burke - The Mad Eyes", hunterIcon, "https://identityv.gamepedia.com/Burke")
            .setColor("RED")
            .setDescription(`**Background:**\n\nAs the eldest son of a construction worker, Burke has been playing with design drawings and a wide variety of machines and tools since he was a child. He has great talent and was well known in the local area when he was twenty. After being employed by a couple, Burke came to the still-destroyed Oletus Manor, taking on most of the architectural work. At the request of the employer, Burke led the workers to continue to expand. At the same time, Burke also joined his own little "hobby" - the institution, and this manor became his secret experimental field.\nIt is said that even up until that unfortunate incident this crazy architect was still planning the addition of new devices.\n\n**《 External traits 》**\n\n**Console:** Balck has full authority over consoles. He can use consoles on the map to operate any control monitor. Survivors can decode consoles and gain limited access to them when decoded. They can expend an increased amount of energy to use the control monitor in the console's area of influence. When a survivor is logged into a console, Balck is unable to access that console's control monitor and the console is unable to restore energy.\n\n**Control Monitor:** There is a control monitor in each console's area of influence. Drag the thumbstick to move across the monitor's field of vision and press the screen to raise a fence in that location. The amount of energy expended each time this action is performed increases with every fence raised.\n\n**Fence:** Raising fences inflicts half the damage of a normal attack upon survivors in the area. Survivors can vault the fence using the action button, which will also lower the fence, inflicting the same amount of damage as a normal attack. Survivors can also choose to wait for the fence to become disabled. Nearby fences will become disabled if there are undecoded cipher machines, consoles, basements, active rocket chairs and the exit gate has been activated.\n\n**《 Abilities 》**`)
            .addField("Portable Console", "Burke can use the portable console to patch into a monitor directly, but using the portable console consumes more energy.\n\n**Overclock:** Can be used on the control monitor interface after this ability has been unlocked. The cooldown time and amount of energy consumed will be greatly decreased. This control monitor will be unable to restore energy for a period of time after Overclock has been used.")
            .setFooter(`The Hunters - Page 10 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/a/a7/Mad_Eyes.png/375px-Mad_Eyes.png?version=9977198a06dc4d915f5377b071daefec");

        let dreamwitch = new Discord.RichEmbed()
            .setAuthor("Yidhra - The Dream Witch", hunterIcon, "https://identityv.gamepedia.com/Yidhra")
            .setColor("RED")
            .setDescription("**Background:**\nIt is said that Yidhra has existed on earth before the emergence of the very first microorganism. As billions of years passed, Yidhra acquired a unique ability from the changes that took place around her, devouring creatures to acquire their characteristics. Yidhra can, therefore, divide herself into different aspects, though each part shares her consciousness. Merging themselves with Yidhra gifts her followers eternal life. She often hides her true form through powerful images, with only summoned followers being able to see it.\n\n**《 External traits 》**\n\n**Hidden Dream:** Yidhra conceals herself in dreams. Her Movement Speed is extremely fast, but she isn't able to interact directly. Survivors will not see her true face;\nand she comes with a Follower that cannot be removed. This Follower follows Yidhra's footsteps and is never far from her.\n\n**Follower:** Yidhra creates a Follower near a chosen Survivor.\n\n**Follower**\n\nThe summoned Follower's existence is dependent on its host and is unable to leave its host.\nAttacking Yidhra will cause the Follower to disappear and can be removed by Survivors with the Witch Mark.\n\nFollowers are affected by Talent and have their own cooldown period for secondary skills.\nFollowers' movements and directions are controlled by Yidhra and only when Yidhra possesses will it show a fear radius.\n\n**Witch Mark:** Yidhra leaves a Witch Mark when she creates a Follower. Survivors can pick up the Witch Mark and use it to remove Followers from leeching on to self and Teammates. However, removing Followers from self consumes more time.\n\n**《 Abilities 》**\n\n**Leech:** Hold the button to select a Survivor without a leeching Follower, and spawn a Witch Mark and a Follower. The skill cooldown will be decreased when the Follower hits a Survivor\n\n**Preach:** Tap on the wheel to control Followers. There is a short cooldown between each control. Followers cannot change target while casting a skill or attacking")
            .addField("Assimilation", "Significantly decreases the cooldown of Leech skills\n\n**Martyr:** Increases control of Followers to significantly increase the Followers' movement radius")
            .setFooter(`The Hunters - Page 11 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/f/f9/Yidhra.png/375px-Yidhra.png?version=9a143b7599beec372640d15f5ec9a37d");

        let axeboy = new Discord.RichEmbed()
            .setAuthor("Robbie White - Axe Boy", hunterIcon, "https://identityv.gamepedia.com/Robbie_White")
            .setColor("RED")
            .setDescription("**Background:**\nIn one night, Robbie had lost his spacious house, comfortable bed, delicious food… and his parents. His life is replaced by endless work and his emotionless boss. But with the help from his sister Dolores, he gradually got used to the work in the yard and gardening became his new hobby. Not long, the White Sand Street Orphanage was taken over by the church and the orphans do not need to work for life. Robbie somewhat felt disappointed about that. However, compare to Dolores dose not need to beg on the street and nuns were providing warm food for everyone, Robbie’s little hobby seems less important. After all, his life with his sister was back to the right track. And that was the last memory Robbie could recall, When he woke up under the juniper tree, his sister and the orphanage was no longer exist, the only thing left to him is the dead branch in his hand. Robbie could continue on doing his little hobby.\n\n**《 External traits 》**\n\n**Corrupt Area:** Over time, the Peaceful Pine seedlings will grow and expand its roots to form a Corrupt Area. As the seedlings grow, two Resentful Souls will converge unconsciously in the area. When many Peaceful Pine roots connect with each other, it will form a complete Corrupt Area. Robbie is able to control the Resentful Souls in the Corrupt Area to move them quickly to him in order to absorb them and gain a temporary acceleration effect.\n\nDuring this process, if the Resentful Soul comes in contact with Survivors, it will deal damage equal to one normal attack to Survivors and disappear. The Resentful Soul will reappear in the vicinity of the Peaceful Pine after **20** seconds.")
            .addField("Endless Growth", "At the beginning of each game, several Peaceful Pine seedlings will grow in the area, and a maximum of 6 Peaceful Pines can be present in one game. Survivors can destroy mature Peaceful Pines to remove the Corrupt Area and Resentful Souls. However, destroying the Peaceful Pine will provide the Hunter with an indication of the Survivor's location. Destroyed Peaceful Pines will leave a branch for Robbie. Robbie can also obtain a branch from a Peaceful Pine that has matured for a while to plant a new Peaceful Pine.\n\n**《 Abilities 》**\n\n**Dispel Souls:** Robbie is able to control the Resentful Souls in the Corrupt Area to move them quickly to him in order to absorb them and gain a temporary acceleration effect. During this process, if the Resentful Soul comes in contact with Survivors, it will deal damage equal to one normal attack to Survivors and disappear. The Resentful Soul will reappear in the vicinity of the Peaceful Pine after **20** seconds.")
            .addField("Resurge", "When Robbie has a Peaceful Pine branch, he can use it to make new Peaceful Pines. Once the number of Peaceful Pines in the area reaches the maximum of **6**, the newly planted Peaceful Pine will replace the earliest planted Peaceful Pine.\n\n**Restful Road:** Robbie summons the Peaceful Pine and the roots start growing rapidly forward under his feet, forming an acceleration path. Robbie will have a large increase in movement speed and all interaction speed.\n\n**Expel Souls:** After drawing a Resentful Soul to him using Dispel Souls, Robbie can now cast it back out in a specific direction after absorbing it")
            .setFooter(`The Hunters - Page 12 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/1/13/Robbie.png/167px-Robbie.png?version=c19a17be9f9bedb3d5acea2c7a151136");


        let lizard = new Discord.RichEmbed()
            .setAuthor("Luchino - The Evil Reptilian", hunterIcon, "https://identityv.gamepedia.com/Luchino")
            .setColor("RED")
            .setDescription("**Background:**\nLuchino was an outstanding scholar who was fascinated with reptiles. Not soon after getting a rare poisonous snake from his colleague, Luchino has suddenly vanished. In his room, people only found bloody scales on the ground. The strange thing is those giant green scales are rough and hard and don’t seem to belong to any known reptile.\n\n**《 External traits 》**\n\n**Cursed Body:** Luchino's body has gained a great explosive power after mutating, but it consumes energy every time it leaps. Multiple leaps in the air consume less energy, which can be recovered gradually with time.\n\n**《 Abilities 》**\n\n**Preying Leap:** After leaping from the ground, Luchino can make a second leap in the air. If Luchino hits an obstacle while leaping, it will fall from the sky.\n\n**Crash:** Luchino can crash vertically from the air at will.\n\n**Lethal Crash:** After leaping to a certain height, tapping on the Skill button again will cause Luchino to drop vertically at high speed, causing damage to the nearest Survivor within crash range and destroying all dropped Pallets within range.\n\n**Mania:** Luchino mutates further and is able to leap three times in the air.\n\n**Basilisk:** Luchino's explosive force will greatly increase the dropping speed.")
            .setFooter(`The Hunters - Page 13 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/c/c7/Luchino_FP.png/285px-Luchino_FP.png?version=b65d270624a375411af97d8abf36d781");

        let bloodyqueen = new Discord.RichEmbed()
            .setAuthor("Mary - Bloody Queen", hunterIcon, "https://identityv.gamepedia.com/Mary")
            .setColor("RED")
            .setDescription("**Background:**\nMary was born in France to the royal family, hence her name 'Bloody Queen.' Due to no guidebook or deduction targets being out for Mary (as of April 2020), further lore is unknown; however, based on her similarities to Marie Antoinette and her background video, it can be assumed that she neglected the citizens of her country in favor of her own luxuries and conspiring with others, which thus caused her execution by guillotine in October 1793.\n\n**《 External traits 》**\n\n**Aqua Mirror:** Bloody Queen creates a Mirror Image by using an Aqua Mirror. The Mirror Image ignores collisions and reflects the location, state and motion of the actual body in real time. It can inflict damage on Survivors, but Survivors can only receive one damage at a time.\n\n**《 Abilities 》**\n\n**Mirror Image:** Summon the Aqua Mirror to generate a Mirror Image of the body. When the image is formed, tap the skill button again to switch positions with the Mirror Image.\n\n**Mirror Rotation:** Rotate the Aqua Mirror to make the Mirror Image turn to the nearest Survivor.\n\n**Into the Mirror:** When summoning the Aqua Mirror within a **5m** radius of a survivor, a Mirror Image of the nearest Survivor will be generated. The Survivor's Mirror Image will disappear after the Survivor is hit by the Bloody Queen.")
            .setFooter(`The Hunters - Page 14 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/6/66/Mary_FP.png/244px-Mary_FP.png?version=3fec4cc960a2bdd09ae32c77e5cb0b7e");

        let bonbon = new Discord.RichEmbed()
            .setAuthor("Bonbon - Guard 26", hunterIcon, "https://identityv.gamepedia.com/Bonbon")
            .setColor("RED")
            .setDescription(`**Background:**\n[Burke](https://identityv.gamepedia.com/Burke) (the Architect) had failed to make a robot 25 times, and he finally succeeded in the 26th time, which he could be proud of. No 26 has a high self-awareness, which significantly increased its efficiently, and allowed Burke to have a temporary "vacation", away from the complex repetitive work, and to develop him a new "body". Gradually, No 26's self-awareness involved, and it even had a "name" - Bonbon.\nBurke was very angry to find out that the efficiency of No 26 decreased after the over-development of self-awareness, so he replaced the CPU and wrote No 26 a new program. But strange things happened. No matter how many times he changed the CPU, or how many times he wrote a new program , he would hear the same phrase after reboot: "Nice to meet you, I’m Bonbon".\n\n**《 External traits 》**\n\n**Bomb Chain:** Bonbon can store a large number of bombs. It explodes in a cross shape and detonates all bombs within range.\n\n__Special__\n\nEach bomb only inflicts damage equal to **50%** of a normal attack. A Survivor hit by multiple bombs at the same time will only receive damage once.\n\n**《 Abilities 》**\n\n**Time Bomb:** Time bombs can be placed or thrown. The bomb will explode at the end of the timer, and the timer can be adjusted before the bomb is thrown.\n**Cooldown: 6 seconds**\n\n**Remote-Controlled Bomb:** Placing or throwing the special Remote-Controlled Bomb, and then tapping the skill button again will detonate the bomb. The Remote-Controlled Bomb will detonate automatically once it reaches the time limit.\n\n**EX Bomb:** Decreased the charging time of Time Bombs and increased the explosion range of all bombs.`)
            .setFooter(`The Hunters - Page 15 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/3/3b/Bonbon_FP.png/347px-Bonbon_FP.png?version=be0b0a248f72f2c4cd100bfb7a107b2e");

        let ann = new Discord.RichEmbed()
            .setAuthor('Ann - "Disciple"', hunterIcon, "https://identityv.gamepedia.com/Ann")
            .setColor("RED")
            .setDescription("**Background:**\nA strange disease had struck Ann's eyes and made them different from ordinary people. And more, unfortunately, with this change, the plague came to the city.\n\nThe epidemic took the lives of her parents, and there were rumours that she was the eye of devil, and it was her who spread the plague. And many angry people began to advocate for her to be executed.\n\nAnn began to live in fear, and the ubiquitous death threat shocked her fragile nerves and led her to believe it herself.\n\nOn a moonless night, Ann couldn't sleep for a long time and wanted to go to a Church in search of inner peace. But as she was about to arrive, a wooden stake pierced through her heart, and dying Ann was left lying in the wilderness.\n\nBefore she died, she felt that unusual eyes were watching her at the end of the night, but her fading consciousness made it impossible to know whether it was the salvation of miracle or the call of evil.\n\n**《 External traits 》**\n\n**Shadow Step:** Cat was born in a dark shadow and ignores certain laws of physics. Its body generates an expanding **Alert Radius** (small) and **Paralysis Area** (big) after it splits.\n\n__Alert Radius__\nWhen Survivors enter its range, the alerted Cat will refresh its existence time, bite on the Survivor's shadow and move with it.\n\n__Paralysis Area__\nWhen Ann enters its range, Cat's strength surges and it confines the movement of all Survivors in the area.\n\n__Special__\nGetting confined by the Cat multiple times continuously will significantly reduce the confined duration.\n\n**《 Abilities 》**\n\n**Catwalk:** Ann shares some of her Cat's power through their bond. Ann can now sense where her cat is and dash towards it at alarming speed.\n\n**Swoop:** Ann sends her Cat sprinting in the target direction. Tap the skill button again and the Cat will split into two and run in opposite directions.\nThe Cat will split automatically after **5** seconds. After the split, the Cat will exist for **10** seconds.")
            .addField("Guide", "Ann creates a Command Mark at the target location.\nThe Cat will refresh its existence time and come towards the Mark.")
            .addField("Psychic", "Ann assimilates more with the Cat.\nAnn can now dash more quickly and frequently.")
            .setFooter(`The Hunters - Page 16 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/3/30/Ann.png/202px-Ann.png?version=453264cd9eb0631f1dd4e21b68f94af2");

        let violinist = new Discord.RichEmbed()
            .setAuthor("Antonio - The Violinist", hunterIcon, "https://id5.fandom.com/wiki/Violinist")
            .setColor("RED")
            .setDescription(`**Background:**\n"He can see the rhythms of the whole world, which are controlled by the ubiquitous strings.”\nEven at the height of his fame and skill the Violinist Antonio did not abandon his unrestrained desire for music. His skill on the violin exceeded its peak when he was able to play on stage on a single string, and this greatly shocked the audience! In addition to the unheard-of melodies, his appearance and almost inhuman figure caused many legends: the audience claimed that during Antonio's performance, the devil himself appeared behind his shoulders, who manipulated his hands to perform an amazing technique. Moreover, some saw the violinist in a trance, when his entire body was connected to the bow and strings, and his hair could play a rhythmic melody.\n\nBut what is the truth, and who cares?\n\n**《 External traits 》**\n\n**Terrifying Melody:** Antonio plays out terrifying music with all the melody in the world. Survivors hit with Antonio's abilities will be infected with multiple stacks of [Demon Notes].\n\n**Demon Notes:** Survivors' movements are affected by the music resounding in their earsThe Survivor needs to find a quiet place to calm his mind. Each layer has the following effects: **1 / 2 / 3** stacks of [**Demon Notes**] will decrease movement speed by **4% / 8% / 12%**, and decrease healing and decoding speed by **15% / 30% / 50%**. When there are no other Survivors with a **24m** radius, the survivor can calm down through meditation and remove the effects of Demon Notes.\n\n**《 Abilities 》**\n\n**Sonata:** Antonio plays the first note at the target location and within **5** seconds can throw the second note. The notes that reach the ground connect and create a [*Terrifying String Music*].`)
            .addField("Terrifying String Music", "Stays on the field for **13** seconds and only deals damage when it is generated. Survivors who are hit will suffer damage equal to **1** normal attack plus **1** stack of Demon Notes. When these survivors touch the same string music later, another stack of Demon Note will be added with no damaging effect. There is a **5s** buffer for the String Music to add a stack of Demon Note to the same survivor.\n\n**Rhapsody:** Antonio performs for **9** seconds: During the crazed performance, he can move during the backswing of normal attacks and charged attacks. His attacks won't collide with scene features. At the same time, he will also send out an additional [Terrifying Music Note] along with each attack.\n\n**Terrifying Music Note:** Music notes that ignore the terrain and keep on flying, adding **1** stack of Demon Note to the hit Survivors.")
            .addField("Perpetual Motion", "Within a **20m** radius of the Terrifying String Music, Antonio can bring out his bow and play out String Music, vibrating, and creating **10** parallel fleeting pieces of String Music. Survivors hit by the String Music will suffer damage equal to **1** normal attack. Survivors in the areas between the pieces won't be affected.")
            .setFooter(`The Hunters - Page 17 of 17 | Information taken from IdentityV wiki`)
            .setImage("https://vignette.wikia.nocookie.net/id5/images/4/42/Violinist_%28Transparent%29.png/revision/latest/scale-to-width-down/620?cb=20200524021507");



        //maps starts here hehehehe
        let mapTemplate = new Discord.RichEmbed()
            .setAuthor("", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "")
            .setDescription("**** is one of **9** maps in **Identity V**\nIt was added on ****.\n\n**《 Description 》**\n \n\nTo check spawnpoints, do:\n`" + prefix + "spawns <name>`")
            .setColor("RANDOM")
            .setImage("")
            .setThumbnail("")
            .setFooter("Identity V Maps | Page 1 out of 9");

        let redchurch = new Discord.RichEmbed()
            .setAuthor("The Red Church", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "https://identityv.gamepedia.com/The_Red_Church")
            .setDescription("**The Red Church** is one of **9** maps in **Identity V**\nIt was added on **July 18, 2018**.\n\n**《 Description 》**\nThere was once an unfinished funeral that happened on the red church and it's ground. Rumors say there are still strange footsteps in the dark.\n\nTo check spawnpoints, do:\n`" + prefix + "spawns redchurch`")
            .setColor("RANDOM")
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/4/4f/RedChurchMap.png?version=5e3ae6cbab78eb07f01224047a27a98f")
            .setThumbnail("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/01/The_Red_Church_Statue.jpg/604px-The_Red_Church_Statue.jpg?version=c011d479a53ac384ab02f0c44c1f245a")
            .setFooter("Identity V Maps | Page 1 out of 9");

        let hospital = new Discord.RichEmbed()
            .setAuthor("Sacred Heart Hospital", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "https://identityv.gamepedia.com/Sacred_Heart_Hospital")
            .setDescription("The **Sacred Heart Hospital** is one of **9** maps in **Identity V**\n\n**《 Description 》**\nThe hospital is an old abandoned warehouse that holds some surgical equipment and still some beds. It is said to be haunted by a strange evil in the dark.\n\n**《 Backstory 》**\n\nThe story began with a fierce doctor-patient dispute. The hospital that was originally operating ushered in a highly-skilled dentist, but things became strange after he arrived. At the time, more and more patients were discharged from the hospital, but the registered discharge records did not increase, and some night-timers said that they had seen the dentist dragging a lot of garbage to the marshes at night.\n\nThe rumors intensified, and after a patient’s strange disappearance, angry people poured into the hospital at night. The dentist refused to admit that he was related to the missing patient and asked everyone to let him go back to complete the operation. This attitude angered many people, so he sank in the swamp and died.\n\nTo check spawnpoints, do:\n`" + prefix + "spawns hospital`")
            .setColor("RANDOM")
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/7/7c/SacredHospitalMap.png/800px-SacredHospitalMap.png?version=7e706dd8918737fe1ab37333411a3282")
            .setThumbnail("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/5/5f/Sacred_Heart_Hospital_Hospital2.jpg/613px-Sacred_Heart_Hospital_Hospital2.jpg?version=fc1382b64e6777c80ad6191b78acb803")
            .setFooter("Identity V Maps | Page 2 out of 9");


        let factory = new Discord.RichEmbed()
            .setAuthor("Arms Factory", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "https://identityv.gamepedia.com/Arms_Factory")
            .setDescription("The **Arms Factory** is one of **9** maps in **Identity V**.\n\n**《 Description 》**\nThe arms factory that was abandoned after a huge fire. *Strange footsteps can be heard coming from inside it at night.*\n\n**《 Backstory 》**\nIt is clear that another major accident had occurred after the closure. Leo Beck, the small workshop owner of the textile mill, bought the debt-ridden Minerva Military Factory after accepting the advice of his friend Freddy Riley. This was not the beginning of a dream, but a prelude to bad luck.\n\nThe entire factory was in a bad state of repair, and had a huge debt load. Leo's wife and Freddy Riley had already taken away all of Leo's property and disappeared. Leo, who could not afford the debt, ended his life with flames in the factory.\n\nTo check spawnpoints, do:\n`" + prefix + "spawns factory`")
            .setColor("RANDOM")
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/1/15/ArmsFactoryMap.png?version=d365cab4d2ba4ae2d39bd4c2fa39aea9")
            .setThumbnail("https://gamepedia.cursecdn.com/identityv_gamepedia_en/0/0e/Arms_Factory_Exterior.jpg?version=6dd510c2c4a17cb0aa4e5a8519d4c9a7")
            .setFooter("Identity V Maps | Page 3 out of 9");

        let lakeside = new Discord.RichEmbed()
            .setAuthor("Lakeside Village", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "https://identityv.gamepedia.com/Lakeside_Village")
            .setDescription("The **Lakeside Village** is one of **9** maps in **Identity V**\nIt was added on **August 23, 2018**.\n\n**《 Description 》**\nThis used to be a small prosperous fishing village, but now the waves on the stony beach bring only the wreckage of the past.\n\n**《 Lore 》**\nOn a cold winter night, a hurricane raided the mountainous area near Hujing Village. The tornado threw a hunter on the mountain into the lake. He struggled to swim to the shore, only to find that Lakeview Village was no longer going to see the sun. In the faint moonlight, the thatched cottage swayed, and the hunter did not see the bustling crowd and did not see any signs of life. He noticed a flame burning in the distance, but only found a pot of burnt stew when he inspected it. Whoever used the pot had disappeared without a trace. The warm and lively thatched cottages in Lakeview Village have been replaced by silent silence.\n\nExperienced hunters spend a lot of time in the forest, and all he saw in the Lakeside Village were abandoned boats and unattended fishing tackle cabins. The hunter tried his best to stay calm and eventually walked out of the village with tenacious willpower. In order to understand everything that happened in Lakeview Village, the hunter publicized what he saw. At this time, the nearby villagers suddenly realized the real reason why the villagers in Lakeview Village no longer participated in the market. No one knew where they were going, and no one was willing to step into this unknown village.\n\nTo check spawnpoints, do:\n`" + prefix + "spawns lakeside`")
            .setColor("RANDOM")
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/7/7f/LakesideVillageMap.png?version=2dae9b4828ec5346a3d237eb3f14ff20")
            .setThumbnail("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/6/65/Lakeside_Village_Village.jpg/532px-Lakeside_Village_Village.jpg?version=b5b6fca3190bcc9be383d5154843fb41")
            .setFooter("Identity V Maps | Page 4 out of 9");

        let moonlit = new Discord.RichEmbed()
            .setAuthor("Moonlit River Park", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "https://identityv.gamepedia.com/Moonlit_River_Park")
            .setDescription("**Moonlit River Park** is one of **9** maps in **Identity V**\n\n**《 Description 》**\nMoonlit Park was once a beautiful amusement park where people came to enjoy rides and have a merry time. The owner of the park by the name of a man named Freddy used to enjoy the attention his park attracted. One day though Freddy made a deal with a supernatural entity in order to increase the amount of visitors his park got so he could become even richer. The entity warned Freddy though he had to give him something in exchange or he would curse him. Freddy agreed but was greedy by nature so never paid him back. The entity as a result cursed Freddy’s park causing everyone to dissapear. Ever since then the park has remained abandoned and rumors of demonic spirits and clowns have haunted the park ever since.\n\nTo check spawnpoints, do:\n`" + prefix + "spawns moonlit`")
            .setColor("RANDOM")
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/a/a9/MoonlitRiverMap.png?version=75a9c32924d9701c210b2735f41ab739")
            .setThumbnail("https://i.imgur.com/ojSGxaQ.png")
            .setFooter("Identity V Maps | Page 5 out of 9");

        let leosmemory = new Discord.RichEmbed()
            .setAuthor("Leo's Memory", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "https://identityv.gamepedia.com/Leo%27s_Memory")
            .setDescription("**Leo's Memory** is one of **9** maps in **Identity V**\nThis is a featured Christmas map.\n\n**《 Description 》**\nHe never thought this would be his last snow.\n\nTo check spawnpoints, do:\n`" + prefix + "spawns leos`")
            .setColor("RANDOM")
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/c/c1/LeosMemoryMap.png?version=4f04618e1ef80ab21efd6c7fe1ddb13d")
            .setThumbnail("https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/3/33/Leo%27s_Memory.jpg/800px-Leo%27s_Memory.jpg?version=53bd3c7d26aaac26638c82c7680cf661")
            .setFooter("Identity V Maps | Page 6 out of 9");

        let whitesand = new Discord.RichEmbed()
            .setAuthor("White Sand Street Asylum", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "https://identityv.gamepedia.com/White_Sand_Street_Asylum")
            .setDescription("**White Sand Street Asylum** is one of **9** maps in **Identity V**\n\n**《 Description 》**\nThe asylum began as an orphanage funded by Kreacher Pierson.\nDue to at least 12 children having varying degrees of mental illness, it was transformed into a children's mental institution by the church.\n\nTo check spawnpoints, do:\n`" + prefix + "spawns asylum`")
            .setColor("RANDOM")
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/6/61/WhiteSandStreetAsylumMap.png?version=e0b909b771ff56c55699c74ba72621dc")
            .setThumbnail("https://i.imgur.com/tNsh0DH.png")
            .setFooter("Identity V Maps | Page 7 out of 9");

        let eversleeping = new Discord.RichEmbed()
            .setAuthor("Eversleeping Town", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "https://identityv.gamepedia.com/Eversleeping_Town")
            .setDescription("**Eversleeping Town** is one of **9** maps in **Identity V**\nThis map was created as part of the Junji Ito Collection Crossover Event.\n\n**《 Description 》**\nA small Japanese village locked in eternal slumber.\n\nTo check spawnpoints, do:\n`" + prefix + "spawns eversleeping`")
            .setColor("RANDOM")
            .setImage("https://gamepedia.cursecdn.com/identityv_gamepedia_en/c/c2/EversleepingTownMap.png?version=b05e2441fe2cc7c6d32474b1e2995e0f")
            .setThumbnail("https://vignette.wikia.nocookie.net/id5/images/5/5d/Eversleeping.png/revision/latest/scale-to-width-down/1000?cb=20200426055951")
            .setFooter("Identity V Maps | Page 8 out of 9");

        let cave = new Discord.RichEmbed()
            .setAuthor("Golden Cave", "https://gamepedia.cursecdn.com/identityv_gamepedia_en/thumb/0/0f/IconHelp_IVlogo.png/28px-IconHelp_IVlogo.png?version=50e0995b0ca3f96e7f4d250aafb52b7e", "https://identityv.gamepedia.com/Golden_Cave")
            .setDescription("**Golden Cave** is one of **9** maps in **Identity V**\n\n**《 Description 》**\nDespite that not a single piece of gold was ever found, Count Barriere still got what he wanted with this land.\n\n**《 Backstory 》**\nThe Golden Cave is said to be where the **Prospector** worked. The cave was destroyed and many miners died in it. The ghouls in the Basement levels are believed to represent the dead miners.")
            .setColor("RANDOM")
            .setImage("https://vignette.wikia.nocookie.net/id5/images/6/60/GoldenCave6.jpg/revision/latest?cb=20200208195736")
            .setFooter("Identity V Maps | Page 9 out of 9");


        let searchForString = args.slice(1).join(" ").toLowerCase();


        async function switchPages(Pages) {

            let pageI = 0;

            let msg = await message.channel.send(Pages[pageI]);

            await msg.react('⏪');

            await msg.react('⏩');

            await msg.react('✖️');


            let backFilter = (reaction, user) => reaction.emoji.name === '⏪' & user.id === message.author.id;

            let forwardFilter = (reaction, user) => reaction.emoji.name === '⏩' & user.id === message.author.id;

            let endFilter = (reaction, user) => reaction.emoji.name === '✖️' & user.id === message.author.id;


            let back = msg.createReactionCollector(backFilter, {
                time: 300000
            });

            let forward = msg.createReactionCollector(forwardFilter, {
                time: 300000
            });

            let end = msg.createReactionCollector(endFilter, {
                time: 300000
            });

            back.on('collect', async r => {
                await r.remove(message.author);

                if (pageI === 0) {
                    pageI = Pages.length - 1;
                } else {
                    pageI--;
                }

                await msg.edit(Pages[pageI]);
            });

            forward.on('collect', async r => {

                await r.remove(message.author);

                if (pageI === Pages.length - 1) {

                    pageI = 0;
                } else {
                    pageI++;
                }
                await msg.edit(Pages[pageI]);

            });

            end.on('collect', async r => {

                await r.remove(message.author);

                await end.stop();
                await forward.stop();
                await back.stop();

                message.channel.send(`**${message.author.username}, Ended...**`);

            });



        }

        if (!searchForString) {
            return ErrorMsg(bot, message, "Please provide a character/map name to view their information!\nOr you can do \n`" + prefix + "idvwiki survivor`\n`" + prefix + "idvwiki hunter`\n`" + prefix + "idvwiki maps`\nto switch between survivor/hunter/map information quicker :)\n\n**Examples:**\n`" + prefix + "idvwiki lucky guy`\n`" + prefix + "idvwiki the red church`");
        }

        else if (["surv", "survivor", "survivors", "the survivors"].includes(searchForString)) {
            await switchPages([
                new Discord.RichEmbed(luckyguy),
                new Discord.RichEmbed(doctor),
                new Discord.RichEmbed(gardener),
                new Discord.RichEmbed(lawyer),
                new Discord.RichEmbed(theif),
                new Discord.RichEmbed(magician),
                new Discord.RichEmbed(explorer),
                new Discord.RichEmbed(mercenary),
                new Discord.RichEmbed(coordinator),
                new Discord.RichEmbed(mechanic),
                new Discord.RichEmbed(forwardy),
                new Discord.RichEmbed(mindseye),
                new Discord.RichEmbed(priestess),
                new Discord.RichEmbed(perfumer),
                new Discord.RichEmbed(cowboy),
                new Discord.RichEmbed(dancer),
                new Discord.RichEmbed(seer),
                new Discord.RichEmbed(embalmer),
                new Discord.RichEmbed(prospector),
                new Discord.RichEmbed(enchantress),
                new Discord.RichEmbed(wildling),
                new Discord.RichEmbed(acrobat),
                new Discord.RichEmbed(officer),
                new Discord.RichEmbed(barmaid),
                new Discord.RichEmbed(postman),
                new Discord.RichEmbed(gravekeeper),
                new Discord.RichEmbed(prisoner),
                new Discord.RichEmbed(entomologist),

            ]);

        } else if (["lucky", "luckyguy", "lg", "lucky guy", "the lucky guy"].includes(searchForString)) {
            message.channel.send(luckyguy);

        } else if (["doc", "doctor", "emily"].includes(searchForString)) {
            message.channel.send(doctor);

        } else if (["lawyer", "freddy"].includes(searchForString)) {
            message.channel.send(lawyer);

        } else if (["theif", "kreacher"].includes(searchForString)) {
            message.channel.send(theif);

        } else if (["magician", "servais"].includes(searchForString)) {
            message.channel.send(magician);

        } else if (["explorer", "kurt"].includes(searchForString)) {
            message.channel.send(explorer);

        } else if (["merc", "mercenary", "naib"].includes(searchForString)) {
            message.channel.send(mercenary);

        } else if (["coordinator", "coord", "martha"].includes(searchForString)) {
            message.channel.send(coordinator);

        } else if (["mec", "mechanic", "tracy"].includes(searchForString)) {
            message.channel.send(mechanic);

        } else if (["forward", "william"].includes(searchForString)) {
            message.channel.send(forwardy);

        } else if (["mindseye", "themindseye", "helena", "the minds eye", "the mind's eye", "mind's eye"].includes(searchForString)) {
            message.channel.send(mindseye);

        } else if (["fiona", "priestess"].includes(searchForString)) {
            message.channel.send(priestess);

        } else if (["perfumer", "vera"].includes(searchForString)) {
            message.channel.send(perfumer);

        } else if (["cowboy", "kevin"].includes(searchForString)) {
            message.channel.send(cowboy);

        } else if (["dancer", "femaledancer", "female", "margaretha", "female dancer", "the female dancer"].includes(searchForString)) {
            message.channel.send(dancer);

        } else if (["seer", "eli"].includes(searchForString)) {
            message.channel.send(seer);

        } else if (["embalmer", "aesop"].includes(searchForString)) {
            message.channel.send(embalmer);

        } else if (["prospector", "norton"].includes(searchForString)) {
            message.channel.send(prospector);

        } else if (["enchantress", "patricia"].includes(searchForString)) {
            message.channel.send(enchantress);

        } else if (["wildling", "murro", "wilding"].includes(searchForString)) {
            message.channel.send(wildling);

        } else if (["mike", "acrobat"].includes(searchForString)) {
            message.channel.send(acrobat);

        } else if (["jose", "officer", "1stofficer", "1st officer"].includes(searchForString)) {
            message.channel.send(officer);

        } else if (["bartender", "barmaid", "demi"].includes(searchForString)) {
            message.channel.send(barmaid);

        } else if (["postman", "victor", "viktor"].includes(searchForString)) {
            message.channel.send(postman);

        } else if (["gravekeeper", "gravedigger", "andrew"].includes(searchForString)) {
            message.channel.send(postman);

        } else if (["prisoner", '"prisoner"', "luca"].includes(searchForString)) {
            message.channel.send(prisoner);

        } else if (["gardener", "emma", "lisa"].includes(searchForString)) {
            message.channel.send(gardener);

        }
        else if (["entomologist", "entomo", "pliny"].includes(searchForString)) {
            message.channel.send(entomologist);

        } else if (["hunter", "hunters", "hunta", "killers", "killer", "chaser", "chasers"].includes(searchForString)) {

            await switchPages([
                new Discord.RichEmbed(hellember),
                new Discord.RichEmbed(clown),
                new Discord.RichEmbed(ripper),
                new Discord.RichEmbed(gamekeeper),
                new Discord.RichEmbed(soulweaver),
                new Discord.RichEmbed(geisha),
                new Discord.RichEmbed(feaster),
                new Discord.RichEmbed(wuchang),
                new Discord.RichEmbed(photographer),
                new Discord.RichEmbed(madeyes),
                new Discord.RichEmbed(dreamwitch),
                new Discord.RichEmbed(axeboy),
                new Discord.RichEmbed(lizard),
                new Discord.RichEmbed(bloodyqueen),
                new Discord.RichEmbed(bonbon),
                new Discord.RichEmbed(ann),
                new Discord.RichEmbed(violinist),

            ]);

        } else if (["leo", "hellember", "hell ember"].includes(searchForString)) {
            message.channel.send(hellember);

        } else if (["clown", "smileyface", "smiley", "joker", "smiley face"].includes(searchForString)) {
            message.channel.send(clown);

        } else if (["ripper", "theripper", "jack", "the ripper"].includes(searchForString)) {
            message.channel.send(ripper);

        } else if (["gamekeeper", "thegamekeeper", "bane"].includes(searchForString)) {
            message.channel.send(gamekeeper);

        } else if (["soulweaver", "violetta", "spider", "spooder", "soul weaver"].includes(searchForString)) {
            message.channel.send(soulweaver);

        } else if (["geisha", "michiko"].includes(searchForString)) {
            message.channel.send(geisha);

        } else if (["hastur", "feaster"].includes(searchForString)) {
            message.channel.send(feaster);

        } else if (["wu", "wuchang", "blackandwhite", "wuwu", "wuchangus"].includes(searchForString)) {
            message.channel.send(wuchang);

        } else if (["photographer", "photoboi", "joseph"].includes(searchForString)) {
            message.channel.send(photographer);

        } else if (["madeye", "madeyes", "burke"].includes(searchForString)) {
            message.channel.send(madeyes);

        } else if (["dw", "dreamwitch", "yidhra"].includes(searchForString)) {
            message.channel.send(dreamwitch);

        } else if (["axeboi", "axeboy", "robbie"].includes(searchForString)) {
            message.channel.send(axeboy);

        } else if (["reptile", "evilreptilian", "reptilian", "lizard", "luchino"].includes(searchForString)) {
            message.channel.send(lizard);

        } else if (["bq", "bloodyqueen", "mary", "bloody queen"].includes(searchForString)) {
            message.channel.send(bloodyqueen);

        } else if (["guard26", "guard", "no26", "bonbon", "guard 26", "guard no 26"].includes(searchForString)) {
            message.channel.send(bonbon);

        } else if (["ann", "disciple", '"disciple"'].includes(searchForString)) {
            message.channel.send(ann);

        } else if (["antontio", "violinist"].includes(searchForString)) {
            message.channel.send(violinist);

        } else if (["maps", "map"].includes(searchForString)) {
            await switchPages([
                new Discord.RichEmbed(redchurch),
                new Discord.RichEmbed(hospital),
                new Discord.RichEmbed(factory),
                new Discord.RichEmbed(lakeside),
                new Discord.RichEmbed(moonlit),
                new Discord.RichEmbed(leosmemory),
                new Discord.RichEmbed(whitesand),
                new Discord.RichEmbed(eversleeping),
                new Discord.RichEmbed(cave),

            ]);
        } else if (["chruch", "the red church", "red church", "redchurch"].includes(searchForString)) {
            message.channel.send(redchurch);

        } else if (["hospital", "sacred heart hospital", "sacred heart"].includes(searchForString)) {
            message.channel.send(hospital);

        }
        else if (["arms", "arms factory", "the arms factory"].includes(searchForString)) {
            message.channel.send(factory);

        }
        else if (["lake", "lakeside", "lakeside village", "lake side village"].includes(searchForString)) {
            message.channel.send(lakeside);

        }
        else if (["moonlit", "moonlit river", "moonlit river park", "moonlitriverpark"].includes(searchForString)) {
            message.channel.send(moonlit);

        }
        else if (["leo's memory", "leo memory", "leos memory", "leosmemory"].includes(searchForString)) {
            message.channel.send(leosmemory);

        }
        else if (["white sand street asylum", "white sand street", "asylum", "whitesandstreetasylum"].includes(searchForString)) {
            message.channel.send(whitesand);

        }
        else if (["eversleeping", "eversleeping town", "eversleepingtown"].includes(searchForString)) {
            message.channel.send(eversleeping);

        }
        else if (["cave", "golden cave", "the golden cave", "goldencave"].includes(searchForString)) {
            message.channel.send(cave);

        }
        else {
            return ErrorMsg(bot, message, "Please provide a character/map name to view their information!\nOr you can do \n`" + prefix + "idvwiki survivor`\n`" + prefix + "idvwiki hunter`\n`" + prefix + "idvwiki maps`\nto switch between survivor/hunter/map information quicker :)\n\n**Examples:**\n`" + prefix + "idvwiki lucky guy`\n`" + prefix + "idvwiki the red church`");

        }



    }
}


