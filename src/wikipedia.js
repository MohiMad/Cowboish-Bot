const { stripIndents } = require("common-tags");

module.exports = {
    Hunters: [
        {
            Name: ["hunter", "the hunters", "hunters", "the hunter"],
            Link: "https://i.imgur.com/r78CX3U.png",
            Hex: "0xE7311F",
            Footer: "The Hunters - Page $index of $length — Information taken from Identity Gamepedia"
        },
        {
            Name: ["Hell Ember - Leo Beck", "leo", "hellember", "hell ember"],
            Image: "https://i.imgur.com/gdiFNwc.png",
            Href: "Leo_Beck",

            Background: stripIndents`
            The factory manager was married in 1874. Three years later, his daughter was born. He operated a small textile factory and was flexible in handiwork. He also made small toys for his daughter. Though he didn't have a big career, he loved his family.

            The factory owner suffered a career issue, and many years of friends and lawyers helped him. After taking the advice of his friend Freddy Riley, he bought a small gun factory that was severely in debt. Before Leo realized the poor conditions of the factory, his wife and Freddy Riley made off with all his possessions and disappeared. Drowning in debt, Leo Beck began to drink alcohol for a while, giving up his daughter to an orphanage to prepare himself for self-immolation in the factory.

            Though he took his life in a fire, it did not remove him from the world. He was reborn with resentment and wrote, "I will find you" in the factory.

            He had been a survivor, but because he refused to write in his diary, he was "punished" and reappeared as a hunter.
            `,

            Infernal_Soul: stripIndents`When Leo pursues a Survivor, is stunned or when the Survivors decode a Cipher Machine with none of the Survivors incapacitated, he will become furious, When he has accumulated enough Fury, it will turn into Rage, and he can use it to activate is Awaken skill.`,

            Awaken: stripIndents`Tap the skill button to Awaken Phantoms for 25 seconds; hold the skill button to transmit Rage to your Puppet and order it to pursue nearby Survivors;
            When the Puppet hits a Survivor or if you change places with the Puppet, it will stop moving.
            
            __**Phantom**__
            Phantoms will automatically pursue nearby Survivors.
            Tap the skill button again to during this period to recall the Phantoms.
            After recalling the Phantoms, a percentage of Rage will be recovered according to the remaining time.`,

            Puppet_Control: `For an unknown reason, Leo is connected with his Puppet.
            After tapping Deploy or Cast, the Puppets can detect surrounding Survivors and alert Leo.
            Leo can switch positions with the Puppet, gaining an acceleration boost for a short period.
            The Puppet can be dismantled by Survivors, during which time Leo is unable to switch positions.
            
            `,


            Multiple_Puppet_Control: stripIndents`Leo acquires a second Puppet.
            `

        },
        {
            Name: ["The Gamekeeper - Bane Perez", "gamekeeper", "gk", "gamekeepa", "bane", "the game keeper", "the gamekeeper"],
            Image: "https://i.imgur.com/EmdhOhu.png",
            Href: "Bane_Perez",

            Background: stripIndents`
            Bane Perez was in charge of the forest farm and patrol cabin at Oletus Manor. He raised a black-nosed moose like a child. However, accidents always happen, and a new hunting season was coming. Bane wondered how he could hide the black-nose to ensure its safety, but he was too late. A team of fully armed poachers had already arrived.

            The gunshots rang through the forest. When Bane arrived, he saw that the black-nose had fallen to the ground. He recognized a familiar face from the poacher's team. It was the boy that he had rescued a few years prior. However, when Bane pleaded with him, they cruelly wanted to turn him into a Minotaur. They cut off his tongue and put the head of the black-nose moose on him. They locked him up with a steel-jaw bear trap and began a massacre in the forest.

            After the poachers had left, the dogs dragged Bane back to the manor, where he somehow recovered. No one thought that his humiliation would turn Bane into a demon. He was transformed into a Minotaur, and the mountain forest was his maze. Since that day, Bane shows no mercy to anyone who sets foot on his land.
            `,

            Suffocation: stripIndents`Hitting different targets with Bane's Chain Hook will trigger different effects.
            When Bane is dragged forwards by his Chain Hook and lands, it will generate shockwaves that decrease Movement Speed of Survivors within a range by 20% for 5 seconds. Getting hit by the shockwaves again during that period will further slow down Survivors.
            
            When hit by the Chain Hook, Survivors will be marked by the scent of rotting leaves and their location will be periodically exposed 2 times within 60 seconds, and Bane's attack recovery rate will be increased when he hits the exposed Survivors.`,

            Chain_Hook: stripIndents`Bane hooks Survivors and pulls them to him or hooks a wall and pulls himself towards the wall.
            `,
            Thorny_Chain_Hook: stripIndents`Survivors' Manifestation of Horror are the thorns on the Chain Hook. Now, when Bane's Chain Hook hits a Survivor, it will deal 50% of a normal attack damage.
            `,

            Fury_Hook: stripIndents`Furious Bane won't let an intruder escape his Chain Hook. If the Chain Hook hits an object, Bane can cast the Chain Hook again within 7 seconds up to 2 times, until the Chain Hook hits a Survivor or misses.
            `

        },
        {
            Name: ["The Smiley Face - Joker", "joker", "smiley face", "the joker", "the smiley face"],
            Image: "https://i.imgur.com/ce0siYH.png",
            Href: "Joker",

            Background: stripIndents`Joker was once the star of the circus. His naturally sullen face made him the best crying clown. However, the advantage changed when the handsome smile clown Segi and the glamorous acrobat and actress Natalie joined the circus, and Joker realized it's time for him to change his "professional track". Obviously, after getting his eternal smile, Joker can go nuts in new comedy shows.`,

            Rocket_Modification: stripIndents`
            Joker can collect Parts scattered around the Map to modify his weapon. Modification is lost after an attack or a Rocket Dash.
            
            __**Wind Wings**__
            Increases Attack Speed and Rocket Dash Speed.
            
            __**Drill**__
            Survivors take longer time to heal when hit by normal attacks or skills.
            
            __**Propeller**__
            Increases the effect of Rocket Dash once, but the weight is also slightly increased, thus decreasing its speed.`,

            Rocket_Dash: stripIndents`Brandishing a rocket, Joker dashes forward quickly and destroys all targets in his way.
            `,

            Crazed_Dash: stripIndents`After multiple intimate collaborations, Joker can dash farther and faster with his rocket.
            `

        },

        {
            Name: ["The Ripper - Jack", "the ripper", "ripper", "jack", "jack the ripper"],
            Image: "https://i.imgur.com/OA7T6XL.png",
            Href: "Jack",



            Background: stripIndents`Before becoming "The Ripper", he was a student of James Whistler, a renowned artist influenced by Edgar Degas. Who would guess that a well-dressed gentleman during the day will, when darkness falls, walk into an alley and stalk poor women? As "The Ripper" gained infamy, the boundary between his two identities began to fade. Of course, before you see his true face, "The Ripper" is still happy to take a walk at night.`,

            Freezing_Fog: stripIndents`The fog's chill can be felt in one's bones. Fog Blades are created as fog collects onto The Ripper's bladed hand. When a certain amount of fog has been amassed, The Ripper's attacks will trigger flying Fog Blades.`,

            Fog: stripIndents`Every once in a while The Ripper's attack will trigger a flying Fog Blade. Fog Blade will also leave Fog on its path. Survivors hit by Fog Blade will also leave a trail fog behind them as they move around.
            __**Fog**__
            While in the Fog, The Ripper has increased movement speed and greatly reduced Hidden Mist Cooldown.
            
            `,

            Hidden_in_Mist: stripIndents`When not striking or vaulting, The Ripper can gradually enter Hidden in Mist mode but his movement speed is reduced in the process. Once he has entered Hidden in Mist mode, his movement speed will increase.
            `,

            Hidden_in_Shadows: stripIndents`The Ripper can enter Hidden in Mist mode more swiftly, and his movement speed is increased in the process.
            `

        },
        {
            Name: ["The Soul Weaver - Violetta", "soul weaver", "spider", "soulweaver", "violetta"],
            Image: "https://i.imgur.com/U6NzBSc.png",
            Href: "Violetta",

            Background: stripIndents`Violetta was once a famous freak show performer, later reduced to performing in third-rate circuses after the audience lost interest in her. She's always wanted to get back on stage and once again become the much-anticipated star. With the help of a mechanic, Violetta installed flexible mechanical prostheses and a few sophisticated gadgets on herself and created a new show—Human Spider Show. Her old boss refused to let her perform, but Violetta didn't give up. She has accepted an invitation to perform, and is going to hold her comeback show at Oletus Manor. Of course, for safety reasons, audiences shouldn't watch it up close.`,

            Cocoon_Death: stripIndents`Violetta can wrap up a Survivor in a Cocoon with 60 Threads, and eliminate them on the spot without Rocket Chairs.
            __**Special**__
            Any talent or trait affecting the elimination time will work on this ability too.`,

            Entangled: stripIndents`When survivors are ensnared by Violetta's trap they will become Entangled, which can stack up to 3 layers.
            __**Entangled**__
            1 Layer: Reveals Survivor's location and decreases their Interaction Speed.
            
            2 Layers: Additionally decreases Survivor's Movement Speed.
            
            3 Layers: Greatly decreases Survivor's Movement and Interaction Speed.`

        },
        {
            Name: ["The Geisha - Michiko", "geisha", "the geisha", "michiko", "michikowo"],
            Image: "https://i.imgur.com/OURg7OB.png",
            Href: "Geisha",

            Background: stripIndents`Michiko was once the best dancer in Yoshiwara, and it was claimed that when she dances it looks as if a red butterfly was gently flapping it's own two wings. Michiko, however, gave up everything to marry her true love Mr. Miles. The Geisha met Miles, a foreign army officer at a banquet where they fell in love soon after. She was curious and excited as a kid on this foreign land, but only found the marriage to be the beginning of the miseries. After they got married and returned to Miles’ homeland together. His father was particularly vocal in his opposition to their marriage. He was cynical of her and hoped to drive her out of the family home. Not long after, Michiko mysteriously disappeared after Miles left on a business trip. Miles' father claims that she ran off with another man and urged his son to find another wife. Little do Miles know that his own father murdered the love of his life (Michiko). Without knowing, Miles, however, started to search for his wife, Michiko, but no one knows where she went. Rumor has it that a woman in kimono always wanders at night near the Miles’. Her face is so scary and scarred, but when she dances, it’s like a red butterfly.`,

            Triple_Phases: stripIndents`Michiko has three different moods and forms:
            She assumes the Beauty form when calm: In this form her Fear Radius is smaller, and has high Movement Speed;
            
            When angry she assumes the Prajna form: In this form her Fear Radius is larger, and has lower Movement Speed;
            
            She enters Panic form when her face is seen by a Survivor: Her Fear Radius remains unchanged, but she is unable to use Dash Hit`,

            Dash_Hit: stripIndents`Michiko enters genesis mode and assumes the Prajna form. She ignores the terrain and rushes towards the Survivor closest to the middle of where she is looking. But, should Michiko's face be gazed upon by a Survivor, Panic form will be activated and special abilities negated.
            `,

            Dancing_in_Misery: stripIndents`Michiko send out a Swallowtail Butterfly with a lifespan of 40 seconds to the target location. It will take some time for it to get there.
            __**Swallowtail**__
            Michiko's resentment transforms into a butterfly spirit which can be used as a target for Dash Hit.
            When a Survivor comes into contact with a Swallowtail Butterfly, it will attach itself to the Survivor for 30 seconds, making the Survivor a target for Dash Hit.
            Survivors with an attached Swallowtail Butterfly can interrupt a Dash Hit by staring at Michiko.
            
            `,

            Soul_Departure: stripIndents`Michiko enters genesis mode and changes into Prajna form and jumps into the air to overlook the surrounding environment. Her Dash Hit also gains casting distance. But, should Michiko's face be seen by a Survivor, Panic Form will be activated and the skill will lose its effect.`,

            Enhanced_Dash_Hit: stripIndents`Survivor's fear increases Michiko's powers. Michiko can now dash towards Survivors at a higher speed.
            `

        },
        {
            Name: ["The Feaster - Hastur", "hastur", "feaster", "the feaster"],
            Image: "https://i.imgur.com/H7mWC4G.png",
            Href: "Hastur",
            Background: stripIndents`Once a messenger appeared clad in a yellow robe prophesying the catastrophic arrival of a dynasty; this messenger was known as the Feaster, him who Is not to be named. He is the embodiment of calamity and suffering, but those with curious hearts have always tried to seek him out in the hope of being enlightened and learning the truth of the world.`,
            Shape_of_Terror: stripIndents`Terror is generated and Tentacles will appear when a Survivor is injured or when a Teammate is knocked down. Hastur is also able to use the Tentacles to attack nearby Survivors.
            __**Special**__
            Tentacles will decreases nearby Survivors' Decoding, Gate Opening, Vaulting, and Healing Speed.
            
            Tentacles will also disappear faster when there are Survivors tied to Rocket Chairs.`,
            Terrified: stripIndents`Survivors will continuously charge Hastur's Tentacles when they are within the Terror Radius. The more Survivors within range, the faster they charge. Every time it's charged, Hastur will gain a Tentacle summon usage up to 5 times.`,
            Tentacles: stripIndents`Hastur can absorb the Survivors' Terror to charge and summon the Tentacles. Hastur can also release the Tentacles at a specific location by long holding it.
            `,
            Nightmare_Attack: stripIndents`Hastur can control nearby Tentacles. Tap and hold the skill button to hit the nearest Survivor with the Tentacles.
            `,
            Condensation_of_Terror: stripIndents`On top of absorbing Survivors' Terror, Hastur's Tentacles will also gain additional charge over time, up to 5 times.
            `,
            Nightmare_Gaze: stripIndents`Hastur can choose to gaze at a Survivor. After being gazed at by Hastur over 20 seconds, Hastur can tap the skill button repeatedly to attack Survivors with the Tentacle Smash.
            `
        },
        {
            Name: ["Wu Chang - Xie Bi'an & Fan Wujiu", "wu", "wu chang", "wuchang"],
            Image: "https://i.imgur.com/gU5p2ea.png",
            Href: "Wu_Chang",
            Background: stripIndents`Xie Bi'an and Fan Wujiu (the White and Black Guards) had always been like brothers. As they traveled to Nantai Bridge one day, they noticed it was going to rain. Xie Bi'an told Fan Wujiu to wait under the bridge while he returned home to get an umbrella. After Xie Bi'an left, the rain began to pour and the river rose, but Fan Wujiu, reluctant to break his promise, stayed under the bridge. Shortly after, Xie Bi'an returned with the umbrella only to find that the bridge was now submerged and Fan Wujiu was nowhere to be seen... He had drowned.

            Xie Bi'an was so grieved that he had no choice but to live without Fan Wujiu. No matter whether it was rain or shine, he carried the black umbrella during the day and wore white mourning clothes. He eventually committed suicide by hanging himself under the Nantai Bridge and left the black umbrella where Fan Wujiu had stayed.
            
            The umbrella was found by a merchant and placed as a hallway centerpiece in his home. Since then, his family has had strange things happen to them. The black umbrella in the room was often unsupervised. In the middle of the night, the sounds of men sighing fill the hall. Everyone said that White Guard's soul was in the umbrella. Merchants invited a Taoist to get rid of the umbrella to lift the spell on the town. Since then, the house has been calm and quiet. Soon after, the merchants went out, but on the way, they found that the country was in chaos, and that the umbrella was missing.`,
            Dual_Soul: stripIndents`The White and Black Guards had their souls imbued into an Umbrella and their souls can be switched by using Summon. The White Guard excels at patrol and pursuit and moves swiftly but has a slow Stun Recovery and Attack Speed; the Black Guard excels at melee combat and has fast Stun Recovery Speed, but moves slowly.`,
            Summon: stripIndents`Use the skill to switch into Dual Soul mode, or hold down the skill button to charge up and toss the Soul Umbrella forward and then switch to Dual Soul mode and teleport to where the Umbrella lands. The longer you charge the skill the further you can toss the Umbrella.`,
            Infinite_Nirvana: stripIndents`Throws the Umbrella at the target location, where it will stay for 5 seconds. Outlines of Survivors in the area covered by the Umbrella will be shown, with their movement speed and vaulting speed slightly decreased, and other interaction speeds significantly decreased. Outlines of these Survivors will still be shown for 5 seconds after they move outside of the area. For the duration where the Umbrella is active, Wu Chang can choose to teleport to where the Umbrella is and switch to Dual Soul mode, or retrieve the Umbrella to recover skill cooldown. Without the Umbrella, Wu Chang's movement speed and vaulting speed is increase. The Umbrella will return to Wu Chang when the 5 seconds are up.`,
            Siphon_Soul_And_Wavering_Soul: stripIndents`The White Guard's body moves with ease, and when it fully enters the spiritual realm it won't be able to interact with anything for 5 seconds. However, its movement speed is greatly increased and it will siphon the souls of nearby Survivors. If it manages to fully siphon a Survivor's soul, their soul will be lost.
            __**Lost Soul**__
            Bedazzled and unable to interact with the environment.
            When the Black Guard rings the bell and casts Wavering Soul, all survivors that hear the ringing will have to steer their resolve and calibrate with precision. Should they fail the calibration, they will become horrified for 60 seconds; if they fail another calibration during that time, their soul will waver.
            
            __**Spiritless**__
            Movement directions will be reversed`,
            Summon_Enhanced: stripIndents`Reduces the time it takes to switch in Dual Soul mode, and you will immediately perform a powerful Siphon Soul or Wavering Soul upon switching.`

        },
        {
            Name: ["The Photographer - Joseph Desaulniers", "joseph", "photographer", "the photographer"],
            Image: "https://i.imgur.com/qJs1uE1.png",
            Href: "Joseph_Desaulniers",

            Background: stripIndents`Coming from an affluent aristocratic family, Joseph, also known as Ex-Count Desaulniers, was born in France alongside his twin brother, Claude. During the early years of his life, it is implied his family was forced to flee France and move to England, likely because of the mass emigration to Britain during the French Revolution. Not too long after, his brother passed away from illness, and the pain of losing his dear twin and trusted companion caused Joseph to become emotionlessly absorbed with art and photography. He hoped that he would be able to save the appearances of the people and objects he took photos of to liven up his pictures. Despite being arrogant, biased, and overly sentimental, the count was a wealthy and well-respected man, his French accent and elegance alluring to the many people who were willing to model for his hobby. However, suspicions and rumors about the now-elderly Joseph began to spread amongst the maids and workers of the Desaulniers Manor when the population of the hamlet began to drop rapidly. Now seemingly slipping into a dark place, a panic-stricken mob forced their way into Joseph's residence, but the old gentleman was nowhere to be seen. On the wall of his studio, however, were all kinds of lifelike portraits of people that seemed to be looking right at them; it seemed that Joseph's shutter took more than photos, after all.`,

            Camera_World: stripIndents`After Joseph takes a photo with his Camera, he can replicate the Survivors and environment from that moment and create a static Camera World. Joseph can enter the Camera World at will to find a Survivor from that moment and place them upon a Rocket Chair.
            While in the static Camera World, Survivor cannot escape to the Manor or be sent back there from Rocket Chairs; similarly, Survivors in the real world can enter the Camera World through recorded images.
            
            Survivors who do this can decode Cipher Machines for progress but cannot decode them completely.
            
            Those in the Camera World will not apply team buffs or debuffs to Survivors.
            
            __**Special**__
            After the Camera World collapses, half of the changes made within it will be projected onto the real world, and there will be a cooldown during which the Camera cannot be used.`,

            Spacetime: stripIndents`Grants the power of two space-times. Regular attacks deal 1.5x the damage.`,

            Recorded_Moment: stripIndents`A Recorded Moment which can be used while Camera World is active. Joseph may use it to enter and exit the Camera World freely.`,

            Time_Jump: stripIndents`Joseph records the last 15 seconds in time as he moves. Return to your desired point in time by holding down the skill button for the corresponding number of seconds.`

        },
        {
            Name: ["Burke - The Mad Eyes", "bruke", "madeyes", "mad eyes", "the mad eyes", "madeye", "the madeye"],
            Image: "https://i.imgur.com/4GeEaUP.png",
            Href: "Burke_Lapadula",

            Background: stripIndents`As the eldest son of a construction worker, Burke has been playing with design drawings and a wide variety of machines and tools since he was a child. He has a great talent and was well known in the local area when he was twenty. After being employed by a couple, Burke came to the still-destroyed Oletus Manor, taking on most of the architectural work. At the request of the employer, Burke led the workers to continue to expand. At the same time, Burke also joined his own little "hobby" - the institution, and this manor became his secret experimental field.

            It is said that even up until that unfortunate incident this crazy architect was still planning the addition of new devices.`,

            Console: stripIndents`Burke has full authority over Consoles. He can used Consoles on the Map to operate any Control Monitor.
            Survivors can decode Consoles and gain limited access to them when decoded. They expend an increased amount of Energy to use the Control Monitor in the Console's area of influence.
            
            When a Survivor is logged into a Console, Burke is unable to access that Console's Control Monitor and the Console is unable to restore Energy for a period of time.`,

            Control_Monitor: stripIndents`There is a Control Monitor in each Console's area of influence. Drag the thumbstick to move across the Monitor's field of vision and press the screen to raise a Fence in that location. The amount of Energy expended each time this action is performed increases with every Fence raised`,

            Fence: stripIndents`Raising Fences inflicts half the damage of a normal attack upon Survivors in the area. Survivors can vault the Fence using the action button, which will also lower the Fence, inflicting the same amount of damage as a normal attack.
            __**Special**__
            Nearby Fences will become disabled if there are undecoded Cipher Machines, or activated Exit Gates, Consoles, Basements and Rocket Chairs.`,

            Portable_Console: stripIndents`Burke can use the Portable Console to patch into a Control Monitor directly, but using the Portable Console consumes more energy.`,
            Overclock: stripIndents`Can be used on the Control Monitor interface after this ability has been unlocked. The cooldown time and amount of energy consumed will be greatly decreased. This Control Monitor will be unable to restore energy for a period of time after Overclock has been used.`

        },
        {
            Name: ["Yidhra - The Dream Witch", "yhidra", "dreamwitch", "dream witch", "the dream witch"],
            Image: "https://i.imgur.com/jMlTS5i.png",
            Href: "Yidhra",

            Background: stripIndents`It is said that Yidhra has existed on earth before the emergence of the very first microorganism. As billions of years passed, Yidhra acquired a unique ability from the changes that took place around her, devouring creatures to acquire their characteristics. Yidhra can, therefore, divide herself into different aspects, though each part shares her consciousness. Merging themselves with Yidhra gifts her followers eternal life. She often hides her true form through powerful images, with only summoned followers being able to see it.`,

            Hidden_Dream: stripIndents`Yidhra conceals herself in dreams. Her Movement Speed is extremely fast, but she isn't able to interact directly. Survivors will not see her true face;
                And she cones with a Follower that cannot be removed. This Follower follows Yidhra's footsteps and is never far from her.`,

            Follower: stripIndents`Yidhra creates a Follower near a chosen Survivor.
            
            __**Follower**__
            The summoned Follower's existence is dependent on its host and is unable to leave its host.
            
            Attacking Yidhra will cause the Follower to disappear and the Survivors can remove Followers using the Witch Mark.
            
            Followers are affected by Talents and have their own cooldown period for secondary skills.
            
            Follower's movement and directions are controlled by Yidhra and only when Yidhra possesses will it show a Fear Radius.`,

            Witch_Mark: stripIndents`Yidhra leaves a Witch Mark when she creates a Follower. Survivors can pick up the Witch Mark and use it to remove Followers leeching onto self and Teammates. However, removing followers from self consumes more time. For each additional 1/2/3/4 Survivors that Yidhra leeches onto, the time required for a Survivor to remove the Follower leeching onto them will be reduced by 0/5/10/15 seconds. When 0/1/2/3 Survivors have been eliminated (Excluding those who escape), the time required for a Survivor to remove the Follower leeching onto them will be adjusted to 35/30/20/15 seconds.`,

            Leech: stripIndents`Hold the button to select a Survivor without a Leeching Follower, and spawn a Witch Mark and a Follower at the location. The skill cooldown will be decreased when the Follower hits a Survivor.`,

            Preach: stripIndents`Tap on the wheel to control Followers. There is a short cooldown between each control. Followers cannot change targets while casting a skill or attacking.`,

            Assimilation: stripIndents`Significantly decreases the cooldown of Leech skills.`,

            Martyr: stripIndents`Increases control of Followers to significantly increase the Followers' movement radius.`

        },
        {
            Name: ["Robbie White - Axe Boy", "robbie white", "robbie", "axeboy"],
            Image: "https://i.imgur.com/zLYp9Ma.png",
            Href: "Robbie_White",

            Background: stripIndents`Robbie's parents died when he was 6. Therefore, he was put in an orphanage with his sister. Over the years, he found a hobby for wood chopping.The orphanage decided to camp and spend the night in a Iocal forest. The next day, Robbie was found dead, headless under a juniper tree with a bloody axe in his hand.


            ln one night, Robbie had lost his spacious house, comfortable bed, delicious food… and his parents. His life is replaced by endless work and his emotionless boss. But with the help from his sister Dolores, he gradually got used to the work in the yard and gardening became his new hobby. Not much Iater, the White Sand Street Orphanage was taken over by the church and the orphans did not need to work for Iife. Robbie somewhat feIt disappointed about that. However, Dolores didn't need to beg on the street, and nuns were providing warm food for everyone. Robbie’s little hobby seemed less important, after all, his life with his sister was back to the right track. And that was the last memory Robbie could recall. When he woke up under the juniper tree, his sister and the orphanage no longer existed, the only thing left to him is the dead branch on his hand. Robbie could continue on doing his little hobby.`,


            Corrupt_Area: stripIndents`As time goes by, the Peaceful Pine seedlings will grow and expand their roots to form a Corrupt Area. As the seedlings grow, two Resentful Souls will converge unconsciously in the area. When there are multiple Corrupt Areas formed by Peaceful Pines overlapping, a Restful Road will be formed between every 2 Peaceful Pines.
            __**Resentful Soul**__
            Revolves around Peaceful Pines, but when a Survivor who is still mobile leaves the Corrupt Area, Resentful Souls in the Corrupt Area will fly toward the Survivor and revolve around them for 30 seconds. Each Survivor may have a maximum of 2 Resentful Souls revolving around them.
            
            __**Restful Road**__
            A road area formed by the intertwining roots of Peaceful Pines. Robbie receives a large increase in Movement Speed and all Interaction Speed when he is on the Restful Road. When any of the Peaceful Pines at either end of the Restful Road is destroyed, the Restful Road will disappear`,

            Endless_Growth: stripIndents`At the beginning of each match, several Peaceful Pine seedlings will grow in the area, and a maximum of 6 Peaceful Pines can be present in one match.
            Survivors can destroy mature Peaceful Pines to banish the corresponding Corrupt Area and Resentful Souls and either obtain a 30 second window where Resentful Souls won't be able to approach them, or dispel all Resentful Souls on them.
            
            However, destroying a Peaceful Pine will provide with an indication of the Survivor's location. Destroyed Peaceful Pines will leave a branch for Robbie. Robbie can also obtain a branch from a matured Peaceful Pine in order to plant a new Peaceful Pine.`,

            Resurge: stripIndents`When Robbie has a Peaceful Pine Branch, he can use it to grow more Peaceful Pines.
            Special
            
            Once the number of Peaceful Pines in the area reaches the maximum number of 6, the newly planted Peaceful Pines will replace the earliest planted Peaceful Pines.`,

            Dispel_Souls: stripIndents`When Robbie is in the Corrupt Area or close to a Survivor who has been possessed by a Resentful Soul, he can order the Resentful Soul to fly toward him after a short delay.
            During this process, if a Resentful Soul comes in contact with any Survivor, it deals damage equal to a normal attack to the Survivor and disappears right after. If it is absorbed by Robbie, Robbie will gain a temporary speed boost. The disappeared Resentful Soul will reappear in the vicinity of the Peaceful Pine after 30 seconds.`,

            Restful_Road: stripIndents`Robbie summons the roots of a Peaceful Pine to quickly generate a Restful Road from his feet.
            Robbie can also use a branch (long-tap and drag the branch) to enable the Restful Road to extend forward with the branch.
            When the Restful Road reaches the end, a Peaceful Pine will grow.`,

            Corrupting_Breath: stripIndents`When a Survivor who is still mobile leaves the Corrupt Area, they will be shrouded by the Corrupting Breath which significantly reduced their movement speed for 3 seconds.`

        },
        {
            Name: ["Luchino Diruse - The Evil Reptilian", "luchino", "evil reptilian", "evilreptilian", "reptile", "lizard"],
            Image: "https://i.imgur.com/r2J1gJA.png",
            Href: "Luchino_Diruse",

            Background: stripIndents`Luchino Diruse was an outstanding scholar who was fascinated with reptiles. Not soon after getting a rare poisonous snake from his colleague, Luchino has suddenly vanished. In his room, people only found bloody scales on the ground. The strange thing is those giant green scales are rough and hard and don’t seem to belong to any known reptile.`,

            Cursed_Body: stripIndents`Luchino's body has gained great explosive power after mutating, but it consumes Energy every time he leaps. Multiple leaps in the air will consume less Energy, which can be recovered gradually with time.`,

            Preying_Leap: stripIndents`After leaping from the ground, Luchino can make a second leap in the air. If Luchino hits an obstacle while leaping, it will fall from the sky`,

            Crash: stripIndents`Luchino can crash vertically from the air at will.`,

            Lethal_Crash: stripIndents`After leaping to a certain height, tapping on the Skill button again will cause Luchino to drop vertically at high speed, causing damage to the nearest Survivor within crash range and destroying all dropped Pallets withing a range.`,
            Basilisk: stripIndents`Luchino's explosive force will greatly increases the dropping speed.`,

            Mania: stripIndents`Luchino mutates further and is able to leap three times in the air.`

        },
        {
            Name: ["Mary - Bloody Queen", "mary", "bq", "bloody queen", "bloodyqueen"],
            Image: "https://i.imgur.com/DlYk8wk.png",
            Href: "Mary",

            Body: stripIndents`Mary was born in Austria, as she is referred to as "Austrian" in her deduction target Mary, as an impersonation of Marie Antoinette, neglected the citizens of her country in favor of her own luxuries and conspiring with others, which this caused her execution by guillotine in October 1793.`,

            Aqua_Mirror: stripIndents`Mary creates a Mirror Image by using an Aqua Mirror. The Mirror Image ignores collisions and reflects the location, state and motion of the actual body in real-time. It can inflict damage on Survivors, but Survivors can only receive one damage at a time.`,

            Mirror_Image: stripIndents`Summon the Aqua Mirror to generate a Mirror Image of the body. When the image is formed, tap the skill button again to switch positions with the Mirror Image.`,

            Mirror_Rotation: stripIndents`Mary can rotate the Aqua Mirror when a Survivor is within 25m of Mary's Mirror Image to make the Aqua Mirror turn to the nearest Survivor.`,

            Into_the_Mirror: stripIndents`When summoning the Aqua Mirror within a 5m radius of a Survivor, a Mirror Image of the nearest Survivor will be generated; the Survivor's Mirror Image will disappear after the Survivor is hit by Mary.`

        },
        {
            Name: ["Bonbon - Guard 26", "bonbon", "guard", "guard 26", "guard26"],
            Image: "https://i.imgur.com/bcaQQOb.png",
            Href: "Bonbon",

            Background: stripIndents`Burke, the Architect, had failed to make a robot 25 times, and he finally succeeded in the 26th time, which he could be proud of. No. 26 has a high self-awareness, which significantly increased its efficiently, and allowed Burke to have a temporary vacation away from the complex repetitive work, and to develop him a new "body". Gradually, No. 26's self-awareness evolved, and it even had a name--Bonbon.

            Burke was very angry to find out that the efficiency of No. 26 decreased after the over-development of self-awareness, so he replaced the CPU and wrote No. 26 a new program. But strange things happened. No matter how many times he changed the CPU, or how many times he wrote a new program, he would always hear the same phrase after reboot; "Nice to meet you, Bonbon".`,


            Bomb_Chain: stripIndents`Bonbon can store a large number of bombs. It explodes in a cross shape and detonates all bombs within a range.
            
            __**Special**__
            Each bomb only inflicts damage equal to 50% of a normal attack, a Survivor hit by multiple bombs at the same time will only receive damage once.`,
            Time_Bomb: stripIndents`Time Bombs can be placed or thrown. The bomb will explode at the end of the timer, and the timer can be adjusted before the bomb is thrown.`,

            Remote_Controlled_Bomb: stripIndents`Placing or throwing the special Remote-Controlled Bomb, and tapping the skill button again will detonate the bomb. The Remote-Controlled Bomb will detonate automatically once it reaches the time limit.`,


            EX_Bomb: stripIndents`Decreased the charging time of Time Bombs and increased the explosion range of all bombs.`

        },
        {
            Name: ['Ann - "Disciple"', "ann", "disciple", "nun", "the disciple"],
            Image: "https://i.imgur.com/Jl29rQr.png",
            Href: "Ann",

            Background: stripIndents`A strange disease had struck Ann's eyes and made them different from ordinary people. And more unfortunately, with this change, the plague came to the city.

            The epidemic took the lives of her parents, and there were rumors that she was the eye of devil, and it was her who spread the plague. And many angry people began to advocate her to be executed.
            
            Ann began to live in fear, and the ubiquitous death threat shocked her fragile nerves, and led her to believe it herself.
            
            On a moonless night, Ann couldn't sleep for a long time and wanted to go to a Church in search of inner peace. But as she was about to arrive, a wooden stake pierced through her heart, and dying Ann was left lying in the wilderness.
            
            Before she died, she felt that unusual eyes were watching her at the end of the night, but her fading consciousness made it impossible to know whether it was the salvation of miracle or the call of evil.`,

            Shadow_Step: stripIndents`Cat was born in a dark shadow and ignores certain laws of physics. Its body generates an expanding Alert Radius (small) and a Paralysis Area (big) after it splits.
            __**Alert Radius**__
            When a Survivor enters its range, the alerted Cat will refresh its existence time, bite on Survivor's shadow and move with it.
            
            __**Paralysis Area**__
            When Ann enters its range, Cat's strength surges and it confines the movement of all Survivors in the area.
            
            __**Special**__
            Getting confined by Cat multiple times continuously will significantly reduce the confined duration.`,

            Swoop: stripIndents`Ann sends her Cat sprinting in the target direction.
            Tap the skill button again and the Cat will split into two and run in the opposite directions.
            The Cat will split automatically after 5 seconds. After the split, the Cat will exist for 10 seconds.`,

            Catwalk: stripIndents`Ann shares some of her Cat's power through their bond.
            Ann can now sense where the Cat is and dash towards it with alarming speed.`,

            Guide: stripIndents`Ann creates a Command Mark at the target location.
            The Cat will refresh its existence time and come toward the Mark.`,

            Psychic: stripIndents`	Ann assimilates more with her Cat.
            Ann can now dash more quickly and frequently.`

        },
        {
            Name: ["Antonio - The Violinist", "antonio", "the violinist", "violinist", "vio"],
            Image: "https://i.imgur.com/r2j9Xn9.png",
            Href: "Antonio",

            Background: stripIndents`Antonio is a famous violinist who was extremely good at his craft. He could play melodies with only a single string on his violin. It is rumored by others that he struck a deal with the devil to enhance his performances.`,

            Terrifying_Melody: stripIndents`Antonio plays out terrifying music with all the melody in the world.
            Survivors will be infected with multiple stacks of Demon Notes
            
            __**Demon Notes**__
            Survivor's movements are affected by the music resounding in their ears. They need to find a quiet place to calm down. 1/2/3 stack(s) of Demon Notes will decrease Movement Speed by 4%/8%/12%, and decrease Decoding, Healing, and Gate-Opening Speed by 15%/30%/50%.
            
            Where there are no other Survivors within 12 meters, the infected Survivor can calm down through Meditation and remove the effect of Demon Notes.`,

            Sonata: stripIndents`Antonio plays the first Music Note at the target location. He can use his ability to play a second Music Note in 5s.
            The two Music Notes will resonate to generate Terrifying String Music.
            
            __**Terrifying String**__
            Stays on the field for 13s, but only deals damage right when it's generated. Survivors who are hit will suffer damage equal to a normal attack plus 1 stack of Demon Notes.
            When these Survivors touch the same String Music Later, another stack of Demon Notes will be added with no damage suffered. There is a 5s buffer for the String Music to add a stack of Demon Notes to the same Survivor.
            When 2 music notes are more than 24m (horizontally) apart, they will not generate Terrifying String Music.`,

            Rhapsody: stripIndents`Antonio performs for 9s;
            During the crazed performance, he can move during the back swing of normal attacks and charged attacks. His attacks won't collide with scene features. At the same time, he will also send out an additional Terrifying Music Note along with each attack.
            
            __**Terrifying Music**__
            Music Notes that ignore the terrain and keep on flying, adding 1 stack of Demon Notes to the Survivors hit.`,
            Infinite_Movement: stripIndents`Within 20m of the Terrifying String Music's center, Antonio can throw out his bow and pull on the String Music to make it vibrate, creating 10 scattered and fleeting pieces of String Music.
            Survivors hit by the String Music will suffer damage equal to a normal attack. Survivors in the areas between the pieces won't be affected, and Survivors in the areas won't suffer repeated damage from the String Music within 2 seconds.`


        },
        {
            Name: ["The Sculptor - Galatea", "sculptor", "the sculptor", "galatea"],
            Image: "https://i.imgur.com/650Z0zs.png",
            Href: "Galatea",


            Background: stripIndents`Galatea was originally a mediocre sculptor. One day, she received an invitation letter. A mysterious wealthy businessman invited her to his house to make a statue of him. Galatea went there as an appointment and nobody knew about her journey.

            After what happened, Galatea returned, exploding with a strong desire for creation and a dazzling sculpting talent. It seemed that her family was very happy, but gradually, they found out that Galatea often talked to the statues as if they were alive.
            
            One night, Galatea's father discovered that his daughter was talking to the statue. Her enraged father picked up the statue and threw it off the terrace. Galatea jumped down along with it without hesitation, causing her to be diplegic.
            
            Her family thought Galatea was insane so they sent her to a mental asylum. However, Galatea's condition didn't improve. She was beginning to refuse to communicate with living people. She would take everything out that could be sculpted at her hand, carve out the same face and name this face after her own name.
            
            The hospital arranged her in a remote yard, leaving only a female nurse to look after her. One day, the nursing staff did not go to the main building to report Galatea's recent situation to the doctor as per usual. The doctor went to the yard to check on her and found out that Galatea was nowhere to be found and only a complete "masterpiece" was left in the ward.`,

            Sculpture_of_Strength: stripIndents`Galatea's Sculpture can push Survivors by force. Pushing Survivors against obstacles will deal damage equal to half of a normal attack on them.
            Sculptures are generated in pairs and will move towards each other at high speed once they have risen. If they hit an obstacle, they will return in the opposite direction. They will be destroyed if they hit an obstacle 3 times.
            
            __**Special**__
            The generation of Sculptures is restricted by the terrain so that only one Sculpture will be generated when using the ability in certain special terrains.
            
            Survivors will not suffer repeated damage from the Sculpture Crush within 1 second.`,

            Sculpture_of_Wisdom: stripIndents`Galatea summons a pair of sculptures side-by-side at the target location.`,

            Sculpture_of_Agility: stripIndents`Galatea summons a pair of sculptures one in front of another at the target location.`,

            Hieroglyphic_Graveyard: stripIndents`Galatea throws out a weapon toward the target location. Once the weapon lands, a Hieroglyphic Graveyard with a wide range will be generated.
            For the next 16 seconds, Galatea will look down on the Hieroglyphic Graveyard from the creator's perspective and make sculptures inside, during which she can move but not perform most actions such as normal attacks.`,

            Sculpture_of_Nobility: stripIndents`When two different sculptures collide, they will merge into the Sculpture of Nobility and immediately charge towards the nearest Survivor within 36 meters. It will shatter when it hits the target or an obstacle, dealing damage equal to half of a regular attack to all Survivors within a small range.
            If there isn't any targets nearby, the Sculpture of Nobility will shatter immediately upon formation.`

        },
        {
            Name: ["The Undead - Percy", "undead", "the undead", "percy"],
            Image: "https://i.imgur.com/GGsCZLS.png",
            Href: "Percy",

            Energy_Charge: stripIndents`Percy can use his ability to increase his Energy Load. When the Energy reaches 50, Percy will enter an Energy Surge state, during which his ability is enhanced. During Energy Surge state, his normal attack cannot be interrupted by Survivors and can shatter Pallets that have been pulled down. When the Energy Load reaches 100, Percy will enter an Overload state, during which his movement speed is decreased by 8% and he is unable to use any ability for 14 seconds.`,

            Surrogate: stripIndents`Percy is unable to place Survivors on Rocket Chairs. However, the elimination progress of Survivors knocked down by Percy will be increased by 25%, their self-heal limit is raised to 95%, their crawling speed is increased by 200%, and their location is revealed to Percy for 6 seconds when they get back on their feet.
            __**Special**__
            When all of the Survivors are knocked down, the elimination speed is increased by 300%. After the gate's electrical switch it activated, the elimination speed against knocked down Survivors is increased by 300%.`,

            Kinetic_Dash_Hit: stripIndents`Dash forward a short distance and deal damage by launching up a Survivor. The ability ends when he hits an obstacle or reaches the maximum distance. Using this skill increases Energy Load by 10.
            
            __**Energy Surge**__
            This ability cannot be interrupted by Survivors. Tapping the ability button again during the brief launch up period will trigger another hit that deals damage upon hitting a Survivor.`,

            Charged_Strike: stripIndents`A Charged Strike on the ground sending all Survivors within the Range flying. The range expands as the charged duration increases. When the charged duration exceeds a certain threshold, the hit comes with the effect of a normal attack, Using this skill increases Energy Load by 20.
            __**Energy Surge**__
            This ability cannot be interrupted by Survivors. Before the Charged Strike ability ends, holding the ability button again will trigger another Charged Strike.`,

            Energy_Conversion: stripIndents`When this ability is used while Percy's Energy Load is below 50, his Energy Load will increase by 50 and he'll enter Energy Surge. When this ability is used when Percy is in Energy Surge mode, his Energy Load will decrease by 50 and he will exit Energy Surge mode.`

        },
        {
            Name: ["The Breaking Wheel", "bw", "the breaking wheel", "breaking wheel", "breakingwheel", "will brothers", "willbrothers"],
            Image: "https://i.imgur.com/exMkrvC.png",
            Href: "The_Breaking_Wheel",
            Execution_Wheel: stripIndents`The Will Brothers can "assemble" themselves into a wheel:
            In wheel form, they will gain a massive speed boost. When they exceed a certain speed, they can crush pallets, but their ability to change directions is hindered.
            In such form, they can't launch Normal Attacks or perform general interactions and will be immune to control effects
            `,
            Pierce: stripIndents`Survivors who have been run over by the Will Brothers in wheel form will be Pierced:
            Pierce can be stacked up to 3 times. When a Pierced Survivor gets hit by the Will Brothers in human form, each stack of Pierce will transform into Fear equals to half of a Normal Attack. 
            Survivors will need help from others to remove the spikes. For 1/2/3 stack(s) of Pierce, removing the spikes will take 7/10/15 seconds, respectively. 
            For a single Survivor, there is a 3-second interval between each additional stack of Pierce. 
            `,
            Wheel_Of_Silence: stripIndents`In car form, immediately gains an 80% Movement Speed boost.
            The speed boost will gradually diminish over 3 seconds.
            A speed boost can be saved up every 15 seconds for up to 2 times.
            `,
            Reticent: stripIndents`The reticent eldest brother solves problems with actions: 
            In human form, he hurls a nail board toward a specific location. 
            Survivors who step on the nail board will have their Movement Speed reduced by 60% for 2 seconds. If a Survivor who steps on the nail board is stacked with Pierce, they will be confined for 2 seconds instead. The nail board will stay on the field for 10 seconds.
            `,
            Wheel_Of_Impalement: stripIndents`In car form, the middle brother will push out spikes from both sides, extending Pierce's hit range for 10 seconds.`,
            Pessimistic: stripIndents`The pessimistic middle brother affects others with his emotions: 
            In human form, controls spikes and inflicts Pierce on all Survivors within 18 meters.
            `,
            Wheel_Of_Destruction: stripIndents`No one could stop the Breaking Wheel on it's track: 
            An additional 1 speed boost can be saved in car form.
            `,
            Ridicule: stripIndents`The younest brother loves to ridicule those who are confused and disturbed:
            Upon switching from wheel form to human form, tosses out numerous spikes within a 12 meters radius, inflicting 1 stack of Pierce to Survivors.
            `
        }
    ],
    Survivors: [
        {
            Name: ["survivors", "survivors", "the survivors", "ths survivor", "surv", "survs"],
            Link: "https://i.imgur.com/ZA35VWa.png",
            Hex: "0x15f153",
            Footer: "The Survivors - Page $index of $length — Information taken from Identity Gamepedia"

        },
        {
            Name: ["The Lucky Guy", "lucky", "the lucky guy", "lucky guy", "luckyguy"],
            Image: "https://i.imgur.com/eGervs8.png",
            Href: "Lucky_Guy",
            Background: stripIndents`His world is like a slot machine that he always wins at. But who knows what will happen when he stops playing.

            Besides some basic information, nothing is known about Lucky Guy, not even his real name. He is right-handed and of average height.`,
            Lucky_Guy: stripIndents`It is perfectly normal for someone with nothing to rely on luck.
            Wishing for an Item before opening a Chest will significantly increase your chances of receiving it. Meanwhile, Chest Opening Speed will also increase by 60%.`,
            Veterans: stripIndents`Veterans are much more vigilant than novices and gain an additional 2 second boost when hit.`
        },
        {
            Name: ["Emily Dyer - The Doctor", "doc", "doctor", "emily", "the doctor"],
            Image: "https://i.imgur.com/VuvBfk9.png",
            Href: "Emily_Dyer",
            Background: stripIndents`She is ambitious and extremely clever, yet unobtrusive. But she is not all she seems. To survive in this crazy world, you have to do something out of the ordinary. Tired of constantly moving around, Emily hopes to use this chance to find a place she can call "home" and ultimately enjoy a life of security and stability, one that she has never had. But before that, she needs to solve a few "problems" from her past.

            Emily Dyer, who was born in a middle-class family did not feel stable. During that time, she tasted the changes and displacements of life. She was tired of the life of relocating and wanted to find a stable life. She was eager for stability and security. But often, the normal state of life is to ask for nothing. The originally clever and lovely Emily slowly became dull and weak. Her original lovely big eyes were gradually lost from the glory of the past. She wanted to survive in this cold world, but she became ambitious, cold, and greedy.
            
            Lydia Jones opens "The Lydia Jones Clinic", but it loses money. Lydia goes against her methods in an effort to raise money; she begins to provide private medical services for female patients. This was successful for the clinic. But one day, a woman was found dead on the operating table. The doctor had left her there after performing an illegal surgery.
            
            Lydia Jones changes her name to Emily Dyer.
            
            At the manor, Emily Dyer meets Emma Woods and Kreacher Pierson. She dislikes Mr. Pierson, and hopes that Emma stays away from him. She recalls operating on Emma in the clinic years prior,[3] whose name had been Lisa Beck at the time. Emma adores Emily and Emily in turn feels a very strong protective love over her, as shown by the quote from the game’s map "White Sand Street Asylum": "Lydia will stand by Lisa forever and ever."`,
            Med_Master: stripIndents`Carries around a syringe and can heal herself when wounded.
            
            __**Exclusive**__
            The Doctor can heal fatal wounds quickly. Whenever the syringe is used to heal herself, her Fear is reduced by 25% and the time required for self-healing is reduced by half.
            
            Due to her medical background, syringes are not depleted when used.`,
            Med_Elite: stripIndents`Can detect and heal even the slightest injuries. The speed of healing others is increased by 60% and self-healing speed increased by 20%. All Teammates' healing speed is increased by 5%.`,
            Haughty: stripIndents`Physically weak. Vaulting Speed is decreased by 10%.`,
            Veterans: stripIndents`Veterans are more vigilant than novices and gain an additional 2 second boost when hit.`

        },
        {
            Name: ["The Gardener - Emma Woods", "gardener", "emma", "lisa", "the gardener", "emma woods"],
            Image: "https://i.imgur.com/QJ5jeEJ.png",
            Href: "Emma_Woods",
            Background: stripIndents`Emma Woods was born as Lisa Beck to a factory owner around 1887. Her father made her small toys and treated her well. However, her father was severely in-debt with the factory that he was tricked into buying by the Lawyer after he ran off with the factory owner’s (Leo Beck) wife. He burned himself in the fire after sending Lisa to an orphanage, where she stayed for five years.

            The orphanage resulted in children suffering from psychological trauma and various disorders, so Lisa was sent away to a clinic. At the clinic, she was operated on by Dr. Lydia Jones who also used electroconvulsive therapy on her. After this, Lisa fled and changed her name to Emma Woods.
            
            At the manor, Emma meets Emily Dyer (formerly Lydia Jones) and Kreacher Pierson. Kreacher acts very predatory towards her and slaps her when she rejects him. She is saved from Kreacher’s advances multiple times by Emily. She is very close with Emily, and calls her “my angel”. Emma was getting closer to her very quickly. She also shows an attachment to a scarecrow. She is diagnosed (by Emily herself) to have a combination of unhealthy obsessions with objects, hypochondria, and possibly Dissociative Identity Disorder`,
            Ingenuity: stripIndents`Carries around a Toolkit that is used to destroy Rocket Chairs. Hunters are able to repair destroyed Rocket Chairs. The Toolkit has a 12 second cooldown after each use.
            
            
            __**Exclusive**__
            Due to the Gardener's basic repair skills, Toolkits are not depleted when used.`,
            Protection: stripIndents`With the memories of the past, the Gardener is able to block one incoming damage during the first 50 seconds of the game. This effect expires when attacked by the Hunter or when the duration ends.
            
            
            __**Recall**__
            20 seconds after the memories are gone, the Gardener can Recall on the spot for 2 seconds to regain her memories for another 5 seconds. Each successful Recall will delay the next Recall by 10 seconds.`,
            Confidence: stripIndents`Due to her familiarity with the structure of Rocket Chairs, Gardener is less scared and is able to locate Rocket Chairs nearby. When she's near the Rocket Chair, her Vaulting Speed is increased by 10% and Rocket Chair's Takeoff Speed is decreased by 10%. Gardener will also leave Rocket Chairs with irreparable damage when destroying them so that their Takeoff Speed is decreased by 10%.`,
            Veterans: stripIndents`Veterans are more vigilant than novices and gain an additional 2 second boost when hit.`
        },
        {
            Name: ["The Lawyer - Freddy Riley", "lawyer", "freddy", "freddy riley", "the lawyer"],
            Href: "Freddy_Riley",
            Image: "https://i.imgur.com/ZidsVw4.png",
            Background: stripIndents`Since a botched lawsuit, Freddy has been toiling away at a menial job with a pathetic wage. But he hopes to find a way to escape his past and live the life he has never had: he dreams of receiving a huge bonus, or an opportunity to become a partner in a law firm. Of course, first he needs to find the culprit who ruined his perfect life.`,
            Foresight: stripIndents`Carries around a map that can be used to check the locations of Cipher Machines that haven't been decoded, Exit Gates, Survivors and Hunters.
            
            
            __**Take Notes**__
            Out of good professional practice, the Lawyer records key points while decoding a Cipher Machine. Once the process reaches 100%, the Decoding Speed of the Lawyer in possession of the map will increase by 20%.`,
            Heartless: stripIndents`With lies running through his blood, Lawyer is never shaken by Terror Shock in any interactions.`,
            Haughty: stripIndents`Physically weak. Vaulting Speed is decreased by 10%.`,
            Veterans: stripIndents`	Veterans are more vigilant than novices and gain an additional 2 second boost when hit.`
        },
        {
            Name: ["The Thief - Kreacher Pierson", "theif", "kreacher", "thief", "kreacher pierson"],
            Href: "Kreacher_Pierson",
            Image: "https://i.imgur.com/mV2tbpg.png",
            Background: stripIndents`After handing over control of the orphanage on White Sand Street to the Church, Kreacher hasn’t indulged in extravagance. His thoughts have since been preoccupied on whether he should try to help more children, but perhaps it’s time others help foot the bill. He also took in Emma Woods (Gardener) into the orphanage as soon as she was sent there.`,
            Cunning: stripIndents`Carries around a flashlight and can make Hunters unable to use skills for a period of time by shining light on them for a certain time. Continue to shine the light on hunters and they will lose the ability to move.
            
            
            __**Exclusive**__
            An ample power supply allows him to use the Flashlight for 50% longer.`,
            Flexibility: stripIndents`His flexibility allows him to vault over obstacles quickly as he runs.`,
            Hoarder: stripIndents`Old habits die hard. He often steals parts when decoding. The chance of triggering a Calibration for all Teammates is increased by 10%, and the scope of success decreased by 10%.`,
            Lock_Pick: stripIndents`A talented lock pick. Thanks to him, all members' Chest Opening Speed is increased by 100%.`

        },
        {
            Name: ["The Magician - Servais Le Roy", "magician", "servais", "the magician"],
            Image: "https://i.imgur.com/F6IYTSw.png",
            Href: "Servais_Le_Roy",
            Background: stripIndents`Servais Le Roy began his magic career in Belgium and moved to London to open his own magic shop. Despite his proficiency in disappearing tricks, he has not gained approval from the public. In Oletus Manor, which has produced countless famous artists, could he find some new inspiration?`,
            Illusion: stripIndents`Carries around a wand that can be used to create an Illusion that grants him invisibility for several seconds.
            
            
            __**Exclusive**__
            Due to the Magician's unique ability, his Movement Speed is increased by 40% while invisible, and Terror Shock won't be triggered when hit.`,
            Dexterous: stripIndents`Has extremely dexterous hands. The chance of triggering a Calibration is decreased by 20%, and the scope of success is increased by 20%.`,
            Real_or_Fake: stripIndents`The Magician's deceptive performances lead his Teammates to question the identity of the man on the chair. Rescue time is increased by 40% when rescuing the Magician from a Rocket Chair.
            The Magician will instantly use Escape Artist upon being rescued from a Rocket Chair and leave an Illusion on the chair to make himself invisible for 2 seconds.`
        },
        {
            Name: ["The Explorer - Kurt Frank", "explorer", "kurt"],
            Image: "https://i.imgur.com/QF79Xt6.png",
            Href: "Kurt_Frank",
            Background: stripIndents`Kurt is an experienced explorer, passionate about exploring the limits of humanity. He has sailed across the English Channel, flown over old-growth forests in a hot air balloon, and, of course, joined a life-or-death game. As a master of survival, maybe he has a good shot at winning?

            The adventurer Kurt-Frank was born in Yorkshire, England. After he was born, he moved with his parents and immigrated. He went from England to Italy, then to France, and back to the UK, constantly moving through a variety of adult travelers. This unique experience made Kurt feel like a migratory bird, forming a typical escaped personality, and it was difficult to concentrate. Every day, he was obsessed with reading novels about ancient artifacts and expeditions, such as the classic Gulliver's Travels. He always thought that he was a great adventurer.
            
            The adventurer Kurt is good at sailing and hot air balloon driving, and because he had been reading Gulliver’s Travels, he goes out almost every day. He brings the book with him since Kurt wants to be as small as the protagonist.`,
            Fantasy: stripIndents`Carries around the novel Gulliver's Travels and can turn into a tiny Lilliputian after reading it. He is undetectable by the Hunter's "radar" after shrinking, but cannot perform most actions.
            __**Exclusive**__
            Gulliver's Travels records the location of the treasure. Activate Treasure Hunt when you turn into a tiny Lilliputian. Reach the indicated burial location to unearth Password Page. The Password Page allows you to quickly decipher the Cipher Machines when it reaches 50% progression, and also provides you a hint on Hunter's whereabouts. The Explorer can carry up to 2 Password Pages with him. When the Explorer is placed on the Rocket Chair, the Password Pages will drop to the floor, and other Survivors can pick them up. Each scene could indicate up to 3 treasure burial spots.
            The Explorer has heightened senses when transformed into a tiny Lilliputian and can tell the incoming direction of Hunters within a certain radius.
            His love of books allows him to use this ability without depleting it.
            

            __**Duo Hunters Mode**__
            A single Password Page will only grant 35% Decoding Progress, and up to 6 locations with hidden treasure will be generated on the Map.`,
            Explore: stripIndents`Possesses superior survival skills and knows how to hide his tracks. His tracks last for 1 second less. Also, vaulting obstacles will not alert the hunter.`,
            Curiosity: stripIndents`Can hardly control his curiosity and tends to attempt risky operations when decoding. The chance of triggering a Calibration is increased by 30% and scope of success decreased by 30%.`,
            Energy_Reserves: stripIndents`After plenty of rest the Explorer is ready to Dash Hit. Stop moving for 10 seconds to increase your movement speed by 10% for 5 seconds.`

        },
        {
            Name: ["The Mercenary - Naib Subedar", "merc", "mercenary", "naib"],
            Image: "https://i.imgur.com/Lkhq7cR.png",
            Href: "Naib_Subedar",
            Background: stripIndents`Although not tall and physically strong, Naib is like most Gurkhas, and the rugged terrain has trained their strong physiques and indomitable spirits. Naib used to be a soldier for the East India Company, but because he believed in the idea of ​​equality for human beings, his dislike of war reached its peak and refused to sell for the British. He then became a free mercenary, but he has long since left his bloodthirsty life after retirement. Perhaps a dangerous game can give him the same experience on the battlefield?`,
            Iron_Dash: stripIndents`Possesses Elbow Pads, which trigger upward Dash Hit boost when he propels himself off a passing wall.
            
            __**Exclusive**__
            The Mercenary's excellent technique makes his Elbow Pads more durable and can be used more times (4 times). When others pick up the Elbow Pads left by the Mercenary, they can only use them for 3 times.` ,
            Skilled: stripIndents`Military trained. Obstacle Vaulting Speed is increased by 10%.`,
            Steel_Will: stripIndents`The Mercenary has tempered his spirit through battle. The Countdown Speed of Rocket Chairs he is fastened to is reduced by 30% and the increase of fear is delayed by 15 seconds. He cannot be incapacitated until his fear exceeds the limit. His reaction to normal attacks is delayed by 15 seconds.`,
            Shell_Shocked: stripIndents`Scarred by the effects of war, the Mercenary panics when he hears the noise produced by Cipher Machines and his Decoding Speed decreased by 25%. When there are more than one Mercenaries in the game, the memories they share intensify the panic and each additional Mercenary reduces their Decoding Speed by 10%, up to 55%. Warfare has also left the Mercenary with refractory wounds that will be aggravated by new wounds. Time to be healed is increased by 20% and can reach 100%.`
        },
        {
            Name: ["The Coordinator - Martha Behamfil", "coordinator", "coord", "martha"],
            Image: "Martha_Behamfil",
            Image: "https://i.imgur.com/3enRTe1.png",
            Background: stripIndents`Martha was good at riding and shooting when she was young and attained the rank of captain after joining the cavalry. Not content to just gallop on horseback, Martha learned basic piloting skills and fell in love with flying. She quit her position in the cavalry and joined the Air Force. However, instead of becoming a pilot, as she had wished, Martha was required to perform signal guide work on the ground. To fly her own plane, she has to find a reliable "sponsor ".`,
            Precise_Aim: stripIndents`Carries a Flare Gun and can stun Hunters by shooting them.
            
            
            __**Exclusive**__
            Uses the gun with deadly accuracy.The speed at which Hunters recover when stunned after hit with a Flare Gun is decreased by 30%.`,
            Steel_Will: stripIndents`With a mind strengthened by military training. The Rocket Chair countdown is decreased by 10%.`,
            Army_Bond: stripIndents`In remembrance of fellow comrades, Movement Speed increases by 5% whenever a Teammate is on a Rocket Chair. Whenever a Teammate is tied to a Rocket Chair, Decoding Speed will be reduced by 30%.`,
            Skilled: stripIndents`Military trained. Obstacle Vaulting Speed is increased by 10%.`
        },
        {
            Name: ["The Mechanic - Tracy Reznik", "mec", "mechanic", "tracy"],
            Image: "https://i.imgur.com/rjQ0f4R.png",
            Href: "Tracy_Reznik",
            Background: stripIndents`Having been wrapped up in her "useless" little inventions and obsessed with gunpowder experiments, the Mechanic Tracy was soon in debt because of the high cost of these experiments. The invitation letter promised a golden prize, but what truly attracted Tracy were the secret gadgets in the manor…`,
            Operator: stripIndents`Carries around a life-size Doll, which can be destroyed with a single strike.
            
            
            __**Exclusive**__
            When the Mechanic's Doll is being controlled, or when it's not being controlled but is decoding a Cipher Machine, its durability will deplete. Love for the Doll reduces its Depletion Speed by 33%. The Mechanic can control the deployed Doll when incapacitated or when placed on a Rocket Chair, but at a higher cost. Control will be interrupted if the Mechanic is rescued.`,
            Fragile: stripIndents`Physically weak. Obstacle Vaulting Speed is decreased by 30%.`,
            Mech_Master: stripIndents`Her proficiency in machine building and various mechanical traps increases her Cipher Machine Decoding Speed by 25%. When operating a Doll, its decoding speed is also increased by 25%. The Mechanic's Teammates can also learn some mechanical skills from her and become 3% faster at decoding Cipher Machines.`,
            Cowardly: stripIndents`Years of her indoor work have exacerbated the Mechanic's timidity. The Mechanic becomes scared when a Teammate is wounded or placed on a Rocket Chair; therefore, her Decoding Speed is decreased by 45% and her Gate Opening Speed is decreased by 15%. This effect can be stacked up to 2 times.`
        },
        {
            Name: ["The Forward - William Ellis", "forward", "william", "william ellis"],
            Image: "https://i.imgur.com/iE3TWb6.png",
            Href: "William_Ellis",
            Background: stripIndents`Rugby football is attracting attention, but William Ellis, who claims to be the founder of this new sport, is being forgotten. He joined a small rugby club, but not everything went his way. Can the owner of Oletus Manor help him?`,
            Rush: stripIndents`Carries around a Football. He dashes forward with his Football, but will be stunned when exhausted.
            
            
            __**Exclusive**__
            The Forward's superior physique enables him to knock the Hunter off balance after dashing a short distance. If the Hunter is knocked into other objects, they will be stunned for a longer period of time.`,
            Athletic: stripIndents`Athletically gifted and monstrously strong. Obstacle Vaulting Speed is increased by 20%, and Pallet Pulling Speed in increased by 50%. The Recovery Speed of Hunters stunned by the Forward is decreased by 15%.`,
            All_Thumbs: stripIndents`Clumsy and terrible with machines. Decoding Speed is decreased by 30%`,
            Struggle: stripIndents`His peak physical condition makes it easier for him to escape the Hunter's clutches. Struggling Speed is increased by 10%.`
        },
        {
            Name: ["The Mind's Eye - Helena Adams", "mindseye", "themindseye", "helena", "the minds eye", "the mind's eye", "mind's eye"],
            Href: "Helena_Adams",
            Image: "https://i.imgur.com/nBkKGo3.png",
            Background: stripIndents`Helena lost her vision in a fever when she was 1 year old, but she still learned how to read and write from her parents and a tutor. However, Helena has a greater ambition: getting a college degree. Can the owner of Oletus Manor pay for her tuition? That's what the braille invitation letter suggested, at least.`,
            Echo: stripIndents`Continuously detect nearby Hunter's location while moving. Using the skill will allow players to know the Hunter's location on the entire Map.
          

            __**Tap Tap**__
            Uses the sound waves produced when she taps the ground with her Cane to locate the position of the Hunter.
            

            __**Strike**__
            When she strikes the ground with her Cane, a sound wave sweeps across the Map revealing the Hunter's position, which is shared with Teammates. Decoded Cipher Machines and moving Teammates can also be detected.`,
            Minds_Eye: stripIndents`Blindness has sharpened the other senses of The Mind's Eye. When she decodes Cipher Machines, almost no Calibrations are triggered and her Decoding Speed is increased by 30%.`,
            Fragile: stripIndents`Physically weak. Obstacle Vaulting Speed is decreased by 30%.`
        },
        {
            Name: ["The Priestess - Fiona Gilman", "fiona", "priestess", "fiona gilman"],
            Image: "https://i.imgur.com/36AD8iN.png",
            Href: "Fiona_Gilman",
            Background: stripIndents`Fiona Gilman was born into an unknown class, interested in occultism and geography. As a mystic, she claims to be a follower of the time and space of Cthulhu mythology, Yog-Sothoth. She carry’s with her a strange metal ring. She claimed that the Lord led her to Oletus manor, and the “Holy Key”, as she calls the ring, is evidence. Nobody believes her though. However, she is sure her team would be transfixed by the divine power inscribed in her ring.`,
            Holy_Key: stripIndents`Creates a Passage between self and Teammates. Other Survivors crossing the Passage will leave a Residual Image that can be attacked by hunters
            The Priestess carries the Holy Key around and can choose to generate either a Straight Passage or an Ultra-Long Passage. Both Passages created will not lead to contaminated earth or areas, and Hunters can destroy Passages.
            

            __**Straight Passage**__
            Both Survivors and Hunters can pass through. Passages entered by Hunters will be destroyed after they squeeze through. At the same time, the Hunter will be stunned for a short period of time, and the stun duration increases with the Passage's length.
            

            __**Ultra-Long Passage**__
            Survivors entering the Portal will be quickly transported to the other side after a few seconds. A residual image of Survivors that use the Ultra-Long Passage will remain at the entrance of the Passage when using it. The time they remain is determined by the length of the Portal.
            Hunters can attack these images. When the images are attacked, the damage and special effects inflicted are transferred to the Survivor (with some delay), and the Survivor becomes visible for 10 seconds.
            Hunters cannot pass through the Ultra-Long Passage.`,
            Fragile: stripIndents`Physically weak. Obstacle Vaulting Speed is decreased by 10%.`,
            Spiritualist: stripIndents`Unfamiliar with technology. Cipher Machine Decoding Speed is reduced by 10%. The chance of triggering a Calibration and the difficulty of the Calibration while decoding Cipher Machines are increased by 30%.`,
            Blessed: stripIndents`The Priestess has sworn to guard the Holy Key for eternity. Therefore, no other Items can be carried. Protected by faith, all Teammate's healing time is decreased by 10%, and the time it takes for Priestess to heal is decreased by 30%.`
        },
        {
            Name: ["The Perfumer - Vera Nair", "perfumer", "vera"],
            Image: "https://i.imgur.com/sH20z0i.png",
            Href: "Vera_Nair",
            Background: stripIndents`Vera is a perfumer from Grasse, France. After years of searching, she received inspiration from a mysterious perfume recipe and created 'Euphoria', Which also came with a letter from an Oletus manor, a perfume that helps you to forget about your worries. Unfortunately, the aroma doesn't last long enough. She has no other choice but to go to the source of the formula and find a way to improve it. Hopefully the owner of the manor can help her to relieve all of her worries. Her real name isn't Vera Nair, But Chloe Nair. Vera was her Late sisters name, who's Identity she now goes by after murdering her. She did this because she flew into a jealous Rage when Vera took her perfume that she made and took credits for it. After Vera Opened a Perfume shop under Chloe's Name and used her Recipe's. Unbeknownst to Her, Vera was only trying to advertise for her, as no one liked Chloe and everyone loved Vera, and she wanted everyone to recognize Chloe's skill. Chloe soon realized Vera was only trying to help, and that she murdered the only person who truly loved her. This is why she went to the manor to seek the Recipe to make Euphoria last longer, Because all she wants to do is forget.`,
            Euphoria: stripIndents`First use will record the state and location at the moment, and using it again will return players to the previous state and location.
            The Perfumer sprays some Euphoria Perfume and enters an immersed state. She is able to remember her condition and position at that very moment. While the skill is active, she can choose to forget what has just happened and return to the moment when she sprayed her Perfume.
            
            __**Exclusive**__
            As the maker of this Perfume, the Perfumer can use this item more times than other Survivors. When others pick up the Perfume left by the Perfumer, they can only keep up to 2 bottles.`,
            Blackout: stripIndents`The Perfumer often wears Euphoria. If she has a blackout and fails to calibrate a Cipher Machine, calibration progress will be reduced 3 times as much as normal Survivors.`,
            Special_Physique: stripIndents`The Perfumer is very sensitive to scents and doesn't like the smell of medical equipment. Time to be healed is increased by 30%.`

        },
        {
            Name: ["The Cowboy - Kevin Ayuso", "cowboy", "kevin", "cowboish", "kevin ayuso"],
            Image: "https://i.imgur.com/767H2oa.png",
            Href: "Kevin_Ayuso",
            Background: stripIndents`A cowboy from the North America who befriended a young girl from an native American tribe when he was younger and learned how to use the lasso. Many years later, he was saved by the native Americans when he suffered misfortune and the passionate Kevin Ayuso remained with the tribe. But good things never last and the tribe died out. He didn't want to stay, so he decided to roam the European continent.`,
            Lasso_Skill: stripIndents`Charge to increase hit rate. Hooked Teammates will gain acceleration effect.
            The Cowboy is proficient in using the Lasso. When a Teammate is lassoed, they are placed on the Cowboy's back. If the Hunter is lassoed, the Cowboy will fly past the Hunter's head and land on the other side taking no damage in the process. If a Pallet or Cipher Machine is lassoed, the Cowboy will be pulled towards it.
            The Cowboy can lasso and save Teammates tied to Balloons and Rocket Chairs. After the Cowboy lassoes a Pallet, Cipher Machine, Hunter, or Survivor, he will receive and acceleration boost.
            
    
            __**Consumption**__        
            The energy spent when using the Lasso depends on what is lassoed. Lassoing Teammates tied to Rocket Chairs and Balloons require a lot of energy, lassoing Pallets and Cipher Machines requires certain energy, while only a little energy is required for other lassoed items.`,
            Hero: stripIndents`	The hero on horseback is both brave and tough. When he hits a Hunter with a Pallet, it is stunned for 20% longer than normal.`,
            Wild: stripIndents`As he is free, undisciplined, and dislikes complex machines, he decodes 10% slower than other Survivors; however, when he decodes together with a female character, his urge to impress garners him 10% increased decoding speed. He feels exceptionally exhausted while decoding with males and decodes 30% slower.`,
            Protective: stripIndents`If hit by the Hunter while carrying a female, his strong protective instincts kick in and the Cowboy will take damage twice (the Teammate won't take damage). If carrying a male, both Survivors will take damage once.`
        },
        {
            Name: ["The Female Dancer - Margaretha Zelle", "dancer", "femaledancer", "female", "margaretha", "female dancer", "the female dancer"],
            Href: "Margaretha_Zelle",
            Image: "https://i.imgur.com/xFQGcbX.png",
            Background: stripIndents`Margaretha is a gorgeous dancer and is used to the good life. After an accident, however, she lost her husband, and with him all financial security. Margaretha, not knowing how to making a living, has gained a new understanding of "freedom". How could she pass up an opportunity to become a millionaire?`,
            Duet: stripIndents`Switch between music types and place Music Boxes around to slow down the Hunter's Movement Speed or increase the Movement Speed of your Teammates and yourself.
            She possesses a Music Box that plays two pieces of music in a different tempo.
            The fast setting of the Music Box can increase the speed of actions and interactions (including Movement, Pallet, and Window interactions, decoding, Rocket Chair countdown, etc.) of Survivors (excluding Hunters) within hearing range of her music.
            The slow setting of the Music Box can reduce the speed of actions and interactions (including Movement, Pallet, and Window interactions, attack, Abilities, etc.) of Hunters (excluding Survivors) within hearing range of her music.
            The effect of the music is enhanced when the music of the same tempo is stacked.
            
          
            __**Lingering Sound**__
            Characters will remain affected by the music for 2 seconds despite leaving the range of the Music Box.`,
            Acrobatics: stripIndents`The Dancer, a circus-raised performer, is skilled and graceful.
            When she falls from a height, she gains 30% increased Movement Speed for 3 seconds. Has a 40 second cooldown.`
        },
        {
            Name: ["The Seer - Eli Clark", "seer", "eli", "eli clark"],
            Image: "https://i.imgur.com/R2KgQ5k.png",
            Href: "Eli_Clark",
            Background: stripIndents`From an early age, Eli could see "visions" and interactions with these visions caused Eli to view the world with an all-new perspective. However, this ability didn't improve his finances and a promise he made to his fiancée forced him to accept the invitation from Oletus Manor. Will his marvelous ability help him overcome his financial difficulties?

            Eli became blind “After revealing the future to them who shall not know it.” Due to his ability, him and his owl share a contact that allows him to see and know his surroundings.
            
            However, his Diary Deduction is entirely different, due to being released after the intentional idea of a "Fortune Teller". This background, however, remained unchanged.`,
            Owl: stripIndents`Observes other Survivors and blocks incoming damage.
            Continuously staring at the Hunter will grant additional item stacks.
            The Seer is accompanied by his trusted Owl.
            When the match begins, the Owl will patrol the map and mark the position of all his Teammates. When the Owl returns, the Seer can order his Owl to follow a Teammate's scent, find them and grant a vision of them. The Owl can be ordered to block damage for a period of time at critical moments.
            If the Seer or his Owl continues to observe the Hunter while it commits atrocities, he will gain additional block attempts.`,
            Prophesy: stripIndents`The Seer's potent ability to anticipate the future enables him to see the Hunter's position for 5 seconds after spotting them.`,
            Great_Eye: stripIndents`The Seer can see the Hunter's position for 5 seconds when the match begins.`,
            Taxing: stripIndents`Whenever the Seer's Owl blocks damage for himself or a Teammate, the speed at which the Seer vaults obstacles is reduced by 10%.`
        },
        {
            Name: ["Aesop Carl - The Embalmer", "embalmer", "aesop", "aesop carl"],
            Image: "https://i.imgur.com/dBKjdTx.png",
            Href: "Aesop_Carl",
            Background: stripIndents`The end of the journey of life is always the same, and Aesop Carl is the ultimate destination for most people's dreams. He strictly follows each step of the procedure and gives the greatest respect to those who arrive at the terminal. So when he found the letter in a beautiful traveler, Aesop decided to complete his last wish for the unfortunate mother.

            "On August 7, 1888, I ushered in a female body, she was stabbed 39 times in the face with a knife. She was unrecognizable. I opened my suitcase. This is the tool I rely on to survive. I can make the dead return to life. I worked hard to fix her face. She might have been a beautiful and wealthy woman during her lifetime. I groped for her pocket and found an invitation and another letter. The letter seemed to be for her daughter, and contained a photo. Probably, following this invitation, she could find her daughter. I don't know why, but I decided to accept the invitation as my own. I should return this letter to her daughter at the manor." (As Aesop Carl was a "fan-designed" character before it got chosen by NetEase, this paragraph of description was from the original designer instead of the official record from Identity V. It seemed to be partially contradicting Aesop's deduction for some details about the reason he went to the manor do not match up. Please be noted.)`,
            Embalm: stripIndents`Rebirth is cast on self by default, so players are able to save themselves when they're knocked down or placed in a Rocket Chair.
            The Embalmer carries his Makeup Box everywhere. Opening it will summon a Coffin with a surrogate in it and immediately provides the Rebirth ability.
            When a player with the Rebirth ability is knocked down or placed on a Rocket Chair, the Embalmer will have 3 seconds to make a choice. Selecting "Rebirth Now" will immediately cause the player to enter the Rebirth process, while retaining the effects and the current Coffin. When no selection is made, the Rebirth process will start by default. The Embalmer can summon a Coffin where he stands.
            

            __**Rebirth**__
            When a player is knocked down or placed on a Rocket Chair, they can be resurrected in that Coffin using a surrogate and also receive the Tide Turner effect for 15 seconds. When the Exit Gate is opened, a player using Rebirth will no longer receive the Tide Turner effect. Every time a teammate rescues a teammate from a Rocket Chair, the number of Coffins that the Embalmer can summon will increase, but an Embalmer can only summon and use one Coffin at a time.`,
            Artist: stripIndents`The Embalmer can record and copy the appearance of other Survivors onto surrogates. The Survivors whose appearance was copied will receive the Rebirth ability. Once the Embalmer finishes copying their appearance, he will lose his own Rebirth.`,
            Unconcerned: stripIndents`The time that the Embalmer can persist for when wrapped up in a Cocoon or placed on a Rocket Chair is increased by 10%. The Embalmer cannot embalm Survivors who have lost mobility, who have been placed in a Rocket Chair several times or who have been placed in a Rocket Chair for a long time.`,
            Anxious: stripIndents`Extremely sensitive to the presence of others. He is able to detect the presence of all Survivors at the beginning of the game for 15 seconds. While deciphering with other Survivors, his own Deciphering Speed is decreased by 15%.`
        },
        {
            Name: ["The Prospector - Norton Campbell", "prospector", "norton", "norton campbell"],
            Image: "https://i.imgur.com/aDmgfTK.png",
            Href: "Norton_Campbell",
            Magnet: stripIndents`Throws a Magnet at the Hunter and switches the polarity to Repel or Attract Hunters to objects and stuns them.
            The Prospector carries a Meteorite Magnet with him. The thrown out Magnet will attach itself to players nearby, causing positive/negative polarities that last for 20 seconds;
            if players with Magnet are close to each other, a link will be triggered; getting closer will trigger Attraction or Repulsion, and getting further will break the link;
            if a Hunter breaks the link, the polarity will lose its effects.
            The strong magnetic force of the magnet field will also cause polarized players to become stunned when they collide with objects. The further the distance of the Repulsion and Attraction before impact, the longer players will be stunned.
            
       
            __**Exclusive**__     
            The Prospector has permanent polarity and Magnets will not attach to him. The polarity of other players will disappear after 1 Repulsion or Attraction. The Prospector can switch the polarity of the Magnet and his own polarity at any time.`,
            Outdoor_Skills: stripIndents`Exploration in the wilderness has made the Prospector physically strong. Healing Speed is increased by 20%.`,
            Disruption: stripIndents`The Meteorite Magnet's magnetic field affects the normal operation of Cipher Machines. The Prospector's chance of triggering a Calibration during Decoding is increased by 50%, and Calibration difficulty is increased by 30%`,
            Attraction: stripIndents`The Prospector can use the Attraction between the Magnet and metallic items to increase his Movement Speed. Whenever Cipher Machines or Lockers are within a certain range, the Prospector's speed will increase by 50% for 2 seconds, this can only be triggered once every 80 seconds.`
        },
        {
            Name: ["The Enchantress - Patricia Dorval", "enchantress", "patricia"],
            Href: "Patricia_Dorval",
            Image: "https://i.imgur.com/BYAblmx.png",
            Background: stripIndents`Patricia Dorval was born on a slave ship where her mother drew her last breath. Little Patrica reached New Orleans alive, the shipowner left her on the street. She thus found a new “mother”. Patricia followed her “mother”, learning herbs, healing and cursing, and when she reached adulthood she decided to go back to her foreign homeland to look for her origin. Patricia never thought that the curse hidden in her blood would gradually emerge at the moment she stepped onto the land. After running away for a decade, she finally arrived at Oletus Manor with the curse.`,
            Ape_Curse: stripIndents`Consumes 1 or 3 item stacks to cause paralysis for different durations.
            The Enchantress carries the Cursed Emblem. She can consume 1 stack of Guard to temporarily paralyze the nearest Hunter within a certain range.
            When the Guard reaches 3 stacks, it can be detonated by tapping on the special icon and using 3 stacks of Guard to paralyze the Hunter for several seconds.`,
            Guard: stripIndents`Continuously recharges item near Hunters. Damage dealt by Hunters will directly increase the number of items stacks.
            When a Hunter gets near the Enchantress, the Guard is triggered and the effects are stacked over time against the Hunter. The nearer the Hunter gets to the Cursed Emblem, the faster the Guard effect stacks. All Enchantress' Guards (whether detonated or not) now have a reduced rate of 7%, and a maximum reduction of 70%;
            The Enchantress will immediately gain 1 stack of Guard if the Hunter inflicts damage to the Enchantress. The Guard effect on the Hunter has a maximum of 5 stacks.`,
            Blessing: stripIndents`Hunter's damage dealt to Survivors healing the Enchantress or getting healed by the Enchantress will also increase Enchantress' item stacks.
            Survivors healing the Enchantress or getting healed by the Enchantress will gain the Enchantress' blessings. When a Hunter inflicts damage on a Survivor that has the Enchantress' blessings, the Enchantress will also gain a stack of Guard effect.
            
            __**Special**__
            Survivors will lose Enchantress' blessings when they get knocked down. When a Hunter inflicts damage on a Survivor that has the Enchantress' blessings, the Enchantress will also gain a stack of Guard effect.`,
            Karma: stripIndents`Continuously inflict pain on the Enchantress. Healing time is increased by 20%.`
        },
        {
            Name: ["The Wildling - Murro", "wildling", "murro", "wilding"],
            Image: "https://i.imgur.com/4NdkXVI.png",
            Href: "Murro",
            Background: stripIndents`Murro grew up in the Hullabaloo circus locked up in a cage by his presumed uncle Bernard, the ringmaster, with only his boar to accompany him. Throughout growing up he refers to his experience as one similar to Kaspar Hauser. The idea of him growing up in the woods seems to have been a cover up by Bernard.`,
            Wildling_Partner: stripIndents`Wildling found a loyal Partner while he was growing up in the jungle. Wilding can actively guide his Partner to switch between Following State and Riding State.
            __**Following State**__
            Wildling moves slower than other Survivors in this state. Wildling can command his Partner to Howl, disrupting the Hunter's hearing, causing Tinnitus and Listen to lose effect temporarily for 10 seconds.
            

            __**Riding State**__
            Rage: In this state, the Partner gains Rage as time goes on, and Movement Speed increases as Rage accumulates. When Rage is full, the Partner will Bump in a specific direction. Bump will not stun Hunters, but will increase the Struggle Progress of a Survivor held by a Balloon by 10% (when the Hunter ballooning a Survivor is hit, the ballooned Survivor will be released). Bumping the Hunter into an object will reset the ability's cooldown and regain a large amount of Rage. Bumping the Hunter directly will dramatically increase the Partner's Rage Accumulating Speed.
            Fatigue: Wildling's Partner will feel fatigued. Moving and Bumping will consume the Partner's energy and the Riding State will end when the energy is used up. The maximum riding duration is 65 seconds. If there are multiple Wildling Partners in a match, the Partner will become fatigued faster.
            
            `,
            Nature_Guardian: stripIndents`Wildling Partner can block incoming damage for Wildling during Riding State. When the Partner runs out of HP, it will be wounded and escape temporarily. During the period, Wildling will not be able to guide his Partner. Hunters attacking the Wildling Partner will not trigger blade-wiping motion.`,
            Feral_Instincts: stripIndents`With the help of his Partner, Wildling's terrain Interaction Speed while riding is increased by 10%, and he is even able to cross low terrains. His Partner will leave additional Footprints, causing Wildling's Footprints to be remained for an additional 2 seconds.`,
            All_Thumbs: stripIndents`Wildling, having lived in the wild for a long time, is terrible with machines. Decoding Speed is decreased by 30%.`

        },
        {
            Name: ["The Acrobat - Mike Morton", "mike", "acrobat"],
            Image: "https://i.imgur.com/meepxQi.png",
            Href: "Mike_Morton",
            Background: stripIndents`An exuberant and cheerful man, he is a former member of the Hullabaloo circus and one of its only survivors. His only goal is to find the real killer who destroyed his home.

            Mike’s birth circumstances are virtually unknown, however, at some point in his early childhood, he was taken in by a man named Bernard, whom he saw as a father figure. He was raised in Bernard's circus called "Hullabaloo" which is where he learned acrobatics and juggling. Bernard would often scold Mike for his mischief, such as wanting to put stones in his juggling balls. At some point, a bottle of strong acid was stolen from Mike; coincidentally, around the same time that Joker's face was burned. Bernard is implied to have suspected Mike of this crime, but Mike denies this, only mentioning buying another bottle of acid before Bernard finds out about this "mismanagement." Eventually, a disaster happens inside of the circus, leaving Mike and few other members alive out of sheer luck and the rest dead. After the deaths, Mike found that the only other survivors were a strange couple, one by the name of Natalie. Now desperate and having lost the only things that mattered in his life, Mike's only goal in life is to find the true murderer of those he cherished.
            
            When the circus burned down, he had thought of giving a fate worse then death to whoever burnt it down. There are rumors it was Natalie, known as Margaretha Zelle, who burnt down the circus. Yet that is incorrect and it is not confirmed who did it, but Natalie did not.`,
            Risky_Acrobatics: stripIndents`The Acrobat carries 3 different types of Bomb around. When a Bomb explodes, it will temporarily change the ground's surface, creating a circular zone. Hunters stepping into this zone during the Aftereffect period will be affected by its effects, and thus returning the ground immediately to its original state.
            
            
            **__Sticky Bomb__**
            Slightly reduces the Hunter's Movement Speed. If the Hunter is hit by the exploding Sticky Bomb or if the Hunter is repeatedly affected by Aftereffects within a short time, the Hunter's Movement Speed will be greatly reduced.
            

            __**Nitro Bomb**__
            Slightly reduces Hunter's Interaction Speed. If the Hunter is hit by the exploding Nitro Bomb or if the Hunter is repeatedly affected by Aftereffects within a short time, the Hunter's Interaction Speed will be greatly reduced.
            

            __**Fire Bomb**__
            It can burn and disable all Hunter abilities for a period of time. If the Hunter is hit by the exploding Fire Bomb or if the Hunter is repeatedly affected by Aftereffects within a short time, all Hunter abilities will be disabled for an extended period.`,
            Impromptu: stripIndents`The Acrobat's behavior inspired him to create different types of Bombs.
            
            
            __**Friendliness**__
            Rescuing 1 Teammate from the Rocket Chair allows the Acrobat to create an additional Sticky Bomb.
            
            __**Tranquility**__
            When the Decoding Progress reaches 100%, it will allow the Acrobat to create an additional Nitro Bomb.
            

            __**Bravery**__
            Being pursued by Hunters for 60 will allow the Acrobat to create an additional Fire Bomb.
            

            __**Exclusive**__
            The Acrobat lacks ingredients and can only create one additional Bomb per game.`,
            Half_Hearted: stripIndents`The Acrobat is always coming up with new ideas and this makes it difficult for him to concentrate. Door Opening Speed is decreased by 30%.`
        },
        {
            Name: ["The 1st Officer - Jose Baden", "jose", "officer", "1stofficer", "1st officer"],
            Href: "Jose_Baden",
            Image: "https://i.imgur.com/QgdnsJS.png",
            Background: stripIndents`José Baden once known as the Great/famous Chief Officer who escorted the British Queen's Marine Empire along with his father(who's the Captain of the ship).

            They were rich, heroic, powerful and very punctual. No matter it was protecting the British ships or carrying the treasures of the Queen. The Baden family was never late.
            
            Legend said that the punctual secret of the Baden family was related to a pocket watch which blessed by the sea god. The tides and waves will always obey him and never delay his journey. Because of this, the family were highly valued by the British Queen, and as an outsider, they were also awarded by the Queen herself.
            
            Things went gloomy one day. Baden, who has to deal with some emergency in Liverpool and didn't go aboard with his father. At sunset, he decided to wait for his father at the port, but the ship that his father has attended (one of the ships which served for the Queen) didn't arrive on time. In reality, the ship, his father and his crew have vanished mysteriously in the sea after they left.
            
            The Queen was furious and thought that the Baden family had stolen her treasure and ordered to deprive all the wealth and title José Baden owned. Because of this, he became depressed.
            
            Some time later, José received a news about his father's ship. On the missing ship item list, there was an ancient umbrella from China which was about to deliver to a place called the Oletus Manor.
            
            Once a sea knight, he decided to step into this cursed land alone, searching for the whereabouts of his father, or at least... to reclaim what he owns...`,
            Poseidon_Watch: stripIndents`The First Officer uses a Pocket Watch to hypnotize Hunters on the entire Map. Hunters affected by Hypnosis will experience hallucinations and can only see the image of First Officer 1 second ago within 20 seconds and gain some Movement Speed bonus when hypnotized. The hypnotic effects will be removed when the First Officer touches a Rocket Chair or is hit by the Hunter, and can only be used 2 times in a single game.`,
            Vanish: stripIndents`Whenever the First Officer rescues Teammates from the Rocket Chair, he will cast a hypnotic effect on his surroundings.
            Hypnotic effects will allow rescued Survivors to be "Disguised" as the First Officer. Once the Survivor uses a skill or is knocked down, the "Disguise" effect will be removed.`,
            Self_Hint: stripIndents`Confusion and deception will finally devour First Officer.
            Rocket Chair's initial Flight Speed is decreased by 20%, and Decoding Speed is decreased by 20%.`,
            Hypnosis_Dispel: stripIndents`Pain may be the only cure. First Officer's hypnotic effects will be immediately removed when receiving damage.`
        },
        {
            Name: ["The Barmaid - Demi Bourbon", "bartender", "barmaid", "demi"],
            Image: "https://i.imgur.com/YMb7LM0.png",
            Href: "Demi_Bourbon",
            Background: stripIndents`Demi was not healthy as a kid and her brother was always taking care of her. He was always at her side, protecting her due to her being weak. When they first arrived in Europe, she never even knew her ancestors were from there as well. Dovlin, the drink that her brother mixed seemed to gain a popularity hence them opening up Bourbon Bar. However, the popularity of Dovlin caused Demi's brother to receive an invitation to the manor and to never return back home. Demi received a letter from the manor, inside being the recipe for the Dovlin. After receiving the letter, Demi went on a search and played the role of protector looking for her brother.`,
            Dovlin: stripIndents`Carries a wine barrel around to mix Strong Dovlin
            
            
            
            **__Strong Dovlin__**
            Strong Dovlin can be drank when the Barmaid or Teammates are injured, but they will become Tipsy and their Fear will be reduced.
            


            __**D.U.P.H.R.I.N.**__
            The Barmaid carries 1 bottle of Dovlin Base around. After drinking it, the stimulation of Dovlin Base increases the drinker's Fear by a quarter and increases Movement Speed by 50% for 2 seconds. Dovlin Base also makes the drinker Tipsy, which reduces Fear.
            


            __**Exclusive**__
            D.U.P.H.R.I.N.'s stimulation is strong. So it can't be drank when the Barmaid is injured. Plus, D.U.P.H.R.I.N. cannot be shared with Teammates.
            Increased Fear due to Mixing and drinking D.U.P.H.R.I.N. is not considered an injury and therefore does not trigger Panic, Deteriorate, Hunter's Instincts, and Cowardly effects.
            


            __**Prohibition**__
            Warning: Demi Bourbon's Mixes can't be served to underage customers.
            (The Mind's Eye and Coordinator will not be able to consume Strong Dovlin)`,
            Mixing: stripIndents`Mixing drinks consumes energy and increases the Barmaid's Fear by a quarter. At the same time, the Barmaid will gain 1 bottle of Strong Dovlin and become Tipsy, thus decreasing Fear.
            When the Barmaid is injured, the time required for mixing drinks is increased to 10 seconds due to insufficient energy.
            Up to 2 bottles of Strong Dovlin can be mixed in a single game, but only 1 bottle can be carried at any time.
            Dovlin Base cannot be mixed in the Manor.`,
            Tipsy: stripIndents`After the Tipsy state ends, the Survivor's Fear will be decreased. Mixing will cause Survivors to be Tipsy for 8 seconds, after which their Fear will be decreased by a quarter.
            Drinking Dovlin Base will cause Survivors to become Tipsy for 8 seconds., after which their Fear will be decreased by a quarter.
            Consuming Strong Dovlin will cause the Barmaid to become Tipsy for 21 seconds, after which her Fear will be decreased by half.
            If Survivors are hit during the Tipsy state, the effects will be removed immediately.`,
            Hangover: stripIndents`Whenever the Barmaid or other Survivors become Tipsy, their maximum Decoding Speed is decreased by 8% and the effects can be stacked up to 2 times.`
        },
        {
            Name: ["The Postman - Victor Grantz", "postman", "victor", "viktor"],
            Href: "Victor_Grantz",
            Image: "https://i.imgur.com/32a2d6N.png",
            Background: stripIndents`Victor has always been a quiet individual. He avoids eye contact when possible, and while he speaks very formally and politely, Victor chooses also to write down his thoughts. Even more so, the young postman likes to see people's reactions to his letters. Their joy, their anger, their sadness, their surprise; he feels that words written are much more trustworthy than words that are spoken, and you don't have to worry about the nuances that come with speaking when writing. Generally a warm-hearted and kind boy full of endless amounts of talent, Victor garnered the trust of the local population when he acted heroically during a fire; in said fire, he saved a young puppy, which came to be known as his postdog, Wick. After receiving a request to deliver letters to the manor, the eccentrically sweet postman embarked on his journey to Oletus, hopeful and filled with excitement.`,
            Mail: stripIndents`The Postman carries Letters around with him and sends them to their designated Recipients with the Post Dog. After receiving the Letter, the Recipient will obtain the attached buff. When a Letter is sent, it enters into cooldown.
            __**Letter Types**__
            
            **Urgent Letter**: Increases Recipient's Movement Speed by 10% for 15 seconds.

            **Farewell Letter**: If the Recipient vaults over a Window or Pallet within 90 seconds, the Recipient's Movement Speed will increase by 40% for 3 seconds. This effect can only be triggered 1 time, and has a lower triggering priority than Knee Jerk Reflex and Broken Windows.

            **Tranquility Letter**: Increases Recipient's Decoding Speed by 20% for 30 seconds.

            **Bravery Letter**: Increases Recipient's Rescue Speed by 30%. Also increases Recipient's Movement Speed by 10% for 180 seconds when nearing Rocket Chairs with Survivors with Survivors on it.

            **Inspiring Letter**: Permanently increases Recipient's Vaulting Speed by 10%.

            **Hope Letter**: Permanently increases Recipient's Exit Gate Opening Speed by 30% and gains continuous vision on the Dungeon's location.`,
            Post_Dog: stripIndents`The Post Dog will take on the task of Letter Delivery. After the Postman confirms the target Recipient, the Post Dog automatically delivers the Letters and will appear within a certain range of the Recipient in 4 seconds.
            When the Post Dog isn't delivering a Letter, it follows the Postman's command to dash toward a Hunter Pounce on them.
            The Post Dog won't be hit by Hunters when it's delivering a Letter or Pouncing on a Hunter.
            If the Recipient is immobilized when the Post Dog arrives with the Letter, the Letter Delivery fails.
            If the delivery is taking too long, the Post Dog will cease the delivery because of exhaustion.
            The Post Man usually hides at the corner of the scene and is only around when the Postman has a Letter to deliver.
            


            __**Pounce**__
            The Post Dog loves pouncing on new friends.
            Tap to send the Post Dog dashing and Pouncing towards the direction of the screen.
            The Movement Speed of the Hunter is reduced by 35% for 6 seconds while they're being pounced on by the Post Dog.
            If the Post Dog fails to Pounce on a Hunter during the dash, it will return to the Postman once the dashing limit is reached or it hits an obstacle. The Post Dog can still Pounce on a Hunter on its way back to the Postman.
            Whenever the Post Dog Pounces on a Hunter, the Pounce ability will enter into a 45 second cooldown. If it fails to Pounce on a Hunter, the ability will enter into a 10 second cooldown.`,
            Empathy: stripIndents`The Recipient's joy when receiving a Letter is the greatest encouragement to the Postman. When the Recipient successfully receives the Letter, the Postman will also obtain the same buff.`,
            Expectation: stripIndents`The Postman always has hopes that someone will deliver a letter to him. Such an expectation makes him restless, reducing his Decoding Speed by 5%.
            Hmm... if his expectation remains unfulfilled, why doesn't he peek into one himself? However, opening other's Letters will increase the Postman's next delivery cooldown by 50%.`
        },
        {
            Name: ["The Gravekeeper - Andrew Kreiss", "gravekeeper", "gravedigger", "andrew"],
            Image: "https://i.imgur.com/sLpG3Gw.png",
            Href: "Andrew_Kreiss",
            Background: stripIndents`For Andrew, life even from an early age was living hell. Born with albinism and having a fear of the sun, the young child was constantly plagued with the violent rumors of being cursed, even going as far to being called "The White Haired Monster". His only wish was to be like other younger children, to be able to play outside in the sun and have fun, but the hatred and discrimination forced him to recluse from society, completely isolating him from the beautiful and kind things the world had to offer. His only solace was within a feeble, kind woman (his mother) who protected him and nurtured him when no one else would. Most of his peaceful childhood memories come from his times with this woman, when he would fall asleep in her arms and to the sounds of passing time. Once she died, Andrew left and became a gravekeeper for the Lutz cemetery, seeking salvation; this graveyard was insistent upon the burial of only good, well-natured people. To Andrew, however, the line between good and evil is blurred, and no one person or group can decide the truth behind what makes someone good or evil. He wondered whether or not he was the monster, or if it was the people around him. Hoping to find the answers to his questions, he accepted his invite to the Oletus Manor, his heart full of hopefulness and warmth for the first time in a long time.`,
            Dig_to_Escape: stripIndents`Carries a Shovel, enabling him to enter Underground Sneak mode and clear all harmful statuses.
            
            
            __**Underground Sneak**__
            In Underground Sneak mode, Grave Keeper can dig and move underground;
            He can go through Pallets that are knocked down, but he can't ground through other obstacles for fear of them collapsing;
            Given the limited oxygen underground, there is a time limit for Underground Sneak mode, but Grave Keeper can stop digging and resurface to the ground at anytime.
            If he is attacked in Underground Sneak mode, he can shield damage once and resurface to the ground;
            In Underground Sneak mode, if there is sufficient space underground, he can go down a level by digging downwards, leaving a pothole behind in the same spot. The pothole will disappear after a duration.`,
            Claustrophobia: stripIndents`As a result of his claustrophobia, Grave Keeper's Movement Speed is increased by 10% in Underground Sneak mode.`,
            At_Ease: stripIndents`When Grave Keeper chooses to resurface to the ground without receiving any damage, he becomes at ease, increasing his Rescue Speed by 50% for 5 seconds.`,
            All_Thumbs: stripIndents`Having lived by himself throughout the years in the cemetery, he hasn't communicated with or learned from the living. His eyesight is also poor as a result of illness. Therefore he's clumsy and terrible with machines, which decreases his Decoding Speed by 15%.`
        },
        {
            Name: ["The Prisoner - Luca Balsa", "prisoner", '"prisoner"', "luca"],
            Href: "Luca_Balsa",
            Image: "https://i.imgur.com/mjjtESv.png",
            Background: stripIndents`Born to an unknown family in unknown circumstances, inventor Luca Balsa was known to the public as a friendly and pleasant individual who trusted other people easily. Despite not knowing where this boy came from or why, it was obvious that he had a good education, confidence, and the brains needed for inventing. Within due time, he was taken under the wing by a well-known inventor, and the two seemed to get along well, with Luca's smarts being greatly valued by his mentor. However, a dispute between the two over research and thievery ended up with the famous inventor dead and Luca in prison with irreversible brain damage, having to live with the constant threats of being a murderer and traitor. Desperate to end it all and now a shadow of his former glory, Luca was to be hanged for his crimes, his property was sold to compensate the inventor's widow, and he was unable to put as much focus into his work as before. With poor memory and no money to his name, his only goal in life was to complete his grand invention, which was impossible without a large sum of money; so when he received an invitation from the manor to participate in the game, he decided to risk it all for one last chance to complete his work.

            He was bailed out of jail by the owner of the Manor.`,
            Circuit_Control: stripIndents`The "Prisoner" is extremely familiar with the electric circuits under the Manor. He can change the Connection status of the wires to alter the Connection of the Cipher Machines. Once connected, the transmission of Decoding Progress between Cipher Machines is enabled.
            

           __**Connection**__
            The "Prisoner" can connect to inactive Cipher Machines and form a Connection, with a cooldown of 30 seconds. Each "Prisoner" can only create 1 Connection, and there can only be 2 Cipher Machines on each Connection. All Survivors will be able to see the Connection.
            When Survivors decode a Cipher Machine on a Connection, they can transmit a certain percentage of their Decoding Progress to another Cipher Machine. During the transmission, their own Decoding Progress will be decreased by the same transmission percentage.
            Survivors can adjust the transmission percentage within the range of 0% to 48%. At the same time, due to deterioration of the circuit, some of the transmitted Decoding Progress will be lost (without affecting one's own Decoding Speed). The farther away the connected Cipher Machines are, the bigger the loss will be, ranging from 10% to 20%.
            Connections can be destroyed by Hunters. A destroyed Cipher Machine can't be reconnected to a Connection for 45 seconds. If a Cipher Machine is activated in a Connection, the Connection will become invalid automatically.`,
            Conductor: stripIndents`**__Charge__**
            An incident changed the "Prisoner's" body composition and made him a "Conductor" capable of accumulating electric charges.
            When the "Prisoner" decodes a Cipher Machine in a Connection, an electrical area will be formed as a result of electric charges focusing around the Cipher Machine. When Hunters enter such an area for a long time, they will be electrocuted and stunned.
            With each electrocution, the Hunter's resistance to electric charges is permanently increased so that the stun duration of the Hunter will decrease until it drops to 0. When a Connection becomes invalid or destroyed, the electrical area will disappear with it.
            


            **__Enhanced Charges__**
            Due to his unique body composition, the "Prisoner" will recharge when he enters an electrical area. Once the recharge is completed, he can release severe electric currents 1 time. The severe electric currents will send an Electric Shock towards Hunters nearby and stun them for 1 second.
            As the effect of Electric Shock is strong, it won't be affected by Hunter's resistance to electric charges.`,
            Super_Circuit: stripIndents`To play it safe, the "Prisoner" will set up a Connection between the two Exit Gates in advance. While the Exit Gates are opened, coded lock will connect automatically, allowing transmission of the Decoding Progress between coded locks.
            As the Connection between the Exit Gates is quite complicated, the transmission ratio of the Connection Passage can only be adjusted by the "Prisoner" within the range of 0% to 48%. At the same time, due to deterioration of the circuit, the transmitted Decoding Progress is lost at a consistent 15%.
            Hunters can destroy the Connection between the Exit Gates.
            Once it's destroyed, the "Prisoner" will no longer be able to connect them again.`,
            Obsession: stripIndents`The Decoding Speed of the "Prisoner" is increased by 10% when decoding a Cipher Machine on a Connection. Once a Calibration fails, his rigid time is decreased by 30%.
            However, such obsession also weakens the Prisoner's perception of his surroundings, such that the distance of his detection of the Hunters is decreased by 20%.`
        },
        {
            Name: ["The Entomologist - Melly Plinius", "entomologist", "entomo", "pliny"],
            Href: "Melly_Plinius",
            Image: "https://i.imgur.com/odKRpQK.png",
            Background: stripIndents`Melly has always been an object of interest in the world of biology, partly because of her talent, from a poor housemaid on a Farm to a rising star in biology.

            The story doesn't always have listeners, not to mention that in insect research, it also has extremely unique ideas, especially regarding winged insects. She seems to have the ability to control these flying creatures and can understand their every move. While more and more rumors were spreading about her appearance, Melly rarely appeared in public. Compared to the craving for learning, it seems to have been more dependent on wandering through dense forests, swamps, and deserts. There she could find strange insects.
            
            She appeared several times in public in heavy headdresses that covered her entire face. Someone said it was only because she was ugly and didn't want to look at people with her true face. Someone said that it was only because she was very beautiful and afraid that people would focus all their attention on her appearance rather than on her research.`,
            Entomology: stripIndents`The entomologist carries a net that can assemble a swarm of insects in front of her.
            The swarm will form a barrier so that the Hunters passing through it will be disrupted and their Movement Speed will be reduced by 70%. Survivors won't be affected. At the same time, the barrier can block certain abilities.
            Once the insects are assembled, the Entomologist can switch her camera and manipulate the swarm of insects to turn left or right, or move forward.
            When the swarm of insects moves at high speed, it will propel forward Survivors (including the Entomologist herself) who have no other operations engaged. It can also disrupt Hunters' movement.
            Hunters can disperse the swarm of insects by attacking twice (without triggering attack recovery).`,
            Mixed_Reagent: stripIndents`A special reagent created from a mixture of extracts from various insects. It can lubricate Pallets and Windows when vaulting to increase Survivor's Vaulting Speed by 10%.`,
            Fragrance: stripIndents`Her location is shown for an additional 2 seconds upon leaving a Hunter's line of sight as her body's fragrance lingers.`

        },
        {
            Name: ["The Painter - Edgar Valden", "painter", "artist", "edgar"],
            Image: "https://i.imgur.com/E916tZ9.png",
            Href: "Edgar_Valden",
            Background: stripIndents`The only son in the Valden family of aristocrats, Edgar showed an interest and high talent in painting from childhood. Praise from his family and the public has led to his eccentric character. He only sees art from his own perspective and has a high self-esteem. His perception of the world around him led to his belief that nobody else is worthy to speak to him about art.

            He did not participate in the game for the prize. As the heir to the Valden family, money did not tempt him. So what made him participate in this game?`,
            Artistic_Sensitivity: stripIndents`He carries a Paintbrush and a Drawing Board with him. Once he has memorized a Hunter's face, the Painter can paint the Hunter's face on the Drawing Board.
            When the painting is done, he can place the Drawing Board in the scene.
            When the Hunter sees the placed Drawing Board, they will be attracted by it, walk over involinarity and stop to admire their face in front of it.
            If a Hunter takes too much time walking over to the Drawing Board, they will lose interest in the Painting and which renders the Drawing Board useless.
            


            **__Memories__**
            Within a certain range of a Hunter, the Painter need to look at the Hunter's face from the front to memorize it.
            

            __**Painting**__
            Once he has memorized the Hunter's face, tap the ability button to begin painting. The Painter can move while painting but cannot interact. Tap the ability button again to stop painting.
            

            __**Placing the drawing**__
            When the Painting is done, tap the ability button to place the Drawing Board.
            The Hunter will be forcibly attracted when they get close to the Drawing Board. No additional Drawings can be placed within the effective range of the placed Drawing Board.`,
            Aesthetic_Resonance: stripIndents`During the creation of the Painting, the Painter will be effected by his own work. Every time he places a Painting, his Movement Speed will increase permanently by 2%. This effect be stacked up to 2 times.`,
            Intuition: stripIndents`The Painter is perceptive and observant to real-life objects and so he will not be affected by a Rocket Chair with 50% progress.
            When he is put on a Rocket Chair for the second time, the progress will return to what it was the last time he was saved.`,
            Self_Fulfillment: stripIndents`When the Painting's effect wears off, the Hunter will be extremely interested in its painter. The Painter will expose his location to the Hunter for 5 seconds.`
        },
        {
            Name: ["The Batter - Ganji Gupta", "batter", "the batter", "ganji"],
            Image: "https://i.imgur.com/oXrRNad.png",
            Href: "Ganji_Gupta",
            Cricket_Bat: stripIndents`The Batter carries a Cricket Bat with him. Tap and hold to hit a Cricket Ball in a specific direction. The longer you hold, the greater the charge, and the more velocity the Cricket Ball has.
            
            
            __**Cricket Hit**__
            The Batter carries a Cricket Bat with him. Tap and hold to hit a Cricket Ball in a specific direction. The longer you hold, the greater the charge, and the more velocity the Cricket Ball has. The Cricket Ball will gradually lose velocity as it travels farther. A Hunter hit by the Cricket Ball will be knocked back. The more velocity the Cricket Ball has, the farther the Hunter will be knocked back.
            The Batter can pick up Cricket Balls on the ground to increase the usage of Cricket Bat.
            


            __**Ramage**__
            The Batter focueses his energy to unleash Ramage for 20 seconds. He must wait 40 seconds after each Rampage before activating another.
            If a Cricket Ball hits a Hunter when the Batter is on a Rampage, the Hunter will be stunned should they then hit an obstacle. The farther the knockback distance, the longer the stun duration.
            If a Cricket Ball hits an obstacle when the Batter is on a Rampage, the Cricket Ball will shatter and becomes irretrievable.`,
            Athletic: stripIndents`Athletically gifted. Obstacle Vaulting Speed is increased by 20%, and Pallet Pulling Speed is increased by 20%.`,
            Altruism: stripIndents`The Batter refuses to stand back when others are in danger.
            When a Survivor is attacked within 18 meters from him, as long as the Batter is not being pursued, his Movement Speed will increase by 50% for 10 seconds. He must wait 60 seconds before the speed boost can be triggered again.`,
            All_Thumbs: stripIndents`Clumsy and terrible with machines. Decoding Speed is decreased by 20%.`
        }

    ],
    Maps: [
        {
            Name: ["map", "the maps", "maps", "the map"],
            Link: "https://i.imgur.com/hSMftcq.png",
            Hex: "RANDOM",
            Footer: "Maps - Page $index of $length — Information taken from Identity Gamepedia"

        },
        {
            Name: ["The Red Church", "chruch", "red church", "the red church", "theredchurch"],
            Image: "https://i.imgur.com/E7w3Lyk.png",
            Href: "Red_Church",
            Background: stripIndents`Not much information is given about the Red Church's background. There was apparently a wedding held here that never finished due to the bride's disappearance. It is thought that the unfinished wedding ultimately led to the church's abandonment as the wedding area had not been packed away by the time the church became dilapidated.`
        },
        {
            Name: ["Sacred Heart Hospital", "sacred heart", "sacred heart hospital", "hospital", "sacredhearthospital"],
            Image: "https://i.imgur.com/P6aIFXx.png",
            Href: "Sacred_Heart_Hospital",
            Background: stripIndents`The story began with a fierce doctor-patient dispute. The hospital that was originally operating ushered in a highly-skilled dentist, but things became strange after he arrived. At the time, more and more patients were discharged from the hospital, but the registered discharge records did not increase, and some night-timers said that they had seen the dentist dragging a lot of garbage to the marshes at night.

            The rumors intensified, and after a patient’s strange disappearance, angry people poured into the hospital at night. The dentist refused to admit that he was related to the missing patient and asked everyone to let him go back to complete the operation. This attitude angered many people, so he sank in the swamp and died.`
        },
        {
            Name: ["Arms Factory", "arms factory", "factory"],
            Image: "https://i.imgur.com/LyCadpa.png",
            Href: "Arms_Factory",
            Background: stripIndents`The Manor's owner created a replica of Leo Beck's burned factory, which was recognized by Gardener and the Lawyer. It was the location where the first game with Doctor, Gardener, Lawyer and Thief as the players, took place.`
        },
        {
            Name: ["Lakeside Village", "lakeside", "lakeside village"],
            Image: "https://i.imgur.com/yBdhPsW.png",
            Href: "Lakeside_Village",
            Background: stripIndents`On a cold winter night, a hurricane raided the mountainous area near Lakeside Village. The tornado threw a hunter on the mountain into the lake. He struggled to swim to the shore, only to find that Lakeview Village was no longer going to see the sun. In the faint moonlight, the thatched cottage swayed, and the hunter did not see the bustling crowd and did not see any signs of life. He noticed a flame burning in the distance, but only found a pot of burnt stew when he inspected it. Whoever used the pot had disappeared without a trace. The warm and lively thatched cottages in Lakeview Village have been replaced by silent silence.

            Experienced hunters spend a lot of time in the forest, and all he saw in the Lakeside Village were abandoned boats and unattended fishing tackle cabins. The hunter tried his best to stay calm and eventually walked out of the village with tenacious willpower. In order to understand everything that happened in Lakeview Village, the hunter publicized what he saw. At this time, the nearby villagers suddenly realized the real reason why the villagers in Lakeview Village no longer participated in the market. No one knew where they were going, and no one was willing to step into this unknown village.`
        },
        {
            Name: ["Moonlit River Park", "moonlit river park", "moonlit", "moonlitriverpark"],
            Image: "https://i.imgur.com/c2rTD96.png",
            Href: "Moonlit_River_Park",
            Background: stripIndents`Moonlit Park was once a beautiful amusement park where people came to enjoy rides and have a merry time. The owner of the park by the name of a man named Freddy used to enjoy the attention his park attracted. One day though Freddy made a deal with a supernatural entity in order to increase the amount of visitors his park got so he could become even richer. The entity warned Freddy though he had to give him something in exchange or he would curse him. Freddy agreed but was greedy by nature so never paid him back. The entity as a result cursed Freddy’s park causing everyone to disappear. Ever since then the park has remained abandoned and rumors of demonic spirits and clowns have haunted the park ever since.            `

        },
        {
            Name: ["Leo's Memory", "leos memory", "leosmemory", "leo memory"],
            Href: "Leo%27s_Memory",
            Image: "https://i.imgur.com/QSBGGW9.png",
            Background: stripIndents`Little to nothing is known about the background of the Minerva Arms Factory during Christmas time.`
        },
        {
            Name: ["White Sand Street Asylum", "white sand street asylum", "whitesandstreetasylum", "asylum", "white sand street"],
            Href: "White_Sand_Street_Asylum",
            Image: "https://i.imgur.com/hgnCBrI.png",
            Background: stripIndents`White Sand Street Asylum was formerly an orphanage funded by Kreacher Pierson before being turned into an asylum run by the church. Many of the children who were initially in the orphanage had psychological problems, and so were also admitted into the asylum, including Lisa Beck (now Emma Woods). After becoming an asylum, Lydia Jones (now Emily Dyer) worked there as a volunteer under Sister Lorraine. During the period of time Emily stayed at the asylum, she offered many patients (including Emma) electroshock therapy.`
        },
        {
            Name: ["Eversleeping Town", "eversleeping town", "eversleeping", "eversleepingtown"],
            Href: "Eversleeping_Town",
            Image: "https://i.imgur.com/hmg6RGa.png",
            Background: stripIndents`It is a small Japanese village locked in eternal slumber. With the arrival of deranged visitors, unimaginable events are happening in the town.`,

        },
        {
            Name: ["Golden Cave", "golden cave", "goldencave", "cave"],
            Href: "Gold_Cave",
            Image: "https://i.imgur.com/xX7xsU7.png",
            Background: stripIndents`Despite that not a single piece of gold was ever found, Count Barriere still got what he wanted with this land.

            The desire and greed for gold seems to be inherent in human nature. So when the once uninhabited barren mountain was rumored to have gold sand flowing in its streams, eager gold diggers flocked to the mountain, even if no one knew who had found the first gold. The real owner of the barren mountain, Count Barriere, soon ordered the access to the mountain to be blocked, and built a mine and wooden shafts in the mountain, miners digging deeper and deeper day and night, only to find the buried gold at the bottom of the mountain. But a sudden landslide interrupted the project, and the mountain fell silent, leaving only the sprawling caverns and crumbling buildings hundreds of meters below the surface.`
        }
    ]
}