const XPButtons = [ //The stats of every single xp button
  {name: "Test", xp: 0, cooldown: 0, cooldownID: 0, unlock: 0},
  {name: "XPbutton1", xp: 1, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "XPbutton2", xp: 2, cooldown: 120, cooldownID: 1, unlock: 1},
  {name: "XPbutton3", xp: 3, cooldown: 300, cooldownID: 2, unlock: 2},
  {name: "XPbutton4", xp: 5, cooldown: 600, cooldownID: 3, unlock: 3},
  {name: "XPbutton5", xp: 10, cooldown: 1800, cooldownID: 4, unlock: 4},
  {name: "XPbutton6", xp: 20, cooldown: 3600, cooldownID: 5, unlock: 5},
  {name: "XPbutton7", xp: 50, cooldown: 10800, cooldownID: 11, unlock: 8},
  {name: "XPbutton8", xp: 100, cooldown: 21600, cooldownID: 14, unlock: 10},
  {name: "XPbutton9", xp: 150, cooldown: 43200, cooldownID: 16, unlock: 12},
  {name: "XPbutton10", xp: 250, cooldown: 86400, cooldownID: 17, unlock: 15},
  {name: "XPbutton11", xp: 500, cooldown: 259200, cooldownID: 39, unlock: 17},
  {name: "XPbutton12", xp: 1000, cooldown: 604800, cooldownID: 40, unlock: 18},
]

//The code for any of the xp buttons
function clickButton(x) {
    if (game.buttonCooldowns[XPButtons[x].cooldownID] == 0) { //Checks the proper button is off cooldown
        game.buttonClicks += 1 + game.items[31]
        game.XP += XPButtons[x].xp * (pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP * (1 + game.petsDiscovered / 100) * game.tierXPmulti * 1.2 * game.artifactsXP) //Assigns the xp that you have to get
        game.buttonCooldowns[XPButtons[x].cooldownID] = XPButtons[x].cooldown / (pets[game.selectedPet][2] * game.itemCooldown * game.tierCooldown * game.artifactsCooldown) //Selects the cooldownID and the cooldown of the button, and sets them to one
    }
    updateSmall()
  }

const XPBoostButtons = [ //Stats of the xpboost buttons
  {name: "Test", xpboost: 0, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "XPBbutton1", xpboost: 0.01, cooldown: 3600, cooldownID: 12, unlock: 13},
  {name: "XPBbutton2", xpboost: 0.02, cooldown: 7200, cooldownID: 15, unlock: 15},
  {name: "XPBbutton3", xpboost: 0.03, cooldown: 21600, cooldownID: 19, unlock: 16},
  {name: "XPBbutton4", xpboost: 0.05, cooldown: 43200, cooldownID: 41, unlock: 18},
  {name: "XPBbutton5", xpboost: 0.1, cooldown: 86400, cooldownID: 42, unlock: 20},
]

  function click2Button(x) { //Will work for any of them individually
  if (game.buttonCooldowns[XPBoostButtons[x].cooldownID] == 0) { //Checks if the button is ready and got enough XP
      game.XPBoost += XPBoostButtons[x].xpboost * pets[game.selectedPet][4] * game.itemXPBoost * game.artifactsXPBoost
      game.buttonCooldowns[XPBoostButtons[x].cooldownID] = XPBoostButtons[x].cooldown / (game.itemCooldown * game.tierCooldown * game.artifactsCooldown) //1h
      game.buttonClicks += 1
    }
    updateSmall()
  }
  
const StatButtons = [
  {name: "Test", stats: 0, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "StatButton1", stats: 5, cooldown: 3600, cooldownID: 20, unlock: 21},
  {name: "StatButton2", stats: 20, cooldown: 21600, cooldownID: 25, unlock: 24},
  {name: "StatButton3", stats: 50, cooldown: 43200, cooldownID: 37, unlock: 26},
  {name: "StatButton4", stats: 120, cooldown: 86400, cooldownID: 38, unlock: 27},
  {name: "StatButton5", stats: 600, cooldown: 604800, cooldownID: 45, unlock: 30},
  {name: "StatButton6", stats: 1200, cooldown: 1209600, cooldownID: 46, unlock: 31},
]

  function click3Button(x) {
    if (game.buttonCooldowns[StatButtons[x].cooldownID] == 0) {
      game.HP += 1 * StatButtons[x].stats * game.itemStat * game.tierStats * game.artifactsStats
      game.DMG += 0.1 * StatButtons[x].stats * game.itemStat * game.tierStats * game.artifactsStats
      game.DEF += 0.01 * StatButtons[x].stats * game.itemStat * game.tierStats * game.artifactsStats
      game.buttonCooldowns[StatButtons[x].cooldownID] = StatButtons[x].cooldown / (game.itemCooldown * game.tierCooldown * game.artifactsCooldown) //1h
      game.buttonClicks += 1
  }
  updateSmall()
}