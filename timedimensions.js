//v1.0 feature content
const unlockTiers = [2,3,4,6,10,15,23,33,70,130]

const Dimensions = [ //Dimension stats
  {name: "Shards", dimensionArray: 0, cooldown: 0, cooldownID: 0},
  {name: "TimeDim1", dimensionArray: 0, cooldown: 300, cooldownID: 27}, //5mins
  {name: "TimeDim2", dimensionArray: 1, cooldown: 900, cooldownID: 28}, //15mins
  {name: "TimeDim3", dimensionArray: 2, cooldown: 3600, cooldownID: 29}, //1h
  {name: "TimeDim4", dimensionArray: 3, cooldown: 7200, cooldownID: 30}, //2h
  {name: "TimeDim5", dimensionArray: 4, cooldown: 21600, cooldownID: 31}, //6h
  {name: "TimeDim6", dimensionArray: 5, cooldown: 43200, cooldownID: 32}, //12h
  {name: "TimeDim7", dimensionArray: 6, cooldown: 86400, cooldownID: 33}, //1d
  {name: "TimeDim8", dimensionArray: 7, cooldown: 129600, cooldownID: 34}, //1d 12h
  {name: "TimeDim9", dimensionArray: 8, cooldown: 172800, cooldownID: 35}, //2d
  {name: "TimeDim10", dimensionArray: 9, cooldown: 345600, cooldownID: 56}, //4d
  {name: "TimeDim11", dimensionArray: 10, cooldown: 604800, cooldownID: 57}, //7d
]
//Shards for a tier: 5^x -1 basically
function ShardToTier(x) {return Math.floor(Math.log(x+1)/Math.log(5)) + 1}
function TierToShard(x) {return 5 ** Math.floor(x-1) - 1}

function clickDimension(x, y) {
  if (x == 1) {game.timeShards += game.dimensionAmount[x-1] * game.dimensionMulti[x-1]}
  game.dimensionAmount[x-2] += game.dimensionAmount[x-1] * game.dimensionMulti[x-1]
  if (y < 2) {game.buttonCooldowns[Dimensions[x].cooldownID] = Dimensions[x].cooldown / (game.dimensionCooldown * game.artifactsCooldown)}
  game.buttonClicks += 1
  if (x > 1) {clickDimension(x-1, 2)}
}

function dimensionalReset(x) {
  game.timeShards = 0
  game.dimensionUnlocks = 0
  game.dimensionAmount = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  for (i=1;i<Dimensions.length;i++) game.buttonCooldowns[Dimensions[i].cooldownID] = 0
  if (x == 1) {
    for (i=0;i<5;i++) game.items[i + 25] = 0
  }
  if (x == 2) {game.frozenBaseBulk = 1}
  calculateDimensionMultipliers()
}

function calculateDimensionMultipliers() {
 game.allDimensionMultipliers = 1 * (1 + (game.clickToDimension - 1) * game.items[25]) * pets[game.selectedPet][5] * (1 + (game.bossMulti - 1) * game.items[27]) * (1 + (game.enemiesToDimension - 1) * game.items[26]) * game.artifactsDimension * game.itemDimensions * (1 + game.items[50] * 7)
 game.dimensionMulti[0] = 1 * game.allDimensionMultipliers * 2 ** (game.items[25] + game.items[26] + game.items[27] + game.items[28] + game.items[29])
 game.dimensionMulti[1] = 1 * game.allDimensionMultipliers * 2 ** (game.items[26] + game.items[27] + game.items[28] + game.items[29])
 game.dimensionMulti[2] = 1 * game.allDimensionMultipliers * 2 ** (game.items[27] + game.items[28] + game.items[29])
 game.dimensionMulti[3] = 1 * game.allDimensionMultipliers * 2 ** (game.items[28] + game.items[29])
 game.dimensionMulti[4] = 1 * game.allDimensionMultipliers * 2 ** (game.items[29])
 game.dimensionMulti[5] = 1 * game.allDimensionMultipliers * 2 ** (0)
 game.dimensionMulti[6] = 1 * game.allDimensionMultipliers * 2 ** (0)
 game.dimensionMulti[7] = 1 * game.allDimensionMultipliers * 2 ** (0)
 game.dimensionMulti[8] = 1 * game.allDimensionMultipliers * 2 ** (0)
 game.dimensionMulti[9] = 1 * game.allDimensionMultipliers * 2 ** (0)
 game.dimensionMulti[10] = 1 * game.allDimensionMultipliers * 2 ** (0)
}
setInterval(calculateDimensionMultipliers, 50)