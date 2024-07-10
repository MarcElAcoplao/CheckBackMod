var autosaveStarted = false
//Sets all variables to their base values
function reset() {
	game = {
    XP: 0,
    lostXP: 0,
    coins: 0,
    level: 1,
    highestLevel: 1,
    XPBoost: 1,
    XPBoostEffect: 1,
    buttonCooldowns: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    unlocks: 0,
    totalUnlocks: 0,
    possibleUnlocks: 26,
    currentTheme: 2,
    lastSave: Date.now(),
    timeOfLastUpdate: Date.now(),
    sessionStart: Date.now(),
    pets: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    specialPets: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    enemies: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    selectedPet: 0,
    dailyRewards: 0,
    speed: 1,
    HP: 0,
    currentHP: 0,
    enemyHP: 0,
    DMG: 0,
    DEF: 0,
    items: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    itemXP: 1,
    itemStat: 1,
    itemXPBoost: 1,
    itemCooldown: 1,
    itemXPBoostEffectSoftcap: 0,
    itemUnlocks: 0,
    extraUnlocks: 0,
    itemXPBoostQoL: 0,
    itemLoot: 1,
    itemDailyXP: 1,
    extraPetAmount: 0,
    currentTab: 1,
    timePlayed: 0,
    buttonClicks: 0,
    cratesOpened: 0,
    enemiesDefeated: 0,
    petsDiscovered: 0,
  }
}
reset()

//If the user confirms the hard reset, resets all variables, saves and refreshes the page
function hardReset() {
  if (confirm("Are you sure you want to reset? You will lose everything!")) {
    reset()
    save()
    location.reload()
  }
}

function save() {
  //console.log("saving")
  game.lastSave = Date.now();
  localStorage.setItem("checkBackSave", JSON.stringify(game));
}

function setAutoSave() {
  setInterval(save, 5000);
  autosaveStarted = true;
}
//setInterval(save, 5000)

function load() {
	reset()
	let loadgame = JSON.parse(localStorage.getItem("checkBackSave"))
	if (loadgame != null) {loadGame(loadgame)}
  updateSmall()
}

load()

function exportGame() {
  save()
  navigator.clipboard.writeText(btoa(JSON.stringify(game))).then(function() {
    alert("Copied to clipboard!")
  }, function() {
    alert("Error copying to clipboard, try again...")
  });
}

function importGame() {
  loadgame = JSON.parse(atob(prompt("Input your save here:")))
  if (loadgame && loadgame != null && loadgame != "") {
    reset()
    loadGame(loadgame)
    save()
    location.reload()
  }
  else {
    alert("Invalid input.")
  }
}

function help() {
x = game.totalUnlocks
console.log(x)
if (x == 0) {alert("Click a button to gain xp. It has a cooldown. You check back in some time.")}
if (x == 1) {alert("Some buttons have more rewards, but a higher cooldown.")}
if (x == 2) {alert("Keep going, there's more than just xp buttons.")}
if (x == 3) {alert("Keep going, there's more than just xp buttons.")}
if (x == 4) {alert("Yes, this unlocked a new theme. But it's the one I always use so it's good - Marc")}
if (x == 5) {alert("Almost there. Go get level 8 now.")}
if (x == 6) {alert("The new feature is pets. Open crates and get rarer pets. Pets have stats such as you get more xp or buttons are faster.")}
if (x == 7) {alert("Another pet crate. Some of them will give 1-2 pets from the previous crate. Also, there's daily rewards. It has 2 crates with rare pets and increasing xp rewards.")}
if (x == 8) {alert("3 New themes... go get level 20.")}
if (x == 9) {alert("More pets, which means that numbers go up. Each pet crate has a dragon pet, which has better stats than some of the next crate pets.")}
if (x == 10) {alert("New xp button now. Keep going on now. Also, heads up. Keep opening your crates even if the pets won't get any better. They will have an use... eventually")}
if (x == 11) {alert("This is the 1st pet crate that's not in Demonin's original. Same thing as before, stronger pets and slower crates.")}
if (x == 12) {alert("So close to something new. Buttons are sorted in like tier sections, that's why the gaps in some places. But they will be filled.")}
if (x == 13) {alert("A simple prestige feature. Resets your xp back to level 1 and, in exchange, your xp gains are increased. I suggest waiting a little bit... you'll see.")}
if (x == 14) {alert("These new crates will cost a bit of your XPBoost, but the new pets are worth it. All future pet crates won't be free. By the way, you can scroll down to these buttons.")}
if (x == 15) {alert("The xp buttons in this section are like (xp amount between buttons 4 and 5 with a cooldown between 3 and 4), or overall better.")}
if (x == 16) {alert("Advanced XPBoost buttons will have a higher xp to xpboost ratio, but they do require of you to get to the unlock level to do the reset.")}
if (x == 17) {alert("Keep going, you are doing great <3. Also, make sure to consider whenever pushing for new unlocks is better or not than farming XPBoost. I'd say to push.")}
if (x == 18) {alert("If you are more active like person, this xp button is for you.")}
if (x == 19) {alert("These pets also boost your XPBoost gain. Awesome, right? These pets have quick xp gain scaling too.")}
if (x == 20) {alert("Were you lucky during the previous segment? If you really haven't grinded XPBoost, this new button is gonna be enough to bring you to the next stage of the game.")}
if (x == 21) {alert("Fighting. There's one button that will give you stats. On the fighting menu, you can see your stats. Starting a fight automatically heals you, and the combat system is very simple. You get rewards by winning.")}
if (x == 22) {alert("The shop. Here you buy items and unlocks. There's boosts, there's QoL and unlocks. These also require of you having opened a bunch of pet crates constantly through the playthrough.")}
if (x == 23) {alert("Your 1st non-level unlock. You unlocked a new area. Stuff will get grindy from here, and numbers will go up fast.")}
if (x == 24) {alert("Back to grinding XP. These new pets are gonna be expensive but useful to push further. If you haven't bought items 1-18, you should go for them. (Note: This crate still has alerts)")}
if (x == 25) {alert("Oh, hey! More stats. Sure thing I'll be able to beat the boss soon...")}
if (x == 26) {alert("It's just grind, grind, grind. The next feature unlock is gonna be expensive, so might as well make sure to get all upgrades and better pets")}
}

function loadGame(loadgame) {
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  let loadKeys = Object.keys(loadgame);
  for (i=0; i<loadKeys.length; i++) {
    if (loadgame[loadKeys[i]] != "undefined") {
      let thisKey = loadKeys[i];
      if (Array.isArray(loadgame[thisKey])) {
        game[loadKeys[i]] = loadgame[thisKey].map((x) => {return x})
      }
      //else {game[Object.keys(game)[i]] = loadgame[loadKeys[i]]}
      else {game[loadKeys[i]] = loadgame[loadKeys[i]]}
    }
  }

  if (game.selectedPet==0) {
    document.getElementById("selectedPet").innerHTML = "None"
    document.getElementById("selectedPetImg").style.display = "none"
  }
  else {
    document.getElementById("selectedPet").innerHTML = pets[game.selectedPet][0]
    document.getElementById("selectedPetImg").style.display = "inline-block"
    document.getElementById("selectedPetImg").src = "img/pets/" + game.selectedPet + ".png"
  }

  changeTheme(game.currentTheme)
  if (game.unlocks >= 1) {document.getElementById("XPbutton2").style.display = "block"}
  if (game.unlocks >= 2) {document.getElementById("XPbutton3").style.display = "block"}
  if (game.unlocks >= 3) {document.getElementById("XPbutton4").style.display = "block"}
  if (game.unlocks >= 4) {document.getElementsByClassName("themeButton")[2].style.display = "inline-block"}
  if (game.unlocks >= 5) {document.getElementById("XPbutton5").style.display = "block"}
  if (game.unlocks >= 6) {
    document.getElementById("XPTab").style.display = "block"
    document.getElementById("CratesTab").style.display = "block"
    document.getElementById("unboxButton1").style.display = "block"
    document.getElementById("selectedPetText").style.display = "block"
    document.getElementById("petsTabButton").style.display = "block"
    document.getElementById("dailyRewardButton").style.display = "block"
  }
  if (game.unlocks >= 7) {document.getElementById("unboxButton2").style.display = "block"}
  if (game.unlocks >= 8) {
    document.getElementsByClassName("themeButton")[3].style.display = "inline-block"
    document.getElementsByClassName("themeButton")[4].style.display = "inline-block"
    document.getElementsByClassName("themeButton")[5].style.display = "inline-block"
  }
  if (game.unlocks >= 9) {document.getElementById("unboxButton3").style.display = "block"}
  if (game.unlocks >= 10) {document.getElementById("XPbutton6").style.display = "block"}
  if (game.unlocks >= 11) {document.getElementById("unboxButton4").style.display = "block"}
  if (game.unlocks >= 12) {document.getElementById("XPbutton7").style.display = "block"}
  if (game.unlocks >= 13) {
    document.getElementById("XPBbutton1").style.display = "block"
    document.getElementById("XPBoostTab").style.display = "block"
  updateXPBoost()}
  if (game.unlocks >= 14) {document.getElementById("unboxButton5").style.display = "block"}
  if (game.unlocks >= 15) {document.getElementById("XPbutton8").style.display = "block"}
  if (game.unlocks >= 16) {document.getElementById("XPBbutton2").style.display = "block"}
  if (game.unlocks >= 17) {document.getElementById("XPbutton9").style.display = "block"}
  if (game.unlocks >= 18) {document.getElementById("XPbutton10").style.display = "block"}
  if (game.unlocks >= 19) {document.getElementById("unboxButton6").style.display = "block"}
  if (game.unlocks >= 20) {document.getElementById("XPBbutton3").style.display = "block"}
  if (game.unlocks >= 21) {
    document.getElementById("enemiesTabButton").style.display = "block"
    document.getElementById("fightingTabButton").style.display = "block"
    document.getElementById("StatButton1").style.display = "block"
    document.getElementById("StatsTab").style.display = "block"
    enemiesChosen = 1
  }
  if (game.unlocks >= 22) {
  document.getElementById("shopTabButton").style.display = "block"
  updateShopBoosts()
  }
  if (game.unlocks >= 23) {document.getElementById("unboxButton7").style.display = "block"}
  if (game.unlocks >= 24) {document.getElementById("StatButton2").style.display = "block"}
  if (game.itemUnlocks >= 1) {document.getElementById("fight2Button").style.display = "block"}
  if (game.unlocks >= 25) {document.getElementById("fight3Button").style.display = "block"}

 for (let i=0;i<pets.length;i++) {if (!game.pets[i]) game.pets[i] = 0}
 for (let i=0;i<enemies.length;i++) {if (!game.enemies[i]) game.enemies[i] = 0}
 for (let i=0;i<items.length;i++) {if (!game.items[i]) game.items[i] = 0}
 for (let i =0;i<17; i++) {if (!game.specialPets[i]) game.specialPets[i] = 0}
 for (let i =0;i<17; i++) {
  if (game.specialPets[i] >= 1) {
  game.pets[i+47] += game.specialPets[i]
  if (game.pets[i+47] >= game.specialPets[i]) {
       game.specialPets[i] = 0
       if (game.selectedPet >= 23 && game.selectedPet <= 39) game.selectedPet = i+47
     }
    }
  }
  if (game.pets[21] < 0) {
    game.pets[21] += 5
    game.pets[48] -= 3
    game.pets[40] -= 5
     }
  displayStuff()
  tab(1)
  countPets()
  game.sessionStart = Date.now()
}


//Updates variables and text
function updateSmall() {
  //Sets whether the buttons are disabled or not
for (let i=1;i<XPButtons.length;i++) {
  if (game.buttonCooldowns[XPButtons[i].cooldownID] > 0) {
    document.getElementById(XPButtons[i].name).disabled = true
    document.getElementById(XPButtons[i].name).innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[XPButtons[i].cooldownID])
  }
  else {
    document.getElementById(XPButtons[i].name).disabled = false
    document.getElementById(XPButtons[i].name).innerHTML = "Gain " + numberShort((XPButtons[i].xp * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP * (1 + game.petsDiscovered / 100))) + " XP"
  }
}

  //These could definitely be condensed into one thing! - Don't worry Demonin, they will
  if (game.buttonCooldowns[6] > 0) {
    document.getElementById("unboxButton1").disabled = true
    document.getElementById("unboxButton1").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[6])
  }
  else {
    document.getElementById("unboxButton1").disabled = false
    if (game.items[15] == 1) {document.getElementById("unboxButton1").innerHTML = "Unbox a random basic pet. Auto: " + numberToTime(game.buttonCooldowns[23])}
    else {document.getElementById("unboxButton1").innerHTML = "Unbox a random basic pet"}
  }
  if (game.buttonCooldowns[7] > 0) {
    document.getElementById("unboxButton2").disabled = true
    document.getElementById("unboxButton2").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[7])
  }
  else {
    document.getElementById("unboxButton2").disabled = false
    if (game.items[15] == 1) {document.getElementById("unboxButton2").innerHTML = "Unbox a random advanced pet. Auto: " + numberToTime(game.buttonCooldowns[23])}
    else {document.getElementById("unboxButton2").innerHTML = "Unbox a random advanced pet"}
  }
  if (game.buttonCooldowns[8] > 0) {
    document.getElementById("unboxButton3").disabled = true
    document.getElementById("unboxButton3").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[8])
  }
  else {
    document.getElementById("unboxButton3").disabled = false
    if (game.items[15] == 1) {document.getElementById("unboxButton3").innerHTML = "Unbox a random epic pet. Auto: " + numberToTime(game.buttonCooldowns[23])}
    else {document.getElementById("unboxButton3").innerHTML = "Unbox a random epic pet"}
  }
  if (game.buttonCooldowns[9] > 0) {
    document.getElementById("claimDailyRewardButton").disabled = true
    document.getElementById("claimDailyRewardButton").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[9])
    document.getElementById("dailyRewardButton").classList.remove("flickering")
  }
  else {
    document.getElementById("claimDailyRewardButton").disabled = false
    document.getElementById("claimDailyRewardButton").innerHTML = "Claim daily reward"
    if (Date.now() % 600 < 300) {document.getElementById("dailyRewardButton").classList.add("flickering")}
    else {document.getElementById("dailyRewardButton").classList.remove("flickering")}
  }
  if (game.buttonCooldowns[10] > 0) {
    document.getElementById("unboxButton4").disabled = true
    document.getElementById("unboxButton4").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[10])
  }
  else {
    document.getElementById("unboxButton4").disabled = false
    if (game.items[15] == 1) {document.getElementById("unboxButton4").innerHTML = "Unbox a random legendary pet. Auto: " + numberToTime(game.buttonCooldowns[23])}
    else {document.getElementById("unboxButton4").innerHTML = "Unbox a random legendary pet"}
  }
  if (game.buttonCooldowns[12] > 0) {
    document.getElementById("XPBbutton1").disabled = true
    document.getElementById("XPBbutton1").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[12])
  }
  else {
    if (game.items[12] == 0) {
    document.getElementById("XPBbutton1").disabled = false
    document.getElementById("XPBbutton1").innerHTML = "Gain " + numberShort(0.2 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but reset XP"
    }
    else {
      document.getElementById("XPBbutton1").disabled = false
      document.getElementById("XPBbutton1").innerHTML = "Gain " + numberShort(0.2 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but loose 21.2k XP"
    }
  }
  if (game.buttonCooldowns[13] > 0) {
    document.getElementById("unboxButton5").disabled = true
    document.getElementById("unboxButton5").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[13])
  }
  else {
    document.getElementById("unboxButton5").disabled = false
    document.getElementById("unboxButton5").innerHTML = "Unbox a random prestige pet for 0.1 XPBoost"
  }
  if (game.buttonCooldowns[15] > 0) {
    document.getElementById("XPBbutton2").disabled = true
    document.getElementById("XPBbutton2").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[15])
  }
  else {
    if (game.items[12] == 0) {
      document.getElementById("XPBbutton2").disabled = false
      document.getElementById("XPBbutton2").innerHTML = "Gain " + numberShort(1 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but reset XP"
      }
      else {
        document.getElementById("XPBbutton2").disabled = false
        document.getElementById("XPBbutton2").innerHTML = "Gain " + numberShort(1 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but loose 75.6k XP"
      }
  }
  if (game.buttonCooldowns[18] > 0) {
    document.getElementById("unboxButton6").disabled = true
    document.getElementById("unboxButton6").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[18])
  }
  else {
    document.getElementById("unboxButton6").disabled = false
    document.getElementById("unboxButton6").innerHTML = "Unbox a random transcendant pet for 0.25 XPBoost"
  }
  if (game.buttonCooldowns[19] > 0) {
    document.getElementById("XPBbutton3").disabled = true
    document.getElementById("XPBbutton3").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[19])
  }
  else {
    if (game.items[12] == 0) {
      document.getElementById("XPBbutton3").disabled = false
      document.getElementById("XPBbutton3").innerHTML = "Gain " + numberShort(4 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but reset XP"
      }
      else {
        document.getElementById("XPBbutton3").disabled = false
        document.getElementById("XPBbutton3").innerHTML = "Gain " + numberShort(4 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but loose 267.9k XP"
      }
  }
  if (game.buttonCooldowns[20] > 0) {
    document.getElementById("StatButton1").disabled = true
    document.getElementById("StatButton1").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[20])
  }
  else {
    document.getElementById("StatButton1").disabled = false
    document.getElementById("StatButton1").innerHTML = "Gain " + numberShort(5 * game.itemStat) + " HP, " + numberShort(0.5 * game.itemStat) + " DMG and " + numberShort(0.05 * game.itemStat) + " DEF"
  }
  if (game.buttonCooldowns[21] > 0) {
    document.getElementById("fight1Button").disabled = true
    document.getElementById("fight1Button").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[21])
  }
  else {
    document.getElementById("fight1Button").disabled = false
    document.getElementById("fight1Button").innerHTML = "Fight an area 1 foe "
  }
  if (game.buttonCooldowns[22] > 0) {
    document.getElementById("fight2Button").disabled = true
    document.getElementById("fight2Button").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[22])
  }
  else {
    document.getElementById("fight2Button").disabled = false
    document.getElementById("fight2Button").innerHTML = "Fight an area 2 foe "
  }

  if (XPTab() == true) {
    if (Date.now() % 600 < 300) {document.getElementById("XPTab").classList.add("flickering")}
  else {document.getElementById("XPTab").classList.remove("flickering")}
  }
  else {
    document.getElementById("XPTab").classList.remove("flickering")
  }

  if (XPBoostTab() == true) {
    if (Date.now() % 600 < 300) {document.getElementById("XPBoostTab").classList.add("flickering")}
  else {document.getElementById("XPBoostTab").classList.remove("flickering")}
  }
  else {
    document.getElementById("XPBoostTab").classList.remove("flickering")
  }

  if (StatTab() == true) {
    if (Date.now() % 600 < 300) {document.getElementById("StatsTab").classList.add("flickering")}
  else {document.getElementById("StatsTab").classList.remove("flickering")}
  }
  else {
    document.getElementById("StatsTab").classList.remove("flickering")
  }

  if (CratesTab() == true) {
    if (Date.now() % 600 < 300) {document.getElementById("CratesTab").classList.add("flickering")}
  else {document.getElementById("CratesTab").classList.remove("flickering")}
  }
  else {
    document.getElementById("CratesTab").classList.remove("flickering")
  }

 if (FightingTab() == true) {
  if (Date.now() % 600 < 300) {document.getElementById("fightingTabButton").classList.add("flickering")}
  else {document.getElementById("fightingTabButton").classList.remove("flickering")}
 }
 else {document.getElementById("fightingTabButton").classList.remove("flickering")}

 if (game.buttonCooldowns[23] > 0) {}
 else {autoPets()}
 if (game.buttonCooldowns[24] > 0) {
  document.getElementById("unboxButton7").disabled = true
  document.getElementById("unboxButton7").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[24])
}
else {
  document.getElementById("unboxButton7").disabled = false
  document.getElementById("unboxButton7").innerHTML = "Unbox a random universal pet for 250 coins"
}
if (game.buttonCooldowns[25] > 0) {
  document.getElementById("StatButton2").disabled = true
  document.getElementById("StatButton2").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[25])
}
else {
  document.getElementById("StatButton2").disabled = false
  document.getElementById("StatButton2").innerHTML = "Gain " + numberShort(20 * game.itemStat) + " HP, " + numberShort(2 * game.itemStat) + " DMG and " + numberShort(0.2 * game.itemStat) + " DEF"
}
if (game.buttonCooldowns[26] > 0) {
  document.getElementById("fight3Button").disabled = true
  document.getElementById("fight3Button").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[26])
}
else {
  document.getElementById("fight3Button").disabled = false
  document.getElementById("fight3Button").innerHTML = "Fight an area 3 foe "
}

  game.level = XPToLevel(Math.max(Math.floor(game.XP), 0))
  document.getElementById("level").innerHTML = levelShort(game.level)
  //This bit is weird and gross
  //Sets the colour of the level bar, the texture of the level bar (if you're a high enough level), and your rank name
  i=0
  while (game.level >= levelBarColours[i+1][0]) i++
  document.getElementById("levelBar").style.backgroundColor = levelBarColours[i][1]
  if (game.level >= levelBarTextures[0]) {
    i=0
    while (game.level >= levelBarTextures[i]) i++
    document.getElementById("levelBar").style.backgroundImage = "url('img/texture" + i + ".png')"
    document.getElementById("levelBarText").style.textShadow = "0.3vh 0.3vh rgba(0,0,0,0.6)"
    document.getElementById("levelBarRankText").style.textShadow = "0.3vh 0.3vh rgba(0,0,0,0.6)"
  }
  i=0
  while (game.level >= ranks[i+1][0]) i++
  document.getElementById("rank").innerHTML= ranks[i][1]
  //Sets the "XP to next level" text
  if (game.level < 1500) { //Before level 1500
  XPToNextLevel = levelToXP(game.level + 1) - levelToXP(game.level)
  ProgressToNextLevel = (game.XP - levelToXP(game.level)).toFixed(1)
  document.getElementById("XPBarText").innerHTML = "XP to next level: " + xpShort(ProgressToNextLevel) + "/" + xpShort(XPToNextLevel)
  document.getElementById("XPBarBack").style.width = (ProgressToNextLevel / XPToNextLevel * 100) + "%"
  }
  else if (game.unlocks < unlockLevels.length) { //After level 1500
  XPToNextUnlock = levelToXP(unlockLevels[game.unlocks]) // - levelToXP(unlockLevels[game.unlocks - 1])
  ProgressToNextUnlock = game.XP // - levelToXP(unlockLevels[game.unlocks - 1]))
  document.getElementById("XPBarText").innerHTML = "XP to next unlock: " + xpShort(ProgressToNextUnlock) + "/" + xpShort(XPToNextUnlock)
  document.getElementById("XPBarBack").style.width = (ProgressToNextUnlock / XPToNextUnlock * 100) + "%"
  }
  else {
    document.getElementById("XPBarText").innerHTML = "Total XP: " + numberShort(game.XP)
    document.getElementById("XPBarBack").style.width = 100 + "%"
  }
  if (game.level > game.highestLevel) {game.highestLevel = game.level}
  handleUnlocks()
  displayStuff()
}
setInterval(updateSmall, 16) //Runs the update ~60 times per second

//Updates cooldowns
function updateLarge() {
  for (i=0;i<27;i++) {
    if (game.buttonCooldowns[i] > 0) game.buttonCooldowns[i] -= ((Date.now() - game.timeOfLastUpdate) / (1000/game.speed))
    if (game.buttonCooldowns[i] < 0) game.buttonCooldowns[i] = 0
  }
  if (game.timeOfLastUpdate - game.sessionStart <= 2000) {}
  else game.timePlayed += (Date.now() - game.timeOfLastUpdate)/1000;
  game.timeOfLastUpdate = Date.now()
}
setInterval(updateLarge, 100) //Runs the update ~10 times per second

function XPToLevel(x) {return Math.floor((x / 5) ** 0.55) + 1}
function levelToXP(x) {return Math.ceil((x-1) ** (1/0.55) * 5)}
function numberToTime(x) {
  xCeil = Math.ceil(x)
  result = ""
  if (xCeil>=172800) result += Math.floor(xCeil/86400) + " days "
  else if (xCeil>=86400) result += Math.floor(xCeil/86400) + " day "
  if (Math.floor(xCeil/3600)%24 == 1) result += (Math.floor(xCeil/3600)%24) + " hour "
  else if (Math.floor(xCeil/3600)%24 != 0) result += (Math.floor(xCeil/3600)%24) + " hours "
  if (Math.floor(xCeil/60)%60 == 1) result += (Math.floor(xCeil/60)%60) + " minute "
  else if (Math.floor(xCeil/60)%60 != 0) result += (Math.floor(xCeil/60)%60) + " minutes "
  if (xCeil%60 == 1) result += Math.floor(xCeil%60) + " second "
  else if (xCeil%60 != 0) result += Math.floor(xCeil%60) + " seconds "
  return result
}
function numberShort(x) {
xCeil = Math.ceil(x)
exponent = Math.floor(Math.log10(xCeil))
result = ""
if (exponent >= 12) result = (xCeil / 10 ** exponent).toFixed(2) + "e" + exponent
else if (exponent >= 9) result = (xCeil/10 ** 9).toFixed(1) + " B"
else if (exponent >= 6) result = (xCeil/10 ** 6).toFixed(1) + " M"
else if (exponent >= 3) result = (xCeil/10 ** 3).toFixed(1) + " K"
else if (x >= 1) result = (x).toFixed(2)
else result = (x).toFixed(3)
return result
}

function levelShort(x) {
  xCeil = Math.ceil(x)
  exponent = Math.floor(Math.log10(xCeil))
  result = ""
  if (exponent >= 12) result = (xCeil / 10 ** exponent).toFixed(2) + "e" + exponent
  else if (exponent >= 9) result = (xCeil/10 ** 9).toFixed(2) + " B"
  else if (exponent >= 6) result = (xCeil/10 ** 6).toFixed(2) + " M"
  else if (exponent >= 4) result = (xCeil/10 ** 3).toFixed(1) + " K"
  else result = xCeil
  return result
  }

  function xpShort(x) {
    xCeil = Math.ceil(x)
    exponent = Math.floor(Math.log10(xCeil))
    result = ""
    if (exponent >= 12) result = (xCeil / 10 ** exponent).toFixed(2) + "e" + exponent
    else if (exponent >= 9) result = (xCeil/10 ** 9).toFixed(2) + " B"
    else if (exponent >= 6) result = (xCeil/10 ** 6).toFixed(2) + " M"
    else if (exponent >= 4) result = (xCeil/10 ** 3).toFixed(1) + " K"
    else result = (x)
    return result
    }

//Handles clicking the buttons


//This will simply update the XPBoost display
function updateXPBoost(){
  if (game.XPBoost < 10) {return game.XPBoostEffect = game.XPBoost}
  else {return game.XPBoostEffect = 9 + (game.XPBoost - 9) ** (0.5 + game.itemXPBoostEffectSoftcap)}
}
setInterval(updateXPBoost, 50)

//Handles unlocks (Happens 60 times a second, could definitely be optimised!) - Demonin. Reply: I believe this is better now - Marc. Reply 2: It isn't - Marc
function handleUnlocks() {
  for (i=0;i<unlockLevels.length;i++) {
    if (game.level >= unlockLevels[i] && game.unlocks < i+1) {
      game.unlocks = i+1
      game.totalUnlocks = game.unlocks + game.extraUnlocks
      //Could probably use a switch
      if (i==0) {document.getElementById("XPbutton2").style.display = "block"
      game.buttonCooldowns[1] = 0}
      else if (i==1) {document.getElementById("XPbutton3").style.display = "block"
      game.buttonCooldowns[2] = 0}
      else if (i==2) {document.getElementById("XPbutton4").style.display = "block"
      game.buttonCooldowns[3] = 0}
      else if (i==3) {document.getElementsByClassName("themeButton")[2].style.display = "inline-block"}
      else if (i==4) {document.getElementById("XPbutton5").style.display = "block"
      game.buttonCooldowns[4] = 0}
      else if (i==5) {
        document.getElementById("unboxButton1").style.display = "block"
        document.getElementById("selectedPetText").style.display = "block"
        document.getElementById("petsTabButton").style.display = "block"
        document.getElementById("dailyRewardButton").style.display = "block"
        document.getElementById("XPTab").style.display = "block"
        document.getElementById("CratesTab").style.display = "block"
        game.buttonCooldowns[6] = 0
        game.buttonCooldowns[9] = 0
      }
      else if (i==6) {document.getElementById("unboxButton2").style.display = "block"
      game.buttonCooldowns[7] = 0}
      else if (i==7) {
        document.getElementsByClassName("themeButton")[3].style.display = "inline-block"
        document.getElementsByClassName("themeButton")[4].style.display = "inline-block"
        document.getElementsByClassName("themeButton")[5].style.display = "inline-block"
      }
      else if (i==8) {document.getElementById("unboxButton3").style.display = "block"
      game.buttonCooldowns[8] = 0}
      else if (i==9) {document.getElementById("XPbutton6").style.display = "block"
      game.buttonCooldowns[5] = 0}
      else if (i==10) {document.getElementById("unboxButton4").style.display = "block"
      game.buttonCooldowns[10] = 0}
      else if (i==11) {document.getElementById("XPbutton7").style.display = "block"
      game.buttonCooldowns[11] = 0}
      else if (i==12) {
        document.getElementById("XPBbutton1").style.display = "block"
        game.buttonCooldowns[12] = 0
        document.getElementById("XPBoostTab").style.display = "block"}
      else if (i==13) {document.getElementById("unboxButton5").style.display = "block"
      game.buttonCooldowns[13] = 0}
      else if (i==14) {document.getElementById("XPbutton8").style.display = "block"
      game.buttonCooldowns[14] = 0}
      else if (i==15) {document.getElementById("XPBbutton2").style.display = "block"
      game.buttonCooldowns[15] = 0}
      else if (i==16) {document.getElementById("XPbutton9").style.display = "block"
      game.buttonCooldowns[16] = 0}
      else if (i==17) {document.getElementById("XPbutton10").style.display = "block"
      game.buttonCooldowns[17] = 0}
      else if (i==18) {document.getElementById("unboxButton6").style.display = "block"
      game.buttonCooldowns[18] = 0}
      else if (i==19) {document.getElementById("XPBbutton3").style.display = "block"
      game.buttonCooldowns[19] = 0}
      else if (i==20) {
        document.getElementById("enemiesTabButton").style.display = "block"
        document.getElementById("fightingTabButton").style.display = "block"
        document.getElementById("StatButton1").style.display = "block"
        document.getElementById("StatsTab").style.display = "block"
        game.buttonCooldowns[20] = 0
        game.buttonCooldowns[21] = 0
        enemiesChosen = 1}
      else if (i==21) {
        document.getElementById("shopTabButton").style.display = "block"
        updateShopBoosts() }
      else if (i==22) {document.getElementById("unboxButton7").style.display = "block"
        game.buttonCooldowns[24] = 0
        for (let i =0;i<9; i++) {
          game.pets[i+64] = 0
        }
      }
      else if (i==23) {document.getElementById("StatButton2").style.display = "block"
      game.buttonCooldowns[25] = 0}
      else if (i==24) {document.getElementById("fight3Button").style.display = "block"}
      break
    }
  }
  game.possibleUnlocks = 26 
  if (game.itemUnlocks > game.extraUnlocks) {
    game.extraUnlocks += 1
    game.totalUnlocks = game.unlocks + game.extraUnlocks
    if (game.extraUnlocks == 1) {document.getElementById("fight2Button").style.display = "block"}
  }

  if (game.totalUnlocks == game.possibleUnlocks) {document.getElementById("nextUnlockLevel").innerHTML = "All unlocks have been achieved! Update WIP (100%: All upgrades/Best pet/Strongest enemy beaten)"}
  else if (game.unlocks == unlockLevels.length) {document.getElementById("nextUnlockLevel").innerHTML = "All XP unlocks have been achieved! But " + (game.possibleUnlocks - game.totalUnlocks) + " unlocks are missing"}
  else if (game.unlocks >= 22) {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock something new at level " + numberShort(unlockLevels[game.unlocks]) + " or through other means!"}
  else {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock something new at level " + unlockLevels[game.unlocks] + "!"}
}

function changeTheme(x) {
  game.currentTheme = x
  if (x==1) {document.getElementById("themeLink").href = "themes/themeLight.css"}
  else if (x==2) {document.getElementById("themeLink").href = "themes/themeDark.css"}
  else if (x==3) {document.getElementById("themeLink").href = "themes/themeNeon.css"}
  else if (x==4) {document.getElementById("themeLink").href = "themes/themeGreen.css"}
  else if (x==5) {document.getElementById("themeLink").href = "themes/themePurple.css"}
  else if (x==6) {document.getElementById("themeLink").href = "themes/themeRed.css"}
}

function Stats() {
  result = "Player stats: <br>"
  result += "Time played: " + numberToTime(game.timePlayed) + "<br>"
  result += "Buttons clicked: " + game.buttonClicks + "<br>"
  if (game.cratesOpened >= 1) result += "Crates opened: " + game.cratesOpened + "<br>"
  if (game.level >= 100) result += "Highest level achieved: " + levelShort(game.highestLevel) + "<br>"
  if (game.lostXP >= 1) result += "Lost XP: " + numberShort(game.lostXP) + "<br>"
  if (game.enemiesDefeated >= 1) result += "Enemies defeated: " + game.enemiesDefeated + "<br>"
  result += "<br>Unlocks achieved: " + game.totalUnlocks + "/" + game.possibleUnlocks + "<br>"
  if (game.unlocks >= 6) result += "Pet collection progress: " + countPets() + "<br>"
  if (game.unlocks >= 21) result += "Enemy collection progress: " + countEnemies() + "<br>"
  if (game.unlocks >= 22) result += "Upgrades Maxed: " + countItems() + "<br>"
  return result
}
//asd

function countPets() {
  counter = 0
  for (let i=0;i<pets.length;i++) {
    if (game.pets[i] >= 1) {counter++}
  }
  game.petsDiscovered = counter
  return counter + "/" + (pets.length - 1)
}

function countEnemies() {
  counter = 0
  for (let i=0;i<enemies.length;i++) {
    if (game.enemies[i] >= 1) {counter++}
  }
  return counter + "/" + (enemies.length - 1)
}

function countItems() {
  counter = 0
  for (let i=0;i<items.length;i++) {
    if (game.items[i] >= items[i][1]) {counter++}
  }
  return counter + "/" + (items.length - 1)
}