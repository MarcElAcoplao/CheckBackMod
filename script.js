var autosaveStarted = false
//Sets all variables to their base values
function reset() {
	game = {
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
    enemyScaling: 2,
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
  game.lastSave = Date.now();
  localStorage.setItem("checkBackSave", JSON.stringify(game));
}

function setAutoSave() {
  setInterval(save, 30000);
  autosaveStarted = true;
}
//setInterval(save, 5000)

function load() {
	reset()
	let loadgame = JSON.parse(localStorage.getItem("checkBackSave"))
	if (loadgame != null) {loadGame(loadgame)}
  else {loadGame({...newSavefile})}
  updateSmall()
}

load()

function exportGame() {
  save()
  if (Date.now() - game.lastExport >= 60000) {
  navigator.clipboard.writeText(btoa(JSON.stringify(game))).then(function() {
    alert("Copied to clipboard!")
  }, function() {
    alert("Error copying to clipboard, try again...")
  });
  game.lastExport = Date.now()
}
  else alert("Less than a minute has passed since the last export/import, wait a little bit")
}

function importGame() {
  if (Date.now() - game.lastExport >= 60000) {
  try {
  let loadgame = JSON.parse(atob(prompt("Input your save here:")));
  if (loadgame && loadgame != null && loadgame != "") {
    reset()
    loadGame(loadgame)
    game.lastExport = Date.now()
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
  x = game.totalUnlocks
  console.log(x)
  if (x <= 5) {alert("Hello and welcome to Check Back! In this game your goal is simple, click buttons and gain xp to levelup and unlock new buttons. But, there's a catch! Buttons have cooldowns. This game requires minimal focus so, as suggested by the developer, open another tab and go watch some youtube. A new tip will be shown when you reach level 8")}
  else if (x <= 12) {alert("Congratulations! You unlocked pets. Pets can be obtained through a crate in a similar tab (Can be opened with the left side menus, below the next unlock text). Rarer pets have better stats. Keep progressing and you will be unlocking more pets and xp buttons. There's also daily rewards, can be found bottom-left of the screen, above the tab buttons. A new tip will be shown when you reach level 100")}
  else if (x == 13) {alert("XPBoost is very simple, it's a resource that increases your xp gains. This used to be a prestige-like layer (Like a reset tier 0.5) but it was rebalanced to not be so complex, so don't worry about clicking the button. A new tip will show up at level 125")}
  else if (x <= 20) {alert("Now that you've unlocked a new pet crate, gonna tell you that all future crates will have a cost. This section is about unlocking new buttons and strategizing doing xpboost resets and opening crates. A new tip will show up at level 500")}
  else if (x == 21) {alert("Fighting. There's one button that will give you stats. On the fighting menu, you can see your stats. Starting a fight automatically heals you, and the combat system is very simple but long, as you will fight enemies consecutively until one defeats you. Stats increase by 2^kills and xp rewards increase by 1.5^kills (each one adds). Dying resets the consecutive kills counter to 0. A new tip will show up at level 1500")}
  else if (x <= 23) {alert("The shop. Here you buy items and unlocks. There's boosts, there's QoL and unlocks. These also require of you having opened a bunch of pet crates constantly through the playthrough. This might be a grindy section. Next tip will show up when you get 2 more unlocks")}
  else if (x <= 26) {alert("If you are reading this, you either have unlocked the 2nd area and reached level 20k, or simply went for level 50k. If you are from the 2nd case, I'd heavily suggest to unlock the new area (upgrade 6) and focusing on getting more coins. Either way, your goal should be to get more xp, better pets and maxing out the first 23 upgrades. A new tip will show up when you reach 27 total unlocks")}
  else if (x <= 29) {alert("Congratulations on reaching the v1.0 content. This new feature is basically a recreation of Antimatter Dimensions but recreated to Check Back (go play AD, it's good). If you never played a game with the dimensions style, the first dimension produces a resource, in this case shards, while the 2nd produces the 1st, the 3rd produces the 2nd... and so on. A new tip will show up when you reach 30 total unlocks")}
  else if (x <= 32) {alert("Now that you unlocked the 4th dimension (or you reached level 1m before that), what are dimensional resets? They are kinda like the dimensional boosts from AD, they reset your dimensions to give a multiplier to some dimensions and unlock a new dimension. They also give an additional boost to resources like XP. There's also a set of additional upgrades that, if you are seeing 6 squares each line, they are below the dimensional resets. These additional upgrades are intended to help out the player progress through the time dimensions and they give good boosts. A new tip will show up at 33 total unlocks")}
  else if (x <= 34) {alert("You might have noticed that the upgrade that goes along the 3rd dimensional reset unlocks a bossfight. Go unlock it and progress through dimensions. And don't forget to keep opening crates and clicking every single button, everything contributes to progress. A new tip will show up at 35 total unlocks")}
  else if (x < 38) {alert("The boss has scaling health and damage, scaled rewards and also hp saves between fights, so you don't have to be insanely strong to beat it. Keep pushing and reach the 9th dimension. A new tip will unlock when you do so")}
  else if (game.items[30] == 0) {alert("The final push is here! At tier 40 you can perform a dimensional sacrifice and re-run all the dimensions section but way quicker. A new message will show up after unlocking the 9th dimension but after doing the dimensional sacrifice.")}
  else if (game.items[36] == 0) {alert("Before you officially complete this game, there is one final upgrade (with a little bit placeholder effects) that you might wanna get. Having that upgrade grants access to a unique role in the discord server (community chat + sneak peeks of future updates)")}
  else {alert("I know the help thing is a little bit broken but... I'm too lazy to fix this. Thanks for playing Check Back and have fun with frozen pets and artifacts. Check back later for updates")}
  }

function loadGame(loadgame) {
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  let dataBackup = localStorage.getItem("checkBackSave");
  try {
  let loadKeys = Object.keys(loadgame);
  if (loadKeys.length > 1000) loadKeys = Object.keys(fixFile(loadgame));
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
  if (game.unlocks >= 4) {
    document.getElementsByClassName("themeButton")[2].style.display = "inline-block"
    document.getElementById("XPbutton5").style.display = "block"
  }
  if (game.unlocks >= 5) {document.getElementById("XPbutton6").style.display = "block"}
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
    document.getElementById("XPbutton7").style.display = "block"
  }
  if (game.unlocks >= 9) {document.getElementById("unboxButton3").style.display = "block"}
  if (game.unlocks >= 10) {document.getElementById("XPbutton8").style.display = "block"}
  if (game.unlocks >= 11) {document.getElementById("unboxButton4").style.display = "block"}
  if (game.unlocks >= 12) {document.getElementById("XPbutton9").style.display = "block"}
  if (game.unlocks >= 13) {
    document.getElementById("XPBbutton1").style.display = "block"
    document.getElementById("XPBoostTab").style.display = "block"
  }
  if (game.unlocks >= 14) {document.getElementById("unboxButton5").style.display = "block"}
  if (game.unlocks >= 15) {
    document.getElementById("XPbutton10").style.display = "block"
    document.getElementById("XPBbutton2").style.display = "block"
  }
  if (game.unlocks >= 16) {document.getElementById("XPBbutton3").style.display = "block"}
  if (game.unlocks >= 17) {document.getElementById("XPbutton11").style.display = "block"}
  if (game.unlocks >= 18) {
    document.getElementById("XPbutton12").style.display = "block"
    document.getElementById("XPBbutton4").style.display = "block"
  }
  if (game.unlocks >= 19) {document.getElementById("unboxButton6").style.display = "block"}
  if (game.unlocks >= 20) {document.getElementById("XPBbutton5").style.display = "block"}
  if (game.unlocks >= 21) {
    document.getElementById("enemiesTabButton").style.display = "block"
    document.getElementById("fightingTabButton").style.display = "block"
    document.getElementById("StatButton1").style.display = "block"
    document.getElementById("StatsTab").style.display = "block"
    enemiesChosen = 1
  }
  if (game.unlocks >= 22) {document.getElementById("shopTabButton").style.display = "block"}
  if (game.unlocks >= 23) {document.getElementById("unboxButton7").style.display = "block"}
  if (game.unlocks >= 24) {document.getElementById("StatButton2").style.display = "block"}
  if (game.itemUnlocks >= 1) {document.getElementById("fight2Button").style.display = "block"}
  if (game.itemUnlocks >= 2) {
    document.getElementById("TimeTab").style.display = "block"
    document.getElementsByClassName("themeButton")[6].style.display = "inline-block"
  }
  if (game.itemUnlocks >= 3) {document.getElementById("fight4Button").style.display = "block"}
  if (game.unlocks >= 25) {document.getElementById("fight3Button").style.display = "block"}
  if (game.unlocks >= 26) {document.getElementById("StatButton3").style.display = "block"}
  if (game.unlocks >= 27) {document.getElementById("StatButton4").style.display = "block"}
  if (game.unlocks >= 28) {document.getElementById("unboxButton8").style.display = "block"}
  if (game.unlocks >= 29) {document.getElementById("fight5Button").style.display = "block"}
  if (game.unlocks >= 30) {document.getElementById("StatButton5").style.display = "block"}
  if (game.unlocks >= 31) {document.getElementById("StatButton6").style.display = "block"}

 for (let i=0;i<artifacts.length;i++) {if (game.artifacts[i] >= 1) document.getElementById("artifactsTabButton").style.display = "block"} 
 for (let i=0;i<pets.length;i++) {if (!game.pets[i]) game.pets[i] = 0}
 for (let i=0;i<enemies.length;i++) {if (!game.enemies[i]) game.enemies[i] = 0}
 for (let i=0;i<items.length;i++) {if (!game.items[i]) game.items[i] = 0}
 for (let i=0;i<artifacts.length;i++) {if (!game.artifacts[i]) game.artifacts[i] = 0}
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
  if (game.level < game.highestLevel && game.items[12] == 0) {game.XP = levelToXP(game.highestLevel)}
  //This section of the special pets is here in case you load your save coming from the original Check Back version by demonin. 
  displayStuff()
  tab(1)
  countPets()
  game.sessionStart = Date.now()
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
  if (game.buttonCooldowns[XPButtons[i].cooldownID] > 0) {
    document.getElementById(XPButtons[i].name).disabled = true
    document.getElementById(XPButtons[i].name).innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[XPButtons[i].cooldownID])
  }
  else {
    document.getElementById(XPButtons[i].name).disabled = false
    document.getElementById(XPButtons[i].name).innerHTML = "Gain " + numberShort((XPButtons[i].xp * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP * (1 + game.petsDiscovered / 100) * game.tierXPmulti * 1.2 * game.artifactsXP)) + " XP"
  }
}

for (let i=3;i<PetButtons.length;i++) {
  if (game.buttonCooldowns[PetButtons[i].cooldownID] > 0) {
    document.getElementById(PetButtons[i].name).disabled = true
    document.getElementById(PetButtons[i].name).innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[PetButtons[i].cooldownID])
  }
  else {
    if (i == 10 && game.tier < 40) {
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
  if (game.buttonCooldowns[XPBoostButtons[i].cooldownID] > 0) {
    document.getElementById(XPBoostButtons[i].name).disabled = true
    document.getElementById(XPBoostButtons[i].name).innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[XPBoostButtons[i].cooldownID])
  }
  else {
    document.getElementById(XPBoostButtons[i].name).disabled = false
    document.getElementById(XPBoostButtons[i].name).innerHTML = "Gain " + numberShort((XPBoostButtons[i].xpboost * pets[game.selectedPet][4] * game.itemXPBoost * game.artifactsXPBoost)) + " XPBoost"
  }
}

for (let i=1;i<Dimensions.length;i++) {
  if (game.buttonCooldowns[Dimensions[i].cooldownID] > 0) {
    document.getElementById(Dimensions[i].name).disabled = true
    document.getElementById(Dimensions[i].name).innerHTML = "D" + i + "  Amount: " + numberShort(game.dimensionAmount[Dimensions[i].dimensionArray]) + "  Multiplier: x" + numberShort(game.dimensionMulti[Dimensions[i].dimensionArray]) + "<br>Check back in " + numberToTime(game.buttonCooldowns[Dimensions[i].cooldownID])
  }
  else {
    document.getElementById(Dimensions[i].name).disabled = false
    if (i == 1) {document.getElementById(Dimensions[i].name).innerHTML = "D" + i + "  Amount: " + numberShort(game.dimensionAmount[Dimensions[i].dimensionArray]) + "  Multiplier: x" + numberShort(game.dimensionMulti[Dimensions[i].dimensionArray]) + "<br>Gain " + numberShort(game.dimensionMulti[Dimensions[i].dimensionArray] * game.dimensionAmount[Dimensions[i].dimensionArray]) + " " + Dimensions[i-1].name + " (+" + numberShort((game.dimensionMulti[Dimensions[i].dimensionArray] * game.dimensionAmount[Dimensions[i].dimensionArray])/Math.max(game.timeShards, 1) * 100) + "%)"}
    else {document.getElementById(Dimensions[i].name).innerHTML = "D" + i + "  Amount: " + numberShort(game.dimensionAmount[Dimensions[i].dimensionArray]) + "  Multiplier: x" + numberShort(game.dimensionMulti[Dimensions[i].dimensionArray]) + "<br>Gain " + numberShort(game.dimensionMulti[Dimensions[i].dimensionArray] * game.dimensionAmount[Dimensions[i].dimensionArray]) + " " + Dimensions[i-1].name + " (+" + numberShort((game.dimensionMulti[Dimensions[i].dimensionArray] * game.dimensionAmount[Dimensions[i].dimensionArray])/game.dimensionAmount[Dimensions[i-1].dimensionArray] * 100) + "%)"}
  }
}

  //These could definitely be condensed into one thing! - Don't worry Demonin, they will
  if (game.buttonCooldowns[9] > 0) {
    document.getElementById("claimDailyRewardButton").disabled = true
    document.getElementById("claimDailyRewardButton").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[9])
    document.getElementById("dailyRewardButton").style.border = "0.3vh solid #80f"
  }
  else {
    document.getElementById("claimDailyRewardButton").disabled = false
    document.getElementById("claimDailyRewardButton").innerHTML = "Claim daily reward"
    if (Date.now() % 600 < 300) {document.getElementById("dailyRewardButton").style.border = "0.3vh solid #80f"}
    else {document.getElementById("dailyRewardButton").style.border = "0.3vh solid #d9f"}
  }
  if (game.buttonCooldowns[20] > 0) {
    document.getElementById("StatButton1").disabled = true
    document.getElementById("StatButton1").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[20])
  }
  else {
    document.getElementById("StatButton1").disabled = false
    document.getElementById("StatButton1").innerHTML = "Gain " + numberShort(5 * game.itemStat * game.tierStats * game.artifactsStats) + " HP, " + numberShort(0.5 * game.itemStat * game.tierStats * game.artifactsStats) + " DMG and " + numberShort(0.05 * game.itemStat * game.tierStats * game.artifactsStats) + " DEF"
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

 if (game.buttonCooldowns[23] > 0) {}
 else {autoPets()}
if (game.buttonCooldowns[25] > 0) {
  document.getElementById("StatButton2").disabled = true
  document.getElementById("StatButton2").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[25])
}
else {
  document.getElementById("StatButton2").disabled = false
  document.getElementById("StatButton2").innerHTML = "Gain " + numberShort(20 * game.itemStat * game.tierStats * game.artifactsStats) + " HP, " + numberShort(2 * game.itemStat * game.tierStats * game.artifactsStats) + " DMG and " + numberShort(0.2 * game.itemStat * game.tierStats * game.artifactsStats) + " DEF"
}
if (game.buttonCooldowns[37] > 0) {
  document.getElementById("StatButton3").disabled = true
  document.getElementById("StatButton3").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[37])
}
else {
  document.getElementById("StatButton3").disabled = false
  document.getElementById("StatButton3").innerHTML = "Gain " + numberShort(50 * game.itemStat * game.tierStats * game.artifactsStats) + " HP, " + numberShort(5 * game.itemStat * game.tierStats * game.artifactsStats) + " DMG and " + numberShort(0.5 * game.itemStat * game.tierStats * game.artifactsStats) + " DEF"
}
if (game.buttonCooldowns[38] > 0) {
  document.getElementById("StatButton4").disabled = true
  document.getElementById("StatButton4").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[38])
}
else {
  document.getElementById("StatButton4").disabled = false
  document.getElementById("StatButton4").innerHTML = "Gain " + numberShort(120 * game.itemStat * game.tierStats * game.artifactsStats) + " HP, " + numberShort(12 * game.itemStat * game.tierStats * game.artifactsStats) + " DMG and " + numberShort(1.2 * game.itemStat * game.tierStats * game.artifactsStats) + " DEF"
}
if (game.buttonCooldowns[45] > 0) {
  document.getElementById("StatButton5").disabled = true
  document.getElementById("StatButton5").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[45])
}
else {
  document.getElementById("StatButton5").disabled = false
  document.getElementById("StatButton5").innerHTML = "Gain " + numberShort(600 * game.itemStat * game.tierStats * game.artifactsStats) + " HP, " + numberShort(60 * game.itemStat * game.tierStats * game.artifactsStats) + " DMG and " + numberShort(6 * game.itemStat * game.tierStats * game.artifactsStats) + " DEF"
}
if (game.buttonCooldowns[46] > 0) {
  document.getElementById("StatButton6").disabled = true
  document.getElementById("StatButton6").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[46])
}
else {
  document.getElementById("StatButton6").disabled = false
  document.getElementById("StatButton6").innerHTML = "Gain " + numberShort(1200 * game.itemStat * game.tierStats * game.artifactsStats) + " HP, " + numberShort(120 * game.itemStat * game.tierStats * game.artifactsStats) + " DMG and " + numberShort(12 * game.itemStat * game.tierStats * game.artifactsStats) + " DEF"
}
if (game.buttonCooldowns[26] > 0) {
  document.getElementById("fight3Button").disabled = true
  document.getElementById("fight3Button").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[26])
}
else {
  document.getElementById("fight3Button").disabled = false
  document.getElementById("fight3Button").innerHTML = "Fight an area 3 foe "
}

if (game.buttonCooldowns[36] > 0) {
  document.getElementById("fight4Button").disabled = true
  document.getElementById("fight4Button").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[36])
}
else {
  document.getElementById("fight4Button").disabled = false
  document.getElementById("fight4Button").innerHTML = "Awaken a level " + (game.bossKills + 1) + " mighty boss"
}

if (game.buttonCooldowns[44] > 0) {
  document.getElementById("fight5Button").disabled = true
  document.getElementById("fight5Button").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[44])
}
else {
  document.getElementById("fight5Button").disabled = false
  document.getElementById("fight5Button").innerHTML = "Fight an area 4 foe "
}

  game.level = XPToLevel(Math.max(Math.floor(game.XP), 0))
  game.tier = ShardToTier(Math.max(Math.floor(game.timeShards), 0))
  if (game.currentTab <= 4) {
    document.getElementById("level").innerHTML = "Level " + levelShort(game.level)
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
  game.ranks = i
  document.getElementById("rank").innerHTML= ranks[i][1] + " clicker"
  //Sets the "XP to next level" text
  if (game.level < 1500) { //Before level 1500
  XPToNextLevel = levelToXP(game.level + 1) - levelToXP(game.level)
  ProgressToNextLevel = game.XP - levelToXP(game.level)
  document.getElementById("XPBarText").innerHTML = "XP to next level: " + xpShort(ProgressToNextLevel) + "/" + xpShort(XPToNextLevel)
  document.getElementById("XPBarBack").style.width = (ProgressToNextLevel / XPToNextLevel * 100) + "%"
  }
  else if (game.unlocks < unlockLevels.length) { //After level 1500
  XPToNextUnlock = levelToXP(unlockLevels[game.unlocks])
  ProgressToNextUnlock = game.XP
  document.getElementById("XPBarText").innerHTML = "XP to next unlock: " + xpShort(ProgressToNextUnlock) + "/" + xpShort(XPToNextUnlock)
  document.getElementById("XPBarBack").style.width = (ProgressToNextUnlock / XPToNextUnlock * 100) + "%"
  }
  else { //Maxed out
  XPToNextRank = levelToXP(ranks[game.ranks + 1][0])
  ProgressToNextUnlock = game.XP
  document.getElementById("XPBarText").innerHTML = "XP to next rank: " + numberShort(game.XP) + "/" + xpShort(XPToNextRank)
  document.getElementById("XPBarBack").style.width = (ProgressToNextUnlock / XPToNextRank * 100) + "%"
  }
}
else {
  i=0
  while (game.tier >= tierRanks[i+1][0]) i++
  document.getElementById("rank").innerHTML= tierRanks[i][1] + " warper"
  document.getElementById("level").innerHTML = "Tier " + levelShort(game.tier)
  XPToNextLevel = TierToShard(game.tier + 1) - TierToShard(game.tier)
  ProgressToNextLevel = game.timeShards - TierToShard(game.tier)
  document.getElementById("XPBarText").innerHTML = "Shards to next tier: " + xpShort(ProgressToNextLevel) + "/" + xpShort(XPToNextLevel)
  document.getElementById("XPBarBack").style.width = (ProgressToNextLevel / XPToNextLevel * 100) + "%"
}
  if (game.level > game.highestLevel) {game.highestLevel = game.level}
  if (game.tier > game.highestTier) {game.highestTier = game.tier}
  handleUnlocks()
  displayStuff()
}
setInterval(updateSmall, 50) //Runs the update ~20 times per second

//Updates cooldowns
function updateLarge() {
  for (i=0;i<50;i++) {
    if (game.buttonCooldowns[i] > 0) game.buttonCooldowns[i] -= ((Date.now() - game.timeOfLastUpdate) / (1000/game.speed))
    if (game.buttonCooldowns[i] < 0) game.buttonCooldowns[i] = 0
    if (!game.buttonCooldowns[i]) game.buttonCooldowns[i] = 0
  }
  if (game.timeOfLastUpdate - game.sessionStart <= 2000) {}
  else game.timePlayed += (Date.now() - game.timeOfLastUpdate)/1000;
  game.timeOfLastUpdate = Date.now()
}
setInterval(updateLarge, 100) //Runs the update ~10 times per second

function XPToLevel(x) {return Math.floor((x / 5) ** 0.55) + 1}
function levelToXP(x) {return Math.ceil((x-1) ** (1/0.55) * 5)}
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
  if (game.XPBoost < 10) {return game.XPBoostEffect = game.XPBoost}
  else {return game.XPBoostEffect = 9 + (game.XPBoost - 9) ** (0.5 + game.itemXPBoostEffectSoftcap)}
}
setInterval(updateXPBoost, 50)

//Handles unlocks (Happens 60 times a second, could definitely be optimised!) - Demonin. Reply: I believe this is better now - Marc. Reply 2: It isn't - Marc
function handleUnlocks() {
  for (i=0;i<importantUnlockLevels.length;i++)
    if (game.level >= importantUnlockLevels[i] && game.importantUnlocks < i+1) {
      game.importantUnlocks = i+1
    }
  for (i=0;i<unlockLevels.length;i++) {
    if (game.level >= unlockLevels[i] && game.unlocks < i+1) {
      game.unlocks = i+1
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
    if (game.tier >= unlockTiers[i] && game.dimensionUnlocks < i+1) {
      game.dimensionUnlocks = i+1
    }
  }
  game.totalUnlocks = game.unlocks + game.extraUnlocks + game.dimensionUnlocks
  game.possibleUnlocks = unlockLevels.length + unlockTiers.length + 3
  if (game.itemUnlocks > game.extraUnlocks) {
    game.extraUnlocks += 1
    if (game.extraUnlocks == 1) {document.getElementById("fight2Button").style.display = "block"}
    if (game.extraUnlocks == 2) {
      document.getElementById("TimeTab").style.display = "block"
      document.getElementsByClassName("themeButton")[6].style.display = "inline-block"
    }
    if (game.extraUnlocks == 3) {document.getElementById("fight4Button").style.display = "block"}
  }
  if (game.currentTab <= 4) {
  if (game.totalUnlocks == game.possibleUnlocks) {document.getElementById("nextUnlockLevel").innerHTML = "All unlocks have been achieved! Next update coming soon"}
  else if (game.unlocks == unlockLevels.length) {document.getElementById("nextUnlockLevel").innerHTML = "All XP unlocks have been achieved! But " + (game.possibleUnlocks - game.totalUnlocks) + " unlocks are missing"}
  else if (game.unlocks >= 22) {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock something new at level " + numberShort(unlockLevels[game.unlocks]) + " or through shop upgrades!"}
  else {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock something new at level " + unlockLevels[game.unlocks] + "!<br> New feature unlocks at level " + numberShort(importantUnlockLevels[game.importantUnlocks])}
  }
  else {
  if (game.totalUnlocks == game.possibleUnlocks) {document.getElementById("nextUnlockLevel").innerHTML = "All unlocks have been achieved! Next update coming soon"}
  else if (game.dimensionUnlocks == unlockTiers.length) {document.getElementById("nextUnlockLevel").innerHTML = "All dimensions have been unlocked! " + (game.possibleUnlocks - game.totalUnlocks) + " unlocks are missing"}
  else if (game.dimensionUnlocks >= 3) {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock a new dimension at tier " + numberShort(unlockTiers[game.dimensionUnlocks]) + " and Dimensional reset #" + (game.dimensionUnlocks - 2) + "!"}
  else {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock a new dimension at tier " + unlockTiers[game.dimensionUnlocks] + "!"}
  }
}

function changeTheme(x) {
  game.currentTheme = x
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
//asdfgh

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
    if (game.items[i] >= items[i][1]) {counter++}
  }
  return counter
}