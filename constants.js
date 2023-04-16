const unlockLevels = [2,3,4,5,6,8,12,18,20,35,50,70]
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
  [Infinity, "Error"],
]

const pets = [
  //Name, multiplier to Lower button XP, multiplier to higher button XP, divider to XP cooldowns, divider to pet cooldowns
  ["Test", 1, 1, 1, 1], //0
  ["Green butterfly", 1.06, 1.04, 1, 1], //1 [The most generic nature pet ever. Overused]
  ["Green lizard", 1.03, 1.08, 1, 1], //2 [These eat mosquitoes. Make sure to have one around your house in summer]
  ["Rat", 1.12, 1.07, 1, 1], //3 [A normal ratatta. Charizard, use fire breath!]
  ["Purple butterfly", 1.1, 1.15, 1.03, 1], //4 [A mutated butterfly. They are quite common around here /s]
  ["Glowing spider", 1.17, 1.23, 1.04, 1], //5 [So you can see it in the dark]
  ["Green dragon", 1.55, 1.5, 1.08, 1.01], //6 (oldpet1.6 around old3.3) [I don't know how the plants haven't died after many landscapes and heights]
  ["Snake", 1.15, 1.15, 1.02, 1.02], //7 [They are like librarians, shhhhhhhhhhhhhhhhhhhh]
  ["Giant firefly", 1.2, 1.18, 1.06, 1.04], //8 [Would be nothing if it was a small firefly. Here is the character for it: ⌤]
  ["Eldritch eyeball", 1.28, 1.22, 1.05, 1.05], //9 [Eyyyyyyyyyy Eyyyyy Ey! Aaaaaaaaaaaaquiiiiiii ElRich eeeeeeeeeeen Minecraft!]
  ["Gargoyle", 1.3, 1.32, 1, 1.07], //10 [Do not close the lights with this pet, it will eat you in the dark]
  ["Glowing eyeball", 1.32, 1.28, 1.08, 1.06], //11 [If it didn't glow it wouldn't be unique]
  ["Red butterfly", 1.55, 1.55, 1.08, 1.1], //12 [A burning firefly, it heats these exp buttons]
  ["Blue dragon", 2.3, 2.3, 1.15, 1.14], //13 (oldpet2.7 around new1.3) [Ice dragon? Meh]
  ["Large tortoise", 1.4, 1.8, 1, 1], //14 [It's so large it walks at the speed of a normal human]
  ["Mutant tarantula", 1.45, 1.5, 1.08, 1.02], //15 [Aren't they all mutant? Oh wait, this one's bigger, nonononono]
  ["Living rose", 1.55, 1.55, 1.06, 1.05], //16 [It would be way worse if you had a dead rose]
  ["Ice golem", 1.7, 1.7, 1.02, 1.02], //17 [2 elixir, only used as distraction]
  ["Cat", 1.4, 1.4, 1.23, 1.15], //18 [Alergy go br]
  ["Vortex monster", 1.4, 1.9, 1.08, 1.1], //19 [I think vortex is like a blackhole, idk]
  ["Geometrical eyeball", 1.8, 1.8, 1.12, 1.12], //20 [It loves dubstep, you might know why...]
  ["Death scorpion", 2, 2, 1.1, 1.13], //21 [Don't know if all scorpions are death scorpions, but the name sounds cool]
  ["Red dragon", 3.4, 3, 1.2, 1.14], //22 (oldpet3.8 around new1.7 or 2.3) [Truly a fire dragon, what they should be]
  ["Blue butterfly", 1.7, 1.7, 1.1, 1.13], //newpet1.1 (23) [More like cyan butterfly but it doesn't sound as good]
  ["Shiny rat", 1.8, 1.8, 1.2, 1.2], //newpet1.2 (24) [Oh wow, a shiny Ratatta. The most normal thing that I will do is Charizard, use fire breath!]
  ["Earth snake", 2.3, 2.3, 1.15, 1.14], //newpet1.3 (25) [How did we just travel to the desert so fast?]
  ["Salamander", 2.2, 2.2, 1.18, 1.2], //newpet1.4 (26) [You've got the eyes of a salamander]
  ["Dark snake", 2, 2, 1.24, 1.21], //newpet1.5 (27) [This is just earth snake but took the sun too much]
  ["Lilypad", 3.3, 3.55, 1.1, 1.1], //newpet1.6 (28) [These lilypads can't handle a plant to defend from zombies]
  ["Spirit", 4.5, 4.5, 1.2, 1], //newpet1.7 (29) [I really love the design of this one pet]
  ["Living mushroom", 5, 3.2, 1.25, 1.2], //newpet1.8 (30) [If someone of you played Vesteria on roblox, this one is like the mushroom boss]
  ["Purple dragon", 9, 8.6, 1.35, 1.4], //newpet1.9 (31) [We just need 3 more dragons until we get to the rainbow dragon]
]

const specialPets = [
  ["Test", 1, 1, 1, 1], //0
  ["Small skeleton", 1.2, 1.16, 1.04, 1.02], //1 [Children slavery, what a coward]
  ["Skeletal dog", 1.23, 1.18, 1.05, 1.04], //2 [This dog is too busy trying to fetch his bones]
  ["Skeleton", 1.26, 1.26, 1.08, 1.08], //3 [Adulthood, this skeleton wants to toot toot like so many years ago]
  ["Skeletal snake", 1.33, 1.36, 1.08, 1.1], //4 [Don't snakes have no bones? This pet is confusing me]
  ["Skeletal vulture", 1.7, 1.5, 1.15, 1.1], //5 [This is like a bird but evolved. Truly an outstanding move]
  ["Skeletal hound", 1.8, 1.8, 1.1, 1.15], //6 [Fun fact: This is the last pet to get funny text]
  ["Skeletal hydra", 3.2, 3.8, 1.2, 1.2], //7 [Skeletal hydrant or smh don't know about these creatures]
  ["Skeletal dragon", 5.5, 5.8, 1.3, 1.25], //8 [This dragon should have felt down to pieces a long time ago]
  ["Ghost rodent", 1.22, 1.18, 1.05, 1.03], //9 [Ghost buster!]
  ["Ghost fly", 1.25, 1.21, 1.06, 1.05], //10 [Flies at 3am be like]
  ["Large ghost ant", 1.35, 1.4, 1.1, 1.08], //11 [Ohio ants]
  ["Ghost bat", 1.4, 1.4, 1.1, 1.12], //12 [It isn't really a ghost, it just cammo in the dark]
  ["Ghost dog", 1.6, 1.64, 1.2, 1.2], //13 [Why do all humans ignore me? Truly a ghost moment]
  ["Ghost tarantula", 2.1, 2.1, 1.13, 1.18], //14 [AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA]
  ["Ghost hydra", 3.5, 4, 1.25, 1.23], //15 [Really wanna put skeletal hydra text here but, too much ctrl c ctrl v]
  ["Ghost dragon", 6.5, 6.6, 1.3, 1.25], //16 [Truly a powerful character. Invisibility go br]
]

const basicUnboxChances = [
  [1,80], [2,64], [3,20], [4,8], [5,6], [6,1]
]

const advancedUnboxChances = [
  [4,85], [7,75], [5,55], [8,42], [9,28], [10,16], [11,11], [12,5], [13,1]
]

const epicUnboxChances = [
  [8,100], [14,90], [10,78], [15,68], [16,55], [17,40], [18,30], [19,17], [20,12], [21,5], [22,1]    
]

const legendaryUnboxChances = [
  [23,230], [24,200], [25,150], [26,100], [27,86], [28,40], [29,20], [30,6], [31,1]
]

const skeletalUnboxChances = [
  [1,56], [2,36], [3,24], [4,16], [5,8], [6,5], [7,2], [8,1]
]

const ghostUnboxChances = [
  [9,56], [10,36], [11,24], [12,16], [13,8], [14,5], [15,2], [16,1]
]