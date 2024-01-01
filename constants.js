const unlockLevels = [2,3,4,5,6,8,12,18,20,35,50,70,100,125,150,200,250,300,350,400,500]
const levelBarTextures = [50,55,60,65,70,80,90,100,200]

const levelBarColours = [
  [1, "#5cc"],
  [2, "#5ac"],
  [3, "#37c"],
  [4, "#28e"],
  [5, "#63d"],
  [6, "#82f"],
  [7, "#d3f"],
  [8, "#d3f"],
  [9, "#e4e"],
  [10, "#e4e"],
  [12, "#f3a"],
  [14, "#e33"],
  [16, "#f52"],
  [18, "#e92"],
  [20, "#dd2"],
  [22, "#ce0"],
  [24, "#9e3"],
  [26, "#3d3"],
  [28, "#2e6"],
  [30, "#2aa"],
  [32, "#158"],
  [34, "#127"],
  [36, "#006"],
  [38, "#315"],
  [40, "#516"],
  [45, "#605"],
  [50, "#000"],
  [Infinity, "#000"],
]

const ranks = [
  [1, "Beginner"],
  [2, "Basic"],
  [3, "Unremarkable"],
  [4, "Mediocre"],
  [5, "Average"],
  [6, "Decent"],
  [8, "Competent"],
  [10, "Proficient"],
  [12, "Skilled"],
  [14, "Talented"],
  [16, "Expert"],
  [18, "Exceptional"],
  [20, "Brilliant"],
  [25, "Extraordinary"],
  [30, "Renowned"],
  [35, "Unmatched"],
  [40, "Superior"],
  [45, "Legendary"],
  [50, "Mythical"],
  [55, "Insane"],
  [60, "Supreme"],
  [65, "Godly"],
  [70, "Universal"],
  [75, "Multiversal"],
  [80, "Omniversal"],
  [90, "Hyperdimensional"],
  [100, "Transcendent"],
  [120, "Transcendent+"],
  [140, "Transcendent++"],
  [160, "Transcendent+++"],
  [180, "Transcendent++++"],
  [200, "Infinite"],
  [220, "Infinite+"],
  [240, "Infinite++"],
  [260, "Infinite+++"],
  [280, "Infinite++++"],
  [300, "Beyond infinite"],
  [320, "Beyond infinite+"],
  [340, "Beyond infinite++"],
  [360, "Beyond infinite+++"],
  [380, "Beyond infinite++++"],
  [400, "Endless"],
  [420, "Endless+"],
  [440, "Endless++"],
  [460, "Endless+++"],
  [480, "Endless++++"],
  [500, "Void"],
  [825, "Million XP"],
  [1000, "Void+"],
  [1500, "Void++"],
  [2000, "Void+++"],
  [2500, "Extensive grinding"],
  [5000, "Extensive grinding+"],
  [7500, "Extensive grinding++"],
  [10000, "Serious dedication"],
  [20000, "Epic dedication"],
  [30000, "Transcendent dedication"],
  [40000, "Billion XP dedication"],
  [50000, "Unmatched dedication"],
  [1000000, "This is 405b XP"]
  [Infinity, "Error"],
]

const pets = [
  //Name, XP multiplier [button and daily], xp button cooldown reducer, crate cooldown reducer, XPBoost multi
  ["Test", 1, 1, 1, 1], //0
  ["Green butterfly", 1.06, 1, 1, 1], //1 [The most generic nature pet ever. Overused] Stats: 1.12, 1.08, 1, 1
  ["Green lizard", 1.12, 1, 1, 1], //2 [These eat mosquitoes. Make sure to have one around your house in summer]
  ["Rat", 1.24, 1, 1, 1], //3 [A normal ratatta. Charizard, use fire breath!]
  ["Purple butterfly", 1.2, 1.03, 1, 1], //4 [A mutated butterfly. They are quite common around here /s]
  ["Glowing spider", 1.34, 1.04, 1, 1], //5 [So you can see it in the dark]
  ["Green dragon", 2.1, 1.08, 1.01, 1], //6 (oldpet1.6 around old3.3) [I don't know how the plants haven't died after many landscapes and heights]
  ["Snake", 1.3, 1.02, 1.02, 1], //7+16 [They are like librarians, shhhhhhhhhhhhhhhhhhhh]
  ["Giant firefly", 1.4, 1.06, 1.04, 1], //8 [Would be nothing if it was a small firefly. Here is the character for it: ⌤]
  ["Eldritch eyeball", 1.56, 1.05, 1.05, 1], //9 [Eyyyyyyyyyy Eyyyyy Ey! Aaaaaaaaaaaaquiiiiiii ElRich eeeeeeeeeeen Minecraft!]
  ["Gargoyle", 1.6, 1, 1.07, 1], //10 [Do not close the lights with this pet, it will eat you in the dark]
  ["Glowing eyeball", 1.64, 1.08, 1.06, 1], //11 [If it didn't glow it wouldn't be unique]
  ["Red butterfly", 2.1, 1.08, 1.1, 1], //12 [A burning firefly, it heats these exp buttons]
  ["Blue dragon", 3.6, 1.15, 1.14, 1], //13 (oldpet2.7 around new1.3) [Ice dragon? Meh]
  ["Large tortoise", 2.2, 1, 1, 1], //14 [It's so large it walks at the speed of a normal human]
  ["Mutant tarantula", 1.9, 1.08, 1.02, 1], //15 [Aren't they all mutant? Oh wait, this one's bigger, nonononono]
  ["Living rose", 2.1, 1.06, 1.05, 1], //16 [It would be way worse if you had a dead rose]
  ["Ice golem", 2.4, 1.02, 1.02, 1], //17 [2 elixir, only used as distraction]
  ["Cat", 1.8, 1.23, 1.15, 1], //18 [Alergy go br]
  ["Vortex monster", 2.8, 1.08, 1.1, 1], //19 [I think vortex is like a blackhole, idk]
  ["Geometrical eyeball", 2.6, 1.12, 1.12, 1], //20 [It loves dubstep, you might know why...]
  ["Death scorpion", 3, 1.1, 1.13, 1], //21 [Don't know if all scorpions are death scorpions, but the name sounds cool]
  ["Red dragon", 5.8, 1.2, 1.14, 1], //22 (oldpet3.8 around new1.7 or 2.3) [Truly a fire dragon, what they should be]
  ["Blue butterfly", 2.4, 1.1, 1.13, 1], //newpet1.1 (23) [More like cyan butterfly but it doesn't sound as good]
  ["Shiny rat", 2.6, 1.2, 1.2, 1], //newpet1.2 (24) [Oh wow, a shiny Ratatta. The most normal thing that I will do is Charizard, use fire breath!]
  ["Earth snake", 3.6, 1.15, 1.14, 1], //newpet1.3 (25) [How did we just travel to the desert so fast?]
  ["Salamander", 3.4, 1.18, 1.2, 1], //newpet1.4 (26) [You've got the eyes of a salamander]
  ["Dark snake", 3.2, 1.24, 1.21, 1], //newpet1.5 (27) [This is just earth snake but took the sun too much]
  ["Lilypad", 6.1, 1.1, 1.1, 1], //newpet1.6 (28) [These lilypads can't handle a plant to defend from zombies]
  ["Spirit", 8, 1.2, 1, 1], //newpet1.7 (29) [I really love the design of this one pet]
  ["Living mushroom", 9, 1.25, 1.2, 1], //newpet1.8 (30) [If someone of you played Vesteria on roblox, this one is like the mushroom boss]
  ["Purple dragon", 17, 1.35, 1.4, 1], //newpet1.9 (31) [We just need 3 more dragons until we get to the rainbow dragon]
  ["Red slime", 5.2, 1.2, 1.3, 1], //newpet 2.1 (32)
  ["Poisonous eyeball", 6.3, 1.22, 1.24, 1], //newpet 2.2 (33)
  ["Eyeball spider", 8.9, 1.24, 1.21, 1], //newpet 2.3 (34) (Make this similar stats to living mushroom)
  ["Living tree", 13, 1.3, 1.3, 1], //newpet 2.4 (35)
  ["Fire spectral", 17, 1.34, 1.41, 1], //newpet 2.5 (36) (Slightly better than purple dragon)
  ["Purple star", 26, 1.4, 1.45, 1], //newpet 2.6 (37) "is star one acrimony - quasar"
  ["Holy pig", 61, 1.45, 1.5, 1.01], //newpet 2.7 (38)
  ["Yellow dragon", 100, 1.7, 1.65, 1.02], //newpet 2.8 (39) (Best pet for a while, you deserve my respect if you get this rare drop)
  ["Small elf", 10.2, 1.28, 1.27, 1.02], //newpet 3.1 (40)
  ["Eyeloon", 23.1, 1.37, 1.39, 1.05], //newpet 3.2 (41)
  ["Glowing jellyfish", 43.4, 1.5, 1.5, 1.07], //newpet 3.3 (42)
  ["Golden butterfly", 91, 1.65, 1.6, 1.1], //newpet 3.4 (43)
  ["2-headed snake", 183, 2, 2, 1.15], //newpet 3.5 (44)
  ["Fire lord", 326, 2.35, 2.3, 1.2], //newpet 3.6 (45)
  ["Dark blue dragon", 746, 2.7, 2.8, 1.3], //newpet 3.7 (46) (Ignore 2.8's message, this one is gonna be the best pet in a considerable time. True respect if you manage to grind this one pet and succeed)
  ["Dancing skeleton", 10.1, 1.31, 1.26, 1.011], //47 shadows of placeholder
  ["Small skeleton", 1.4, 1.04, 1.02, 1], //48 [Children slavery, what a coward]
  ["Skeletal dog", 1.46, 1.05, 1.04, 1], //48 [This dog is too busy trying to fetch his bones]
  ["Skeleton", 1.52, 1.08, 1.08, 1], //49 [Adulthood, this skeleton wants to toot toot like so many years ago]
  ["Skeletal snake", 1.72, 1.08, 1.1, 1], //50 [Don't snakes have no bones? This pet is confusing me]
  ["Skeletal vulture", 2.4, 1.15, 1.1, 1], //51 [This is like a bird but evolved. Truly an outstanding move]
  ["Skeletal hound", 2.6, 1.1, 1.15, 1], //52 [Fun fact: This is the last pet to get funny text]
  ["Skeletal hydra", 5.4, 1.2, 1.2, 1], //53 [Skeletal hydrant or smh don't know about these creatures]
  ["Skeletal dragon", 10.6, 1.3, 1.25, 1.01], //54 [This dragon should have felt down to pieces a long time ago]
  ["Ghost rodent", 1.44, 1.05, 1.03, 1], //55 [Ghost buster!]
  ["Ghost fly", 1.5, 1.06, 1.05, 1], //56 [Flies at 3am be like]
  ["Large ghost ant", 1.8, 1.1, 1.08, 1], //57 [Ohio ants]
  ["Ghost bat", 1.8, 1.1, 1.12, 1], //58 [It isn't really a ghost, it just cammo in the dark]
  ["Ghost dog", 2.28, 1.2, 1.2, 1], //59 [Why do all humans ignore me? Truly a ghost moment]
  ["Ghost tarantula", 3.2, 1.13, 1.18, 1], //60 [AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA]
  ["Ghost hydra", 7, 1.25, 1.23, 1], //61 [Really wanna put skeletal hydra text here but, too much ctrl c ctrl v]
  ["Ghost dragon", 12.2, 1.3, 1.25, 1.01], //63 [Truly a powerful character. Invisibility go br]
]

const skeletalUnboxChances = [ //will be set to 1
  [47,1], [48,56], [49,36], [50,24], [51,16], [52,8], [53,5], [54,2], [55,1]
]

const ghostUnboxChances = [ //will be set to 2
  [56,56], [57,36], [58,24], [59,16], [60,8], [61,5], [62,2], [63,1]
]

const basicUnboxChances = [ //this one will actually be 3
  [1,80], [2,64], [3,20], [4,8], [5,6], [6,1]
]

const advancedUnboxChances = [
  [7,85], [8,75], [9,55], [10,42], [11,28], [12,16], [13,11], [14,5], [15,1]
]

const epicUnboxChances = [
  [8,100], [14,90], [10,78], [15,68], [16,55], [17,40], [18,30], [19,17], [20,12], [21,5], [22,1]    
]

const legendaryUnboxChances = [ //4 5 and 6
  [23,230], [24,200], [25,150], [26,100], [27,86], [28,40], [29,20], [30,6], [31,1]
]

const prestigeUnboxChances = [ //now it jumps to 7 and works fine from now
  [32,426], [33,356], [34,286], [35,152], [36,86], [37,26], [38,4], [39,1]
]

const trascendantUnboxChances = [ //this is 8
 [40,126], [41,58], [42,26], [43,11], [44,5], [45,2], [46,1],
]

const enemies = [
  //Name, hp, damage, defense, loot tier
  ["Test", 0.1, 0.1, 0.01, 1],
  ["Small humanoid", 5, 0.5, 0.05, 1], //1.1 (1) - 1k XP / 0.5 Coins
  ["Angry humanoid", 20, 2, 0.1, 1], //1.2 (2) - 4k XP / 2 Coins
  ["Angry wife", 50, 5, 0.2, 1], //1.3 (3) - 10k XP / 5 Coins
  ["Nordic grandfather", 150, 10, 0.5, 1], //1.4 (4) - 30k XP / 10 Coins
  ["Armored human", 500, 25, 2, 2], //1.5 (5) - 250k XP / 50 Coins / 0.2 XPBoost
  ]

  const starterEnemiesChances = [ //45, 30, 15, 8, 2
  [1, 35], [2, 25], [3, 20], [4, 15], [5, 5],
  ]