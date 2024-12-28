//v1.0 feature content
const unlockTiers = [2,3,4,6,10,15,23,33]

const Dimensions = [ //Dimension stats
  {name: "Shards", dimensionArray: 0, cooldown: 0, cooldownID: 0},
  {name: "TimeDim1", dimensionArray: 0, cooldown: 300, cooldownID: 27}, //10mins
  {name: "TimeDim2", dimensionArray: 1, cooldown: 900, cooldownID: 28}, //30mins
  {name: "TimeDim3", dimensionArray: 2, cooldown: 3600, cooldownID: 29}, //2h
  {name: "TimeDim4", dimensionArray: 3, cooldown: 7200, cooldownID: 30}, //6h
  {name: "TimeDim5", dimensionArray: 4, cooldown: 21600, cooldownID: 31}, //12h
  {name: "TimeDim6", dimensionArray: 5, cooldown: 43200, cooldownID: 32}, //1d
  {name: "TimeDim7", dimensionArray: 6, cooldown: 86400, cooldownID: 33}, //2d
  {name: "TimeDim8", dimensionArray: 7, cooldown: 129600, cooldownID: 34}, //3d
  {name: "TimeDim9", dimensionArray: 8, cooldown: 172800, cooldownID: 35}, //4d
]
//Shards for a tier: 5^x -1 basically
function ShardToTier(x) {return Math.floor(Math.log(x+1)/Math.log(6)) + 1}
function TierToShard(x) {return 6 ** Math.floor(x-1) - 1}

function clickDimension(x, y) {
  if (x == 1) {player.timeShards += player.dimensionAmount[x-1] * player.dimensionMulti[x-1]}
  player.dimensionAmount[x-2] += player.dimensionAmount[x-1] * player.dimensionMulti[x-1]
  player.buttonCooldowns[Dimensions[x].cooldownID] = Dimensions[x].cooldown / (player.dimensionCooldown * player.artifactsCooldown)
  player.buttonClicks += 1
}

function dimensionalReset(x) {
  player.timeShards = 0
  player.dimensionUnlocks = 0
  player.dimensionAmount = [1, 1, 1, 1, 1, 1, 1, 1, 1]
  for (i=1;i<Dimensions.length;i++) player.buttonCooldowns[Dimensions[i].cooldownID] = 0
  if (x == 1) {
    for (i=0;i<5;i++) player.items[i + 25] = 0
    for (i=0;i<5;i++) player.items[i + 31] = 0
  }
  if (x == 2) {player.frozenBaseBulk = 1}
  calculateDimensionMultipliers()
}

function calculateDimensionMultipliers() {
 player.allDimensionMultipliers = player.clickToDimension * pets[player.selectedPet][5] * player.bossMulti * player.enemiesToDimension * player.artifactsDimension * player.itemDimensions
 player.dimensionMulti[0] = 0.5 * player.allDimensionMultipliers * 2 ** (player.items[25] + player.items[26] + player.items[27] + player.items[28] + player.items[29])
 player.dimensionMulti[1] = 0.5 * player.allDimensionMultipliers * 2 ** (player.items[26] + player.items[27] + player.items[28] + player.items[29])
 player.dimensionMulti[2] = 0.5 * player.allDimensionMultipliers * 2 ** (player.items[27] + player.items[28] + player.items[29])
 player.dimensionMulti[3] = 0.5 * player.allDimensionMultipliers * 2 ** (player.items[28] + player.items[29])
 player.dimensionMulti[4] = 0.5 * player.allDimensionMultipliers * 2 ** (player.items[29])
 player.dimensionMulti[5] = 0.5 * player.allDimensionMultipliers * 2 ** (0)
 player.dimensionMulti[6] = 0.5 * player.allDimensionMultipliers * 2 ** (0)
 player.dimensionMulti[7] = 0.5 * player.allDimensionMultipliers * 2 ** (0)
 player.dimensionMulti[8] = 0.5 * player.allDimensionMultipliers * 2 ** (0)
}
setInterval(calculateDimensionMultipliers, 50)