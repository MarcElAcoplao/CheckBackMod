var autosaveStarted = false
//Sets all variables to their base values
function reset() {
	game = {
    XP: 0,
    level: 1,
    XPBoost: 1,
    buttonCooldowns: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    unlocks: 0,
    currentTheme: 2,
    lastSave: Date.now(),
    timeOfLastUpdate: Date.now(),
    pets: [],
    selectedPet: 0,
    dailyRewards: 0,
    speed: 1,
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
    document.getElementById("button1").innerHTML = "Gain " + (pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
  }
  if (game.buttonCooldowns[1] > 0) {
    document.getElementById("button2").disabled = true
    document.getElementById("button2").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[1])
  }
  else {
    document.getElementById("button2").disabled = false
    document.getElementById("button2").innerHTML = "Gain " + (2 * pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
  }
  if (game.buttonCooldowns[2] > 0) {
    document.getElementById("button3").disabled = true
    document.getElementById("button3").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[2])
  }
  else {
    document.getElementById("button3").disabled = false
    document.getElementById("button3").innerHTML = "Gain " + (5 * pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
  }
  if (game.buttonCooldowns[3] > 0) {
    document.getElementById("button4").disabled = true
    document.getElementById("button4").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[3])
  }
  else {
    document.getElementById("button4").disabled = false
    document.getElementById("button4").innerHTML = "Gain " + (10 * pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
  }
  if (game.buttonCooldowns[4] > 0) {
    document.getElementById("button5").disabled = true
    document.getElementById("button5").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[4])
  }
  else {
    document.getElementById("button5").disabled = false
    document.getElementById("button5").innerHTML = "Gain " + (25 * pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
  }
  if (game.buttonCooldowns[5] > 0) {
    document.getElementById("button6").disabled = true
    document.getElementById("button6").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[5])
  }
  else {
    document.getElementById("button6").disabled = false
    document.getElementById("button6").innerHTML = "Gain " + (50 * pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
  }
  if (game.buttonCooldowns[6] > 0) {
    document.getElementById("unboxButton1").disabled = true
    document.getElementById("unboxButton1").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[6])
  }
  else {
    document.getElementById("unboxButton1").disabled = false
    document.getElementById("unboxButton1").innerHTML = "Unbox a random basic pet"
  }
  if (game.buttonCooldowns[7] > 0) {
    document.getElementById("unboxButton2").disabled = true
    document.getElementById("unboxButton2").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[7])
  }
  else {
    document.getElementById("unboxButton2").disabled = false
    document.getElementById("unboxButton2").innerHTML = "Unbox a random advanced pet"
  }
  if (game.buttonCooldowns[8] > 0) {
    document.getElementById("unboxButton3").disabled = true
    document.getElementById("unboxButton3").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[8])
  }
  else {
    document.getElementById("unboxButton3").disabled = false
    document.getElementById("unboxButton3").innerHTML = "Unbox a random epic pet"
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
    document.getElementById("unboxButton4").innerHTML = "Unbox a random legendary pet"
  }
  if (game.buttonCooldowns[11] > 0) {
    document.getElementById("button7").disabled = true
    document.getElementById("button7").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[11])
  }
  else {
    document.getElementById("button7").disabled = false
    document.getElementById("button7").innerHTML = "Gain " + (250 * pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
  }
  if (game.buttonCooldowns[12] > 0) {
    document.getElementById("button8").disabled = true
    document.getElementById("button8").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[12])
  }
  else {
    document.getElementById("button8").disabled = false
    document.getElementById("button8").innerHTML = "Gain " + (0.2 * pets[game.selectedPet][4]).toFixed(2) + " XPBoost, but reset XP"
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
    document.getElementById("button9").innerHTML = "Gain " + (100 * pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
  }
  if (game.buttonCooldowns[15] > 0) {
    document.getElementById("button10").disabled = true
    document.getElementById("button10").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[15])
  }
  else {
    document.getElementById("button10").disabled = false
    document.getElementById("button10").innerHTML = "Gain " + (1 * pets[game.selectedPet][4]).toFixed(2) + " XPBoost, but reset XP"
  }
  if (game.buttonCooldowns[16] > 0) {
    document.getElementById("button11").disabled = true
    document.getElementById("button11").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[16])
  }
  else {
    document.getElementById("button11").disabled = false
    document.getElementById("button11").innerHTML = "Gain " + (33 * pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
  }
  if (game.buttonCooldowns[17] > 0) {
    document.getElementById("button12").disabled = true
    document.getElementById("button12").innerHTML = "Check back in " + numberToTime(game.buttonCooldowns[17])
  }
  else {
    document.getElementById("button12").disabled = false
    document.getElementById("button12").innerHTML = "Gain " + (15 * pets[game.selectedPet][1] * game.XPBoost).toFixed(2) + " XP"
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
    document.getElementById("button13").disabled = false
    document.getElementById("button13").innerHTML = "Gain " + (4 * pets[game.selectedPet][4]).toFixed(2) + " XPBoost, but reset XP"
  }
  game.level = XPToLevel(Math.max(Math.floor(game.XP), 0))
  document.getElementById("level").innerHTML = game.level
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
  XPToNextLevel = levelToXP(game.level + 1) - levelToXP(game.level)
  ProgressToNextLevel = (game.XP - levelToXP(game.level)).toFixed(1)
  document.getElementById("XPToNextlevel").innerHTML = ProgressToNextLevel + "/" + XPToNextLevel
  document.getElementById("XPBarBack").style.width = (ProgressToNextLevel / XPToNextLevel * 100) + "%"
  handleUnlocks()
}
setInterval(updateSmall, 16) //Runs the update ~60 times per second

//Updates cooldowns
function updateLarge() {
  for (i=0;i<20;i++) {
    if (game.buttonCooldowns[i] > 0) game.buttonCooldowns[i] -= ((Date.now() - game.timeOfLastUpdate) / (1000/game.speed))
    if (game.buttonCooldowns[i] < 0) game.buttonCooldowns[i] = 0
  }
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

//Handles clicking the buttons
function clickButton(x) {
  if (x==1 && game.buttonCooldowns[0] == 0) {
      game.XP += (pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[0] = 60 / (pets[game.selectedPet][2]) //1 minute
  }
  else if (x==2 && game.buttonCooldowns[1] == 0) {
      game.XP += (2 * pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[1] = 300 / (pets[game.selectedPet][2]) //5 minutes
  }
  else if (x==3 && game.buttonCooldowns[2] == 0) {
      game.XP += (5 * pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[2] = 1800 / (pets[game.selectedPet][2]) //30 minutes
  }
  else if (x==4 && game.buttonCooldowns[3] == 0) {
      game.XP += (10 * pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[3] = 7200 / (pets[game.selectedPet][2]) //2 hours
  }
  else if (x==5 && game.buttonCooldowns[4] == 0) {
      game.XP += (25 * pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[4] = 43200 / (pets[game.selectedPet][2]) //12 hours
  }
  else if (x==6 && game.buttonCooldowns[5] == 0) {
      game.XP += (50 * pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[5] = 172800 / (pets[game.selectedPet][2]) //2d
  }
  else if (x==7 && game.buttonCooldowns[11] == 0) {
      game.XP += (250 * pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[11] = 604800 / (pets[game.selectedPet][2]) //7d
  }
  else if (x==8 && game.buttonCooldowns[12] == 0) {
    if (game.XP > 21251.9) {
    game.XP = 0
    game.XPBoost += 0.2 * pets[game.selectedPet][4]
    game.buttonCooldowns[12] = 3600 //1h, can't be modified... as of now
    updateXPBoost()
    }
    else {
      alert("You need at least level 100 to reset for this button")
    }
  }
  else if (x==9 && game.buttonCooldowns[14] == 0) {
      game.XP += (100 * pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[14] = 86400 / (pets[game.selectedPet][2]) //7d
  }
  else if (x==10 && game.buttonCooldowns[15] == 0) {
    if (game.XP > 75631.9) {
    game.XP = 0
    game.XPBoost += 1 * pets[game.selectedPet][4]
    game.buttonCooldowns[15] = 3600 //1h, can't be modified... as of now
    updateXPBoost()
    }
    else {
      alert("You need at least level 200 to reset for this button")
    }
  }
  else if (x==11 && game.buttonCooldowns[16] == 0) {
      game.XP += (33 * pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[16] = 21600 / (pets[game.selectedPet][2]) //6h
  }
  else if (x==12 && game.buttonCooldowns[17] == 0) {
      game.XP += (15 * pets[game.selectedPet][1] * game.XPBoost)
      game.buttonCooldowns[17] = 3600 / (pets[game.selectedPet][2]) //1h
  }
  else if (x==13 && game.buttonCooldowns[19] == 0) {
    if (game.XP > 267924.9) {
    game.XP = 0
    game.XPBoost += 4 * pets[game.selectedPet][5]
    game.buttonCooldowns[19] = 3600 //1h, can't be modified... as of now
    updateXPBoost()
    }
    else {
      alert("You need at least level 400 to reset for this button")
    }
  }
  updateSmall()
}

//This will simply update the XPBoost display
function updateXPBoost(){ return document.getElementById("XPBoostDisplay").innerHTML = "XPBoost: " + (game.XPBoost).toFixed(2)}


//Handles unlocks (Happens 60 times a second, could definitely be optimised!)
function handleUnlocks() {
  for (i=0;i<unlockLevels.length;i++) {
    if (game.level >= unlockLevels[i] && game.unlocks < i+1) {
      game.unlocks = i+1
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
      break
    }
  }
  if (game.unlocks == unlockLevels.length) {document.getElementById("nextUnlockLevel").innerHTML = "All unlocks have been achieved!"}
  else {document.getElementById("nextUnlockLevel").innerHTML = "You will unlock something new at level " + unlockLevels[game.unlocks] + "!"}
}

function unboxPet(x) {
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
    if (game.XPBoost <= 1) {
      alert("XPBoost has to be higher than 1 to buy this crate")  
    }
    else {
      game.XPBoost += -0.1
      updateXPBoost()
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
    if (game.XPBoost <= 1) {
      alert("XPBoost has to be higher than 1 to buy this crate")  
    }
    else {
      game.XPBoost += -0.25
      updateXPBoost()
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

    alert("Got a " + pets[petChosen][0] + "!")
    if (!game.pets[petChosen]) {game.pets[petChosen] = 1}
    else {game.pets[petChosen]++}

    if (x==3) {game.buttonCooldowns[6] = 7200 / (pets[game.selectedPet][3])} //2 hours
    else if (x==4) {game.buttonCooldowns[7] = 21600 / (pets[game.selectedPet][3])} //6 hours
    else if (x==5) {game.buttonCooldowns[8] = 64800 / (pets[game.selectedPet][3])} //18 hours
    else if (x==6) {game.buttonCooldowns[10] = 172800 / (pets[game.selectedPet][3])} //2 days
    else if (x==7) {game.buttonCooldowns[13] = 3600 / (pets[game.selectedPet][3])} //1 h
    else if (x==8) {game.buttonCooldowns[18] = 3600 / (pets[game.selectedPet][3])} //1 h  
}
  if (document.getElementById("petsDiv").style.display == "block") displayPets()


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
  else document.getElementById("petInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + pets[x][0] + "</span><br>You have " + game.pets[x] + "</p><br><img src='img/pets/" + x + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Effects:</span><br>+" + ((pets[x][1] - 1) * 100).toFixed(1) + "% XP from buttons and Daily<br>-" + ((1 - (1 / pets[x][2])) * 100).toFixed(1) + "% XP button cooldown<br>-" + ((1 - (1 / pets[x][3])) * 100).toFixed(1) + "% pet button cooldown<br>+" + ((pets[x][4] - 1) * 100).toFixed(1) + "% XPBoost stat</p></center>"
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
      document.getElementsByClassName("dayBox")[i].innerHTML += "<br><br>" + Math.floor(Math.min((17.5 + dailyRewardDay * 2.5)*pets[game.selectedPet][1], 1000*pets[game.selectedPet][1])) + " XP"}
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
  game.buttonCooldowns[9] = 86400 //24 hours
  game.dailyRewards++
  displayDailyRewards()
  if (game.dailyRewards % 2 == 1) {
    game.XP += Math.min((17.5 + game.dailyRewards * 2.5)*pets[game.selectedPet][1], 1000 * pets[game.selectedPet][1])}
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

function noSpecialPets(x) { //Converts player special pets that could be saved up into their corresponding pets
  for (let i =0;i<17; i++) {
    game.pets[i+47] += game.specialPets[i]
    if (game.pets[i+47] >= game.specialPets[i]) {
         game.specialPets[i]=0
       }
    }
    alert("Special pets have been changed and are now normal pets. The now hidden value has been transfered to your normal pets (Make sure to reload if it didn't work). Thanks to @shadow for this")
  }