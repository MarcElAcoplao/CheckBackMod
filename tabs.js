//This will control the tabs feature
function tab(x) {
    player.currentTab = x
 displayStuff()
 if (x == 2) {document.getElementById("petRarities").innerHTML = "Crate cooldown modifiers:" + CrateMultis()}
}

allMultipliers = 1

function displayStuff() {
  if (player.currentTab <= 1) {document.getElementById("XPbutton1").style.display = "block" }
   else document.getElementById("XPbutton1").style.display = "none"
  if (player.currentTab <= 1 && player.unlocks >= 1) {document.getElementById("XPbutton2").style.display = "block" }
   else document.getElementById("XPbutton2").style.display = "none"
  if (player.currentTab <= 1 && player.unlocks >= 2) {document.getElementById("XPbutton3").style.display = "block" }
   else document.getElementById("XPbutton3").style.display = "none"
  if (player.currentTab <= 1 && player.unlocks >= 3) {document.getElementById("XPbutton4").style.display = "block" }
   else document.getElementById("XPbutton4").style.display = "none"
  if (player.currentTab <= 1 && player.unlocks >= 4) {document.getElementById("XPbutton5").style.display = "block" }
   else document.getElementById("XPbutton5").style.display = "none"
  if (player.currentTab <= 1 && player.unlocks >= 5) {document.getElementById("XPbutton6").style.display = "block" }
   else document.getElementById("XPbutton6").style.display = "none"
  if (player.currentTab <= 1 && player.unlocks >= 8) {document.getElementById("XPbutton7").style.display = "block" }
   else document.getElementById("XPbutton7").style.display = "none"
  if (player.currentTab <= 1 && player.unlocks >= 10) {document.getElementById("XPbutton8").style.display = "block" }
   else document.getElementById("XPbutton8").style.display = "none"
  if (player.currentTab <= 1 && player.unlocks >= 12) {document.getElementById("XPbutton9").style.display = "block" }
   else document.getElementById("XPbutton9").style.display = "none"
  if (player.currentTab <= 1 && player.unlocks >= 15) {document.getElementById("XPbutton10").style.display = "block" }
   else document.getElementById("XPbutton10").style.display = "none"
   if (player.currentTab <= 1 && player.unlocks >= 17) {document.getElementById("XPbutton11").style.display = "block" }
   else document.getElementById("XPbutton11").style.display = "none"
   if (player.currentTab <= 1 && player.unlocks >= 18) {document.getElementById("XPbutton12").style.display = "block" }
   else document.getElementById("XPbutton12").style.display = "none"
  if (player.currentTab == 2 && player.unlocks >= 6) {document.getElementById("unboxButton1").style.display = "block" }
   else document.getElementById("unboxButton1").style.display = "none"
  if (player.currentTab == 2 && player.unlocks >= 7) {document.getElementById("unboxButton2").style.display = "block" }
   else document.getElementById("unboxButton2").style.display = "none"
  if (player.currentTab == 2 && player.unlocks >= 9) {document.getElementById("unboxButton3").style.display = "block" }
   else document.getElementById("unboxButton3").style.display = "none"
  if (player.currentTab == 2 && player.unlocks >= 11) {document.getElementById("unboxButton4").style.display = "block" }
   else document.getElementById("unboxButton4").style.display = "none"
  if (player.currentTab == 2 && player.unlocks >= 14) {document.getElementById("unboxButton5").style.display = "block" }
   else document.getElementById("unboxButton5").style.display = "none"
  if (player.currentTab == 2 && player.unlocks >= 19) {document.getElementById("unboxButton6").style.display = "block" }
   else document.getElementById("unboxButton6").style.display = "none"
  if (player.currentTab == 2 && player.unlocks >= 23) {document.getElementById("unboxButton7").style.display = "block" }
   else document.getElementById("unboxButton7").style.display = "none"
   if (player.currentTab == 2 && player.unlocks >= 28) {document.getElementById("unboxButton8").style.display = "block" }
   else document.getElementById("unboxButton8").style.display = "none"
  if (player.currentTab == 3 && player.unlocks >= 13) {document.getElementById("XPBbutton1").style.display = "block" }
   else document.getElementById("XPBbutton1").style.display = "none"
  if (player.currentTab == 3 && player.unlocks >= 15) {document.getElementById("XPBbutton2").style.display = "block" }
   else document.getElementById("XPBbutton2").style.display = "none"
  if (player.currentTab == 3 && player.unlocks >= 16) {document.getElementById("XPBbutton3").style.display = "block" }
   else document.getElementById("XPBbutton3").style.display = "none"
   if (player.currentTab == 3 && player.unlocks >= 18) {document.getElementById("XPBbutton4").style.display = "block" }
   else document.getElementById("XPBbutton4").style.display = "none"
   if (player.currentTab == 3 && player.unlocks >= 20) {document.getElementById("XPBbutton5").style.display = "block" }
   else document.getElementById("XPBbutton5").style.display = "none"
  if (player.currentTab == 4 && player.unlocks >= 21) {document.getElementById("StatButton1").style.display = "block" }
   else document.getElementById("StatButton1").style.display = "none"
  if (player.currentTab == 4 && player.unlocks >= 24) {document.getElementById("StatButton2").style.display = "block" }
   else document.getElementById("StatButton2").style.display = "none"
  if (player.currentTab == 4 && player.unlocks >= 26) {document.getElementById("StatButton3").style.display = "block" }
   else document.getElementById("StatButton3").style.display = "none"
  if (player.currentTab == 4 && player.unlocks >= 27) {document.getElementById("StatButton4").style.display = "block" }
   else document.getElementById("StatButton4").style.display = "none"
  if (player.currentTab == 4 && player.unlocks >= 30) {document.getElementById("StatButton5").style.display = "block" }
   else document.getElementById("StatButton5").style.display = "none"
  if (player.currentTab == 4 && player.unlocks >= 31) {document.getElementById("StatButton6").style.display = "block" }
   else document.getElementById("StatButton6").style.display = "none"
  if (player.currentTab == 5 && player.dimensionUnlocks >= 0) {document.getElementById(Dimensions[1].name).style.display = "block" }
   else document.getElementById(Dimensions[1].name).style.display = "none"
  if (player.currentTab == 5 && player.dimensionUnlocks >= 1) {document.getElementById(Dimensions[2].name).style.display = "block" }
   else document.getElementById(Dimensions[2].name).style.display = "none"
   if (player.currentTab == 5 && player.dimensionUnlocks >= 2) {document.getElementById(Dimensions[3].name).style.display = "block" }
   else document.getElementById(Dimensions[3].name).style.display = "none"
   if (player.currentTab == 5 && player.dimensionUnlocks >= 3) {document.getElementById(Dimensions[4].name).style.display = "block" }
   else document.getElementById(Dimensions[4].name).style.display = "none"
   if (player.currentTab == 5 && player.dimensionUnlocks >= 4 && player.items[25] >= 1) {document.getElementById(Dimensions[5].name).style.display = "block" }
   else document.getElementById(Dimensions[5].name).style.display = "none"
   if (player.currentTab == 5 && player.dimensionUnlocks >= 5 && player.items[26] >= 1) {document.getElementById(Dimensions[6].name).style.display = "block" }
   else document.getElementById(Dimensions[6].name).style.display = "none"
   if (player.currentTab == 5 && player.dimensionUnlocks >= 6 && player.items[27] >= 1) {document.getElementById(Dimensions[7].name).style.display = "block" }
   else document.getElementById(Dimensions[7].name).style.display = "none"
   if (player.currentTab == 5 && player.dimensionUnlocks >= 7 && player.items[28] >= 1) {document.getElementById(Dimensions[8].name).style.display = "block" }
   else document.getElementById(Dimensions[8].name).style.display = "none"
   if (player.currentTab == 5 && player.dimensionUnlocks >= 8 && player.items[29] >= 1) {document.getElementById(Dimensions[9].name).style.display = "block" }
   else document.getElementById(Dimensions[9].name).style.display = "none"
  displayTabStats(player.currentTab)
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
  if (player.selectedPet >= 1) {result += "x" + numberShort(pets[player.selectedPet][1]) + " From pets<br>"}
  if (player.petsDiscovered >= 1) {result += "x" + numberShort(1 + player.petsDiscovered / 100) + " From pet collection<br>"}
  if (player.XPBoostEffect > 1) {result += "x" + numberShort(player.XPBoostEffect) + " From XPBoost<br>"}
  if (player.itemXP > 1) {result += "x" + numberShort(player.itemXP) + " From items<br>"}
  if (player.tierXPmulti > 1) {result += "x" + numberShort(player.tierXPmulti) + " From your tier<br>"}
  if (player.artifactsXP > 1) {result += "x" + numberShort(player.artifactsXP) + " From Artifacts<br>"}
  result += "Total: x" + numberShort((pets[player.selectedPet][1] * player.XPBoostEffect * player.itemXP * (1 + player.petsDiscovered / 100) * player.tierXPmulti * player.artifactsXP)) + "<br><br> Cooldown modifiers: <br>"
  if (player.selectedPet >= 1) {result += "/" + numberShort(pets[player.selectedPet][2]) + " From pets<br>"}
  if (player.itemCooldown > 1) {result += "/" + numberShort(player.itemCooldown) + " From items<br>"}
  if (player.tierCooldown > 1) {result += "/" + numberShort(player.tierCooldown) + " From your tier<br>"}
  if (player.artifactsCooldown > 1) {result += "/" + numberShort(player.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort((pets[player.selectedPet][2] * player.itemCooldown * player.tierCooldown * player.artifactsCooldown))
  return result
}

function CrateMultis() {
  result = "<br>"
  if (pets[player.selectedPet][3] > 1) {result += "/" + numberShort(pets[player.selectedPet][3]) + " From pets<br>"}
  if (player.itemCooldown > 1) {result += "/" + numberShort(player.itemCooldown) + " From items<br>"}
  if (player.tierCooldown > 1) {result += "/" + numberShort(player.tierCooldown) + " From your tier<br>"}
  if (player.artifactsCooldown > 1) {result += "/" + numberShort(player.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort((pets[player.selectedPet][3] * player.itemCooldown * player.tierCooldown * player.artifactsCooldown)) + "<br><br>"
  if (player.crateBulk[3] >= 1) {
    result += "Crate bulk modifiers: <br>"
    if (player.items[16] >= 1) {result += "+1 Base for free crates<br>"}
    if (player.items[38] >= 1) {result += "x" + numberShort(1 + player.items[38] * 0.1) + " From items<br>"}
    if (player.artifactsBulk > 1) {result += "x" + numberShort(player.artifactsBulk) + " From Artifacts<br>"} //I should be doing my homework and not this but aaaaa coding check back is so fun
    result += "Total: " + numberShort(player.crateBulk[3])
  }
  return result
}

function XPBoostMultis() {
  result = numberShort(player.XPBoost) + "<br>"
  if (player.XPBoost > 2) {result += "Effective boost: " + numberShort(player.XPBoostEffect) + "<br> Softcap: ^" + numberShort(0.3 + player.itemXPBoostEffectSoftcap) + "<br>" }
  result += "<br> XPBoost gain multipliers: <br>"
  if (pets[player.selectedPet][4] > 1) {result += "x" + numberShort(pets[player.selectedPet][4]) + " From pets<br>"}
  if (player.itemXPBoost > 1) {result += "x" + numberShort(player.itemXPBoost) + " From items<br>"}
  if (player.artifactsXPBoost > 1) {result += "x" + numberShort(player.artifactsXPBoost) + " From artifacts<br>"}
  result += "Total: x" + numberShort((pets[player.selectedPet][4] * player.itemXPBoost * player.artifactsXPBoost)) + "<br><br>Cooldown modifiers:<br>"
  if (player.itemCooldown > 1) {result += "/" + numberShort(player.itemCooldown) + " From items<br>"}
  if (player.tierCooldown > 1) {result += "/" + numberShort(player.tierCooldown) + " From your tier<br>"}
  if (player.artifactsCooldown > 1) {result += "/" + numberShort(player.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort(player.itemCooldown * player.tierCooldown * player.artifactsCooldown)
  return result
}

function StatMultis() {
  result = "<br>"
  if (player.itemStat > 1) {result += "x" + numberShort(player.itemStat) + " From items<br>"}
  if (player.tierStats > 1) {result += "x" + numberShort(player.tierStats) + " From your tier<br>"}
  if (player.artifactsStats > 1) {result += "x" + numberShort(player.artifactsStats) + " From artifacts<br>"}
  result += "Total: x" + numberShort(player.itemStat * player.tierStats * player.artifactsStats) + "<br><br>Cooldown modifiers:<br>"
  if (player.itemCooldown > 1) {result += "/" + numberShort(player.itemCooldown) + " From items<br>"}
  if (player.tierCooldown > 1) {result += "/" + numberShort(player.tierCooldown) + " From your tier<br>"}
  if (player.artifactsCooldown > 1) {result += "/" + numberShort(player.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort(player.itemCooldown * player.tierCooldown * player.artifactsCooldown)
  return result
}

function DimMultis() {
  result = "<br>"
  if (player.clickToDimension > 1) {result += "x" + numberShort(player.clickToDimension) + " from button clicks<br>"}
  if (player.enemiesToDimension > 1) {result += "x" + numberShort(player.enemiesToDimension) + " from enemies defeated<br>"}
  if (player.bossMulti > 1) {result += "x" + numberShort(player.bossMulti) + " from " + player.bossKills + " bosses killed<br>"}
  if (player.itemDimensions > 1) {result += "x" + numberShort(player.itemDimensions) + " from items<br>"}
  if (pets[player.selectedPet][5] > 1) {result += "x" + numberShort(pets[player.selectedPet][5]) + " from Pets<br>"}
  if (player.artifactsDimension > 1) {result += "x" + numberShort(player.artifactsDimension) + " from Artifacts<br>"}
  result += "Total: x" + numberShort(player.allDimensionMultipliers) + "<br><br>Button cooldown modifiers:<br>"
  if (player.items[27] >= 1) {result += "/1.5 From Dimensional Reset #3<br>"}
  if (player.items[35] >= 1) {result += "/1.5 From item 35<br>"}
  if (player.artifactsCooldown > 1) {result += "/" + numberShort(player.artifactsCooldown) + " From artifacts<br>"}
  result += "Total: /" + numberShort(player.dimensionCooldown * player.artifactsCooldown)
  return result
}


function XPTab() {
  for (let i=1;i<XPButtons.length;i++) {
    if (player.buttonCooldowns[XPButtons[i].cooldownID] == 0 && player.unlocks >= XPButtons[i].unlock) {
      return true
      break
    }
  }
  return false
}

function XPBoostTab() {
  for (let i=1;i<XPBoostButtons.length;i++) {
    if (player.buttonCooldowns[XPBoostButtons[i].cooldownID] == 0 && player.unlocks >= XPBoostButtons[i].unlock) {
      return true
      break
    }
  }
  return false
}

function StatTab() {
  for (let i=1;i<StatButtons.length;i++) {
    if (player.buttonCooldowns[StatButtons[i].cooldownID] == 0 && player.unlocks >= StatButtons[i].unlock) {
      return true
      break
    }
  }
  return false
}

function CratesTab() {
  for (let i=1;i<PetButtons.length;i++) {
    if (player.buttonCooldowns[PetButtons[i].cooldownID] == 0 && player.unlocks >= PetButtons[i].unlock) {
      return true
      break
    }
  }
  return false
}

function DimTab() { //If someone wants to make this better for the dimensional resets feature too, go ahead and make a pull request
  for (let i=1;i<Dimensions.length;i++) {
    if (player.buttonCooldowns[Dimensions[i].cooldownID] == 0 && player.dimensionUnlocks >= (i-1)) {
      return true
      break
    }
  }
  return false
}

function FightingTab() {
    if (player.buttonCooldowns[FightingButtons[1].cooldownID] == 0 && player.unlocks >= FightingButtons[1].unlock) {return true}
    else if (player.buttonCooldowns[FightingButtons[3].cooldownID] == 0 && player.unlocks >= FightingButtons[3].unlock) {return true}
    else if (player.buttonCooldowns[FightingButtons[5].cooldownID] == 0 && player.unlocks >= FightingButtons[5].unlock) {return true}
    else if (player.buttonCooldowns[FightingButtons[2].cooldownID] == 0 && player.items[6] >= 1) {return true}
    else if (player.buttonCooldowns[36] == 0 && player.items[33] >= 1) {return true}
    else return false
}