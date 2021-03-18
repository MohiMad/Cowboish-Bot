const { stripIndents } = require('common-tags');

module.exports = {
    PatchDate: "Mar. 18th, 2021",
    patchImage: "https://i.imgur.com/FuZtLio.png",
    patchDateFooter: "Patch 18.3.21 - March 18th, 2021",

    patchNotes:
        stripIndents`Maintenance content for this week:

        [Event]:

Character Day: Norton's Prospector birthday (March 19) is here and the annual birthday party has officially begun. Participate in the event and complete quests to obtain unique Character rewards! 
For Norton's second birthday in Identity V, we've prepared various new rewards to celebrate this milestone! Players who have obtained the portrait from his first birthday event will receive a second-year Birthday Portrait Frame after completing the event quests! 
Those who haven't obtained the reward from Norton's first birthday event will receive his first-year birthday reward.
Event Period: March 19, 00:00:00 - March 19, 23:59:59 (Server Time)
The Hunter, Gamekeeper, is free-to-play for a limited time.
Event Period: March 18, 2021 after maintenance - March 25, 2021, 08:00:00 (UTC+8)
As The Promised Neverland Crossover comes to an end, any remaining Crossover Essence Chests will be opened automatically. Rewards on the Logic Path will be also replaced by S15 Essence 2.


[Battle]

Gamekeeper Adjustments:
External Trait "Suffocation" Adjustments: Added new effects for landing. Reduced the vaulting speed of Survivors within a certain range by 20%. 
Decreased the movement speed reduction from 20% to 13%, and this effect can now be stacked up to 3 times, but the reduction in vaulting speed can't be stacked.
Added a Tier 0 ability - Traps: Bane places a trap at his location. Survivors who step on the trap will be imprisoned for 8 seconds. Survivors can disarm traps placed in the open area and release their imprisoned teammates. Once they're released from the traps, these Survivors will be visible to Bane for 5 seconds, and they won't be imprisoned by another trap during this period. There can be a maximum of 8 traps in the scene. When the maximum limit is exceeded, the first trap placed in the scene will be destroyed. Traps can't be placed in or near a Basement, and neither can they be placed within 20 meters of a Rocket Chair that has a Survivor on it, and any traps placed beforehand will be destroyed.
Adjusted the Tier 0 ability - Chain Hook: Bane swings his Chain Hook, pulling hooked Survivor toward him. If the Chain Hook hits an obstacle, he will be pulled toward the obstacle instead. In this case, Bane can cast the Chain Hook again within 8 seconds for up to 1 time.
Adjusted the Tier 2 ability, Fury Hook: The enraged Bane won't let an intruder escape his Chain Hook. If the Chain Hook hits an obstacle, Bane can now cast the Chain Hook again with restrictions. The first 2 re-casts can be used within 8 seconds, while subsequent re-casts can be used within 3 seconds.
- Reduced the Chain Hook's hitbox, reduced the time it takes to prepare the Chain Hook before casting and increased the Chain Hook's speed as appropriate.
- Reduced the time it takes for the Gamekeeper to be pulled toward an obstacle. Decreased the backswing duration when the Chain Hook hits an obstacle/when the Chain Hook misses a target/after landing.
- Removed the mechanism that resets the Chain Hook's cooldown when the Gamekeeper unlocks Tier 1 and Tier 2 abilities.

Other Adjustments:
Increased the Deduction Points obtained by the "Undead" when he knocks down or hits a Survivor with Charged Strike.
The progress bar for inflicted Demon Notes will now gradually diminish to 0 over 40 seconds.
Adjusted the rules regarding EXP Points in Blackjack Mode to avoid having excess EXP Points over the season's limit.
Added a progress bar as a notification for the Gardener's current Recall progress.
Added a display next to the Enchantress' portrait to showcase the number of "Guard" stacks: Teammates will now see the Enchantress' "Guard" stacks. When there are multiple Hunters, only the stacks of Guard gained from the latest Hunter will be shown.



[Shop]
The Gamekeeper's A Costume "Punk" can now be purchased at a limited-time 15% discount with Echoes.
Discount Period: March 18, 2021 (after maintenance) - March 25, 2021, 08:00:00 (UTC+8)



[Experience Optimizations]
- Optimized the animation of dismantling an item into Fragments when players obtain a duplicated item.
- Optimized the display effects on the Emote wheel for emotes with longer names.
- Supplemented sound effects for some of Soul Weaver's emotes.
- Removed the "Team-up with Friends" button in Ranking.
- Upon receiving a friend's invitation to team up, the friend's "Remark" will be shown.
- Added the sound effect "stepping on puddles in Chinatown" for some of the Characters.
- Optimized the special effects of the Perfumer's S Accessory - "Starlight."



[Bug Fixes]
- Fixed an issue where the handheld items of the Priestess's Costume "Golden Future" were abnormally displayed.
- Fixed an issue where two Followers could appear in the Standby Motion of the Dream Witch's Costume "Vajytte."
- Fixed an issue where grey cubes would appear at the back of the Enchantress' Costume "Maroon Crystal."
- Fixed an issue where the eyes in some of the emotes of the Mechanic's Costume "Everlasting Flowers" were abnormal.
- Fixed an issue where the neck would overlap with the Batter's Costume "Lava Cake."
- Fixed an issue where the hair on the Barmaid's Costume "Vermouth" would overlap with the Cowboy when she was on the Cowboy's back.
- Fixed an issue where the Hunter could hit Survivors through obstacles near the Roller Coaster tracks in Moon River Park.
- Fixed an issue on some Android devices in High Graphics mode where mosaics would appear when a Survivor was hit in the Sacred Heart Hospital.
- Fixed an issue where Geisha couldn't release Swallowtail Butterflies at certain locations in Chinatown.
- Fixed an issue where the Wildling's Bump would be abnormal when he had three stacks of Entangled on him.
- Improved the issue where the "Undead" would get stuck in mid-air when using Jump Chop and then fell onto the ground in some situations.
- Fixed an issue where the previous character's Talent setting would still apply even after switching Characters in the Matching Room.
- Fixed an issue where the Graffiti button would disappear when an attempted Rocket Chair rescue has failed.
- Fixed an issue where the Costume Effect Settings interface couldn't be close when players opened the interface during matching.
- Fixed an issue in Duo Hunters Mode where a player's Character Knowledge Points badge would be shown when the Hunter switched Characters.
- Fixed an issue where the recruitment system would sometimes put a player in two teams, forcing the player to return to the Lobby.
- Fixed an issue where Survivors couldn't obtain Pursuit Points after entering and escaping the Photographer's Camera World.
- Fixed an issue where there's a chance that the Cobweb icon would remain when Survivors entered Synesthesia Mode after they were eliminated by Cocoon Death.
- Fixed an issue where Survivors couldn't obtain Pursuit Points after entering the Locker and could only obtain them until they exit the locker.
- Fixed an issue where some Hunters' weapon models were missing in the Duo Hunters Mode's Matching Room.
- Fixed an issue where the Quest slot would show two Deduction Quests at the moment when a player lost connection and reconnected in Synesthesia Mode.
- Fixed an issue in the Tutorial where the Hell Ember would still be holding his weapon after throwing a Puppet.
- Fixed an issue where there's a chance that the Hunter model would disappear and be replaced by a red light when spectating after a battle.
- Fixed an issue where the eye mask of the Priestess' Costume "Reflective Mirror" would be abnormal when the standby motion was played in Personal Profile.
- Fixed an issue where the Embalmer's Costume "Norman" would behave abnormally when using the Decoy.
- Fixed an issue where the Return button had to be hit twice in order to return to Duo Hunters Mode.
- Fixed an issue where there's a chance that the "Undead" would be able to use the Jump Chop when his Energy Load was at 49.
- Fixed an issue where there's a chance that the Hieroglyphic Graveyard couldn't be activated after the Sculptor lost connection and reconnected while using a Hieroglyphic Graveyard.
- Fixed an issue where the charging progress bar would remain when the "Undead" was hit by a Pallet while using Charged Strike.
- Fixed an issue where Wu Chang's ability cooldown would be abnormal and the attack speed boost would disappear when the player lost connection and reconnected while using Summon or Infinite Nirvana.
- Fixed an issue where the ability cooldown would stop when the app was put in the background during battle.
- Fixed an issue where the stun duration was abnormal when a Hunter was stunned by the Flashlight and hit by a Pallet at the same time.
- Fixed an issue in the Custom Blackjack Mode where a "Like" button was erroneously displayed.
- Fixed an issue where Hunter players could tap on the "Like" and "Add as Friend" buttons through the results page when a battle ended.
- Fixed an issue in some extreme circumstances where Survivors could never successfully escape by struggling.
- Fixed an issue where a teammate could still see the Mechanic's Doll when losing connection and reconnecting while the Mechanic's Doll was disappearing.
- Fixed an issue where the "Undead's" Energy Conversion ability icon was displayed incorrectly when spectating in Custom Mode.
- Fixed an issue where the sound effects for the Embalmer transferring the Coffin were missing.
- Fixed an issue where there's a chance that Smash couldn't be triggered for the selected Tentacle when the Feaster tapped the ability button to use Nightmare Attack.
- Fixed an issue where the special effects and some of the scene objects would overlap when the Coordinator hit a Hunter in the Lakeside Village while carrying the Sterling Silver Bullet.
- Fixed an issue where the Entomologist could see the Photographer's red light in the Camera World from a Swarm Of Insects' perspective.
- Fixed an issue where the Evil Reptilian would get stuck when jumping from a height at certain locations in Chinatown.
- Fixed an issue where the Hunter could hit Survivors through pallets at certain locations on the second floor in Chinatown.
- Fixed an issue where Survivors couldn't see the effective range of Guard 26's bombs at certain locations in Chinatown.
- Fixed an issue where, when the Dream Witch who was pursuing a Survivor switched to her own perspective then immediately lost connection and reconnected, both parties couldn't obtain Pursuit Points.
- Fixed an issue where the Herald's ability "Swoop" would enter cooldown after being stunned while using Swoop.
- Fixed an issue where the sound effects for the emote "Provoke" were missing in some of the Mechanic's costumes.
- Fixed an issue where some parts of the Bloody Queen's Costume "Scarlett" would overlap while playing the emote "Salute."
- Fixed an issue where the head and mouth would overlap in some of the Dream Witch's costumes.
- Fixed an issue where certain head movements in the Prospector's Costume "Hajime Hinata" were abnormal.
- Fixed a display issue with the mood melody of the event reward furniture - “Spirit Tree Light”.


Update Notice [March 25, 2021]
Identity V will be updated on March 25, 2021 (UTC+8). The following content is for reference only, and the content of the actual maintenance notice shall prevail.
A new Hunter, "The Breaking Wheel," has joined the Manor. Obtain Season 15 Essence 2 S Costume to unlock this Character in advance. This Character can only be used in Quick Matches during the first week.
Thank you for your continued support for Identity V. We will attach gifts via in-game mail to compensate for any inconvenience that the maintenance may cause!`
}