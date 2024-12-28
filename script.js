var autosaveStarted = false
//Sets all variables to their base values
function reset() {
	player = {
    XP: 0,
    lostXP: 0,
    coins: 0,
    level: 1,
    highestLevel: 1,
    ranks: 0,
    XPBoost: 1,
    XPBoostEffect: 1,
    buttonCooldowns: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    unlocks: 0,
    timeUnlocks: 0,
    totalUnlocks: 0,
    possibleUnlocks: 26,
    currentTheme: 2,
    lastExport: Date.now(),
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
    items: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
    itemDimensions: 1,
    itemArtifacts: 1,
    extraPetAmount: 0,
    currentTab: 1,
    timePlayed: 0,
    buttonClicks: 0,
    cratesOpened: 0,
    enemiesDefeated: 0,
    petsDiscovered: 0,
    tier: 1,
    highestTier: 1,
    timeShards: 0,
    tierXPmulti: 1,
    tierCooldown: 1,
    tierStats: 1,
    allDimensionMultipliers: 1,
    dimensionCooldown: 1,
    dimensionUnlocks: 0,
    dimensionAmount: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    dimensionMulti: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    clickToDimension: 1,
    enemiesToDimension: 1,
    bossHP: 100000,
    bossKills: 0,
    bossMulti: 1,
    XPCounter: 0,
    CoinsCounter: 0,
    XPBoostCounter: 0,
    ConsecutiveKills: 0,
    enemyScaling: 3,
    rewardsScaling: 0,
    crateBulk: [1, 1, 1, 1 ,1 ,1 ,1 ,1 ,1, 1, 1, 1, 1, 1],
    importantUnlocks: 0,
    frozenBaseBulk: 1,
    frozenCratesOpened: 0,
    artifactsCount: 0,
    artifacts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    artifactsXP: 1,
    artifactsCoins: 1,
    artifactsXPBoost: 1,
    artifactsCooldown: 1,
    artifactsStats: 1,
    artifactsBulk: 1,
    artifactsDimension: 1,
    unboxString: [0],
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
  player.lastSave = Date.now();
  localStorage.setItem("checkBackHellSave", JSON.stringify(player));
}

function setAutoSave() {
  setInterval(save, 30000);
  autosaveStarted = true;
}
//setInterval(save, 5000)

function load() {
	reset()
	let loadgame = JSON.parse(localStorage.getItem("checkBackHellSave"))
	if (loadgame != null) {loadGame(loadgame)}
  else {loadGame({...newSavefile})}
  updateSmall()
}

load()

function exportGame() {
  save()
  if (Date.now() - player.lastExport >= 3600000) {
  navigator.clipboard.writeText(btoa(JSON.stringify(player))).then(function() {
    alert("Copied to clipboard!")
  }, function() {
    alert("Error copying to clipboard, try again...")
  });
  player.lastExport = Date.now()
}
  else alert("Less than a minute has passed since the last export/import, wait a little bit")
}

function importGame() {
  if (Date.now() - player.lastExport >= 3600000) {
  try {
  let loadgame = JSON.parse(atob(prompt("Input your save here:")));
  if (loadgame && loadgame != null && loadgame != "") {
    reset()
    loadGame(loadgame)
    player.lastExport = Date.now()
    save()
    location.reload()
  }
  else {
    alert("Invalid input.")
  }
  } catch (err) {
    alert(`Issue With Uploaded Data!\n${err}`);
  }
 }
 else alert("Less than a minute has passed since the last export/import, wait a little bit")
}

function help() {
alert("Is the game too hard? This is a reminder that you're on the HELL version of Check Back. If you want a balanced experience then play the normal version")
}

function loadGame(loadgame) {
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  let dataBackup = localStorage.getItem("checkBackHellSave");
  try {
  let loadKeys = Object.keys(loadgame);
  if (loadKeys.length > 1000) loadKeys = Object.keys(fixFile(loadgame));
  for (i=0; i<loadKeys.length; i++) {
    if (loadgame[loadKeys[i]] != "undefined") {
      let thisKey = loadKeys[i];
      if (Array.isArray(loadgame[thisKey])) {
        player[loadKeys[i]] = loadgame[thisKey].map((x) => {return x})
      }
      //else {game[Object.keys(game)[i]] = loadgame[loadKeys[i]]}
      else {player[loadKeys[i]] = loadgame[loadKeys[i]]}
    }
  }

  if (player.selectedPet==0) {
    document.getElementById("selectedPet").innerHTML = "None"
    document.getElementById("selectedPetImg").style.display = "none"
  }
  else {
    document.getElementById("selectedPet").innerHTML = pets[player.selectedPet][0]
    document.getElementById("selectedPetImg").style.display = "inline-block"
    document.getElementById("selectedPetImg").src = "img/pets/" + player.selectedPet + ".png"
  }

  changeTheme(player.currentTheme)
  if (player.unlocks >= 1) {document.getElementById("XPbutton2").style.display = "block"}
  if (player.unlocks >= 2) {document.getElementById("XPbutton3").style.display = "block"}
  if (player.unlocks >= 3) {document.getElementById("XPbutton4").style.display = "block"}
  if (player.unlocks >= 4) {
    document.getElementsByClassName("themeButton")[2].style.display = "inline-block"
    document.getElementById("XPbutton5").style.display = "block"
  }
  if (player.unlocks >= 5) {document.getElementById("XPbutton6").style.display = "block"}
  if (player.unlocks >= 6) {
    document.getElementById("XPTab").style.display = "block"
    document.getElementById("CratesTab").style.display = "block"
    document.getElementById("unboxButton1").style.display = "block"
    document.getElementById("selectedPetText").style.display = "block"
    document.getElementById("petsTabButton").style.display = "block"
    document.getElementById("dailyRewardButton").style.display = "block"
  }
  if (player.unlocks >= 7) {document.getElementById("unboxButton2").style.display = "block"}
  if (player.unlocks >= 8) {
    document.getElementsByClassName("themeButton")[3].style.display = "inline-block"
    document.getElementsByClassName("themeButton")[4].style.display = "inline-block"
    document.getElementsByClassName("themeButton")[5].style.display = "inline-block"
    document.getElementById("XPbutton7").style.display = "block"
  }
  if (player.unlocks >= 9) {document.getElementById("unboxButton3").style.display = "block"}
  if (player.unlocks >= 10) {document.getElementById("XPbutton8").style.display = "block"}
  if (player.unlocks >= 11) {document.getElementById("unboxButton4").style.display = "block"}
  if (player.unlocks >= 12) {document.getElementById("XPbutton9").style.display = "block"}
  if (player.unlocks >= 13) {
    document.getElementById("XPBbutton1").style.display = "block"
    document.getElementById("XPBoostTab").style.display = "block"
  }
  if (player.unlocks >= 14) {document.getElementById("unboxButton5").style.display = "block"}
  if (player.unlocks >= 15) {
    document.getElementById("XPbutton10").style.display = "block"
    document.getElementById("XPBbutton2").style.display = "block"
  }
  if (player.unlocks >= 16) {document.getElementById("XPBbutton3").style.display = "block"}
  if (player.unlocks >= 17) {document.getElementById("XPbutton11").style.display = "block"}
  if (player.unlocks >= 18) {
    document.getElementById("XPbutton12").style.display = "block"
    document.getElementById("XPBbutton4").style.display = "block"
  }
  if (player.unlocks >= 19) {document.getElementById("unboxButton6").style.display = "block"}
  if (player.unlocks >= 20) {document.getElementById("XPBbutton5").style.display = "block"}
  if (player.unlocks >= 21) {
    document.getElementById("enemiesTabButton").style.display = "block"
    document.getElementById("fightingTabButton").style.display = "block"
    document.getElementById("StatButton1").style.display = "block"
    document.getElementById("StatsTab").style.display = "block"
    enemiesChosen = 1
  }
  if (player.unlocks >= 22) {document.getElementById("shopTabButton").style.display = "block"}
  if (player.unlocks >= 23) {document.getElementById("unboxButton7").style.display = "block"}
  if (player.unlocks >= 24) {document.getElementById("StatButton2").style.display = "block"}
  if (player.itemUnlocks >= 1) {document.getElementById("fight2Button").style.display = "block"}
  if (player.itemUnlocks >= 2) {
    document.getElementById("TimeTab").style.display = "block"
    document.getElementsByClassName("themeButton")[6].style.display = "inline-block"
  }
  if (player.itemUnlocks >= 3) {document.getElementById("fight4Button").style.display = "block"}
  if (player.unlocks >= 25) {document.getElementById("fight3Button").style.display = "block"}
  if (player.unlocks >= 26) {document.getElementById("StatButton3").style.display = "block"}
  if (player.unlocks >= 27) {document.getElementById("StatButton4").style.display = "block"}
  if (player.unlocks >= 28) {document.getElementById("unboxButton8").style.display = "block"}
  if (player.unlocks >= 29) {document.getElementById("fight5Button").style.display = "block"}
  if (player.unlocks >= 30) {document.getElementById("StatButton5").style.display = "block"}
  if (player.unlocks >= 31) {document.getElementById("StatButton6").style.display = "block"}

 for (let i=0;i<artifacts.length;i++) {if (player.artifacts[i] >= 1) document.getElementById("artifactsTabButton").style.display = "block"} 
 for (let i=0;i<pets.length;i++) {if (!player.pets[i]) player.pets[i] = 0}
 for (let i=0;i<enemies.length;i++) {if (!player.enemies[i]) player.enemies[i] = 0}
 for (let i=0;i<items.length;i++) {if (!player.items[i]) player.items[i] = 0}
 for (let i=0;i<artifacts.length;i++) {if (!player.artifacts[i]) player.artifacts[i] = 0}
 for (let i =0;i<17; i++) {if (!player.specialPets[i]) player.specialPets[i] = 0}
 for (let i =0;i<17; i++) {
  if (player.specialPets[i] >= 1) {
  player.pets[i+47] += player.specialPets[i]
  if (player.pets[i+47] >= player.specialPets[i]) {
       player.specialPets[i] = 0
       if (player.selectedPet >= 23 && player.selectedPet <= 39) player.selectedPet = i+47
     }
    }
  }
  if (player.level < player.highestLevel && player.items[12] == 0) {player.XP = levelToXP(player.highestLevel)}
  //This section of the special pets is here in case you load your save coming from the original Check Back version by demonin. 
  displayStuff()
  tab(1)
  countPets()
  player.sessionStart = Date.now()
  } catch (err) {
     //catch will prevent the data loading from continuing whenever a save file is incorrectly uploaded
     if (dataBackup !== null) localStorage.setItem("checkBackSave", dataBackup);
     window.alert(`Save Data Issues!\n${err}`); //whatever you want to say here
     
  }
}


//Updates variables and text
function updateSmall() {
  //Sets whether the buttons are disabled or not
for (let i=1;i<XPButtons.length;i++) {
  if (player.buttonCooldowns[XPButtons[i].cooldownID] > 0) {
    document.getElementById(XPButtons[i].name).disabled = true
    document.getElementById(XPButtons[i].name).innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[XPButtons[i].cooldownID])
  }
  else {
    document.getElementById(XPButtons[i].name).disabled = false
    document.getElementById(XPButtons[i].name).innerHTML = "Gain " + numberShort((XPButtons[i].xp * pets[player.selectedPet][1] * player.XPBoostEffect * player.itemXP * (1 + player.petsDiscovered / 100) * player.tierXPmulti * player.artifactsXP)) + " XP"
  }
}

for (let i=3;i<PetButtons.length;i++) {
  if (player.buttonCooldowns[PetButtons[i].cooldownID] > 0) {
    document.getElementById(PetButtons[i].name).disabled = true
    document.getElementById(PetButtons[i].name).innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[PetButtons[i].cooldownID])
  }
  else {
    if (i == 10 && player.frozenBaseBulk == 0) {
      document.getElementById("unboxButton8").innerHTML = "Check Back when you reach Tier 40"
      document.getElementById("unboxButton8").disabled = true
    }
    else {
    document.getElementById(PetButtons[i].name).disabled = false
    document.getElementById(PetButtons[i].name).innerHTML = petButtonDisplayMessage(i)
    }
  }
}

for (let i=1;i<XPBoostButtons.length;i++) {
  if (player.buttonCooldowns[XPBoostButtons[i].cooldownID] > 0) {
    document.getElementById(XPBoostButtons[i].name).disabled = true
    document.getElementById(XPBoostButtons[i].name).innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[XPBoostButtons[i].cooldownID])
  }
  else {
    document.getElementById(XPBoostButtons[i].name).disabled = false
    document.getElementById(XPBoostButtons[i].name).innerHTML = "Gain " + numberShort((XPBoostButtons[i].xpboost * pets[player.selectedPet][4] * player.itemXPBoost * player.artifactsXPBoost)) + " XPBoost"
  }
}

for (let i=1;i<Dimensions.length;i++) {
  if (player.buttonCooldowns[Dimensions[i].cooldownID] > 0) {
    document.getElementById(Dimensions[i].name).disabled = true
    document.getElementById(Dimensions[i].name).innerHTML = "D" + i + "  Amount: " + numberShort(player.dimensionAmount[Dimensions[i].dimensionArray]) + "  Multiplier: x" + numberShort(player.dimensionMulti[Dimensions[i].dimensionArray]) + "<br>Check back in " + numberToTime(player.buttonCooldowns[Dimensions[i].cooldownID])
  }
  else {
    document.getElementById(Dimensions[i].name).disabled = false
    if (i == 1) {document.getElementById(Dimensions[i].name).innerHTML = "D" + i + "  Amount: " + numberShort(player.dimensionAmount[Dimensions[i].dimensionArray]) + "  Multiplier: x" + numberShort(player.dimensionMulti[Dimensions[i].dimensionArray]) + "<br>Gain " + numberShort(player.dimensionMulti[Dimensions[i].dimensionArray] * player.dimensionAmount[Dimensions[i].dimensionArray]) + " " + Dimensions[i-1].name + " (+" + numberShort((player.dimensionMulti[Dimensions[i].dimensionArray] * player.dimensionAmount[Dimensions[i].dimensionArray])/Math.max(player.timeShards, 1) * 100) + "%)"}
    else {document.getElementById(Dimensions[i].name).innerHTML = "D" + i + "  Amount: " + numberShort(player.dimensionAmount[Dimensions[i].dimensionArray]) + "  Multiplier: x" + numberShort(player.dimensionMulti[Dimensions[i].dimensionArray]) + "<br>Gain " + numberShort(player.dimensionMulti[Dimensions[i].dimensionArray] * player.dimensionAmount[Dimensions[i].dimensionArray]) + " " + Dimensions[i-1].name + " (+" + numberShort((player.dimensionMulti[Dimensions[i].dimensionArray] * player.dimensionAmount[Dimensions[i].dimensionArray])/player.dimensionAmount[Dimensions[i-1].dimensionArray] * 100) + "%)"}
  }
}

  //These could definitely be condensed into one thing! - Don't worry Demonin, they will
  if (player.buttonCooldowns[9] > 0) {
    document.getElementById("claimDailyRewardButton").disabled = true
    document.getElementById("claimDailyRewardButton").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[9])
    document.getElementById("dailyRewardButton").style.border = "0.3vh solid #80f"
  }
  else {
    document.getElementById("claimDailyRewardButton").disabled = false
    document.getElementById("claimDailyRewardButton").innerHTML = "Claim daily reward"
    if (Date.now() % 600 < 300) {document.getElementById("dailyRewardButton").style.border = "0.3vh solid #80f"}
    else {document.getElementById("dailyRewardButton").style.border = "0.3vh solid #d9f"}
  }
  if (player.buttonCooldowns[20] > 0) {
    document.getElementById("StatButton1").disabled = true
    document.getElementById("StatButton1").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[20])
  }
  else {
    document.getElementById("StatButton1").disabled = false
    document.getElementById("StatButton1").innerHTML = "Gain " + numberShort(5 * player.itemStat * player.tierStats * player.artifactsStats) + " HP, " + numberShort(0.5 * player.itemStat * player.tierStats * player.artifactsStats) + " DMG and " + numberShort(0.05 * player.itemStat * player.tierStats * player.artifactsStats) + " DEF"
  }
  if (player.buttonCooldowns[21] > 0) {
    document.getElementById("fight1Button").disabled = true
    document.getElementById("fight1Button").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[21])
  }
  else {
    document.getElementById("fight1Button").disabled = false
    document.getElementById("fight1Button").innerHTML = "Fight an area 1 foe "
  }
  if (player.buttonCooldowns[22] > 0) {
    document.getElementById("fight2Button").disabled = true
    document.getElementById("fight2Button").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[22])
  }
  else {
    document.getElementById("fight2Button").disabled = false
    document.getElementById("fight2Button").innerHTML = "Fight an area 2 foe "
  }

  if (XPTab() == true) {
    document.getElementById("XPTab").classList.add("flickering")
  }
  else {
    document.getElementById("XPTab").classList.remove("flickering")
  }

  if (XPBoostTab() == true) {
    document.getElementById("XPBoostTab").classList.add("flickering")
  }
  else {
    document.getElementById("XPBoostTab").classList.remove("flickering")
  }

  if (StatTab() == true) {
    document.getElementById("StatsTab").classList.add("flickering")
  }
  else {
    document.getElementById("StatsTab").classList.remove("flickering")
  }

  if (CratesTab() == true) {
    document.getElementById("CratesTab").classList.add("flickering")
  }
  else {
    document.getElementById("CratesTab").classList.remove("flickering")
  }
  if (DimTab() == true) {
    document.getElementById("TimeTab").classList.add("flickering")
  }
  else {
    document.getElementById("TimeTab").classList.remove("flickering")
  }

 if (FightingTab() == true) {
  document.getElementById("fightingTabButton").classList.add("flickering")
 }
 else {document.getElementById("fightingTabButton").classList.remove("flickering")}

 if (player.buttonCooldowns[23] > 0) {}
 else {autoPets()}
if (player.buttonCooldowns[25] > 0) {
  document.getElementById("StatButton2").disabled = true
  document.getElementById("StatButton2").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[25])
}
else {
  document.getElementById("StatButton2").disabled = false
  document.getElementById("StatButton2").innerHTML = "Gain " + numberShort(20 * player.itemStat * player.tierStats * player.artifactsStats) + " HP, " + numberShort(2 * player.itemStat * player.tierStats * player.artifactsStats) + " DMG and " + numberShort(0.2 * player.itemStat * player.tierStats * player.artifactsStats) + " DEF"
}
if (player.buttonCooldowns[37] > 0) {
  document.getElementById("StatButton3").disabled = true
  document.getElementById("StatButton3").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[37])
}
else {
  document.getElementById("StatButton3").disabled = false
  document.getElementById("StatButton3").innerHTML = "Gain " + numberShort(50 * player.itemStat * player.tierStats * player.artifactsStats) + " HP, " + numberShort(5 * player.itemStat * player.tierStats * player.artifactsStats) + " DMG and " + numberShort(0.5 * player.itemStat * player.tierStats * player.artifactsStats) + " DEF"
}
if (player.buttonCooldowns[38] > 0) {
  document.getElementById("StatButton4").disabled = true
  document.getElementById("StatButton4").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[38])
}
else {
  document.getElementById("StatButton4").disabled = false
  document.getElementById("StatButton4").innerHTML = "Gain " + numberShort(120 * player.itemStat * player.tierStats * player.artifactsStats) + " HP, " + numberShort(12 * player.itemStat * player.tierStats * player.artifactsStats) + " DMG and " + numberShort(1.2 * player.itemStat * player.tierStats * player.artifactsStats) + " DEF"
}
if (player.buttonCooldowns[45] > 0) {
  document.getElementById("StatButton5").disabled = true
  document.getElementById("StatButton5").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[45])
}
else {
  document.getElementById("StatButton5").disabled = false
  document.getElementById("StatButton5").innerHTML = "Gain " + numberShort(600 * player.itemStat * player.tierStats * player.artifactsStats) + " HP, " + numberShort(60 * player.itemStat * player.tierStats * player.artifactsStats) + " DMG and " + numberShort(6 * player.itemStat * player.tierStats * player.artifactsStats) + " DEF"
}
if (player.buttonCooldowns[46] > 0) {
  document.getElementById("StatButton6").disabled = true
  document.getElementById("StatButton6").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[46])
}
else {
  document.getElementById("StatButton6").disabled = false
  document.getElementById("StatButton6").innerHTML = "Gain " + numberShort(1200 * player.itemStat * player.tierStats * player.artifactsStats) + " HP, " + numberShort(120 * player.itemStat * player.tierStats * player.artifactsStats) + " DMG and " + numberShort(12 * player.itemStat * player.tierStats * player.artifactsStats) + " DEF"
}
if (player.buttonCooldowns[26] > 0) {
  document.getElementById("fight3Button").disabled = true
  document.getElementById("fight3Button").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[26])
}
else {
  document.getElementById("fight3Button").disabled = false
  document.getElementById("fight3Button").innerHTML = "Fight an area 3 foe "
}

if (player.buttonCooldowns[36] > 0) {
  document.getElementById("fight4Button").disabled = true
  document.getElementById("fight4Button").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[36])
}
else {
  document.getElementById("fight4Button").disabled = false
  document.getElementById("fight4Button").innerHTML = "Awaken a level " + (player.bossKills + 1) + " mighty boss"
}

if (player.buttonCooldowns[44] > 0) {
  document.getElementById("fight5Button").disabled = true
  document.getElementById("fight5Button").innerHTML = "Check back in " + numberToTime(player.buttonCooldowns[44])
}
else {
  document.getElementById("fight5Button").disabled = false
  document.getElementById("fight5Button").innerHTML = "Fight an area 4 foe "
}

  player.level = XPToLevel(Math.max(Math.floor(player.XP), 0))
  player.tier = ShardToTier(Math.max(Math.floor(player.timeShards), 0))
  if (player.currentTab <= 4) {
    document.getElementById("level").innerHTML = "Level " + levelShort(player.level)
  //This bit is weird and gross
  //Sets the colour of the level bar, the texture of the level bar (if you're a high enough level), and your rank name
  i=0
  while (player.level >= levelBarColours[i+1][0]) i++
  document.getElementById("levelBar").style.backgroundColor = levelBarColours[i][1]
  if (player.level >= levelBarTextures[0]) {
    i=0
    while (player.level >= levelBarTextures[i]) i++
    document.getElementById("levelBar").style.backgroundImage = "url('img/texture" + i + ".png')"
    document.getElementById("levelBarText").style.textShadow = "0.3vh 0.3vh rgba(0,0,0,0.6)"
    document.getElementById("levelBarRankText").style.textShadow = "0.3vh 0.3vh rgba(0,0,0,0.6)"
  }
  i=0
  while (player.level >= ranks[i+1][0]) i++
  player.ranks = i
  document.getElementById("rank").innerHTML= ranks[i][1] + " clicker"
  //Sets the "XP to next level" text
  if (player.level < 1500) { //Before level 1500
  XPToNextLevel = levelToXP(player.level + 1) - levelToXP(player.level)
  ProgressToNextLevel = player.XP - levelToXP(player.level)
  document.getElementById("XPBarText").innerHTML = "XP to next level: " + xpShort(ProgressToNextLevel) + "/" + xpShort(XPToNextLevel)
  document.getElementById("XPBarBack").style.width = (ProgressToNextLevel / XPToNextLevel * 100) + "%"
  }
  else if (player.unlocks < unlockLevels.length) { //After level 1500
  XPToNextUnlock = levelToXP(unlockLevels[player.unlocks])
  ProgressToNextUnlock = player.XP
  document.getElementById("XPBarText").innerHTML = "XP to next unlock: " + xpShort(ProgressToNextUnlock) + "/" + xpShort(XPToNextUnlock)
  document.getElementById("XPBarBack").style.width = (ProgressToNextUnlock / XPToNextUnlock * 100) + "%"
  }
  else { //Maxed out
  XPToNextRank = levelToXP(ranks[player.ranks + 1][0])
  ProgressToNextUnlock = player.XP
  document.getElementById("XPBarText").innerHTML = "XP to next rank: " + numberShort(player.XP) + "/" + xpShort(XPToNextRank)
  document.getElementById("XPBarBack").style.width = (ProgressToNextUnlock / XPToNextRank * 100) + "%"
  }
}
else {
  i=0
  while (player.tier >= tierRanks[i+1][0]) i++
  document.getElementById("rank").innerHTML= tierRanks[i][1] + " warper"
  document.getElementById("level").innerHTML = "Tier " + levelShort(player.tier)
  XPToNextLevel = TierToShard(player.tier + 1) - TierToShard(player.tier)
  ProgressToNextLevel = player.timeShards - TierToShard(player.tier)
  document.getElementById("XPBarText").innerHTML = "Shards to next tier: " + xpShort(ProgressToNextLevel) + "/" + xpShort(XPToNextLevel)
  document.getElementById("XPBarBack").style.width = (ProgressToNextLevel / XPToNextLevel * 100) + "%"
}
  if (player.level > player.highestLevel) {player.highestLevel = player.level}
  if (player.tier > player.highestTier) {player.highestTier = player.tier}
  handleUnlocks()
  displayStuff()
}
setInterval(updateSmall, 50) //Runs the update ~20 times per second

//Updates cooldowns
function updateLarge() {
  for (i=0;i<50;i++) {
    if (player.buttonCooldowns[i] > 0) player.buttonCooldowns[i] -= ((Date.now() - player.timeOfLastUpdate) / (1000/player.speed))
    if (player.buttonCooldowns[i] < 0) player.buttonCooldowns[i] = 0
    if (!player.buttonCooldowns[i]) player.buttonCooldowns[i] = 0
  }
  if (player.timeOfLastUpdate - player.sessionStart <= 2000) {}
  else player.timePlayed += (Date.now() - player.timeOfLastUpdate)/1000;
  player.timeOfLastUpdate = Date.now()
}
setInterval(updateLarge, 100) //Runs the update ~10 times per second

function XPToLevel(x) {return Math.floor((x / 5) ** 0.525) + 1}
function levelToXP(x) {return Math.ceil((x-1) ** (1/0.525) * 5)}
function numberToTime(x) {
  if (typeof x === 'number' && !isNaN(x)) {
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
}
function numberShort(x) {
  if (typeof x === 'number' && !isNaN(x)) {
xCeil = Math.ceil(x)
exponent = Math.floor(Math.log10(Math.abs(xCeil)))
result = ""
if (exponent >= 12) result = (xCeil / 10 ** exponent).toFixed(2) + "e" + exponent
else if (exponent >= 9) result = (xCeil/10 ** 9).toFixed(1) + "&nbsp;B"
else if (exponent >= 6) result = (xCeil/10 ** 6).toFixed(1) + "&nbsp;M"
else if (exponent >= 3) result = (xCeil/10 ** 3).toFixed(1) + "&nbsp;K"
else if (x == 0) result = x
else if (x < 1 && x > -1) result = (x).toFixed(3)
else result = (x).toFixed(2)
return result
  }
}
function numberShortAlert(x) {
  if (typeof x === 'number' && !isNaN(x)) {
  xCeil = Math.ceil(x)
  exponent = Math.floor(Math.log10(xCeil))
  result = ""
  if (exponent >= 12) result = (xCeil / 10 ** exponent).toFixed(2) + "e" + exponent
  else if (exponent >= 9) result = (xCeil/10 ** 9).toFixed(1) + " B"
  else if (exponent >= 6) result = (xCeil/10 ** 6).toFixed(1) + " M"
  else if (exponent >= 3) result = (xCeil/10 ** 3).toFixed(1) + " K"
  else if (x == 0) result = x
  else if (x < 1 && x > -1) result = (x).toFixed(3)
  else result = (x).toFixed(2)
  return result
   }
  }

function levelShort(x) {
  if (typeof x === 'number' && !isNaN(x)) {
  xCeil = Math.ceil(x)
  exponent = Math.floor(Math.log10(xCeil))
  result = ""
  if (exponent >= 12) result = (xCeil / 10 ** exponent).toFixed(2) + "e" + exponent
  else if (exponent >= 9) result = (xCeil/10 ** 9).toFixed(2) + "&nbsp;B"
  else if (exponent >= 6) result = (xCeil/10 ** 6).toFixed(2) + "&nbsp;M"
  else if (exponent >= 4) result = (xCeil/10 ** 3).toFixed(1) + "&nbsp;K"
  else result = xCeil
  return result
  }
  }

  function xpShort(x) {
    if (typeof x === 'number' && !isNaN(x)) {
    xCeil = Math.ceil(x)
    exponent = Math.floor(Math.log10(xCeil))
    result = ""
    if (exponent >= 12) result = (xCeil / 10 ** exponent).toFixed(2) + "e" + exponent
    else if (exponent >= 9) result = (xCeil/10 ** 9).toFixed(2) + "&nbsp;B"
    else if (exponent >= 6) result = (xCeil/10 ** 6).toFixed(2) + "&nbsp;M"
    else if (exponent >= 4) result = (xCeil/10 ** 3).toFixed(1) + "&nbsp;K"
    else result = (x).toFixed(1)
    return result
     }
    }

//Handles clicking the buttons


//This will simply update the XPBoost display
function updateXPBoost(){
  if (player.XPBoost < 2) {return player.XPBoostEffect = player.XPBoost}
  else {return player.XPBoostEffect = 1 + (player.XPBoost - 1) ** (0.3 + player.itemXPBoostEffectSoftcap)}
}
setInterval(updateXPBoost, 50)

//Handles unlocks (Happens 60 times a second, could definitely be optimised!) - Demonin. Reply: I believe this is better now - Marc. Reply 2: It isn't - Marc
function handleUnlocks() {
  for (i=0;i<importantUnlockLevels.length;i++)
    if (player.level >= importantUnlockLevels[i] && player.importantUnlocks < i+1) {
      player.importantUnlocks = i+1
    }
  for (i=0;i<unlockLevels.length;i++) {
    if (player.level >= unlockLevels[i] && player.unlocks < i+1) {
      player.unlocks = i+1
      //Could probably use a switch
      if (i==0) {document.getElementById("XPbutton2").style.display = "block"}
      else if (i==1) {document.getElementById("XPbutton3").style.display = "block"}
      else if (i==2) {document.getElementById("XPbutton4").style.display = "block"}
      else if (i==3) {
        document.getElementsByClassName("themeButton")[2].style.display = "inline-block"
        document.getElementById("XPbutton5").style.display = "block"
      }
      else if (i==4) {document.getElementById("XPbutton6").style.display = "block"}
      else if (i==5) {
        document.getElementById("unboxButton1").style.display = "block"
        document.getElementById("selectedPetText").style.display = "block"
        document.getElementById("petsTabButton").style.display = "block"
        document.getElementById("dailyRewardButton").style.display = "block"
        document.getElementById("XPTab").style.display = "block"
        document.getElementById("CratesTab").style.display = "block"
      }
      else if (i==6) {document.getElementById("unboxButton2").style.display = "block"}
      else if (i==7) {
        document.getElementsByClassName("themeButton")[3].style.display = "inline-block"
        document.getElementsByClassName("themeButton")[4].style.display = "inline-block"
        document.getElementsByClassName("themeButton")[5].style.display = "inline-block"
        document.getElementById("XPbutton7").style.display = "block"
      }
      else if (i==8) {document.getElementById("unboxButton3").style.display = "block"}
      else if (i==9) {document.getElementById("XPbutton8").style.display = "block"}
      else if (i==10) {document.getElementById("unboxButton4").style.display = "block"}
      else if (i==11) {document.getElementById("XPbutton9").style.display = "block"}
      else if (i==12) {
        document.getElementById("XPBbutton1").style.display = "block"
        document.getElementById("XPBoostTab").style.display = "block"
      }
      else if (i==13) {document.getElementById("unboxButton5").style.display = "block"}
      else if (i==14) {
        document.getElementById("XPbutton10").style.display = "block"
        document.getElementById("XPBbutton2").style.display = "block"
      }
      else if (i==15) {document.getElementById("XPBbutton3").style.display = "block"}
      else if (i==16) {document.getElementById("XPbutton11").style.display = "block"}
      else if (i==17) {
        document.getElementById("XPbutton12").style.display = "block"
        document.getElementById("XPBbutton4").style.display = "block"
      }
      else if (i==18) {document.getElementById("unboxButton6").style.display = "block"}
      else if (i==19) {document.getElementById("XPBbutton5").style.display = "block"}
      else if (i==20) {
        document.getElementById("enemiesTabButton").style.display = "block"
        document.getElementById("fightingTabButton").style.display = "block"
        document.getElementById("StatButton1").style.display = "block"
        document.getElementById("StatsTab").style.display = "block"
        enemiesChosen = 1
      }
      else if (i==21) {
        document.getElementById("shopTabButton").style.display = "block"
        updateShopBoosts() 
      }
      else if (i==22) {document.getElementById("unboxButton7").style.display = "block"}
      else if (i==23) {document.getElementById("StatButton2").style.display = "block"}
      else if (i==24) {document.getElementById("fight3Button").style.display = "block"}
      else if (i==25) {document.getElementById("StatButton3").style.display = "block"}
      else if (i==26) {document.getElementById("StatButton4").style.display = "block"}
      else if (i==27) {document.getElementById("unboxButton8").style.display = "block"}
      else if (i==28) {document.getElementById("fight5Button").style.display = "block"}
      else if (i==29) {document.getElementById("StatButton5").style.display = "block"}
      else if (i==30) {document.getElementById("StatButton6").style.display = "block"}
      break
    }
  }
  for (i=0;i<unlockTiers.length;i++) {
    if (player.tier >= unlockTiers[i] && player.dimensionUnlocks < i+1) {
      player.dimensionUnlocks = i+1
    }
  }
  player.totalUnlocks = player.unlocks + player.extraUnlocks + player.dimensionUnlocks
  player.possibleUnlocks = unlockLevels.length + unlockTiers.length + 3
  if (player.itemUnlocks > player.extraUnlocks) {
    player.extraUnlocks += 1
    if (player.extraUnlocks == 1) {document.getElementById("fight2Button").style.display = "block"}
    if (player.extraUnlocks == 2) {
      document.getElementById("TimeTab").style.display = "block"
      document.getElementsByClassName("themeButton")[6].style.display = "inline-block"
    }
    if (player.extraUnlocks == 3) {document.getElementById("fight4Button").style.display = "block"}
  }
  if (player.currentTab <= 4) {
  if (player.totalUnlocks == player.possibleUnlocks) {document.getElementById("nextUnlockLevel").innerHTML = "All unlocks have been achieved! Next update coming soon"}
  else if (player.unlocks == unlockLevels.length) {document.getElementById("nextUnlockLevel").innerHTML = "All XP unlocks have been achieved! But " + (player.possibleUnlocks - player.totalUnlocks) + " unlocks are missing"}
  else if (player.unlocks >= 22) {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock something new at level " + numberShort(unlockLevels[player.unlocks]) + " or through shop upgrades!"}
  else {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock something new at level " + unlockLevels[player.unlocks] + "!<br> New feature unlocks at level " + numberShort(importantUnlockLevels[player.importantUnlocks])}
  }
  else {
  if (player.totalUnlocks == player.possibleUnlocks) {document.getElementById("nextUnlockLevel").innerHTML = "All unlocks have been achieved! Next update coming soon"}
  else if (player.dimensionUnlocks == unlockTiers.length) {document.getElementById("nextUnlockLevel").innerHTML = "All dimensions have been unlocked! " + (player.possibleUnlocks - player.totalUnlocks) + " unlocks are missing"}
  else if (player.dimensionUnlocks >= 3) {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock a new dimension at tier " + numberShort(unlockTiers[player.dimensionUnlocks]) + " and Dimensional reset #" + (player.dimensionUnlocks - 2) + "!"}
  else {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock a new dimension at tier " + unlockTiers[player.dimensionUnlocks] + "!"}
  }
}

function changeTheme(x) {
  player.currentTheme = x
  if (x==1) {document.getElementById("themeLink").href = "themes/themeLight.css"}
  else if (x==2) {document.getElementById("themeLink").href = "themes/themeDark.css"}
  else if (x==3) {document.getElementById("themeLink").href = "themes/themeNeon.css"}
  else if (x==4) {document.getElementById("themeLink").href = "themes/themeGreen.css"}
  else if (x==5) {document.getElementById("themeLink").href = "themes/themePurple.css"}
  else if (x==6) {document.getElementById("themeLink").href = "themes/themeRed.css"}
  else if (x==7) {document.getElementById("themeLink").href = "themes/themeAlternate.css"}
}

function Stats() {
  result = "Player stats: <br>"
  result += "Time played: " + numberToTime(player.timePlayed) + "<br>"
  result += "Buttons clicked: " + player.buttonClicks + "<br>"
  if (player.cratesOpened >= 1) result += "Crates opened: " + player.cratesOpened + "<br>"
  if (player.level >= 100) result += "Highest level achieved: " + levelShort(player.highestLevel) + "<br>"
  if (player.lostXP >= 1) result += "Lost XP: " + numberShort(player.lostXP) + "<br>"
  if (player.enemiesDefeated >= 1) result += "Enemies defeated: " + player.enemiesDefeated + "<br>"
  result += "<br>Unlocks achieved: " + player.totalUnlocks + "/" + player.possibleUnlocks + "<br>"
  if (player.unlocks >= 6) result += "Pet collection progress: " + countPets() + "<br>"
  if (player.unlocks >= 21) result += "Enemy collection progress: " + countEnemies() + "<br>"
  if (player.unlocks >= 22) result += "Upgrades Maxed: " + countItems() + "<br>"
  return result
}
//asdfgh

function countPets() {
  counter = 0
  for (let i=0;i<pets.length;i++) {
    if (player.pets[i] >= 1) {counter++}
  }
  player.petsDiscovered = counter
  return counter + "/" + (pets.length - 1)
}

function countEnemies() {
  counter = 0
  for (let i=0;i<enemies.length;i++) {
    if (player.enemies[i] >= 1) {counter++}
  }
  return counter + "/" + (enemies.length - 1)
}

function countItems() {
  counter = 0
  for (let i=0;i<items.length;i++) {
    if (player.items[i] >= items[i][1]) {counter++}
  }
  return counter + "/" + (items.length - 1)
}

// Syncing animations
document.addEventListener("animationstart", (event) => {
  if (event.animationName === "flickering") {
    let animationCurrentTime;
    let anims = document.getAnimations();
    for (let i = 0; i < anims.length; i++) {
      if (anims[i].animationName === event.animationName) {
        animationCurrentTime = anims[i].currentTime;
        break;
      }
    }

    for (let i = 0; i < anims.length; i++) {
      if (anims[i].animationName === event.animationName) {
        if (animationCurrentTime) anims[i].currentTime = animationCurrentTime;
      }
    }
  }
});

function upgrade24requirement() {
  counter = 0
  for (let i=0;i<items.length;i++) {
    if (player.items[i] >= items[i][1]) {counter++}
  }
  return counter
}
