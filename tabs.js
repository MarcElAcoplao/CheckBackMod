//This will control the tabs feature
function tab(x) {
    game.currentTab = x
 displayStuff()
 if (x == 2) {document.getElementById("petRarities").innerHTML = "Crate cooldown modifiers:" + CrateMultis()}
}

allMultipliers = 1

function displayStuff() {
  if (game.currentTab <= 1) {document.getElementById("XPbutton1").style.display = "block" }
   else document.getElementById("XPbutton1").style.display = "none"
  if (game.currentTab <= 1 && game.unlocks >= 1) {document.getElementById("XPbutton2").style.display = "block" }
   else document.getElementById("XPbutton2").style.display = "none"
  if (game.currentTab <= 1 && game.unlocks >= 2) {document.getElementById("XPbutton3").style.display = "block" }
   else document.getElementById("XPbutton3").style.display = "none"
  if (game.currentTab <= 1 && game.unlocks >= 3) {document.getElementById("XPbutton4").style.display = "block" }
   else document.getElementById("XPbutton4").style.display = "none"
  if (game.currentTab <= 1 && game.unlocks >= 4) {document.getElementById("XPbutton5").style.display = "block" }
   else document.getElementById("XPbutton5").style.display = "none"
  if (game.currentTab <= 1 && game.unlocks >= 5) {document.getElementById("XPbutton6").style.display = "block" }
   else document.getElementById("XPbutton6").style.display = "none"
  if (game.currentTab <= 1 && game.unlocks >= 8) {document.getElementById("XPbutton7").style.display = "block" }
   else document.getElementById("XPbutton7").style.display = "none"
  if (game.currentTab <= 1 && game.unlocks >= 10) {document.getElementById("XPbutton8").style.display = "block" }
   else document.getElementById("XPbutton8").style.display = "none"
  if (game.currentTab <= 1 && game.unlocks >= 12) {document.getElementById("XPbutton9").style.display = "block" }
   else document.getElementById("XPbutton9").style.display = "none"
  if (game.currentTab <= 1 && game.unlocks >= 15) {document.getElementById("XPbutton10").style.display = "block" }
   else document.getElementById("XPbutton10").style.display = "none"
   if (game.currentTab <= 1 && game.unlocks >= 17) {document.getElementById("XPbutton11").style.display = "block" }
   else document.getElementById("XPbutton11").style.display = "none"
   if (game.currentTab <= 1 && game.unlocks >= 18) {document.getElementById("XPbutton12").style.display = "block" }
   else document.getElementById("XPbutton12").style.display = "none"
  if (game.currentTab == 2 && game.unlocks >= 6) {document.getElementById("unboxButton1").style.display = "block" }
   else document.getElementById("unboxButton1").style.display = "none"
  if (game.currentTab == 2 && game.unlocks >= 7) {document.getElementById("unboxButton2").style.display = "block" }
   else document.getElementById("unboxButton2").style.display = "none"
  if (game.currentTab == 2 && game.unlocks >= 9) {document.getElementById("unboxButton3").style.display = "block" }
   else document.getElementById("unboxButton3").style.display = "none"
  if (game.currentTab == 2 && game.unlocks >= 11) {document.getElementById("unboxButton4").style.display = "block" }
   else document.getElementById("unboxButton4").style.display = "none"
  if (game.currentTab == 2 && game.unlocks >= 14) {document.getElementById("unboxButton5").style.display = "block" }
   else document.getElementById("unboxButton5").style.display = "none"
  if (game.currentTab == 2 && game.unlocks >= 19) {document.getElementById("unboxButton6").style.display = "block" }
   else document.getElementById("unboxButton6").style.display = "none"
  if (game.currentTab == 2 && game.unlocks >= 23) {document.getElementById("unboxButton7").style.display = "block" }
   else document.getElementById("unboxButton7").style.display = "none"
   if (game.currentTab == 2 && game.unlocks >= 28) {document.getElementById("unboxButton8").style.display = "block" }
   else document.getElementById("unboxButton8").style.display = "none"
  if (game.currentTab == 3 && game.unlocks >= 13) {document.getElementById("XPBbutton1").style.display = "block" }
   else document.getElementById("XPBbutton1").style.display = "none"
  if (game.currentTab == 3 && game.unlocks >= 15) {document.getElementById("XPBbutton2").style.display = "block" }
   else document.getElementById("XPBbutton2").style.display = "none"
  if (game.currentTab == 3 && game.unlocks >= 16) {document.getElementById("XPBbutton3").style.display = "block" }
   else document.getElementById("XPBbutton3").style.display = "none"
   if (game.currentTab == 3 && game.unlocks >= 18) {document.getElementById("XPBbutton4").style.display = "block" }
   else document.getElementById("XPBbutton4").style.display = "none"
   if (game.currentTab == 3 && game.unlocks >= 20) {document.getElementById("XPBbutton5").style.display = "block" }
   else document.getElementById("XPBbutton5").style.display = "none"
  if (game.currentTab == 4 && game.unlocks >= 21) {document.getElementById("StatButton1").style.display = "block" }
   else document.getElementById("StatButton1").style.display = "none"
  if (game.currentTab == 4 && game.unlocks >= 24) {document.getElementById("StatButton2").style.display = "block" }
   else document.getElementById("StatButton2").style.display = "none"
  if (game.currentTab == 4 && game.unlocks >= 26) {document.getElementById("StatButton3").style.display = "block" }
   else document.getElementById("StatButton3").style.display = "none"
  if (game.currentTab == 4 && game.unlocks >= 27) {document.getElementById("StatButton4").style.display = "block" }
   else document.getElementById("StatButton4").style.display = "none"
  if (game.currentTab == 4 && game.unlocks >= 30) {document.getElementById("StatButton5").style.display = "block" }
   else document.getElementById("StatButton5").style.display = "none"
  if (game.currentTab == 4 && game.unlocks >= 31) {document.getElementById("StatButton6").style.display = "block" }
   else document.getElementById("StatButton6").style.display = "none"
  if (game.currentTab == 5 && game.dimensionUnlocks >= 0) {document.getElementById(Dimensions[1].name).style.display = "block" }
   else document.getElementById(Dimensions[1].name).style.display = "none"
  if (game.currentTab == 5 && game.dimensionUnlocks >= 1) {document.getElementById(Dimensions[2].name).style.display = "block" }
   else document.getElementById(Dimensions[2].name).style.display = "none"
   if (game.currentTab == 5 && game.dimensionUnlocks >= 2) {document.getElementById(Dimensions[3].name).style.display = "block" }
   else document.getElementById(Dimensions[3].name).style.display = "none"
   if (game.currentTab == 5 && game.dimensionUnlocks >= 3) {document.getElementById(Dimensions[4].name).style.display = "block" }
   else document.getElementById(Dimensions[4].name).style.display = "none"
   if (game.currentTab == 5 && game.dimensionUnlocks >= 4 && game.items[25] >= 1) {document.getElementById(Dimensions[5].name).style.display = "block" }
   else document.getElementById(Dimensions[5].name).style.display = "none"
   if (game.currentTab == 5 && game.dimensionUnlocks >= 5 && game.items[26] >= 1) {document.getElementById(Dimensions[6].name).style.display = "block" }
   else document.getElementById(Dimensions[6].name).style.display = "none"
   if (game.currentTab == 5 && game.dimensionUnlocks >= 6 && game.items[27] >= 1) {document.getElementById(Dimensions[7].name).style.display = "block" }
   else document.getElementById(Dimensions[7].name).style.display = "none"
   if (game.currentTab == 5 && game.dimensionUnlocks >= 7 && game.items[28] >= 1) {document.getElementById(Dimensions[8].name).style.display = "block" }
   else document.getElementById(Dimensions[8].name).style.display = "none"
   if (game.currentTab == 5 && game.dimensionUnlocks >= 8 && game.items[29] >= 1) {document.getElementById(Dimensions[9].name).style.display = "block" }
   else document.getElementById(Dimensions[9].name).style.display = "none"
  displayTabStats(game.currentTab)
}

function displayTabStats(x) {
   if (x == 0) {
    document.getElementById("petRarities").innerHTML = Stats()
   }
   if (x == 1) {
    document.getElementById("petRarities").innerHTML = "XP multipliers: " + XPmultis()
   }
   if (x == 2) {
     
   }
   if (x == 3) {
    document.getElementById("petRarities").innerHTML = "XPBoost: "+ XPBoostMultis()
   }
   if (x == 4) {
    document.getElementById("petRarities").innerHTML = "Stat gain multipliers: "+ StatMultis()
   }
   if (x == 5) {
    document.getElementById("petRarities").innerHTML = "All Dimension multipliers: "+ DimMultis()
   }
}

function XPmultis() {
  result = "<br>"
  if (game.selectedPet >= 1) {result += "x" + numberShort(pets[game.selectedPet][1]) + " From pets<br>"}
  if (game.petsDiscovered >= 1) {result += "x" + numberShort(1 + game.petsDiscovered / 100) + " From pet collection<br>"}
  if (game.XPBoostEffect > 1) {result += "x" + numberShort(game.XPBoostEffect) + " From XPBoost<br>"}
  if (game.itemXP > 1) {result += "x" + numberShort(game.itemXP) + " From items<br>"}
  if (game.tierXPmulti > 1) {result += "x" + numberShort(game.tierXPmulti) + " From your tier<br>"}
  if (game.artifactsXP > 1) {result += "x" + numberShort(game.artifactsXP) + " From Artifacts<br>"}
  result += "x1.2 From event<br>"
  result += "Total: x" + numberShort((pets[game.selectedPet][1] * game.XPBoostEffect * game.itemXP * (1 + game.petsDiscovered / 100) * game.tierXPmulti * 1.2 * game.artifactsXP)) + "<br><br> Cooldown modifiers: <br>"
  if (game.selectedPet >= 1) {result += "/" + numberShort(pets[game.selectedPet][2]) + " From pets<br>"}
  if (game.itemCooldown > 1) {result += "/" + numberShort(game.itemCooldown) + " From items<br>"}
  if (game.tierCooldown > 1) {result += "/" + numberShort(game.tierCooldown) + " From your tier<br>"}
  if (game.artifactsCooldown > 1) {result += "/" + numberShort(game.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort((pets[game.selectedPet][2] * game.itemCooldown * game.tierCooldown * game.artifactsCooldown))
  return result
}

function CrateMultis() {
  result = "<br>"
  if (pets[game.selectedPet][3] > 1) {result += "/" + numberShort(pets[game.selectedPet][3]) + " From pets<br>"}
  if (game.itemCooldown > 1) {result += "/" + numberShort(game.itemCooldown) + " From items<br>"}
  if (game.tierCooldown > 1) {result += "/" + numberShort(game.tierCooldown) + " From your tier<br>"}
  if (game.artifactsCooldown > 1) {result += "/" + numberShort(game.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort((pets[game.selectedPet][3] * game.itemCooldown * game.tierCooldown * game.artifactsCooldown)) + "<br><br>"
  if (game.crateBulk[3] >= 1) {
    result += "Crate bulk modifiers: <br>"
    if (game.items[16] >= 1) {result += "+1 Base for free crates<br>"}
    if (game.items[38] >= 1) {result += "x" + numberShort(1 + game.items[38] * 0.1) + " From items<br>"}
    if (game.artifactsBulk > 1) {result += "x" + numberShort(game.artifactsBulk) + " From Artifacts<br>"} //I should be doing my homework and not this but aaaaa coding check back is so fun
    result += "Total: " + numberShort(game.crateBulk[3])
  }
  return result
}

function XPBoostMultis() {
  result = numberShort(game.XPBoost) + "<br>"
  if (game.XPBoost > 10) {result += "Effective boost: " + numberShort(game.XPBoostEffect) + "<br> Softcap: ^" + numberShort(0.5 + game.itemXPBoostEffectSoftcap) + "<br>" }
  result += "<br> XPBoost gain multipliers: <br>"
  if (pets[game.selectedPet][4] > 1) {result += "x" + numberShort(pets[game.selectedPet][4]) + " From pets<br>"}
  if (game.itemXPBoost > 1) {result += "x" + numberShort(game.itemXPBoost) + " From items<br>"}
  if (game.artifactsXPBoost > 1) {result += "x" + numberShort(game.artifactsXPBoost) + " From artifacts<br>"}
  result += "Total: x" + numberShort((pets[game.selectedPet][4] * game.itemXPBoost * game.artifactsXPBoost)) + "<br><br>Cooldown modifiers:<br>"
  if (game.itemCooldown > 1) {result += "/" + numberShort(game.itemCooldown) + " From items<br>"}
  if (game.tierCooldown > 1) {result += "/" + numberShort(game.tierCooldown) + " From your tier<br>"}
  if (game.artifactsCooldown > 1) {result += "/" + numberShort(game.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort(game.itemCooldown * game.tierCooldown * game.artifactsCooldown)
  return result
}

function StatMultis() {
  result = "<br>"
  if (game.itemStat > 1) {result += "x" + numberShort(game.itemStat) + " From items<br>"}
  if (game.tierStats > 1) {result += "x" + numberShort(game.tierStats) + " From your tier<br>"}
  if (game.artifactsStats > 1) {result += "x" + numberShort(game.artifactsStats) + " From artifacts<br>"}
  result += "Total: x" + numberShort(game.itemStat * game.tierStats * game.artifactsStats) + "<br><br>Cooldown modifiers:<br>"
  if (game.itemCooldown > 1) {result += "/" + numberShort(game.itemCooldown) + " From items<br>"}
  if (game.tierCooldown > 1) {result += "/" + numberShort(game.tierCooldown) + " From your tier<br>"}
  if (game.artifactsCooldown > 1) {result += "/" + numberShort(game.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort(game.itemCooldown * game.tierCooldown * game.artifactsCooldown)
  return result
}

function DimMultis() {
  result = "<br>"
  if (game.clickToDimension > 1) {result += "x" + numberShort(game.clickToDimension) + " from button clicks<br>"}
  if (game.enemiesToDimension > 1) {result += "x" + numberShort(game.enemiesToDimension) + " from enemies defeated<br>"}
  if (game.bossMulti > 1) {result += "x" + numberShort(game.bossMulti) + " from " + game.bossKills + " bosses killed<br>"}
  if (game.itemDimensions > 1) {result += "x" + numberShort(game.itemDimensions) + " from items<br>"}
  if (pets[game.selectedPet][5] > 1) {result += "x" + numberShort(pets[game.selectedPet][5]) + " from Pets<br>"}
  if (game.artifactsDimension > 1) {result += "x" + numberShort(game.artifactsDimension) + " from Artifacts<br>"}
  result += "Total: x" + numberShort(game.allDimensionMultipliers) + "<br><br>Button cooldown modifiers:<br>"
  if (game.items[27] >= 1) {result += "/1.5 From Dimensional Reset #3<br>"}
  if (game.items[35] >= 1) {result += "/1.5 From item 35<br>"}
  if (game.artifactsCooldown > 1) {result += "/" + numberShort(game.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort(game.dimensionCooldown * game.artifactsCooldown)
  return result
}


function XPTab() {
  for (let i=1;i<XPButtons.length;i++) {
    if (game.buttonCooldowns[XPButtons[i].cooldownID] == 0 && game.unlocks >= XPButtons[i].unlock) {
      return true
      break
    }
  }
  return false
}

function XPBoostTab() {
  for (let i=1;i<XPBoostButtons.length;i++) {
    if (game.buttonCooldowns[XPBoostButtons[i].cooldownID] == 0 && game.unlocks >= XPBoostButtons[i].unlock) {
      return true
      break
    }
  }
  return false
}

function StatTab() {
  for (let i=1;i<StatButtons.length;i++) {
    if (game.buttonCooldowns[StatButtons[i].cooldownID] == 0 && game.unlocks >= StatButtons[i].unlock) {
      return true
      break
    }
  }
  return false
}

function CratesTab() {
  for (let i=1;i<PetButtons.length;i++) {
    if (game.buttonCooldowns[PetButtons[i].cooldownID] == 0 && game.unlocks >= PetButtons[i].unlock) {
      return true
      break
    }
  }
  return false
}

function DimTab() { //If someone wants to make this better for the dimensional resets feature too, go ahead and make a pull request
  for (let i=1;i<Dimensions.length;i++) {
    if (game.buttonCooldowns[Dimensions[i].cooldownID] == 0 && game.dimensionUnlocks >= (i-1)) {
      return true
      break
    }
  }
  return false
}

function FightingTab() {
    if (game.buttonCooldowns[FightingButtons[1].cooldownID] == 0 && game.unlocks >= FightingButtons[1].unlock) {return true}
    else if (game.buttonCooldowns[FightingButtons[3].cooldownID] == 0 && game.unlocks >= FightingButtons[3].unlock) {return true}
    else if (game.buttonCooldowns[FightingButtons[5].cooldownID] == 0 && game.unlocks >= FightingButtons[5].unlock) {return true}
    else if (game.buttonCooldowns[FightingButtons[2].cooldownID] == 0 && game.items[6] >= 1) {return true}
    else if (game.buttonCooldowns[36] == 0 && game.items[33] >= 1) {return true}
    else return false
}