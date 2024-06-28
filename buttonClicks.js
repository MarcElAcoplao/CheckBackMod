const XPButtons = [ //The stats of every single xp button
  {name: "Test", xp: 0, cooldown: 0, cooldownID: 0, unlock: 0},
  {name: "XPbutton1", xp: 1, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "XPbutton2", xp: 2, cooldown: 300, cooldownID: 1, unlock: 1},
  {name: "XPbutton3", xp: 5, cooldown: 1800, cooldownID: 2, unlock: 2},
  {name: "XPbutton4", xp: 10, cooldown: 7200, cooldownID: 3, unlock: 3},
  {name: "XPbutton5", xp: 25, cooldown: 43200, cooldownID: 4, unlock: 5},
  {name: "XPbutton6", xp: 50, cooldown: 172800, cooldownID: 5, unlock: 10},
  {name: "XPbutton7", xp: 250, cooldown: 604800, cooldownID: 11, unlock: 12},
  {name: "XPbutton8", xp: 100, cooldown: 86400, cooldownID: 14, unlock: 15},
  {name: "XPbutton9", xp: 33, cooldown: 21600, cooldownID: 16, unlock: 17},
  {name: "XPbutton10", xp: 15, cooldown: 3600, cooldownID: 17, unlock: 18},
]

//The code for any of the xp buttons
function clickButton(x) {
    if (game.buttonCooldowns[XPButtons[x].cooldownID] == 0) { //Checks the proper button is off cooldown
        game.buttonClicks += 1
        game.XP += XPButtons[x].xp * (pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP * (1 + game.petsDiscovered / 100)) //Assigns the xp that you have to get
        game.buttonCooldowns[XPButtons[x].cooldownID] = XPButtons[x].cooldown / (pets[game.selectedPet][2] * game.itemCooldown) //Selects the cooldownID and the cooldown of the button, and sets them to one
    }
    updateSmall()
  }

const XPBoostButtons = [ //Stats of the xpboost buttons
  {name: "Test", level: 0, xpboost: 0, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "XPBbutton1", level: 100, xpboost: 0.2, cooldown: 3600, cooldownID: 12, unlock: 13},
  {name: "XPBbutton2", level: 200, xpboost: 1, cooldown: 3600, cooldownID: 15, unlock: 16},
  {name: "XPBbutton3", level: 400, xpboost: 4, cooldown: 3600, cooldownID: 19, unlock: 20},
]

  function click2Button(x) { //Will work for any of them individually
  if (game.XP >= levelToXP(XPBoostButtons[x].level) && game.buttonCooldowns[XPBoostButtons[x].cooldownID] == 0) { //Checks if the button is ready and got enough XP
      if (game.items[12] == 1) { //Depends if you have the "xpboost buttons substract xp rather than resetting them"
        game.lostXP += levelToXP(XPBoostButtons[x].level)
        game.XP -= levelToXP(XPBoostButtons[x].level)
        game.XPBoost += XPBoostButtons[x].xpboost * pets[game.selectedPet][4] * game.itemXPBoost
        game.buttonCooldowns[XPBoostButtons[x].cooldownID] = XPBoostButtons[x].cooldown / (game.itemCooldown) //1h
      }
      else {
        game.lostXP += game.XP
        game.XP = 0
        game.XPBoost += XPBoostButtons[x].xpboost * pets[game.selectedPet][4] * game.itemXPBoost
        game.buttonCooldowns[XPBoostButtons[x].cooldownID] = XPBoostButtons[x].cooldown / (game.itemCooldown) //1h
      }
      game.buttonClicks += 1
    }
      else {
        alert("Button not ready or below level of unlock")
      }
      updateSmall()
    }
  
const StatButtons = [
  {name: "Test", stats: 0, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "StatButton1", stats: 5, cooldown: 3600, cooldownID: 20, unlock: 21},
  {name: "StatButton2", stats: 20, cooldown: 21600, cooldownID: 25, unlock: 24},
]

  function click3Button(x) {
    if (game.buttonCooldowns[StatButtons[x].cooldownID] == 0) {
      game.HP += 1 * StatButtons[x].stats * game.itemStat
      game.DMG += 0.1 * StatButtons[x].stats * game.itemStat
      game.DEF += 0.01 * StatButtons[x].stats * game.itemStat
      game.buttonCooldowns[StatButtons[x].cooldownID] = StatButtons[x].cooldown / (game.itemCooldown) //1h
      game.buttonClicks += 1
  }
  updateSmall()
}