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
    possibleUnlocks: 23,
    currentTheme: 2,
    lastSave: Date.now(),
    timeOfLastUpdate: Date.now(),
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
  if (game.unlocks >= 1) {document.getElementById("button2").style.display = "block"}
  if (game.unlocks >= 2) {document.getElementById("button3").style.display = "block"}
  if (game.unlocks >= 3) {document.getElementById("button4").style.display = "block"}
  if (game.unlocks >= 4) {document.getElementsByClassName("themeButton")[2].style.display = "inline-block"}
  if (game.unlocks >= 5) {document.getElementById("button5").style.display = "block"}
  if (game.unlocks >= 6) {
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
  if (game.unlocks >= 10) {document.getElementById("button6").style.display = "block"}
  if (game.unlocks >= 11) {document.getElementById("unboxButton4").style.display = "block"}
  if (game.unlocks >= 12) {document.getElementById("button7").style.display = "block"}
  if (game.unlocks >= 13) {
    document.getElementById("button8").style.display = "block"
    document.getElementById("XPBoostDisplay").style.display = "block"
  updateXPBoost()}
  if (game.unlocks >= 14) {document.getElementById("unboxButton5").style.display = "block"}
  if (game.unlocks >= 15) {document.getElementById("button9").style.display = "block"}
  if (game.unlocks >= 16) {document.getElementById("button10").style.display = "block"}
  if (game.unlocks >= 17) {document.getElementById("button11").style.display = "block"}
  if (game.unlocks >= 18) {document.getElementById("button12").style.display = "block"}
  if (game.unlocks >= 19) {document.getElementById("unboxButton6").style.display = "block"}
  if (game.unlocks >= 20) {document.getElementById("button13").style.display = "block"}
  if (game.unlocks >= 21) {
    document.getElementById("enemiesTabButton").style.display = "block"
    document.getElementById("fightingTabButton").style.display = "block"
    document.getElementById("button14").style.display = "block"
    enemiesChosen = 1
  }
  if (game.unlocks >= 22) {
  document.getElementById("shopTabButton").style.display = "block"
  document.getElementById("ItemBoostDisplay").style.display = "block"
  updateShopBoosts()
  }
  if (game.unlocks >= 23) {document.getElementById("unboxButton7").style.display = "block"}
  if (game.unlocks >= 24) {document.getElementById("button15").style.display = "block"}
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
}


//Updates variables and text
function updateSmall() {
  //Sets whether the buttons are disabled or not
  //These could definitely be condensed into one thing!
  if (game.buttonCooldowns[0] > 0) {
    document.getElementById("button1").disabled = true
    document.getElementById("button1").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[0])
  }
  else {
    document.getElementById("button1").disabled = false
    document.getElementById("button1").innerHTML = "Gain " + numberShort((1 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)) + " XP"
  }
  if (game.buttonCooldowns[1] > 0) {
    document.getElementById("button2").disabled = true
    document.getElementById("button2").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[1])
  }
  else {
    document.getElementById("button2").disabled = false
    document.getElementById("button2").innerHTML = "Gain " + numberShort(2 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP) + " XP"
  }
  if (game.buttonCooldowns[2] > 0) {
    document.getElementById("button3").disabled = true
    document.getElementById("button3").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[2])
  }
  else {
    document.getElementById("button3").disabled = false
    document.getElementById("button3").innerHTML = "Gain " + numberShort(5 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP) + " XP"
  }
  if (game.buttonCooldowns[3] > 0) {
    document.getElementById("button4").disabled = true
    document.getElementById("button4").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[3])
  }
  else {
    document.getElementById("button4").disabled = false
    document.getElementById("button4").innerHTML = "Gain " + numberShort(10 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP) + " XP"
  }
  if (game.buttonCooldowns[4] > 0) {
    document.getElementById("button5").disabled = true
    document.getElementById("button5").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[4])
  }
  else {
    document.getElementById("button5").disabled = false
    document.getElementById("button5").innerHTML = "Gain " + numberShort(25 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP) + " XP"
  }
  if (game.buttonCooldowns[5] > 0) {
    document.getElementById("button6").disabled = true
    document.getElementById("button6").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[5])
  }
  else {
    document.getElementById("button6").disabled = false
    document.getElementById("button6").innerHTML = "Gain " + numberShort(50 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP) + " XP"
  }
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
    document.getElementById("dailyRewardButton").style.border = "0.3vh solid #80f"
  }
  else {
    document.getElementById("claimDailyRewardButton").disabled = false
    document.getElementById("claimDailyRewardButton").innerHTML = "Claim daily reward"
    if (Date.now() % 600 < 300) {document.getElementById("dailyRewardButton").style.border = "0.3vh solid #80f"}
    else {document.getElementById("dailyRewardButton").style.border = "0.3vh solid #d9f"}
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
  if (game.buttonCooldowns[11] > 0) {
    document.getElementById("button7").disabled = true
    document.getElementById("button7").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[11])
  }
  else {
    document.getElementById("button7").disabled = false
    document.getElementById("button7").innerHTML = "Gain " + numberShort(250 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP) + " XP"
  }
  if (game.buttonCooldowns[12] > 0) {
    document.getElementById("button8").disabled = true
    document.getElementById("button8").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[12])
  }
  else {
    if (game.items[12] == 0) {
    document.getElementById("button8").disabled = false
    document.getElementById("button8").innerHTML = "Gain " + numberShort(0.2 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but reset XP"
    }
    else {
      document.getElementById("button8").disabled = false
      document.getElementById("button8").innerHTML = "Gain " + numberShort(0.2 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but loose 21.2k XP"
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
  if (game.buttonCooldowns[14] > 0) {
    document.getElementById("button9").disabled = true
    document.getElementById("button9").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[14])
  }
  else {
    document.getElementById("button9").disabled = false
    document.getElementById("button9").innerHTML = "Gain " + numberShort(100 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP) + " XP"
  }
  if (game.buttonCooldowns[15] > 0) {
    document.getElementById("button10").disabled = true
    document.getElementById("button10").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[15])
  }
  else {
    if (game.items[12] == 0) {
      document.getElementById("button10").disabled = false
      document.getElementById("button10").innerHTML = "Gain " + numberShort(1 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but reset XP"
      }
      else {
        document.getElementById("button10").disabled = false
        document.getElementById("button10").innerHTML = "Gain " + numberShort(1 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but loose 75.6k XP"
      }
  }
  if (game.buttonCooldowns[16] > 0) {
    document.getElementById("button11").disabled = true
    document.getElementById("button11").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[16])
  }
  else {
    document.getElementById("button11").disabled = false
    document.getElementById("button11").innerHTML = "Gain " + numberShort(33 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP) + " XP"
  }
  if (game.buttonCooldowns[17] > 0) {
    document.getElementById("button12").disabled = true
    document.getElementById("button12").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[17])
  }
  else {
    document.getElementById("button12").disabled = false
    document.getElementById("button12").innerHTML = "Gain " + numberShort(15 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP) + " XP"
  }
  if (game.buttonCooldowns[18] > 0) {
    document.getElementById("unboxButton6").disabled = true
    document.getElementById("unboxButton6").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[18])
  }
  else {
    document.getElementById("unboxButton6").disabled = false
    document.getElementById("unboxButton6").innerHTML = "Unbox a random trascendant pet for 0.25 XPBoost"
  }
  if (game.buttonCooldowns[19] > 0) {
    document.getElementById("button13").disabled = true
    document.getElementById("button13").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[19])
  }
  else {
    if (game.items[12] == 0) {
      document.getElementById("button13").disabled = false
      document.getElementById("button13").innerHTML = "Gain " + numberShort(4 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but reset XP"
      }
      else {
        document.getElementById("button13").disabled = false
        document.getElementById("button13").innerHTML = "Gain " + numberShort(4 * pets[game.selectedPet][4] * game.itemXPBoost) + " XPBoost, but loose 267.9k XP"
      }
  }
  if (game.buttonCooldowns[20] > 0) {
    document.getElementById("button14").disabled = true
    document.getElementById("button14").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[20])
  }
  else {
    document.getElementById("button14").disabled = false
    document.getElementById("button14").innerHTML = "Gain " + numberShort(5 * game.itemStat) + " HP, " + numberShort(0.5 * game.itemStat) + " DMG and " + numberShort(0.05 * game.itemStat) + " DEF"
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
 if (game.buttonCooldowns[21] == 0 || game.buttonCooldowns[22] == 0 || game.buttonCooldowns[26] == 0) {
  if (Date.now() % 600 < 300) {document.getElementById("fightingTabButton").style.border = "0.3vh solid #77f"}
  else {document.getElementById("fightingTabButton").style.border = "0.3vh solid #0ff"}
 }
 else {document.getElementById("fightingTabButton").style.border = "0.3vh solid #0ff"}
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
  document.getElementById("button15").disabled = true
  document.getElementById("button15").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[25])
}
else {
  document.getElementById("button15").disabled = false
  document.getElementById("button15").innerHTML = "Gain " + numberShort(20 * game.itemStat) + " HP, " + numberShort(2 * game.itemStat) + " DMG and " + numberShort(0.2 * game.itemStat) + " DEF"
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
  document.getElementById("XPToNextlevel").innerHTML = xpShort(ProgressToNextLevel) + "/" + xpShort(XPToNextLevel)
  document.getElementById("XPBarBack").style.width = (ProgressToNextLevel / XPToNextLevel * 100) + "%"
  }
  else if (game.unlocks < unlockLevels.length) { //After level 1500
  XPToNextUnlock = levelToXP(unlockLevels[game.unlocks]) // - levelToXP(unlockLevels[game.unlocks - 1])
  ProgressToNextUnlock = game.XP // - levelToXP(unlockLevels[game.unlocks - 1]))
  document.getElementById("XPBarText").innerHTML = "XP to next unlock: <span id=XPToNextlevel>0/0</span></p>"
  document.getElementById("XPToNextlevel").innerHTML = xpShort(ProgressToNextUnlock) + "/" + xpShort(XPToNextUnlock)
  document.getElementById("XPBarBack").style.width = (ProgressToNextUnlock / XPToNextUnlock * 100) + "%"
  }
  else {
    document.getElementById("XPBarText").innerHTML = "Total XP: " + numberShort(game.XP)
    document.getElementById("XPBarBack").style.width = 100 + "%"
  }
  if (game.level > game.highestLevel) {game.highestLevel = game.level}
  handleUnlocks()
}
setInterval(updateSmall, 16) //Runs the update ~60 times per second

//Updates cooldowns
function updateLarge() {
  for (i=0;i<27;i++) {
    if (game.buttonCooldowns[i] > 0) game.buttonCooldowns[i] -= ((Date.now() - game.timeOfLastUpdate) / (1000/game.speed))
    if (game.buttonCooldowns[i] < 0) game.buttonCooldowns[i] = 0
  }
  game.timeOfLastUpdate = Date.now()
}
setInterval(updateLarge, 100) //Runs the update ~10 times per second

function XPToLevel(x) {return Math.floor((x / 5) ** 0.55) + 1}
function levelToXP(x) {return Math.ceil((x-1) ** (1/0.55) * 5)}
function numberToTime(x) {
  xCeil = Math.ceil(x) / game.speed
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
function clickButton(x) {
  if (x==1 && game.buttonCooldowns[0] == 0) {
      game.XP += (pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[0] = 60 / (pets[game.selectedPet][2] * game.itemCooldown) //1 minute
  }
  else if (x==2 && game.buttonCooldowns[1] == 0) {
      game.XP += (2 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[1] = 300 / (pets[game.selectedPet][2] * game.itemCooldown) //5 minutes
  }
  else if (x==3 && game.buttonCooldowns[2] == 0) {
      game.XP += (5 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[2] = 1800 / (pets[game.selectedPet][2] * game.itemCooldown) //30 minutes
  }
  else if (x==4 && game.buttonCooldowns[3] == 0) {
      game.XP += (10 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[3] = 7200 / (pets[game.selectedPet][2] * game.itemCooldown) //2 hours
  }
  else if (x==5 && game.buttonCooldowns[4] == 0) {
      game.XP += (25 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[4] = 43200 / (pets[game.selectedPet][2] * game.itemCooldown) //12 hours
  }
  else if (x==6 && game.buttonCooldowns[5] == 0) {
      game.XP += (50 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[5] = 172800 / (pets[game.selectedPet][2] * game.itemCooldown) //2d
  }
  else if (x==7 && game.buttonCooldowns[11] == 0) {
      game.XP += (250 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[11] = 604800 / (pets[game.selectedPet][2] * game.itemCooldown) //7d
  }
  else if (x==8 && game.buttonCooldowns[12] == 0) {
    if (game.XP > 21251.9) {
      if (game.items[12] == 1) {
        game.lostXP += 21252
        game.XP -= 21252
        game.XPBoost += 0.2 * pets[game.selectedPet][4] * game.itemXPBoost
        game.buttonCooldowns[12] = 3600 / (game.itemCooldown) //1h
      }
      else {
    game.lostXP += game.XP
    game.XP = 0
    game.XPBoost += 0.2 * pets[game.selectedPet][4] * game.itemXPBoost
    game.buttonCooldowns[12] = 3600 / (game.itemCooldown) //1h
      } 
  }
    else {
      alert("You need at least level 100 to reset for this button")
    }
  }
  else if (x==9 && game.buttonCooldowns[14] == 0) {
      game.XP += (100 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[14] = 86400 / (pets[game.selectedPet][2] * game.itemCooldown) //7d
  }
  else if (x==10 && game.buttonCooldowns[15] == 0) {
    if (game.XP > 75631.9) {
      if (game.items[12] == 1) {
        game.lostXP += 75632
        game.XP -= 75632
        game.XPBoost += 1 * pets[game.selectedPet][4] * game.itemXPBoost
        game.buttonCooldowns[15] = 3600 / (game.itemCooldown)
      }
    else {
    game.lostXP += game.XP
    game.XP = 0
    game.XPBoost += 1 * pets[game.selectedPet][4] * game.itemXPBoost
    game.buttonCooldowns[15] = 3600 / (game.itemCooldown) //1h
     }
    }
    else {
      alert("You need at least level 200 to reset for this button")
    }
  }
  else if (x==11 && game.buttonCooldowns[16] == 0) {
      game.XP += (33 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[16] = 21600 / (pets[game.selectedPet][2] * game.itemCooldown) //6h
  }
  else if (x==12 && game.buttonCooldowns[17] == 0) {
      game.XP += (15 * pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP)
      game.buttonCooldowns[17] = 3600 / (pets[game.selectedPet][2] * game.itemCooldown) //1h
  }
  else if (x==13 && game.buttonCooldowns[19] == 0) {
    if (game.XP > 267924.9) {
      if (game.items[12] == 1) {
        game.lostXP += 267925
        game.XP -= 267925
        game.XPBoost += 4 * pets[game.selectedPet][4] * game.itemXPBoost
        game.buttonCooldowns[19] = 3600 / (game.itemCooldown)
      }
      else {
    game.lostXP += game.XP
    game.XP = 0
    game.XPBoost += 4 * pets[game.selectedPet][4] * game.itemXPBoost
    game.buttonCooldowns[19] = 3600 / (game.itemCooldown) //1h, can't be modified... as of now
      }
    }
    else {
      alert("You need at least level 400 to reset for this button")
    }
  }
  else if (x==14 && game.buttonCooldowns[20] == 0) {
    game.HP += 5 * game.itemStat
    game.DMG += 0.5 * game.itemStat
    game.DEF += 0.05 * game.itemStat
    game.buttonCooldowns[20] = 3600 / (game.itemCooldown) //1h
}
else if (x==15 && game.buttonCooldowns[25] == 0) {
  game.HP += 20 * game.itemStat
  game.DMG += 2 * game.itemStat
  game.DEF += 0.2 * game.itemStat
  game.buttonCooldowns[25] = 21600 / (game.itemCooldown) //6h
}
  updateSmall()
}

//This will simply update the XPBoost display
function updateXPBoost(){
  if (game.XPBoost < 10) {return document.getElementById("XPBoostDisplay").innerHTML = "XPBoost: " + numberShort(game.XPBoost),
   game.XPBoostEffect = game.XPBoost}
  else {return document.getElementById("XPBoostDisplay").innerHTML = "XPBoost: " + numberShort(game.XPBoost) + "<br> Effective Boost: " + numberShort((9 + (game.XPBoost - 9) ** (0.5 + game.itemXPBoostEffectSoftcap))),
   game.XPBoostEffect = 9 + (game.XPBoost - 9) ** (0.5 + game.itemXPBoostEffectSoftcap)}
}
setInterval(updateXPBoost, 50)

//Handles unlocks (Happens 60 times a second, could definitely be optimised!) - Demonin. Reply: I believe this is better now - Marc. Reply 2: It isn't - Marc
function handleUnlocks() {
  for (i=0;i<unlockLevels.length;i++) {
    if (game.level >= unlockLevels[i] && game.unlocks < i+1) {
      game.unlocks = i+1
      game.totalUnlocks = game.unlocks + game.extraUnlocks
      //Could probably use a switch
      if (i==0) {document.getElementById("button2").style.display = "block"
      game.buttonCooldowns[1] = 0}
      else if (i==1) {document.getElementById("button3").style.display = "block"
      game.buttonCooldowns[2] = 0}
      else if (i==2) {document.getElementById("button4").style.display = "block"
      game.buttonCooldowns[3] = 0}
      else if (i==3) {document.getElementsByClassName("themeButton")[2].style.display = "inline-block"}
      else if (i==4) {document.getElementById("button5").style.display = "block"
      game.buttonCooldowns[4] = 0}
      else if (i==5) {
        document.getElementById("unboxButton1").style.display = "block"
        document.getElementById("selectedPetText").style.display = "block"
        document.getElementById("petsTabButton").style.display = "block"
        document.getElementById("dailyRewardButton").style.display = "block"
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
      else if (i==9) {document.getElementById("button6").style.display = "block"
      game.buttonCooldowns[5] = 0}
      else if (i==10) {document.getElementById("unboxButton4").style.display = "block"
      game.buttonCooldowns[10] = 0}
      else if (i==11) {document.getElementById("button7").style.display = "block"
      game.buttonCooldowns[11] = 0}
      else if (i==12) {
        document.getElementById("button8").style.display = "block"
        document.getElementById("XPBoostDisplay").style.display = "block"
        game.buttonCooldowns[12] = 0}
      else if (i==13) {document.getElementById("unboxButton5").style.display = "block"
      game.buttonCooldowns[13] = 0}
      else if (i==14) {document.getElementById("button9").style.display = "block"
      game.buttonCooldowns[14] = 0}
      else if (i==15) {document.getElementById("button10").style.display = "block"
      game.buttonCooldowns[15] = 0}
      else if (i==16) {document.getElementById("button11").style.display = "block"
      game.buttonCooldowns[16] = 0}
      else if (i==17) {document.getElementById("button12").style.display = "block"
      game.buttonCooldowns[17] = 0}
      else if (i==18) {document.getElementById("unboxButton6").style.display = "block"
      game.buttonCooldowns[18] = 0}
      else if (i==19) {document.getElementById("button13").style.display = "block"
      game.buttonCooldowns[19] = 0}
      else if (i==20) {
        document.getElementById("enemiesTabButton").style.display = "block"
        document.getElementById("fightingTabButton").style.display = "block"
        document.getElementById("button14").style.display = "block"
        game.buttonCooldowns[20] = 0
        game.buttonCooldowns[21] = 0
        enemiesChosen = 1}
      else if (i==21) {
        document.getElementById("shopTabButton").style.display = "block"
        document.getElementById("ItemBoostDisplay").style.display = "block"
        updateShopBoosts() }
      else if (i==22) {document.getElementById("unboxButton7").style.display = "block"
        game.buttonCooldowns[24] = 0
        for (let i =0;i<9; i++) {
          game.pets[i+64] = 0
        }
      }
      else if (i==23) {document.getElementById("button15").style.display = "block"
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

  if (game.totalUnlocks == game.possibleUnlocks) {document.getElementById("nextUnlockLevel").innerHTML = "All unlocks have been achieved! For now... (Endgame: All upgrades/Best pet/Strongest enemy beaten)"}
  else if (game.unlocks == unlockLevels.length) {document.getElementById("nextUnlockLevel").innerHTML = "All XP unlocks have been achieved! But not all possible ones"}
  else if (game.unlocks >= 22) {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock something new at level " + numberShort(unlockLevels[game.unlocks]) + " or through other means!"}
  else {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock something new at level " + unlockLevels[game.unlocks] + "!"}
}

function unboxPet(x, y=1) {
  totalWeight = 0
  //Determines the total weight, and then progressively checks random odds until a pet is found
  //These could all probably be condensed into one but I'm lazy
  if (x==1) {
    for (i=0;i<skeletalUnboxChances.length;i++) totalWeight += skeletalUnboxChances[i][1]
    for (i=0;i<skeletalUnboxChances.length;i++) {
      if (Math.random() * totalWeight < skeletalUnboxChances[i][1]) {
        petChosen = skeletalUnboxChances[i][0]
        i = skeletalUnboxChances.length
      }
      else {
        totalWeight -= skeletalUnboxChances[i][1]
      }
    }
  }
  else if (x==2) {
    for (i=0;i<ghostUnboxChances.length;i++) totalWeight += ghostUnboxChances[i][1]
    for (i=0;i<ghostUnboxChances.length;i++) {
      if (Math.random() * totalWeight < ghostUnboxChances[i][1]) {
        petChosen = ghostUnboxChances[i][0]
        i = ghostUnboxChances.length
      }
      else {
        totalWeight -= ghostUnboxChances[i][1]
      }
    }
  }
  else if (x==3) {
    for (i=0;i<basicUnboxChances.length;i++) totalWeight += basicUnboxChances[i][1]
    for (i=0;i<basicUnboxChances.length;i++) {
      if (Math.random() * totalWeight < basicUnboxChances[i][1]) {
        petChosen = basicUnboxChances[i][0]
        i = basicUnboxChances.length
      }
      else {
        totalWeight -= basicUnboxChances[i][1]
      }
    }
  }
  else if (x==4) {
    for (i=0;i<advancedUnboxChances.length;i++) totalWeight += advancedUnboxChances[i][1]
    for (i=0;i<advancedUnboxChances.length;i++) {
      if (Math.random() * totalWeight < advancedUnboxChances[i][1]) {
        petChosen = advancedUnboxChances[i][0]
        i = advancedUnboxChances.length
      }
      else {
        totalWeight -= advancedUnboxChances[i][1]
      }
    }
  }
  else if (x==5) {
    for (i=0;i<epicUnboxChances.length;i++) totalWeight += epicUnboxChances[i][1]
    for (i=0;i<epicUnboxChances.length;i++) {
      if (Math.random() * totalWeight < epicUnboxChances[i][1]) {
        petChosen = epicUnboxChances[i][0]
        i = epicUnboxChances.length
      }
      else {
        totalWeight -= epicUnboxChances[i][1]
      }
    }
  }
  else if (x==6) {
    for (i=0;i<legendaryUnboxChances.length;i++) totalWeight += legendaryUnboxChances[i][1]
    for (i=0;i<legendaryUnboxChances.length;i++) {
      if (Math.random() * totalWeight < legendaryUnboxChances[i][1]) {
        petChosen = legendaryUnboxChances[i][0]
        i = legendaryUnboxChances.length
      }
      else {
        totalWeight -= legendaryUnboxChances[i][1]
      }
    }
  }
  else if (x==7) {
    if (game.XPBoost <= 1.09) {
      alert("XPBoost has to not drop below 1 to buy this crate") 
      petChosen = 0 
    }
    else {
      game.XPBoost += -0.1
    for (i=0;i<prestigeUnboxChances.length;i++) totalWeight += prestigeUnboxChances[i][1]
    for (i=0;i<prestigeUnboxChances.length;i++) {
      if (Math.random() * totalWeight < prestigeUnboxChances[i][1]) {
        petChosen = prestigeUnboxChances[i][0]
        i = prestigeUnboxChances.length
      }
      else {
        totalWeight -= prestigeUnboxChances[i][1]
      }
    }
    }
  }
  else if (x==8) {
    if (game.XPBoost <= 1.24) {
      alert("XPBoost has to not drop below 1 to buy this crate")
      petChosen = 0
    }
    else {
      game.XPBoost += -0.25
    for (i=0;i<trascendantUnboxChances.length;i++) totalWeight += trascendantUnboxChances[i][1]
    for (i=0;i<trascendantUnboxChances.length;i++) {
      if (Math.random() * totalWeight < trascendantUnboxChances[i][1]) {
        petChosen = trascendantUnboxChances[i][0]
        i = trascendantUnboxChances.length
      }
      else {
        totalWeight -= trascendantUnboxChances[i][1]
      }
    }
    }
  }
  else if (x==9) {
    if (game.coins <= 250) {
      alert("You don't have enough coins to buy this crate")
      petChosen = 0
    }
    else {
      game.coins -= 250
    for (i=0;i<universalUnboxChances.length;i++) totalWeight += universalUnboxChances[i][1]
    for (i=0;i<universalUnboxChances.length;i++) {
      if (Math.random() * totalWeight < universalUnboxChances[i][1]) {
        petChosen = universalUnboxChances[i][0]
        i = universalUnboxChances.length
      }
      else {
        totalWeight -= universalUnboxChances[i][1]
      }
    }
    }
  }

if (petChosen >= 1) {
  if (game.items[10] == 0 || x >= 9 || y < 1000) {alert("Got a " + pets[petChosen][0] + "!")}
    if (!game.pets[petChosen]) {game.pets[petChosen] = 1}
    else {game.pets[petChosen]++}


    if (x==3) {game.buttonCooldowns[6] = 7200 / (pets[game.selectedPet][3] * game.itemCooldown)} //2 hours
    else if (x==4) {game.buttonCooldowns[7] = 21600 / (pets[game.selectedPet][3] * game.itemCooldown)} //6 hours
    else if (x==5) {game.buttonCooldowns[8] = 64800 / (pets[game.selectedPet][3] * game.itemCooldown)} //18 hours
    else if (x==6) {game.buttonCooldowns[10] = 172800 / (pets[game.selectedPet][3] * game.itemCooldown)} //2 days
    else if (x==7) {game.buttonCooldowns[13] = 3600 / (pets[game.selectedPet][3] * game.itemCooldown)} //1 h
    else if (x==8) {game.buttonCooldowns[18] = 3600 / (pets[game.selectedPet][3] * game.itemCooldown)} //1 h  
    else if (x==9) {game.buttonCooldowns[24] = 43200 / (pets[game.selectedPet][3] * game.itemCooldown)} //12 h  
 }
y += -1
if (y < 1) {}
else unboxPet(x, y=y)

}
  if (document.getElementById("petsDiv").style.display == "block") displayPets()

  function autoPets() {
    y = Math.ceil(1 + game.extraPetAmount)
     if (game.items[15] == 1) {
    if (game.buttonCooldowns[6] == 0) {
      unboxPet(3,y=y)
    }
    if (game.buttonCooldowns[7] == 0) {
      unboxPet(4,y=y)
    }
    if (game.buttonCooldowns[8] == 0) {
      unboxPet(5,y=y)
    }
    if (game.buttonCooldowns[10] == 0) {
      unboxPet(6,y=y)
    }
   }
   game.buttonCooldowns[23] = 1800
  }

function displayPetRarities(x) {
  if (x==0) {document.getElementById("petRarities").innerHTML = ""}
  else if (x==3) {
    document.getElementById("petRarities").innerHTML = "<img src='img/crateBasic.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
    totalWeight = 0
    for (i=0;i<basicUnboxChances.length;i++) totalWeight += basicUnboxChances[i][1]
    for(i=0;i<basicUnboxChances.length;i++) {
      document.getElementById("petRarities").innerHTML += pets[basicUnboxChances[i][0]][0] + ": " + (basicUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
    }
  }
  else if (x==4) {
    document.getElementById("petRarities").innerHTML = "<img src='img/crateAdvanced.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
    totalWeight = 0
    for (i=0;i<advancedUnboxChances.length;i++) totalWeight += advancedUnboxChances[i][1]
    for(i=0;i<advancedUnboxChances.length;i++) {
      document.getElementById("petRarities").innerHTML += pets[advancedUnboxChances[i][0]][0] + ": " + (advancedUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
    }
  }
  else if (x==5) {
    document.getElementById("petRarities").innerHTML = "<img src='img/crateEpic.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
    totalWeight = 0
    for (i=0;i<epicUnboxChances.length;i++) totalWeight += epicUnboxChances[i][1]
    for(i=0;i<epicUnboxChances.length;i++) {
      document.getElementById("petRarities").innerHTML += pets[epicUnboxChances[i][0]][0] + ": " + (epicUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
    }
  }

  else if (x==6) {
  document.getElementById("petRarities").innerHTML = "<img src='img/crateLegendary.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
  totalWeight = 0
  for (i=0;i<legendaryUnboxChances.length;i++) totalWeight += legendaryUnboxChances[i][1]
  for(i=0;i<legendaryUnboxChances.length;i++) {
    document.getElementById("petRarities").innerHTML += pets[legendaryUnboxChances[i][0]][0] + ": " + (legendaryUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
  }
}
else if (x==7) {
  document.getElementById("petRarities").innerHTML = "<img src='img/cratePrestige1.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
  totalWeight = 0
  for (i=0;i<prestigeUnboxChances.length;i++) totalWeight += prestigeUnboxChances[i][1]
  for(i=0;i<prestigeUnboxChances.length;i++) {
    document.getElementById("petRarities").innerHTML += pets[prestigeUnboxChances[i][0]][0] + ": " + (prestigeUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
  }
}
else if (x==8) {
  document.getElementById("petRarities").innerHTML = "<img src='img/cratePrestige2.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
  totalWeight = 0
  for (i=0;i<trascendantUnboxChances.length;i++) totalWeight += trascendantUnboxChances[i][1]
  for(i=0;i<trascendantUnboxChances.length;i++) {
    document.getElementById("petRarities").innerHTML += pets[trascendantUnboxChances[i][0]][0] + ": " + (trascendantUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
  }
}
else if (x==9) {
  document.getElementById("petRarities").innerHTML = "<img src='img/crateUniversal.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
  totalWeight = 0
  for (i=0;i<universalUnboxChances.length;i++) totalWeight += universalUnboxChances[i][1]
  for(i=0;i<universalUnboxChances.length;i++) {
    document.getElementById("petRarities").innerHTML += pets[universalUnboxChances[i][0]][0] + ": " + (universalUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
  }
}

}

function openClosePetsTab() {
  if (document.getElementById("petsDiv").style.display == "block") {
    document.getElementById("petsDiv").style.display = "none"
    document.getElementById("petsListInner").innerHTML = ""
  }
  else {
    document.getElementById("petsDiv").style.display = "block"
    displayPets()
  }
}

//Adds the squares for all the pets to the pets tab
function displayPets() {
  document.getElementById("petsListInner").innerHTML = ""
  let petBox = document.createElement("div")
  petBox.style.display = "inline-block"
  petBox.style.position = "relative"
  petBox.style.width = "128px"
  petBox.style.height = "128px"
  petBox.style.margin = "8px 0 0 8px"
  petBox.style.border = "8px solid black"
  petBox.style.cursor = "pointer"
  petBox.style.backgroundColor = "#888"
  petBox.style.backgroundImage = "url('img/halftoneDots.png')"
  petBox.className += "petBox"
  petBoxes = document.getElementsByClassName("petBox");
  for (i=1;i<pets.length;i++) {
    document.getElementById("petsListInner").appendChild(petBox.cloneNode(true))
    petBoxes[i-1].setAttribute("id", i)
    petBoxes[i-1].addEventListener('click', function(){
      if (game.pets[parseInt(this.id)] > 0) {setSelectedPet(parseInt(this.id))}
    })
    petBoxes[i-1].addEventListener('mouseover', function(){
      if (game.pets[parseInt(this.id)] > 0) {showPetInfo(parseInt(this.id))}
    })
    petBoxes[i-1].addEventListener('mouseout', function(){showPetInfo(0)})
    if (game.pets[i] > 0) { //1st value is red, 2nd green and 3rd blue
      petBoxes[i-1].innerHTML = "<img src='img/pets/" + i + ".png' style='width: 128px'>"
      petBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + game.pets[i] + "</p>"
      if (i<=6) petBoxes[i-1].style.border = "8px outset #555"
      else if (i<=13) petBoxes[i-1].style.border = "8px outset #447"
      else if (i<=22) petBoxes[i-1].style.border = "8px outset #647"
      else if (i<=31) petBoxes[i-1].style.border = "8px outset #500"
      else if (i<=39) petBoxes[i-1].style.border = "8px outset #990"
      else if (i<=46) petBoxes[i-1].style.border = "8px outset #229"
      else if (i<=55) petBoxes[i-1].style.border = "8px outset #bbb"
      else if (i<=63) petBoxes[i-1].style.border = "8px outset #282"
      else if (i<=72) petBoxes[i-1].style.border = "8px outset #d83"
    }
    else {
      petBoxes[i-1].innerHTML = "<img src='img/pets/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
      petBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>0</p>"
    }
  }
  j=pets.length-1
}

function showPetInfo(x) {
  if (x==0) {document.getElementById("petInfo").innerHTML = ""}
  else document.getElementById("petInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + pets[x][0] + "</span><br>You have " + game.pets[x] + "</p><br><img src='img/pets/" + x + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Effects:</span><br>x" + numberShort(pets[x][1]) + " XP from buttons and Daily<br>-" + ((1 - (1 / pets[x][2])) * 100).toFixed(1) + "% XP button cooldown<br>-" + ((1 - (1 / pets[x][3])) * 100).toFixed(1) + "% pet button cooldown<br>+" + ((pets[x][4] - 1) * 100).toFixed(1) + "% XPBoost stat</p></center>"
}

function setSelectedPet(x) {
  game.selectedPet = x
  if (x==0) {
    document.getElementById("selectedPet").innerHTML = "None"
    document.getElementById("selectedPetImg").style.display = "none"
  }
  else {
    document.getElementById("selectedPet").innerHTML = pets[x][0]
    document.getElementById("selectedPetImg").style.display = "inline-block"
    document.getElementById("selectedPetImg").src = "img/pets/" + x + ".png"
  }
}

function openCloseDailyRewardTab() {
  if (document.getElementById("dailyRewardDiv").style.display == "block") {
    document.getElementById("dailyRewardDiv").style.display = "none"
  }
  else {
    document.getElementById("dailyRewardDiv").style.display = "block"
    displayDailyRewards()
  }
}

function displayDailyRewards() {
  for (i=0;i<4;i++) {
    dailyRewardDay = game.dailyRewards+i+1
    document.getElementsByClassName("dayBox")[i].innerHTML = "Day " + dailyRewardDay
    if (dailyRewardDay % 2 == 1) {
      document.getElementsByClassName("dayBox")[i].innerHTML += "<br>" + numberShort(Math.min((17.5 + dailyRewardDay * 2.5) * pets[game.selectedPet][1] * game.itemDailyXP, 10000 * pets[game.selectedPet][1] * game.itemDailyXP)) + " XP"}
    else if (dailyRewardDay % 4 == 2) {document.getElementsByClassName("dayBox")[i].innerHTML += "<span style='font-size: 1.5vh'><br>Skeletal crate</span><br><img src='img/crateSkeletal.png' style='width:4vh; margin: 0; margin-top: 1vh;'>"}
    else {document.getElementsByClassName("dayBox")[i].innerHTML += "<span style='font-size: 1.5vh'><br>Ghost crate</span><br><img src='img/crateGhost.png' style='width:4vh; margin: 0; margin-top: 1vh;'>"}
  }
}

function displayDailyRewardRarities(x) {
  if (x==0) {document.getElementById("dailyRewardRarities").innerHTML = ""}
  else if ((x+game.dailyRewards) % 4 == 2) {
    document.getElementById("dailyRewardRarities").innerHTML = "<img src='img/crateSkeletal.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
    totalWeight = 0
    for (i=0;i<skeletalUnboxChances.length;i++) totalWeight += skeletalUnboxChances[i][1]
    for(i=0;i<skeletalUnboxChances.length;i++) {
      document.getElementById("dailyRewardRarities").innerHTML += pets[skeletalUnboxChances[i][0]][0] + ": " + (skeletalUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
    }
  }
  else if ((x+game.dailyRewards) % 4 == 0) {
    document.getElementById("dailyRewardRarities").innerHTML = "<img src='img/crateGhost.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
    totalWeight = 0
    for (i=0;i<ghostUnboxChances.length;i++) totalWeight += ghostUnboxChances[i][1]
    for(i=0;i<ghostUnboxChances.length;i++) {
      document.getElementById("dailyRewardRarities").innerHTML += pets[ghostUnboxChances[i][0]][0] + ": " + (ghostUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
    }
  }
  else {document.getElementById("dailyRewardRarities").innerHTML = ""}
}

function claimDailyReward() {
  game.buttonCooldowns[9] = 86400 / game.itemCooldown //24 hours
  game.dailyRewards++
  displayDailyRewards()
  if (game.dailyRewards % 2 == 1) {
    game.XP += Math.min((17.5 + game.dailyRewards * 2.5) * pets[game.selectedPet][1] * game.itemDailyXP, 10000 * pets[game.selectedPet][1] * game.itemDailyXP)}
  else if (dailyRewardDay % 4 == 2) {unboxPet(1)}
  else {unboxPet(2)}
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

  //Fighting mechanics
  function openCloseEnemiesTab() {
    if (document.getElementById("enemiesDiv").style.display == "block") {
      document.getElementById("enemiesDiv").style.display = "none"
      document.getElementById("enemiesListInner").innerHTML = ""
    }
    else {
      document.getElementById("enemiesDiv").style.display = "block"
      displayEnemies()
    }
  }

  function displayEnemies() {
    document.getElementById("enemiesListInner").innerHTML = ""
    let enemyBox = document.createElement("div")
    enemyBox.style.display = "inline-block"
    enemyBox.style.position = "relative"
    enemyBox.style.width = "128px"
    enemyBox.style.height = "128px"
    enemyBox.style.margin = "8px 0 0 8px"
    enemyBox.style.border = "8px solid black"
    enemyBox.style.cursor = "pointer"
    enemyBox.style.backgroundColor = "#888"
    enemyBox.style.backgroundImage = "url('img/halftoneDots.png')"
    enemyBox.className += "enemyBox"
    enemyBoxes = document.getElementsByClassName("enemyBox");
    for (i=1;i<enemies.length;i++) {
      document.getElementById("enemiesListInner").appendChild(enemyBox.cloneNode(true))
      enemyBoxes[i-1].setAttribute("id", i)
      enemyBoxes[i-1].addEventListener('mouseover', function(){
        if (game.enemies[parseInt(this.id)] > 0) {showEnemiesInfo(parseInt(this.id))}
      })
      enemyBoxes[i-1].addEventListener('mouseout', function(){showEnemiesInfo(0)})
      if (game.enemies[i] > 0) { //1st value is red, 2nd green and 3rd blue
        enemyBoxes[i-1].innerHTML = "<img src='img/enemies/" + i + ".png' style='width: 128px'>"
        enemyBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + game.enemies[i] + "</p>"
        if (i<=5) enemyBoxes[i-1].style.border = "8px outset #555"
        else if (i<=11) enemyBoxes[i-1].style.border = "8px outset #447"
        else if (i<=22) enemyBoxes[i-1].style.border = "8px outset #647"
        else if (i<=31) enemyBoxes[i-1].style.border = "8px outset #500"
        else if (i<=39) enemyBoxes[i-1].style.border = "8px outset #990"
        else if (i<=46) enemyBoxes[i-1].style.border = "8px outset #229"
        else if (i<=55) enemyBoxes[i-1].style.border = "8px outset #bbb"
        else if (i<=63) enemyBoxes[i-1].style.border = "8px outset #282"
      }
      else {
        enemyBoxes[i-1].innerHTML = "<img src='img/enemies/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
        enemyBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>0</p>"
      }
    }
    j=enemies.length-1
  }

  function showEnemiesInfo(x) {
    if (x==0) {document.getElementById("enemiesInfo").innerHTML = ""}
    else document.getElementById("enemiesInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + enemies[x][0] + "</span><br>You killed " + game.enemies[x] + "</p><br><img src='img/enemies/" + x + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Stats:</span><br>" + (enemies[x][1]).toFixed(1) + " HP<br>" + (enemies[x][2]).toFixed(1) + " Damage<br>" + (enemies[x][3]).toFixed(1) + " Defense<br> Drop tier: " + (enemies[x][4]) + "</p></center>"
  }

  function openCloseFightingTab() {
    if (document.getElementById("fightingDiv").style.display == "block") {
      document.getElementById("fightingDiv").style.display = "none"
    }
    else {
      document.getElementById("fightingDiv").style.display = "block"
      displayStats()
      document.getElementsByClassName("dropBox")[0].innerHTML = ""
      document.getElementsByClassName("dropBox")[1].innerHTML = ""
      document.getElementsByClassName("dropBox")[2].innerHTML = ""
      document.getElementsByClassName("dropBox")[3].innerHTML = ""
    }
  }

  function displayStats() {
    document.getElementById("statsDisplay").innerHTML = "<left><p style='color: white'><span style='font-size: 20px; font-weight: bold'> HP: " + numberShort(game.HP) + "<br> Current HP: " + numberShort(game.currentHP) + "<br> DMG: " + numberShort(game.DMG) + "<br> DEF: " + numberShort(game.DEF) + "<br> Coins: " + numberShort(game.coins) + "</p></center>"  
  }

  function displayEnemiesFightRarities(x) {
    if (x==0) {document.getElementById("enemiesFightChances").innerHTML = ""}
    else if (x == 1) {
      document.getElementById("enemiesFightChances").innerHTML = "<style='width:6vh'><br><b>Rarities for this area:</b><br>"
      totalWeight = 0
      for (i=0;i<starterEnemiesChances.length;i++) totalWeight += starterEnemiesChances[i][1]
      for(i=0;i<starterEnemiesChances.length;i++) {
        document.getElementById("enemiesFightChances").innerHTML += enemies[starterEnemiesChances[i][0]][0] + ": " + (starterEnemiesChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
      }
    }
    else if (x == 2) {
      document.getElementById("enemiesFightChances").innerHTML = "<style='width:6vh'><br><b>Rarities for this area:</b><br>"
      totalWeight = 0
      for (i=0;i<intermediateEnemiesChances.length;i++) totalWeight += intermediateEnemiesChances[i][1]
      for(i=0;i<intermediateEnemiesChances.length;i++) {
        document.getElementById("enemiesFightChances").innerHTML += enemies[intermediateEnemiesChances[i][0]][0] + ": " + (intermediateEnemiesChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
      }
    }
    else if (x == 3) {
      document.getElementById("enemiesFightChances").innerHTML = "<style='width:6vh'><br><b>Rarities for this area:</b><br>"
      totalWeight = 0
      for (i=0;i<advancedEnemiesChances.length;i++) totalWeight += advancedEnemiesChances[i][1]
      for(i=0;i<advancedEnemiesChances.length;i++) {
        document.getElementById("enemiesFightChances").innerHTML += enemies[advancedEnemiesChances[i][0]][0] + ": " + (advancedEnemiesChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
      }
    }
  }

  function startFight(x) {
    totalWeight = 0
    if (x==1) {
      for (i=0;i<starterEnemiesChances.length;i++) totalWeight += starterEnemiesChances[i][1]
      for (i=0;i<starterEnemiesChances.length;i++) {
        if (Math.random() * totalWeight < starterEnemiesChances[i][1]) {
          enemiesChosen = starterEnemiesChances[i][0]
          i = starterEnemiesChances.length
        }
        else {
          totalWeight -= starterEnemiesChances[i][1]
        }
      }
     game.buttonCooldowns[21] = 3600 / (game.itemCooldown) //1h
    }
    if (x==2) {
      for (i=0;i<intermediateEnemiesChances.length;i++) totalWeight += intermediateEnemiesChances[i][1]
      for (i=0;i<intermediateEnemiesChances.length;i++) {
        if (Math.random() * totalWeight < intermediateEnemiesChances[i][1]) {
          enemiesChosen = intermediateEnemiesChances[i][0]
          i = intermediateEnemiesChances.length
        }
        else {
          totalWeight -= intermediateEnemiesChances[i][1]
        }
      }
     game.buttonCooldowns[22] = 21600 / (game.itemCooldown) //6h
    }
    if (x==3) {
      for (i=0;i<advancedEnemiesChances.length;i++) totalWeight += advancedEnemiesChances[i][1]
      for (i=0;i<advancedEnemiesChances.length;i++) {
        if (Math.random() * totalWeight < advancedEnemiesChances[i][1]) {
          enemiesChosen = advancedEnemiesChances[i][0]
          i = advancedEnemiesChances.length
        }
        else {
          totalWeight -= advancedEnemiesChances[i][1]
        }
      }
     game.buttonCooldowns[26] = 86400 / (game.itemCooldown) //24h
    }
    alert("Fighting a " + enemies[enemiesChosen][0] + "!")
    game.currentHP = game.HP
    game.enemyHP = enemies[enemiesChosen][1]
    attack()
  }

  function attack() {
    game.enemyHP -= game.DMG - enemies[enemiesChosen][3]
     game.currentHP -= enemies[enemiesChosen][2] - game.DEF
     displayStats()
     //doSomeStuff()  You don't need to keep the function seperated
     setTimeout(() => {
      if (game.enemyHP <= 0) {fightRewards(enemies[enemiesChosen][4])}
     else if (game.currentHP <= 0) {alert("You died... and nothing happens. Remaining enemy hp: " + numberShort(game.enemyHP))}
     else if (game.DMG < enemies[enemiesChosen][3]) {alert("Can't deal damage to the enemy, fight ends here")}
     else attack()
      console.log('100ms later')
      //Anything you want to happen in sequence after 100ms can go here
     }, 100)
     // everything past this comment will not wait.
  }

  function fightRewards(x) {
     if (x==1) {
      document.getElementsByClassName("dropBox")[0].innerHTML = numberShort(200 * enemies[enemiesChosen][1] * game.itemLoot) + " XP"
      document.getElementsByClassName("dropBox")[1].innerHTML = numberShort(1 * enemies[enemiesChosen][2] * game.itemLoot) + " Coins"
      document.getElementsByClassName("dropBox")[2].innerHTML = ""
      game.XP += 200 * enemies[enemiesChosen][1] * game.itemLoot
      game.coins += 1 * enemies[enemiesChosen][2] * game.itemLoot
     }
     if (x==2) {
      document.getElementsByClassName("dropBox")[0].innerHTML = numberShort(500 * enemies[enemiesChosen][1] * game.itemLoot) + " XP"
      document.getElementsByClassName("dropBox")[1].innerHTML = numberShort(2 * enemies[enemiesChosen][2] * game.itemLoot) + " Coins"
      document.getElementsByClassName("dropBox")[2].innerHTML = numberShort(0.1 * enemies[enemiesChosen][3] * game.itemLoot) + " XPBoost"
      game.XP += 500 * enemies[enemiesChosen][1] * game.itemLoot
      game.coins += 2 * enemies[enemiesChosen][2] * game.itemLoot
      game.XPBoost += 0.1 * enemies[enemiesChosen][3] * game.itemLoot
     }
     if (x==3) {
      document.getElementsByClassName("dropBox")[0].innerHTML = numberShort(550 * enemies[enemiesChosen][1] * game.itemLoot) + " XP"
      document.getElementsByClassName("dropBox")[1].innerHTML = numberShort(5 * enemies[enemiesChosen][2] * game.itemLoot) + " Coins"
      document.getElementsByClassName("dropBox")[2].innerHTML = numberShort(0.15 * enemies[enemiesChosen][3] * game.itemLoot) + " XPBoost"
      game.XP += 550 * enemies[enemiesChosen][1] * game.itemLoot
      game.coins += 5 * enemies[enemiesChosen][2] * game.itemLoot
      game.XPBoost += 0.15 * enemies[enemiesChosen][3] * game.itemLoot
     }
     if (x==4) {
      document.getElementsByClassName("dropBox")[0].innerHTML = numberShort(750 * enemies[enemiesChosen][1] * game.itemLoot) + " XP"
      document.getElementsByClassName("dropBox")[1].innerHTML = numberShort(10 * enemies[enemiesChosen][2] * game.itemLoot) + " Coins"
      document.getElementsByClassName("dropBox")[2].innerHTML = numberShort(0.2 * enemies[enemiesChosen][3] * game.itemLoot) + " XPBoost"
      game.XP += 750 * enemies[enemiesChosen][1] * game.itemLoot
      game.coins += 10 * enemies[enemiesChosen][2] * game.itemLoot
      game.XPBoost += 0.2 * enemies[enemiesChosen][3] * game.itemLoot
     }
     if (x==5) {
      document.getElementsByClassName("dropBox")[0].innerHTML = numberShort(1000 * enemies[enemiesChosen][1] * game.itemLoot) + " XP"
      document.getElementsByClassName("dropBox")[1].innerHTML = numberShort(2 * enemies[enemiesChosen][2] * game.itemLoot) + " Coins"
      document.getElementsByClassName("dropBox")[2].innerHTML = numberShort(0.15 * enemies[enemiesChosen][3] * game.itemLoot) + " XPBoost"
      game.XP += 1000 * enemies[enemiesChosen][1] * game.itemLoot
      game.coins += 2 * enemies[enemiesChosen][2] * game.itemLoot
      game.XPBoost += 0.15 * enemies[enemiesChosen][3] * game.itemLoot
     }
     if (!game.enemies[enemiesChosen]) {game.enemies[enemiesChosen] = 1}
     else {game.enemies[enemiesChosen]++}
  }

  //Shop features
  function openCloseShopTab() {
    if (document.getElementById("shopDiv").style.display == "block") {
      document.getElementById("shopDiv").style.display = "none"
      document.getElementById("shopListInner").innerHTML = ""
    }
    else {
      document.getElementById("shopDiv").style.display = "block"
      displayItems()
    }
  }

  function displayItems() {
    document.getElementById("shopListInner").innerHTML = ""
    let itemBox = document.createElement("div")
    itemBox.style.display = "inline-block"
    itemBox.style.position = "relative"
    itemBox.style.width = "128px"
    itemBox.style.height = "128px"
    itemBox.style.margin = "8px 0 0 8px"
    itemBox.style.border = "8px solid black"
    itemBox.style.cursor = "pointer"
    itemBox.style.backgroundColor = "#888"
    itemBox.style.backgroundImage = "url('img/halftoneDots.png')"
    itemBox.className += "itemBox"
    itemBoxes = document.getElementsByClassName("itemBox");
    for (i=1;i<items.length;i++) {
      document.getElementById("shopListInner").appendChild(itemBox.cloneNode(true))
      itemBoxes[i-1].setAttribute("id", i)
      itemBoxes[i-1].addEventListener('click', function(){buyItem(parseInt(this.id))})
      itemBoxes[i-1].addEventListener('mouseover', function(){showItemInfo(parseInt(this.id))})
      itemBoxes[i-1].addEventListener('mouseout', function(){showItemInfo(0)})
      if (game.items[i] >= items[i][1]) itemBoxes[i-1].style.backgroundColor = "#282"
    //1st red 2nd green 3rd blue
        itemBoxes[i-1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px'>"
        if (!game.items[i]) {itemBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>0</p>"}
        else {itemBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + game.items[i] + "</p>"}
        if (i<=6) itemBoxes[i-1].style.border = "8px outset #555"
        else if (i<=12) itemBoxes[i-1].style.border = "8px outset #447"
        else if (i<=18) itemBoxes[i-1].style.border = "8px outset #647"
        else if (i<=31) itemBoxes[i-1].style.border = "8px outset #500"
        else if (i<=39) itemBoxes[i-1].style.border = "8px outset #990"
        else if (i<=46) itemBoxes[i-1].style.border = "8px outset #229"
        else if (i<=55) itemBoxes[i-1].style.border = "8px outset #bbb"
        else if (i<=63) itemBoxes[i-1].style.border = "8px outset #282"
        if (i > 18 && game.highestLevel <= 20000) {
          itemBoxes[i-1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
          itemBoxes[i-1].addEventListener('mouseover', function(){showItemHiddenInfo(parseInt(this.id))})
          itemBoxes[i-1].addEventListener('mouseout', function(){showItemHiddenInfo(0)})}
    }
    j=items.length-1
  }

  function buyItem(x) {
  if (game.items[x] >= items[x][1]) {alert("Upgrade is maxed")}
  else {
  if (x==1) {
    if (game.coins >= 50 && game.pets[1] >= 20) {
       game.coins -= 50
       game.pets[1] -= 20
       itemChosen = x
       alert("Bought " + items[x][0])
     }
     else {alert("Not enough items; " + numberShort(game.coins) + "/50 coins, " + game.pets[1] + "/20 Green butterflies")
    itemChosen = 0}
    }
  if (x==2) {
    if (game.coins >= 100 && game.pets[10] >= 5) {
       game.coins -= 100
       game.pets[10] -= 5
       itemChosen = x
       alert("Bought " + items[x][0])
      }
     else {alert("Not enough items; " + numberShort(game.coins) + "/100 coins, " + game.pets[10] + "/5 Gargoyles")
     itemChosen = 0}
     }
  if (x==3) {
    if (game.coins >= 150 && game.pets[43] >= 1) {
       game.coins -= 150
       game.pets[43] -= 1
       itemChosen = x
       alert("Bought " + items[x][0])
      }
     else {alert("Not enough items; " + numberShort(game.coins) + "/150 coins, " + game.pets[43] + "/1 Golden butterflies")
     itemChosen = 0}
    }
   if (x==4) {
     if (game.coins >= 200 && game.pets[3] >= 20 && game.pets[18] >= 5 && game.pets[24] >= 5) {
       game.coins -= 200
       game.pets[3] -= 20
       game.pets[18] -= 5
       game.pets[24] -= 5
       itemChosen = x
       alert("Bought " + items[x][0])
      }
    else {alert("Not enough items; " + numberShort(game.coins) + "/200 coins, " + game.pets[3] + "/20 Rats, " + game.pets[18] + "/5 Cats, " + game.pets[24] + "/5 Shiny rats")
    itemChosen = 0}
   }
   if (x==5) {
    if (game.coins >= 250 && game.pets[5] >= 10 && game.pets[16] >= 3) {
      game.coins -= 250
      game.pets[5] -= 10
      game.pets[16] -= 3
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/250 coins, " + game.pets[5] + "/10 Glowing spiders, " + game.pets[16] + "/3 Living roses")
   itemChosen = 0}
  }
  if (x==6) {
    if (game.coins >= 500 && game.enemies[5] >= 1) {
       game.coins -= 500
       itemChosen = x
       alert("Unlocked a new area")
      }
     else {alert("Not enough items; " + numberShort(game.coins) + "/500 coins, " + game.enemies[5] + "/1 Armored humans beaten")
     itemChosen = 0}
    }
  if (x==7) {
    if (game.coins >= 500 && game.pets[41] >= 5 && game.pets[42] >= 3) {
      game.coins -= 500
      game.pets[41] -= 5
      game.pets[42] -= 3
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/500 coins, " + game.pets[41] + "/5 Eyeloons, " + game.pets[42] + "/3 Glowing jellyfishes")
   itemChosen = 0}
  }
  if (x==8) {
    if (game.coins >= 500 && game.pets[4] >= 20 && game.pets[23] >= 7) {
      game.coins -= 500
      game.pets[4] -= 20
      game.pets[23] -= 7
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/500 coins, " + game.pets[4] + "/20 Purple butterflies, " + game.pets[23] + "/7 Blue butterflies")
   itemChosen = 0}
  }
  if (x==9) {
    if (game.coins >= 750 && game.pets[14] >= 15 && game.pets[25] >= 5) {
      game.coins -= 750
      game.pets[14] -= 15
      game.pets[25] -= 5
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/750 coins, " + game.pets[14] + "/15 Large tortoises, " + game.pets[25] + "/5 Earth snakes")
   itemChosen = 0}
  }
  if (x==10) {
    if (game.coins >= 250 && game.pets[6] >= 1) {
      game.coins -= 250
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/250 coins, " + game.pets[6] + "/1 Green dragon")
   itemChosen = 0}
  }
  if (x==11) {
    if (game.coins >= 1000 && game.pets[33] >= 5 && game.pets[29] >= 1) {
      game.coins -= 1000
      game.pets[33] -= 5
      if (game.items[x] == 1) game.pets[29] -= 1
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/1000 coins, " + game.pets[33] + "/5 Poisonous eyeballs, " + game.pets[29] + "/1 Spirit")
   itemChosen = 0}
  }
  if (x==12) {
    if (game.coins >= 2000 && game.XPBoost >=201 && game.pets[9] >= 20 && game.pets[32] >= 10 && game.pets[48] >= 3) {
      game.coins -= 2000
      game.XPBoost -= 200
      game.pets[9] -= 20
      game.pets[32] -= 10
      game.pets[48] -= 3
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/2000 coins, " + numberShort(game.XPBoost) + "/201 XPboost, " + game.pets[9] + "/20 Eldritch eyeballs, " + game.pets[32] + "/10 Red slimes, " + game.pets[48] + "/3 Small skeletons")
   itemChosen = 0}
  }
  if (x==13) {
    if (game.coins >= 1500 && game.pets[1] >= 50 && game.pets[12] >= 3 && game.pets[43] >= 1) {
      game.coins -= 1500
      game.pets[1] -= 50
      game.pets[12] -= 3
      game.pets[43] -= 1
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/1500 coins, " + game.pets[1] + "/50 Green butterflies, " + game.pets[12] + "/3 Red butterflies, " + game.pets[43] + "/1 Golden butterfly")
   itemChosen = 0}
  }
  if (x==14) {
    if (game.coins >= 1750 && game.pets[17] >= 5 && game.pets[35] >= 5 && game.pets[19] >= 2) {
      game.coins -= 1750
      game.pets[17] -= 5
      game.pets[35] -= 5
      game.pets[19] -= 2
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/1750 coins, " + game.pets[17] + "/5 Ice golems, " + game.pets[35] + "/5 Living trees, " + game.pets[19] + "/2 Vortex monsters")
   itemChosen = 0}
  }
  if (x==15) {
    if (game.coins >= 2000 && game.pets[40] >= 25 && game.enemies[1] >= 10 && game.enemies[4] >= 2) {
      game.coins -= 2000
      game.pets[40] -= 25
      game.enemies[1] -= 10
      game.enemies[4] -= 2
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/2000 coins, " + game.pets[40] + "/25 Small elfs, " + game.enemies[1] + "/10 Small humanoids beaten, " + game.enemies[4] + "/2 Nordic grandfathers beaten")
   itemChosen = 0}
  }
  if (x==16) {
    if (game.coins >= 1750 && game.pets[2] >= 75 && game.pets[7] >= 30 && game.pets[15] >= 10) {
      game.coins -= 1750
      game.pets[2] -= 75
      game.pets[7] -= 30
      game.pets[15] -= 10
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/1750 coins, " + game.pets[2] + "/75 Green lizards, " + game.pets[7] + "/30 Snakes, " + game.pets[15] + "/10 Mutant tarantulas")
   itemChosen = 0}
  }
  if (x==17) {
    if (game.coins >= 2500 && game.pets[8] >= 20 && game.pets[36] >= 1 && game.pets[28] >= 1) {
      game.coins -= 2500
      game.pets[8] -= 20
      game.pets[36] -= 1
      game.pets[28] -= 1
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/2500 coins, " + game.pets[8] + "/20 Giant fireflies, " + game.pets[36] + "/1 Fire spectral, " + game.pets[28] + "/1 Lilypad")
   itemChosen = 0}
  }
  if (x==18) {
    if (game.coins >= 5000 && game.pets[56] >= 5 && game.pets[49] >= 3 && game.pets[37] >= 1) {
      game.coins -= 5000
      game.pets[56] -= 5
      game.pets[49] -= 3
      game.pets[37] -= 1
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/5000 coins, " + game.pets[56] + "/5 Ghost rodents, " + game.pets[49] + "/3 Skeletal dogs, " + game.pets[37] + "/1 Purple star")
   itemChosen = 0}
  }
  if (x==19) {
    if (game.highestLevel < 20000) {alert("Not unlocked yet")}
    else {
    if (game.coins >= 15000 && game.pets[64] >= 3 && game.pets[65] >= 1) {
      game.coins -= 15000
      game.pets[64] -= 3
      game.pets[65] -= 1
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShort(game.coins) + "/15000 coins, " + game.pets[64] + "/3 Infected spiders, " + game.pets[65] + "/1 Red snake")
   itemChosen = 0}
  }
}
if (x==20) {
  if (game.highestLevel < 20000) {alert("Not unlocked yet")}
  else {
  if (game.coins >= 25000 && game.enemies[6] >= 3 && game.enemies[9] >= 1) {
    game.coins -= 25000
    game.enemies[6] -= 3
    game.enemies[9] -= 1
    itemChosen = x
    alert("Bought " + items[x][0])
   }
 else {alert("Not enough items; " + numberShort(game.coins) + "/25000 coins, " + game.enemies[6] + "/3 Stone boys beaten, " + game.enemies[9] + "/1 Magma boy beaten")
 itemChosen = 0}
 }
}
if (x==21) {
  if (game.highestLevel < 20000) {alert("Not unlocked yet")}
  else {
  if (game.coins >= 30000 && game.pets[44] >= 3 && game.pets[66] >= 1) {
    game.coins -= 30000
    game.pets[44] -= 3
    game.pets[66] -= 1
    itemChosen = x
    alert("Bought " + items[x][0])
   }
 else {alert("Not enough items; " + numberShort(game.coins) + "/30000 coins, " + game.pets[44] + "/3 2-Headed snakes, " + game.pets[66] + "/1 Dimensional eye")
 itemChosen = 0}
 }
}
if (x==22) {
  if (game.highestLevel < 20000) {alert("Not unlocked yet")}
  else {
  if (game.coins >= 50000 && game.pets[11] >= 10 && game.pets[26] >= 5 && game.highestLevel >= 75000) {
    game.coins -= 50000
    game.pets[11] -= 10
    game.pets[26] -= 5
    itemChosen = x
    alert("Bought " + items[x][0])
   }
 else {alert("Not enough items; " + numberShort(game.coins) + "/50000 coins, " + game.pets[11] + "/10 Glowing eyeballs, " + game.pets[26] + "/5 Salamanders, " + numberShort(game.highestLevel) + "/75k Highest level")
 itemChosen = 0}
 }
}
if (x==23) {
  if (game.highestLevel < 20000) {alert("Not unlocked yet")}
  else {
  if (game.coins >= 75000 && game.pets[34] >= 10 && game.pets[27] >= 3 && game.highestLevel >= 100000) {
    game.coins -= 75000
    game.pets[34] -= 10
    game.pets[27] -= 3
    itemChosen = x
    alert("Bought " + items[x][0])
   }
 else {alert("Not enough items; " + numberShort(game.coins) + "/75000 coins, " + game.pets[34] + "/10 Eyeball spiders, " + game.pets[27] + "/3 Dark snakes, " + numberShort(game.highestLevel) + "/100k Highest level")
 itemChosen = 0}
 }
}

if (!game.items[itemChosen]) {game.items[itemChosen] = 1}
     else {game.items[itemChosen]++}
   }
  }
  function showItemInfo(x) {
 if (x==0) {document.getElementById("shopInfo").innerHTML = ""}
 else {
  if (x==1) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-50 Coins<br>-20 Green butterflies<br><br>Effects:<br>+50% XP gain</p></center>"}
 if (x==2) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-100 Coins<br>-5 Gargoyles<br><br>Effects:<br>+25% Stats gain</p></center>"}
 if (x==3) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-150 Coins<br>-1 Golden butterfly<br><br>Effects:<br>+10% XPBoost gain</p></center>"}
 if (x==4) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-200 Coins<br>-20 Rats<br>-5 Cats<br>-5 Shiny rats<br><br>Effects:<br>+2% Faster cooldowns</p></center>"}
 if (x==5) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-250 Coins<br>-10 Glowing spiders<br>-3 Living roses<br><br>Effects:<br>+30% Fighting rewards</p></center>"}
 if (x==6) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-500 Coins<br>-Beat (Armored Human)<br><br>Effects:<br>-Unlock a new area (focused in coin drops)</p></center>"}
 if (x==7) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-500 Coins<br>-5 Eyeloons<br>-3 Glowing jellyfishes<br><br>Effects:<br>-XPBoost softcap exponent ^0.5 --> ^0.525</p></center>"}
 if (x==8) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-500 Coins<br>-20 Purple butterflies<br>-7 Blue butterflies<br><br>Effects:<br>+100% XP gain</p></center>"}
 if (x==9) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-750 Coins<br>-15 Large tortoises<br>-5 Earth snakes<br><br>Effects:<br>+75% Stats gain</p></center>"}
 if (x==10) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-250 Coins<br>-Own (Green dragon)<br><br>Effects:<br>-Any current pet crate will stop giving popups</p></center>"}
 if (x==11) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1000 Coins<br>-5 Poisonous eyeballs<br>-1 Spirit (2nd level only)<br><br>Effects:<br>+90% Fighting rewards</p></center>"}
 if (x==12) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-2000 Coins<br>-200 XPBoost<br>-20 Eldritch eyeballs<br>-10 Red slimes<br>-3 Small skeletons<br><br>Effects:<br>-XPBoost buttons 1-3 substract XP rather than resetting to 0</p></center>"}
 if (x==13) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1500 Coins<br>-50 Green butterflies<br>-3 Red butterflies<br>-1 Golden butterfly<br><br>Effects:<br>+200% XP gain</p></center>"}
 if (x==14) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1750 Coins<br>-5 Ice golems<br>-5 Living trees<br>-2 Vortex monsters<br><br>Effects:<br>+150% Fighting stats</p></center>"}
 if (x==15) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-2000 Coins<br>-25 Small elfs<br>-10 Small humanoids<br>-2 Nordic grandfathers<br><br>Effects:<br>-The 4 basic pet crates try to be opened every 30 minutes automatically</p></center>"}
 if (x==16) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1750 Coins<br>-75 Green lizards<br>-30 Snakes<br>-10 Mutant tarantulas<br><br>Effects:<br>-The 4 basic crates unbox an extra pet</p></center>"}
 if (x==17) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-2500 Coins<br>-20 Giant fireflies<br>-1 Fire spectral<br>-1 Lilypad<br><br>Effects:<br>+220% Fighting rewards</p></center>"}
 if (x==18) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-5000 Coins<br>-5 Ghost rodents<br>-3 Skeletal dogs<br>-1 Purple star<br><br>Effects:<br>-XPBoost affects DailyXP at a reduced rate</p></center>"}
 if (x==19) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-15000 Coins<br>-3 Infected spiders<br>-1 Red snake<br><br>Effects:<br>x2 XP (additive with itself, multiplicative with others)</p></center>"}
 if (x==20) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-25000 Coins<br>-3 Stone boys beaten<br>-1 Magma boy beaten<br><br>Effects:<br>x2 Stats</p></center>"}
 if (x==21) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-30000 Coins<br>-3 2-Headed snakes<br>-1 Dimensional eye<br><br>Effects:<br>+40% XPBoost</p></center>"}
 if (x==22) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-50000 Coins<br>-10 Glowing eyeballs<br>-5 Salamanders<br>-Reach level 75k<br><br>Effects:<br>/1.1 All button cooldowns</p></center>"}
 if (x==23) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-75000 Coins<br>-10 Eyeball spiders<br>-3 Dark snakes<br>-Reach level 100k<br><br>Effects:<br>x2 Looting boost (Additive with itself, stacks with others)</p></center>"}
 if (x==24) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Too expensive!<br><br>Effects:<br>-Unlocks a new feature (Coming soon)</p></center>"}  
}
}

function showItemHiddenInfo(x) {
  if (x==0) {document.getElementById("shopInfo").innerHTML = ""}
  else {
   if (x==19) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock"}
   if (x==20) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock"}
   if (x==21) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock"}
   if (x==22) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock"}
   if (x==23) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock"}
   if (x==24) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock"}
 }
}

function updateShopBoosts() {
  game.itemXP = (1 + (game.items[1] * 0.5) + (game.items[8] * 1) + (game.items[13] * 2)) * (game.items[19] + 1)
  game.itemStat = (1 + (game.items[2] * 0.25) + (game.items[9] * 0.75) + (game.items[14] * 1.5)) * (game.items[20] + 1)
  game.itemXPBoost = 1 + (game.items[3] * 0.1) + (game.items[21] * 0.4)
  game.itemCooldown = 1 + (game.items[4] * 0.02) + (game.items[22] * 0.1)
  game.itemLoot = (1 + (game.items[5] * 0.3) + (game.items[11] * 0.9) + (game.items[17] * 2.2)) * (game.items[23] + 1)
  game.itemXPBoostEffectSoftcap = 0 + (game.items[7] * 0.025)
  if (game.items[18] == 1) game.itemDailyXP = (game.XPBoostEffect ** 0.5)
  game.itemUnlocks = 0 + (game.items[6])
  game.extraPetAmount = 0 + (game.items[16])
 document.getElementById("ItemBoostDisplay").innerHTML = "Your items give the following: <br>" + itemBoosts()
}
setInterval(updateShopBoosts, 50)

function itemBoosts() {
  result = ""
  if (game.itemXP > 1) {result += "XP gain x" + numberShort(game.itemXP) + "<br>"}
  if (game.itemStat > 1) {result += "Stat gain x" + numberShort(game.itemStat) + "<br>"}
  if (game.itemXPBoost > 1) {result += "XPBoost gain x" + numberShort(game.itemXPBoost) + "<br>"}
  if (game.itemCooldown > 1) {result += "All button cooldown /" + numberShort(game.itemCooldown) + "<br>"}
  if (game.itemLoot > 1) {result += "Fighting loot x" + numberShort(game.itemLoot) + "<br>"}
  if (game.itemXPBoostEffectSoftcap > 0) {result += "XPBoost effect exponent +" + numberShort(game.itemXPBoostEffectSoftcap) + "<br>"}
  if (game.itemDailyXP > 1) {result += "Daily XP x" + numberShort(game.itemDailyXP) + "<br>"}
  if (game.extraPetAmount > 0) {result += "Extra pets: " + levelShort(game.extraPetAmount) + " <br>"}
  return result
}