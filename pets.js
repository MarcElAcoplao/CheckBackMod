const PetButtons = [ //Pet crates
  {name: "Test", name2: "Test", cooldown: 0, cooldownID: 0, unlock: 0},
  {name: "Filler 1", name2: "Test", cooldown: 7200, cooldownID: 6, unlock: 6},
  {name: "Filler 2", name2: "Test", cooldown: 7200, cooldownID: 6, unlock: 6},
  {name: "unboxButton1", name2: "Basic", cooldown: 7200, cooldownID: 6, unlock: 6},
  {name: "unboxButton2", name2: "Advanced", cooldown: 21600, cooldownID: 7, unlock: 7},
  {name: "unboxButton3", name2: "Epic", cooldown: 64800, cooldownID: 8, unlock: 9},
  {name: "unboxButton4", name2: "Legendary", cooldown: 172800, cooldownID: 10, unlock: 11},
  {name: "unboxButton5", name2: "Prestige", cooldown: 3600, cooldownID: 13, unlock: 14},
  {name: "unboxButton6", name2: "Transcendant", cooldown: 3600, cooldownID: 18, unlock: 19},
  {name: "unboxButton7", name2: "Universal", cooldown: 43200, cooldownID: 24, unlock: 23},
  {name: "unboxButton8", name2: "Frozen", cooldown: 604800, cooldownID: 43, unlock: 28},
]

const UnboxChancesArray = [0,0,0,basicUnboxChances,advancedUnboxChances,epicUnboxChances,legendaryUnboxChances,prestigeUnboxChances,trascendantUnboxChances,universalUnboxChances]

function unboxPet(x, y) {
    totalWeight = 0
    let list = UnboxChancesArray[x]
    if (y > 1000) {simulatedUnboxPet(x, y)}
    else {
    //Thank you amber for this idea :3 (and Wrab with the condensing even further idea)
    //Determines the total weight, and then progressively checks random odds until a pet is found
    //These could all probably be condensed into one but I'm lazy - Demonin
    if (x==1) {
      if (game.dailyRewards < 100) {
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
    else {
      for (i=0;i<skeletalBoostUnboxChances.length;i++) totalWeight += skeletalBoostUnboxChances[i][1]
      for (i=0;i<skeletalBoostUnboxChances.length;i++) {
        if (Math.random() * totalWeight < skeletalBoostUnboxChances[i][1]) {
          petChosen = skeletalBoostUnboxChances[i][0]
          i = skeletalBoostUnboxChances.length
        }
        else {
          totalWeight -= skeletalBoostUnboxChances[i][1]
        }
      }
    }
    }
    else if (x==2) {
      if (game.dailyRewards < 100) {
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
    else {
      for (i=0;i<ghostBoostUnboxChances.length;i++) totalWeight += ghostBoostUnboxChances[i][1]
      for (i=0;i<ghostBoostUnboxChances.length;i++) {
        if (Math.random() * totalWeight < ghostBoostUnboxChances[i][1]) {
          petChosen = ghostBoostUnboxChances[i][0]
          i = ghostBoostUnboxChances.length
        }
        else {
          totalWeight -= ghostBoostUnboxChances[i][1]
        }
      }
    }
  }
  else if (x==10) {
    for (i=0;i<frozenUnboxChances1.length;i++) totalWeight += frozenUnboxChances1[i][1]
    for (i=0;i<frozenUnboxChances1.length;i++) {
      if (Math.random() * totalWeight < frozenUnboxChances1[i][1]) {
        petChosen = frozenUnboxChances1[i][0]
        i = frozenUnboxChances1.length
      }
      else {
        totalWeight -= frozenUnboxChances1[i][1]
      }
    }
  }
  else {
    for (i=0;i<list.length;i++) totalWeight += list[i][1]
      for (i=0;i<list.length;i++) {
        if (Math.random() * totalWeight < list[i][1]) {
          petChosen = list[i][0]
          i = list.length
        }
        else {
          totalWeight -= list[i][1]
        }
      }
  }
  if (x==7) {
    if (game.items[35] > 0) {}
    else if (game.XPBoost < 1.05) {
      alert("XPBoost has to not drop below 1 to buy this crate") 
      petChosen = 0 
    }
    else game.XPBoost -= 0.05
  }
  if (x==8) {
    if (game.items[35] > 0) {}
    else if (game.XPBoost < 1.1) {
      alert("XPBoost has to not drop below 1 to buy this crate") 
      petChosen = 0 
    }
    else game.XPBoost -= 0.1
  }
  if (x==9) {
    if (game.items[35] > 0) {}
    else if (game.coins < 250) {
      alert("Not enough coins") 
      petChosen = 0 
    }
    else game.coins -= 250
  }
  if (x==10 && y < 2) dimensionalReset(2)
  if (petChosen >= 1) {
    if (game.items[10] == 0) {openCloseMessages(1)}
      else {
        latestDrops(petChosen, 1)
      }

  if (!game.pets[petChosen]) {game.pets[petChosen] = 1}
    else {game.pets[petChosen]++}
  game.cratesOpened += 1
  if (x==10) game.frozenCratesOpened += 1
  if (x >= 3) {game.buttonCooldowns[PetButtons[x].cooldownID] = PetButtons[x].cooldown / (pets[game.selectedPet][3] * game.itemCooldown * game.tierCooldown * game.artifactsCooldown)} //2 hours
  y += -1
  if (y <= 0) save()
  else if (y < 1) {
    if (Math.random() < y) unboxPet(x, y=y)
    else save()
  }
  else unboxPet(x, y=y)
  }
  countPets()
 }
}
    if (document.getElementById("petsDiv").style.display == "block") displayPets()
  
function latestDrops(x, y) {
  let added = 0
  for (i=0;i<game.unboxString.length;i++) {
    if (x == game.unboxString[i][0]) { //This line checks if the id is found inside the string. In case it is, it does the following:
      game.unboxString[i][1] += y //Adds the specified amount (1 unless using simulated)
      i = game.unboxString.length //Stops the count
      added = 1 //The pet has been added
    }
  }
  if (added == 0) {game.unboxString[game.unboxString.length] = [x, y]} //If after all the attempts, no pet has been added, it will create a new entry up next with the system [pet id, amount]
  if (game.pets[x] < 1) {openCloseMessages(1)} //If the pet is a discovery, it will show up the popup anyways
}

    function autoPets() {
       if (game.items[15] >= 1) {
      if (game.buttonCooldowns[6] == 0) {
        unboxPet(3, game.crateBulk[3])
      }
      if (game.buttonCooldowns[7] == 0) {
        unboxPet(4, game.crateBulk[4])
      }
      if (game.buttonCooldowns[8] == 0) {
        unboxPet(5, game.crateBulk[5])
      }
      if (game.buttonCooldowns[10] == 0) {
        unboxPet(6, game.crateBulk[6])
      }
      if (game.buttonCooldowns[13] == 0 && game.items[35] >= 1) {
        unboxPet(7, game.crateBulk[7])
      }
      if (game.buttonCooldowns[18] == 0 && game.items[35] >= 1) {
        unboxPet(8, game.crateBulk[8])
      }
      if (game.buttonCooldowns[24] == 0 && game.items[35] >= 1) {
        unboxPet(9, game.crateBulk[9])
      }
     }
     if (game.items[35] == 0) game.buttonCooldowns[23] = 1800
     else game.buttonCooldowns[23] = 300
    }

  function simulatedUnboxPet(x,y) {
    let amt = 0
    let simulatedWeight = 0
     if (x == 10) {
      for (i=0;i<frozenUnboxChances1.length;i++) {simulatedWeight += frozenUnboxChances1[i][1]}
      for (a=0;a<frozenUnboxChances1.length;a++) {
        amt = frozenUnboxChances1[a][1] / simulatedWeight * y
        console.log("Amount: " + amt)
        if (amt >= 1) {
          if (!game.pets[frozenUnboxChances1[a][0]]) {game.pets[frozenUnboxChances1[a][0]] = Math.floor(amt)}
          else {game.pets[frozenUnboxChances1[a][0]] += Math.floor(amt)}
          latestDrops(frozenUnboxChances1[a][0], Math.floor(amt))
        }
        else if (Math.random() < amt) {
          if (!game.pets[frozenUnboxChances1[a][0]]) {game.pets[frozenUnboxChances1[a][0]] = 1}
          else {game.pets[frozenUnboxChances1[a][0]]++}
          latestDrops(frozenUnboxChances1[a][0], 1)
          console.log("Random number smaller than amount")
        }
      }
     }
     if (x >= 3) {game.buttonCooldowns[PetButtons[x].cooldownID] = PetButtons[x].cooldown / (pets[game.selectedPet][3] * game.itemCooldown * game.tierCooldown * game.artifactsCooldown)} //2 hours
     game.cratesOpened += y
     if (x==10) {
      game.frozenCratesOpened += y
      dimensionalReset(2)
     }
     save()
  }

  function calculateBulkAmount() {
    game.crateBulk[1] = (1 + game.items[16]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
    game.crateBulk[2] = (1 + game.items[16]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
    game.crateBulk[3] = (1 + game.items[16]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
    game.crateBulk[4] = (1 + game.items[16]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
    game.crateBulk[5] = (1 + game.items[16]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
    game.crateBulk[6] = (1 + game.items[16]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
    game.crateBulk[7] = (1 + game.items[16] * game.items[35]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
    game.crateBulk[8] = (1 + game.items[16] * game.items[35]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
    game.crateBulk[9] = (1 + game.items[16] * game.items[35]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
    frozenBaseBulk(game.tier)
    game.crateBulk[10] = (game.frozenBaseBulk + game.items[38]) * (1 + game.items[38] * 0.1) * game.artifactsBulk
  }
  setInterval(calculateBulkAmount, 50)

  function frozenBaseBulk(x) {
    let a = x-40
    game.frozenBaseBulk = Math.max((a ** 2)/20 + a + 1, 1)
  }

  function petButtonDisplayMessage(x) {
    result = ""
    if (x < 10) {
    if (game.crateBulk[x] == 1) result += "Unbox a random " + PetButtons[x].name2 + " crate"
    else result += "Unbox " + numberShort(game.crateBulk[x]) + " random " + PetButtons[x].name2 + " crates"
    if (x <= 8 && x >= 7 && game.items[35] == 0) result += ". Cost: " + numberShort(0.05 * (x - 6) * game.crateBulk[x]) + " XPBoost"
    if (x == 9 && game.items[35] == 0) result += ". Cost: " + numberShort(250 * game.crateBulk[x]) + " Coins"
    if (x <= 6 && game.items[15] >= 1) result += ". Auto: " + numberToTime(game.buttonCooldowns[23])
    if (x <= 9 && game.items[35] >= 1 && x >= 7) result += ". Auto: " + numberToTime(game.buttonCooldowns[23])
     }
    else {
      result = "Sacrifice all your dimensions to unbox " + numberShort(game.crateBulk[x]) + " frozen crates"
    }
    return result
  }

  function displayPetRarities(x) {
    if (x==0) {document.getElementById("petRarities").innerHTML = "Crate cooldown modifiers:" + CrateMultis()}
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
  else if (x==10) {
    document.getElementById("petRarities").innerHTML = "<img src='img/crateFrozen.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
    totalWeight = 0
    for (i=0;i<frozenUnboxChances1.length;i++) totalWeight += frozenUnboxChances1[i][1]
    for(i=0;i<frozenUnboxChances1.length;i++) {
      if ((frozenUnboxChances1[i][1] / totalWeight * 100) < 0.01) document.getElementById("petRarities").innerHTML += pets[frozenUnboxChances1[i][0]][0] + ": 1/" + numberShort(totalWeight / frozenUnboxChances1[i][1]) + "<br>"
      else document.getElementById("petRarities").innerHTML += pets[frozenUnboxChances1[i][0]][0] + ": " + (frozenUnboxChances1[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
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
        petBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + levelShort(game.pets[i]) + "</p>"
        if (i<=6) petBoxes[i-1].style.border = "8px outset #555"
        else if (i<=13) petBoxes[i-1].style.border = "8px outset #447"
        else if (i<=22) petBoxes[i-1].style.border = "8px outset #647"
        else if (i<=31) petBoxes[i-1].style.border = "8px outset #500"
        else if (i<=39) petBoxes[i-1].style.border = "8px outset #990"
        else if (i<=46) petBoxes[i-1].style.border = "8px outset #229"
        else if (i<=55) petBoxes[i-1].style.border = "8px outset #bbb"
        else if (i<=63) petBoxes[i-1].style.border = "8px outset #282"
        else if (i<=74) petBoxes[i-1].style.border = "8px outset #d83"
        else if (i<=88) petBoxes[i-1].style.border = "8px outset #8cfffb"
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
    else document.getElementById("petInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + pets[x][0] + "</span><br>You have " + levelShort(game.pets[x]) + "</p><br><img src='img/pets/" + x + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Effects:</span><br>" + petStats(x) + "</p></center>"
  }

  function petStats(x) {
    result = "x" + numberShort(pets[x][1]) + " XP from buttons and Daily<br>-" + ((1 - (1 / pets[x][2])) * 100).toFixed(1) + "% XP button cooldown<br>-" + ((1 - (1 / pets[x][3])) * 100).toFixed(1) + "% pet button cooldown<br>"
    if (pets[x][4] > 1) result += "x" + numberShort(pets[x][4]) + " XPBoost<br>"
    if (pets[x][5] > 1) result += "x" + numberShort(pets[x][5]) + " All Dimensions Multi<br>"
    return result
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
  
  //This is for the bulk open results
  function openClosePetsUnboxTab() {
    if (document.getElementById("petsUnboxDiv").style.display == "block") {
      document.getElementById("petsUnboxDiv").style.display = "none"
      document.getElementById("petsUnboxListInner").innerHTML = ""
      game.unboxString = [[0, 0]]
    }
    else {
      document.getElementById("petsUnboxDiv").style.display = "block"
      displayUnboxPets(game.unboxString.length)
    }
  }
  
  //Adds the squares for all the pets to the pets tab
  function displayUnboxPets(x) {
    document.getElementById("petsUnboxListInner").innerHTML = ""
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
    petBox.className += "petUnboxBox"
    petBoxes = document.getElementsByClassName("petUnboxBox");
    for (i=1;i<x;i++) {
      document.getElementById("petsUnboxListInner").appendChild(petBox.cloneNode(true))
      petBoxes[i-1].setAttribute("id", i)
      petBoxes[i-1].addEventListener('click', function(){setSelectedPet(game.unboxString[parseInt(this.id)][0])})
      petBoxes[i-1].addEventListener('mouseover', function(){showPetUnboxInfo(game.unboxString[parseInt(this.id)][0])})
      petBoxes[i-1].addEventListener('mouseout', function(){showPetUnboxInfo(0)})
      //1st value is red, 2nd green and 3rd blue
        petBoxes[i-1].innerHTML = "<img src='img/pets/" + game.unboxString[i][0] + ".png' style='width: 128px'>"
        petBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + levelShort(game.unboxString[i][1]) + "</p>"
        if (game.unboxString[i][0]<=6) petBoxes[i-1].style.border = "8px outset #555"
        else if (game.unboxString[i][0]<=13) petBoxes[i-1].style.border = "8px outset #447"
        else if (game.unboxString[i][0]<=22) petBoxes[i-1].style.border = "8px outset #647"
        else if (game.unboxString[i][0]<=31) petBoxes[i-1].style.border = "8px outset #500"
        else if (game.unboxString[i][0]<=39) petBoxes[i-1].style.border = "8px outset #990"
        else if (game.unboxString[i][0]<=46) petBoxes[i-1].style.border = "8px outset #229"
        else if (game.unboxString[i][0]<=55) petBoxes[i-1].style.border = "8px outset #bbb"
        else if (game.unboxString[i][0]<=63) petBoxes[i-1].style.border = "8px outset #282"
        else if (game.unboxString[i][0]<=74) petBoxes[i-1].style.border = "8px outset #d83"
        else if (game.unboxString[i][0]<=88) petBoxes[i-1].style.border = "8px outset #8cfffb"
    }
    j=pets.length-1
  }
  
  function showPetUnboxInfo(x) {
    if (x==0) {document.getElementById("petUnboxInfo").innerHTML = ""}
    else document.getElementById("petUnboxInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + pets[x][0] + "</span><br>You have " + levelShort(game.pets[x]) + "</p><br><img src='img/pets/" + x + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Effects:</span><br>" + petStats(x) + "</p></center>"
  }