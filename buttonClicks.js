const XPButtons = [ //The stats of every single xp button
  {name: "Test", xp: 0, cooldown: 0, cooldownID: 0, unlock: 0},
  {name: "XPbutton1", xp: 0.5, cooldown: 120, cooldownID: 0, unlock: 0}, //2 mins
  {name: "XPbutton2", xp: 1, cooldown: 300, cooldownID: 1, unlock: 1}, //5 mins
  {name: "XPbutton3", xp: 2, cooldown: 1200, cooldownID: 2, unlock: 2}, //20 mins
  {name: "XPbutton4", xp: 3, cooldown: 3600, cooldownID: 3, unlock: 3}, //1h
  {name: "XPbutton5", xp: 5, cooldown: 21600, cooldownID: 4, unlock: 4}, //6h
  {name: "XPbutton6", xp: 10, cooldown: 86400, cooldownID: 5, unlock: 5}, //1d
  {name: "XPbutton7", xp: 25, cooldown: 259200, cooldownID: 11, unlock: 8}, //3d
  {name: "XPbutton8", xp: 50, cooldown: 604800, cooldownID: 14, unlock: 10}, //7d
  {name: "XPbutton9", xp: 100, cooldown: 864000, cooldownID: 16, unlock: 12}, //10d
  {name: "XPbutton10", xp: 150, cooldown: 1296000, cooldownID: 17, unlock: 15}, //15d
  {name: "XPbutton11", xp: 200, cooldown: 1728000, cooldownID: 39, unlock: 17}, //20d
  {name: "XPbutton12", xp: 250, cooldown: 2592000, cooldownID: 40, unlock: 18}, //1 month
]

//The code for any of the xp buttons
function clickButton(x) {
    if (player.buttonCooldowns[XPButtons[x].cooldownID] == 0) { //Checks the proper button is off cooldown
        player.buttonClicks += 1 + player.items[31]
        player.XP += XPButtons[x].xp * (pets[player.selectedPet][1] * player.XPBoostEffect * player.itemXP * (1 + player.petsDiscovered / 100) * player.tierXPmulti * player.artifactsXP) //Assigns the xp that you have to get
        player.buttonCooldowns[XPButtons[x].cooldownID] = XPButtons[x].cooldown / (pets[player.selectedPet][2] * player.itemCooldown * player.tierCooldown * player.artifactsCooldown) //Selects the cooldownID and the cooldown of the button, and sets them to one
    }
    updateSmall()
  }

const XPBoostButtons = [ //Stats of the xpboost buttons
  {name: "Test", xpboost: 0, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "XPBbutton1", xpboost: 0.01, cooldown: 7200, cooldownID: 12, unlock: 13}, //2h
  {name: "XPBbutton2", xpboost: 0.02, cooldown: 21600, cooldownID: 15, unlock: 15}, //6h
  {name: "XPBbutton3", xpboost: 0.03, cooldown: 86400, cooldownID: 19, unlock: 16}, //1d
  {name: "XPBbutton4", xpboost: 0.05, cooldown: 259200, cooldownID: 41, unlock: 18}, //3d
  {name: "XPBbutton5", xpboost: 0.1, cooldown: 604800, cooldownID: 42, unlock: 20}, //7d
]

  function click2Button(x) { //Will work for any of them individually
  if (player.buttonCooldowns[XPBoostButtons[x].cooldownID] == 0) { //Checks if the button is ready and got enough XP
      player.XPBoost += XPBoostButtons[x].xpboost * pets[player.selectedPet][4] * player.itemXPBoost * player.artifactsXPBoost
      player.buttonCooldowns[XPBoostButtons[x].cooldownID] = XPBoostButtons[x].cooldown / (player.itemCooldown * player.tierCooldown * player.artifactsCooldown) //1h
      player.buttonClicks += 1
    }
    updateSmall()
  }
  
const StatButtons = [
  {name: "Test", stats: 0, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "StatButton1", stats: 5, cooldown: 7200, cooldownID: 20, unlock: 21}, //2h
  {name: "StatButton2", stats: 20, cooldown: 43200, cooldownID: 25, unlock: 24}, //12h
  {name: "StatButton3", stats: 50, cooldown: 172800, cooldownID: 37, unlock: 26}, //2d
  {name: "StatButton4", stats: 120, cooldown: 604800, cooldownID: 38, unlock: 27}, //7d
  {name: "StatButton5", stats: 600, cooldown: 1296000, cooldownID: 45, unlock: 30}, //15d
  {name: "StatButton6", stats: 1200, cooldown: 2592000, cooldownID: 46, unlock: 31}, //30d
]

  function click3Button(x) {
    if (player.buttonCooldowns[StatButtons[x].cooldownID] == 0) {
      player.HP += 1 * StatButtons[x].stats * player.itemStat * player.tierStats * player.artifactsStats
      player.DMG += 0.1 * StatButtons[x].stats * player.itemStat * player.tierStats * player.artifactsStats
      player.DEF += 0.01 * StatButtons[x].stats * player.itemStat * player.tierStats * player.artifactsStats
      player.buttonCooldowns[StatButtons[x].cooldownID] = StatButtons[x].cooldown / (player.itemCooldown * player.tierCooldown * player.artifactsCooldown) //1h
      player.buttonClicks += 1
  }
  updateSmall()
}