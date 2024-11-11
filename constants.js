const unlockLevels = [2,3,4,5,6,8,12,15,20,35,50,70,100,125,150,200,250,300,350,400,500,1500,20000,50000,100000,1000000,5000000,500000000,1*10**10,5*10**10,2.5*10**11]
const importantUnlockLevels = [8,100,500,1500,250000,5000000]
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
  [1000, "Void+"],
  [1500, "Void++"],
  [2000, "Void+++"],
  [2500, "Extensive"],
  [5000, "Extensive+"],
  [7500, "Extensive++"],
  [10000, "Extensive+++"],
  [20000, "Dedicated"],
  [40000, "Dedicated+"],
  [60000, "Dedicated++"],
  [80000, "Dedicated+++"],
  [100000, "Loot"],
  [250000, "Magic"],
  [500000, "Magic+"],
  [750000, "Magic++"],
  [1000000, "Magic+++"],
  [1500000, "Troll"],
  [2000000, "Insanity"],
  [4000000, "Insanity+"],
  [6000000, "Insanity++"],
  [8000000, "Insanity+++"],
  [10000000, "Time"],
  [20000000, "Time+"],
  [30000000, "Time++"],
  [40000000, "Time+++"],
  [50000000, "Space"],
  [75000000, "Space+"],
  [100000000, "Space++"],
  [150000000, "Space+++"],
  [200000000, "Finality"],
  [400000000, "Finality+"],
  [600000000, "Finality++"],
  [800000000, "Finality+++"],
  [10**9, "Alpha"],
  [2.5*10**9, "Alpha+"],
  [5*10**9, "Alpha++"],
  [7.5*10**9, "Alpha+++"],
  [10**10, "Beta"],
  [2.5*10**10, "Beta+"],
  [5*10**10, "Beta++"],
  [7.5*10**10, "Beta+++"],
  [10**11, "Chi"],
  [2.5*10**11, "Chi+"],
  [5*10**11, "Chi++"],
  [7.5*10**11, "Chi+++"],
  [10**12, "Delta"],
  [7.5*10**12, "Delta+"],
  [5*10**13, "Delta++"],
  [2.5*10**14, "Delta+++"],
  [10**15, "Epsilon"],
  [7.5*10**15, "Epsilon+"],
  [5*10**16, "Epsilon++"],
  [2.5*10**17, "Epsilon+++"],
  [10**18, "Fabled"],
  [10**25, "Impossibly dedicated"],
  [10**100, "Impossibly dedicated squared"],
  [Infinity, "Error"],
] //space and finality, omega

const tierRanks = [
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
  [440, "Endless++"], //This is around 1e308 shards so it's the theorical cap
  [460, "Endless+++"],
  [480, "Endless++++"],
  [500, "Void"],
  [Infinity, "Error"],
]

const pets = [
  //Name, XP multiplier [button and daily], xp button cooldown reducer, crate cooldown reducer, XPBoost multi, all dimensions multi
  ["Test", 1, 1, 1, 1, 1], //0
  ["Green butterfly", 1.06, 1, 1, 1, 1], //1 [The most generic nature pet ever. Overused] Stats: 1.12, 1.08, 1, 1
  ["Green lizard", 1.12, 1, 1, 1, 1], //2 [These eat mosquitoes. Make sure to have one around your house in summer]
  ["Rat", 1.24, 1, 1, 1, 1], //3 [A normal ratatta. Charizard, use fire breath!]
  ["Purple butterfly", 1.2, 1.03, 1, 1, 1], //4 [A mutated butterfly. They are quite common around here /s]
  ["Glowing spider", 1.34, 1.04, 1, 1, 1], //5 [So you can see it in the dark]
  ["Green dragon", 2.1, 1.08, 1.01, 1, 1], //6 (oldpet1.6 around old3.3) [I don't know how the plants haven't died after many landscapes and heights]
  ["Snake", 1.3, 1.02, 1.02, 1, 1], //7+16 [They are like librarians, shhhhhhhhhhhhhhhhhhhh]
  ["Giant firefly", 1.4, 1.06, 1.04, 1, 1], //8 [Would be nothing if it was a small firefly. Here is the character for it: ⌤]
  ["Eldritch eyeball", 1.56, 1.05, 1.05, 1, 1], //9 [Eyyyyyyyyyy Eyyyyy Ey! Aaaaaaaaaaaaquiiiiiii ElRich eeeeeeeeeeen Minecraft!]
  ["Gargoyle", 1.6, 1, 1.07, 1, 1], //10 [Do not close the lights with this pet, it will eat you in the dark]
  ["Glowing eyeball", 1.64, 1.08, 1.06, 1, 1], //11 [If it didn't glow it wouldn't be unique]
  ["Red butterfly", 2.1, 1.08, 1.1, 1, 1], //12 [A burning firefly, it heats these exp buttons]
  ["Blue dragon", 3.6, 1.15, 1.14, 1, 1], //13 (oldpet2.7 around new1.3) [Ice dragon? Meh]
  ["Large tortoise", 2.2, 1, 1, 1, 1], //14 [It's so large it walks at the speed of a normal human]
  ["Mutant tarantula", 1.9, 1.08, 1.02, 1, 1], //15 [Aren't they all mutant? Oh wait, this one's bigger, nonononono]
  ["Living rose", 2.1, 1.06, 1.05, 1, 1], //16 [It would be way worse if you had a dead rose]
  ["Ice golem", 2.4, 1.02, 1.02, 1, 1], //17 [2 elixir, only used as distraction]
  ["Cat", 1.8, 1.23, 1.15, 1, 1], //18 [Alergy go br]
  ["Vortex monster", 2.8, 1.08, 1.1, 1, 1], //19 [I think vortex is like a blackhole, idk]
  ["Geometrical eyeball", 2.6, 1.12, 1.12, 1, 1], //20 [It loves dubstep, you might know why...]
  ["Death scorpion", 3, 1.1, 1.13, 1, 1], //21 [Don't know if all scorpions are death scorpions, but the name sounds cool]
  ["Red dragon", 5.8, 1.2, 1.14, 1, 1], //22 (oldpet3.8 around new1.7 or 2.3) [Truly a fire dragon, what they should be]
  ["Blue butterfly", 2.4, 1.1, 1.13, 1, 1], //newpet1.1 (23) [More like cyan butterfly but it doesn't sound as good]
  ["Shiny rat", 2.6, 1.2, 1.2, 1, 1], //newpet1.2 (24) [Oh wow, a shiny Ratatta. The most normal thing that I will do is Charizard, use fire breath!]
  ["Earth snake", 3.6, 1.15, 1.14, 1, 1], //newpet1.3 (25) [How did we just travel to the desert so fast?]
  ["Salamander", 3.4, 1.18, 1.2, 1, 1], //newpet1.4 (26) [You've got the eyes of a salamander]
  ["Dark snake", 3.2, 1.24, 1.21, 1, 1], //newpet1.5 (27) [This is just earth snake but took the sun too much]
  ["Lilypad", 6.1, 1.1, 1.1, 1, 1], //newpet1.6 (28) [These lilypads can't handle a plant to defend from zombies]
  ["Spirit", 8, 1.2, 1, 1, 1], //newpet1.7 (29) [I really love the design of this one pet]
  ["Living mushroom", 9, 1.25, 1.2, 1, 1], //newpet1.8 (30) [If someone of you played Vesteria on roblox, this one is like the mushroom boss]
  ["Purple dragon", 17, 1.35, 1.4, 1, 1], //newpet1.9 (31) [We just need 3 more dragons until we get to the rainbow dragon]
  ["Red slime", 5.2, 1.2, 1.3, 1.01, 1], //newpet 2.1 (32)
  ["Poisonous eyeball", 6.3, 1.22, 1.24, 1.02, 1], //newpet 2.2 (33)
  ["Eyeball spider", 8.9, 1.24, 1.21, 1.03, 1], //newpet 2.3 (34) (Make this similar stats to living mushroom)
  ["Living tree", 13, 1.3, 1.3, 1.05, 1], //newpet 2.4 (35)
  ["Fire spectral", 17, 1.34, 1.41, 1.07, 1], //newpet 2.5 (36) (Slightly better than purple dragon)
  ["Purple star", 26, 1.4, 1.45, 1.1, 1], //newpet 2.6 (37) "is star one acrimony - quasar"
  ["Holy pig", 61, 1.45, 1.5, 1.2, 1], //newpet 2.7 (38)
  ["Yellow dragon", 100, 1.7, 1.65, 1.5, 1], //newpet 2.8 (39) (Best pet for a while, you deserve my respect if you get this rare drop)
  ["Small elf", 10.2, 1.28, 1.27, 1.05, 1], //newpet 3.1 (40)
  ["Eyeloon", 23.1, 1.37, 1.39, 1.1, 1], //newpet 3.2 (41)
  ["Glowing jellyfish", 43.4, 1.5, 1.5, 1.2, 1], //newpet 3.3 (42)
  ["Golden butterfly", 91, 1.65, 1.6, 1.3, 1], //newpet 3.4 (43)
  ["2-headed snake", 183, 2, 2, 1.5, 1], //newpet 3.5 (44)
  ["Fire lord", 326, 2.35, 2.3, 2, 1], //newpet 3.6 (45)
  ["Dark blue dragon", 746, 2.7, 2.8, 3, 1], //newpet 3.7 (46) (Ignore 2.8's message, this one is gonna be the best pet in a considerable time. True respect if you manage to grind this one pet and succeed)
  ["Dancing skeleton", 15.1, 1.41, 1.29, 1.15, 1], //47 shadows of placeholder
  ["Small skeleton", 1.4, 1.04, 1.02, 1, 1], //48 [Children slavery, what a coward]
  ["Skeletal dog", 1.46, 1.05, 1.04, 1, 1], //48 [This dog is too busy trying to fetch his bones]
  ["Skeleton", 1.52, 1.08, 1.08, 1, 1], //49 [Adulthood, this skeleton wants to toot toot like so many years ago]
  ["Skeletal snake", 1.72, 1.08, 1.1, 1, 1], //50 [Don't snakes have no bones? This pet is confusing me]
  ["Skeletal vulture", 2.4, 1.15, 1.1, 1, 1], //51 [This is like a bird but evolved. Truly an outstanding move]
  ["Skeletal hound", 2.6, 1.1, 1.15, 1, 1], //52 [Fun fact: This is the last pet to get funny text]
  ["Skeletal hydra", 5.4, 1.2, 1.2, 1, 1], //53 [Skeletal hydrant or smh don't know about these creatures]
  ["Skeletal dragon", 10.6, 1.3, 1.25, 1.1, 1], //54 [This dragon should have felt down to pieces a long time ago]
  ["Ghost rodent", 1.44, 1.05, 1.03, 1, 1], //55 [Ghost buster!]
  ["Ghost fly", 1.5, 1.06, 1.05, 1, 1], //56 [Flies at 3am be like]
  ["Large ghost ant", 1.8, 1.1, 1.08, 1, 1], //57 [Ohio ants]
  ["Ghost bat", 1.8, 1.1, 1.12, 1, 1], //58 [It isn't really a ghost, it just cammo in the dark]
  ["Ghost dog", 2.28, 1.2, 1.2, 1, 1], //59 [Why do all humans ignore me? Truly a ghost moment]
  ["Ghost tarantula", 3.2, 1.13, 1.18, 1, 1], //60 [AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA]
  ["Ghost hydra", 7, 1.25, 1.23, 1, 1], //61 [Really wanna put skeletal hydra text here but, too much ctrl c ctrl v]
  ["Ghost dragon", 12.2, 1.3, 1.25, 1.1, 1], //63 [Truly a powerful character. Invisibility go br]
  ["Infected spider", 105, 1.75, 1.7, 1.5, 1], //64 [Around yellow dragon stats]
  ["Red snake", 180, 1.95, 1.95, 2, 1], //65
  ["Dimensional eye", 300, 2.2, 2.2, 2.5, 1], //66
  ["Radioactive rat", 500, 2.5, 2.5, 3, 1], //67 
  ["Toxic mushroom", 777, 2.8, 2.9, 3.5, 1], //68 [Around dark blue dragon stats]
  ["Universal vortex", 1200, 3.2, 3.3, 5, 1.1], //69 [Starts to drop below 1%] [nice]
  ["3-Headed snake", 1900, 3.6, 3.6, 6.5, 1.2], //70
  ["Electric eel", 3000, 4.1, 4.1, 8, 1.4], //71 [Reference to endless stairwell from Demonin]
  ["White dragon", 5700, 4.7, 5.1, 10, 1.7], //72 [Strongest pet, but it's gonna be a huge strike of luck to get it]
  ["Armored skeleton", 2600, 3.8, 3.8, 7.5, 1.35], //73 [Day 100+, new skeleton crate]
  ["Horrifying ghost", 4800, 4.4, 4.8, 9, 1.5], //74 [Day 100+, new ghost crate]
  ["Frozen spider", 5000, 5, 5, 5, 1.5], //75 Frozen pet 1
  ["Frozen bat", 7500, 7, 7, 7.5, 2], //76 Frozen pet 2
  ["Frozen firefly", 10000, 10, 10, 10, 3], //77 Frozen pet 3
  ["Frozen tarantula", 15000, 13, 13, 15, 5], //78 Frozen pet 4
  ["Frozen 2-headed hydra", 25000, 16, 16, 25, 8], //79 Frozen pet 5
  ["Frozen ghost", 40000, 20, 20, 40, 12], //80 Frozen pet 6
  ["Frozen yeti", 100000, 30, 30, 100, 15], //81 Frozen pet 7 also end of first section pets
  ["Frozen 3-headed hydra", 4800, 4.4, 4.8, 9, 1.5], //82 Frozen pet 8
  ["Frozen 4-headed hydra", 4800, 4.4, 4.8, 9, 1.5], //83 Frozen pet 9
  ["Frozen 5-headed hydra", 4800, 4.4, 4.8, 9, 1.5], //84 Frozen pet 10
  ["Frozen gigantic snake", 4800, 4.4, 4.8, 9, 1.5], //85 Frozen pet 11
  ["Frozen salamander", 4800, 4.4, 4.8, 9, 1.5], //86 Frozen pet 12
  ["Frozen dragon", 4800, 4.4, 4.8, 9, 1.5], //87 Frozen pet 13
]

const skeletalUnboxChances = [ //will be set to 1
  [48,112], [49,72], [50,48], [51,32], [52,16], [53,10], [54,4], [55,2], [47,1]
]

const skeletalBoostUnboxChances = [ //Same thing as original one but boosted odds and day 100+
  [48,560], [49,360], [50,240], [51,200], [52,160], [53,110], [54,80], [55,40], [47,20], [73,4]
]

const ghostUnboxChances = [ //will be set to 2
  [56,56], [57,36], [58,24], [59,16], [60,8], [61,5], [62,2], [63,1]
]

const ghostBoostUnboxChances = [ //Same thing as original but boosted odds and day 100+
  [56,560], [57,360], [58,240], [59,200], [60,160], [61,110], [62,80], [63,30], [74, 5]
]

const basicUnboxChances = [ //this one will actually be 3
  [1,80], [2,64], [3,20], [4,8], [5,6], [6,1]
]

const advancedUnboxChances = [
  [4,170], [7,150], [5,108], [8,84], [9,56], [10,32], [11,22], [12,12], [13,2]
]

const epicUnboxChances = [
  [8,100], [14,90], [10,78], [15,68], [16,55], [17,40], [18,30], [19,17], [20,12], [21,5], [22,1]    
]

const legendaryUnboxChances = [ //4 5 and 6
  [12, 510], [23,480], [24,440], [25,400], [26,300], [27,264], [28,120], [29,60], [30,19], [31,3]
]

const prestigeUnboxChances = [ //now it jumps to 7 and works fine from now
  [32,712], [28, 640], [33,562], [29, 500], [34,462], [35,456], [36,258], [37,78], [38,12], [39,3]
]

const trascendantUnboxChances = [ //this is 8
 [40,126], [36, 100], [41,58], [42,26], [38, 13], [43,11], [44,5], [45,2], [46,1],
]

const universalUnboxChances = [
  [64,694], [65,449], [66,258], [45,188], [67,145], [68,50], [69,20], [70,6], [71,3], [72,1], 
]

const frozenUnboxChances1 = [
  [75,90000], [76, 9000], [77,900], [78, 70], [79,24], [80, 5], [81,1],
]

const enemies = [
  //Name, hp, damage, defense, loot tier, numbers in the comments are the base drops [with no looting boosts]
  ["Test", 0.1, 0.1, 0.01, 1],
  ["Small humanoid", 5, 0.5, 0.05, 1], //1.1 (1) - 1k XP / 0.5 Coins
  ["Angry humanoid", 20, 2, 0.1, 1], //1.2 (2) - 4k XP / 2 Coins
  ["Angry wife", 50, 5, 0.2, 1], //1.3 (3) - 10k XP / 5 Coins
  ["Nordic grandfather", 150, 10, 0.5, 1], //1.4 (4) - 30k XP / 10 Coins
  ["Armored human", 500, 25, 2, 2], //1.5 (5) - 250k XP / 50 Coins / 0.02 XPBoost
  ["Stone boy", 750, 25, 10, 3], //2.1 (6) - 412.5k XP / 125 Coins / 0.15 XPBoost
  ["Water boy", 800, 70, 8, 3], //2.2 (7) - 440k XP / 350 Coins / 0.12 XPBoost
  ["Nature boy", 1000, 100, 11, 3], //2.3 (8) - 550k XP / 500 Coins / 0.165 XPBoost
  ["Magma boy", 1500, 130, 15, 3], //2.4 (9) - 825k XP / 650 Coins / 0.225 XPBoost
  ["Water siren", 2000, 170, 20, 3], //2.5 (10) - 1.1M XP / 850 Coins / 0.3 XPBoost
  ["The siren of nature", 3000, 250, 50, 4], //2.6 (11) - 2.3M XP / 2.5k Coins / 1 XPBoost
  ["White tailed human", 2500, 250, 25, 5], //3.1 (12) - 2.5M XP / 500 Coins / 0.375 XPBoost
  ["Orange tailed human", 5000, 500, 50, 5], //3.2 (13) - 5M XP / 1k Coins / 0.75 XPBoost
  ["Yellow tailed human", 10000, 1000, 100, 5], //3.3 (14) - 10M XP / 2k Coins / 1.5 XPBoost
  ["Green tailed human", 20000, 2000, 200, 5], //3.4 (15) - 20M XP / 4k Coins / 3 XPBoost
  ["Evil tailed human", 50000, 5000, 500, 5], //3.5 (16) - 50M XP / 10k Coins / 7.5 XPBoost
  ["Awakened Beast", 100000, 20000, 0, 0], //4.1 (17) - Scales with each kill and drops are managed separatedly. 1B XP / 1k Coins / 0.1 All Dimensions multi (/90 to compensate looting boosts). Stat scaling: 2^kills. Rewards scaling: 1.5^kill / 1.5^kill / kills
  ["Cold beast", 100000, 10000, 1000, 6], //5.1 (18) - 100T XP / 40k Coins / 100 XPBoost
  ["Human with ice armor", 300000, 30000, 6000, 6], //5.2 (19) - 300T XP / 120k Coins / 600 XPBoost
  ["Ice wizard", 1000000, 100000, 15000, 6], //5.3 (20) - 1Qd XP / 400k Coins / 1.5k XPBoost
  ["Frozen terminator", 5000000, 500000, 100000, 6], //5.4 (21) - 5Qd XP / 2m Coins / 10k XPBoost
  ["Flying frozen snake", 25000000, 2500000, 500000, 7], //5.5 (22) - 100Qd XP / 100m Coins / 1m XPBoost / Also guaranteed artifacts
  ]

  const starterEnemiesChances = [ //45, 30, 15, 8, 2
  [1, 30], [2, 25], [3, 20], [4, 15], [5, 10],
  ]

  const intermediateEnemiesChances = [
  [6, 30], [7, 25], [8, 20], [9, 15], [10, 10], [11, 5],
  ]

  const advancedEnemiesChances = [
  [12, 13], [13, 8], [14, 5], [15, 3], [16, 2],
  ]

  const BossChances = [
    [17, 1],
    ]

  const frozenEnemiesChances = [
    [18, 100], [19, 50], [20, 25], [21, 5], [22, 1]
  ]

  const items = [
//Name, amount you can buy
  ["Test", 100000],
  ["Starter XP orb", 2], //+50% XP gain
  ["Starter armor", 1], //+25% Stat gains
  ["Starter XPBoost orb", 1], //+10% XPBoost gain gonna be +25%
  ["Starter speed up", 1], // /1.02 cooldowns
  ["Starter looting boost", 2], //+25% fight bonus loot
  ["New area", 1], //unlocks a new fighting area
  ["Intermediate XPBoost orb", 1], //XPBoost +75%
  ["Intermediate XP orb", 2], //+100% XP gain
  ["Intermediate armor", 1], //+75% stat gains
  ["No more pet alerts", 1], //All current pet buttons will not play an alert
  ["Intermediate looting boost", 2], //+75% fight bonus loot
  ["XPBoost mastery", 1], //Gonna become +200% XPBoost
  ["Advanced XP orb", 3], //+200% XP gain
  ["Iron helmet", 1], //+150% Stats
  ["Human automation", 1], // Uses the 1st person from the area to automate pet crates 1-4 [tries to open them every 30mins]
  ["Plus one", 1], //The 4 basic pet crates unbox an extra pet
  ["Advanced looting boost", 3], //+175% Fighting rewards
  ["Daily rewards staff", 1], //Daily rewards x(XPboostEffect^0.5)
  ["Legendary XP orb", 2], //x2 xp [additive with itself, multiplicative with others]
  ["Appropiate shoes", 1], //x2 stats [multiplicative with others]
  ["Advanced XPBoost orb", 1], //+700% xpboost
  ["Speed dilation", 1], // /1.1 Button Cooldowns
  ["Loot again", 2], // x2 looting boost [additive with itself, multiplicative with others]
  ["A portal to a new dimension", 1], //New feature
  ["Dimensional reset #1", 1], //(25) From new feature, resets all dimensions and gives an xp boost
  ["Dimensional reset #2", 1], //(26) From new feature, resets all dimensions and gives a cooldown boost [on items]
  ["Dimensional reset #3", 1], //(27) From new feature, resets all dimensions and gives a tickspeed boost to dimensions
  ["Dimensional reset #4", 1], //(28) From new feature, resets all dimensions and... could boost stats or xpboost
  ["Dimensional reset #5", 1], //(29) Wait... what!!! You are telling me the 9th dimension exists
  ["Dimensional sacrifice #1", 1], //(30) Resets upgrades 25-29 but essencially adds a new level to each of them
  ["Clicky dimensions", 1], //(31) Buttons clicked boost dimension multipliers, +5000 buttons clicked Formula: sqrt((x^1.5)/353553) also maybe level 500k
  ["Blasphemous blade", 1], //(32) x2 Stat gain, x3 loot drops and enemies killed increases dimension multipliers. Formula: ln(e + x/250) maybe level 750k
  ["The necklace of awakening", 1], //(33) Unlocks a boss fight maybe level 1m
  ["Lantern of inflation", 1], //(34) Very expensive but increases many things
  ["A helping hand", 1], //(35) Helps out /shrug
  ["The trophy of time", 1], //(36) A trophy with some boosts and congratulates the player for beating check back v1.0
  ["Ice XP soft drink", 1000], //(37) "Rebuyable for 1 of the first frozen pet, buys max up to 1k, +100% xp/level"
  ["Permafrostical", 5], //(38) Adds +1 to the frozen crates opened (base) plus +x0.1 crate bulk for all crates, could require one of the 2nd pet
  ["Wizard's frost resistant robes", 1], //(39) Reduces the enemy scaling to ^1.75 and adds +^0.2 to the rewards exponent, x4 Stats too
  ["Frozen dimensions", 3], //(40) Each level doubles the cooldown of all dimensions but increases their multipliers by x5 (Not coded)
  ["Artifact condensation", 1], //(41) Buffs artifact drops by x5
  ["The tale of the Frozen Yeti", 1], //(42) Good boosts and also unlocks a new set of upgrades + frozen pets (Not coded)
  ]

  const artifacts = [
    //Name
    ["Test"], // (0)
    ["Starter XP artifact"], // (1) Dropped from the starter enemies, +1% XP
    ["Starter loot artifact"], // (2) Dropped from the intermediate enemies, +1% Coins
    ["Starter+ XP artifact"], // (3) Dropped from the advanced enemies (common), +10% XP
    ["Starter XPBoost artifact"], // (4) Dropped from the advanced enemies (rare), +10% XPBoost
    ["Frozen XP artifact"], // (5) Dropped from the frozen area (common), +100% XP
    ["Frozen XPBoost artifact"], // (6) Dropped from the frozen area (common), +50% XPBoost
    ["Frozen crate bulk artifact"], // (7) Dropped from the frozen area (uncommon), +5% Crate bulk [All crates]
    ["Frozen cooldown artifact"], // (8) Dropped from the frozen area (rare), +/0.01 All cooldowns [Additive, so 100 is /2 and 400 is /5]
    ["Frozen stats artifact"], // (9) Dropped from the frozen area (rare), +10% Stats gain
    ["Frozen dimensional artifact"], // (10) Dropped from the frozen area (very rare), +10% All dimensions multi
  ]

  const frozenArtifactsDropChances = [
    [5, 115], [6, 115], [7, 48], [8, 10], [9, 10], [10, 2]
  ]