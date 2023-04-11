const unlockLevels = [2,3,4,5,6,8,12,18,25,35,50]
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
  ["Green butterfly", 1.06, 1.04, 1, 1], //1
  ["Green lizard", 1.03, 1.08, 1, 1], //2
  ["Rat", 1.12, 1.07, 1, 1], //3
  ["Purple butterfly", 1.1, 1.15, 1.03, 1], //4
  ["Glowing spider", 1.17, 1.23, 1.04, 1], //5
  ["Green dragon", 1.55, 1.5, 1.08, 1.01], //6 (oldpet1.6 around old3.3)
  ["Snake", 1.15, 1.15, 1.02, 1.02], //7
  ["Giant firefly", 1.2, 1.18, 1.06, 1.04], //8
  ["Eldritch eyeball", 1.28, 1.22, 1.05, 1.05], //9
  ["Gargoyle", 1.3, 1.32, 1, 1.07], //10
  ["Glowing eyeball", 1.32, 1.28, 1.08, 1.06], //11
  ["Red butterfly", 1.55, 1.55, 1.08, 1.1], //12
  ["Blue dragon", 2.3, 2.3, 1.15, 1.14], //13 (oldpet2.7 around new1.3)
  ["Large tortoise", 1.4, 1.8, 1, 1], //14
  ["Mutant tarantula", 1.45, 1.5, 1.08, 1.02], //15
  ["Living rose", 1.55, 1.55, 1.06, 1.05], //16
  ["Ice golem", 1.7, 1.7, 1.02, 1.02], //17
  ["Cat", 1.4, 1.4, 1.23, 1.15], //18
  ["Vortex monster", 1.4, 1.9, 1.08, 1.1], //19
  ["Geometrical eyeball", 1.8, 1.8, 1.12, 1.12], //20
  ["Death scorpion", 2, 2, 1.1, 1.13], //21
  ["Red dragon", 3.4, 3, 1.2, 1.14], //22 (oldpet3.8 around new1.7 or 2.3)
  ["Blue butterfly", 1.7, 1.7, 1.1, 1.13], //newpet1.1 (23)
  ["Shiny rat", 1.8, 1.8, 1.2, 1.2], //newpet1.2 (24)
  ["Earth snake", 2.3, 2.3, 1.15, 1.14], //newpet1.3 (25)
  ["Salamander", 2.2, 2.2, 1.18, 1.2], //newpet1.4 (26)
  ["Dark snake", 2, 2, 1.24, 1.21], //newpet1.5 (27)
  ["Lilypad", 3.3, 3.55, 1.1, 1.1], //newpet1.6 (28)
  ["Spirit", 4.5, 4.5, 1.2, 1], //newpet1.7 (29)
  ["Living mushroom", 5, 3.2, 1.25, 1.2], //newpet1.8 (30)
  ["Purple dragon", 9, 8.6, 1.35, 1.4], //newpet1.9 (31)
]

const specialPets = [
  ["Test", 1, 1, 1, 1], //0
  ["Small skeleton", 1.2, 1.16, 1.04, 1.02], //1
  ["Skeletal dog", 1.23, 1.18, 1.05, 1.04], //2
  ["Skeleton", 1.26, 1.26, 1.08, 1.08], //3
  ["Skeletal snake", 1.33, 1.36, 1.08, 1.1], //4
  ["Skeletal vulture", 1.7, 1.5, 1.15, 1.1], //5
  ["Skeletal hound", 1.8, 1.8, 1.1, 1.15], //6
  ["Skeletal hydra", 3.2, 3.8, 1.2, 1.2], //7
  ["Skeletal dragon", 5.5, 5.8, 1.3, 1.25], //8
  ["Ghost rodent", 1.22, 1.18, 1.05, 1.03], //9
  ["Ghost fly", 1.25, 1.21, 1.06, 1.05], //10
  ["Large ghost ant", 1.35, 1.4, 1.1, 1.08], //11
  ["Ghost bat", 1.4, 1.4, 1.1, 1.12], //12
  ["Ghost dog", 1.6, 1.64, 1.2, 1.2], //13
  ["Ghost tarantula", 2.1, 2.1, 1.13, 1.18], //14
  ["Ghost hydra", 3.5, 4, 1.25, 1.23], //15
  ["Ghost dragon", 6.5, 6.6, 1.3, 1.25], //16
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
  [1,54], [2,36], [3,24], [4,16], [5,10], [6,5], [7,2], [8,1]
]

const ghostUnboxChances = [
  [9,54], [10,36], [11,24], [12,16], [13,10], [14,5], [15,2], [16,1]
]