
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
      if (player.items[i] >= items[i][1]) itemBoxes[i-1].style.backgroundColor = "#282"
    //1st red 2nd green 3rd blue
        itemBoxes[i-1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px' onerror=\"this.onerror=null;this.src='img/shop/0.png';\">"
        if (!player.items[i]) {itemBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>0</p>"}
        else {itemBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + player.items[i] + "</p>"}
        if (i<=6) itemBoxes[i-1].style.border = "8px outset #555"
        else if (i<=12) itemBoxes[i-1].style.border = "8px outset #447"
        else if (i<=18) itemBoxes[i-1].style.border = "8px outset #647"
        else if (i<=24) itemBoxes[i-1].style.border = "8px outset #500"
        else if (i<=36) itemBoxes[i-1].style.border = "8px outset #990"
        else if (i<=46) itemBoxes[i-1].style.border = "8px outset #8cfffb"
        else if (i<=55) itemBoxes[i-1].style.border = "8px outset #bbb"
        else if (i<=63) itemBoxes[i-1].style.border = "8px outset #282"
        if (i > 18 && player.highestLevel <= 20000) {
          itemBoxes[i-1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
          itemBoxes[i-1].addEventListener('mouseover', function(){showItemHiddenInfo(parseInt(this.id))})
          itemBoxes[i-1].addEventListener('mouseout', function(){showItemHiddenInfo(0)})}
          if (i > 24 && player.items[24] < 1) {
            itemBoxes[i-1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
            itemBoxes[i-1].addEventListener('mouseover', function(){showItemHiddenInfo(parseInt(this.id))})
            itemBoxes[i-1].addEventListener('mouseout', function(){showItemHiddenInfo(0)})}
            if (i > 35 && player.items[30] < 1) {
              itemBoxes[i-1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
              itemBoxes[i-1].addEventListener('mouseover', function(){showItemHiddenInfo(parseInt(this.id))})
              itemBoxes[i-1].addEventListener('mouseout', function(){showItemHiddenInfo(0)})}
    }
    
    j=items.length-1
  }

  function buyItem(x) {
    amt = 1
  if (player.items[x] >= items[x][1]) {alert("Upgrade is maxed")}
  else {
  if (x==1) {
    if (player.coins >= 100 && player.pets[1] >= 40) {
       player.coins -= 100
       player.pets[1] -= 40
       itemChosen = x
       alert("Bought " + items[x][0])
     }
     else {alert("Not enough items; " + numberShortAlert(player.coins) + "/100 coins, " + player.pets[1] + "/40 Green butterflies")
    itemChosen = 0}
    }
  if (x==2) {
    if (player.coins >= 200 && player.pets[10] >= 10) {
       player.coins -= 200
       player.pets[10] -= 10
       itemChosen = x
       alert("Bought " + items[x][0])
      }
     else {alert("Not enough items; " + numberShortAlert(player.coins) + "/200 coins, " + player.pets[10] + "/10 Gargoyles")
     itemChosen = 0}
     }
  if (x==3) {
    if (player.coins >= 300 && player.pets[43] >= 2) {
       player.coins -= 300
       player.pets[43] -= 2
       itemChosen = x
       alert("Bought " + items[x][0])
      }
     else {alert("Not enough items; " + numberShortAlert(player.coins) + "/300 coins, " + player.pets[43] + "/2 Golden butterflies")
     itemChosen = 0}
    }
   if (x==4) {
     if (player.coins >= 400 && player.pets[3] >= 40 && player.pets[18] >= 10 && player.pets[24] >= 10) {
       player.coins -= 400
       player.pets[3] -= 40
       player.pets[18] -= 10
       player.pets[24] -= 10
       itemChosen = x
       alert("Bought " + items[x][0])
      }
    else {alert("Not enough items; " + numberShortAlert(player.coins) + "/400 coins, " + player.pets[3] + "/40 Rats, " + player.pets[18] + "/10 Cats, " + player.pets[24] + "/10 Shiny rats")
    itemChosen = 0}
   }
   if (x==5) {
    if (player.coins >= 500 && player.pets[5] >= 20 && player.pets[16] >= 6) {
      player.coins -= 500
      player.pets[5] -= 20
      player.pets[16] -= 6
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/500 coins, " + player.pets[5] + "/20 Glowing spiders, " + player.pets[16] + "/6 Living roses")
   itemChosen = 0}
  }
  if (x==6) {
    if (player.coins >= 1000 && player.enemies[5] >= 1) {
       player.coins -= 1000
       itemChosen = x
       alert("Unlocked a new area")
      }
     else {alert("Not enough items; " + numberShortAlert(player.coins) + "/1000 coins, " + player.enemies[5] + "/1 Armored humans beaten")
     itemChosen = 0}
    }
  if (x==7) {
    if (player.coins >= 1000 && player.pets[41] >= 10 && player.pets[42] >= 6) {
      player.coins -= 1000
      player.pets[41] -= 10
      player.pets[42] -= 6
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/1000 coins, " + player.pets[41] + "/10 Eyeloons, " + player.pets[42] + "/6 Glowing jellyfishes")
   itemChosen = 0}
  }
  if (x==8) {
    if (player.coins >= 1000 && player.pets[4] >= 40 && player.pets[23] >= 14) {
      player.coins -= 1000
      player.pets[4] -= 40
      player.pets[23] -= 14
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/1000 coins, " + player.pets[4] + "/40 Purple butterflies, " + player.pets[23] + "/14 Blue butterflies")
   itemChosen = 0}
  }
  if (x==9) {
    if (player.coins >= 1500 && player.pets[14] >= 30 && player.pets[25] >= 10) {
      player.coins -= 1500
      player.pets[14] -= 30
      player.pets[25] -= 10
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/1500 coins, " + player.pets[14] + "/30 Large tortoises, " + player.pets[25] + "/10 Earth snakes")
   itemChosen = 0}
  }
  if (x==10) {
    if (player.coins >= 500 && player.pets[6] >= 1) {
      player.coins -= 500
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/500 coins, " + player.pets[6] + "/1 Green dragon")
   itemChosen = 0}
  }
  if (x==11) {
    if (player.coins >= 2000 && player.pets[33] >= 10 && player.pets[29] >= 2) {
      player.coins -= 2000
      player.pets[33] -= 10
      player.pets[29] -= 2
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/2000 coins, " + player.pets[33] + "/10 Poisonous eyeballs, " + player.pets[29] + "/2 Spirits")
   itemChosen = 0}
  }
  if (x==12) {
    if (player.coins >= 4000 && player.XPBoost >=201 && player.pets[9] >= 40 && player.pets[32] >= 20 && player.pets[48] >= 6) {
      player.coins -= 4000
      player.XPBoost -= 200
      player.pets[9] -= 40
      player.pets[32] -= 20
      player.pets[48] -= 6
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/4000 coins, " + numberShortAlert(player.XPBoost) + "/201 XPboost, " + player.pets[9] + "/40 Eldritch eyeballs, " + player.pets[32] + "/20 Red slimes, " + player.pets[48] + "/6 Small skeletons")
   itemChosen = 0}
  }
  if (x==13) {
    if (player.coins >= 3000 && player.pets[1] >= 100 && player.pets[12] >= 4 && player.pets[43] >= 2) {
      player.coins -= 3000
      player.pets[1] -= 100
      player.pets[12] -= 4
      player.pets[43] -= 2
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/3000 coins, " + player.pets[1] + "/100 Green butterflies, " + player.pets[12] + "/4 Red butterflies, " + player.pets[43] + "/2 Golden butterflies")
   itemChosen = 0}
  }
  if (x==14) {
    if (player.coins >= 3500 && player.pets[17] >= 10 && player.pets[35] >= 10 && player.pets[19] >= 4) {
      player.coins -= 3500
      player.pets[17] -= 10
      player.pets[35] -= 10
      player.pets[19] -= 4
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/3500 coins, " + player.pets[17] + "/10 Ice golems, " + player.pets[35] + "/10 Living trees, " + player.pets[19] + "/4 Vortex monsters")
   itemChosen = 0}
  }
  if (x==15) {
    if (player.coins >= 4000 && player.pets[40] >= 50 && player.enemies[1] >= 10 && player.enemies[4] >= 2) {
      player.coins -= 4000
      player.pets[40] -= 50
      player.enemies[1] -= 10
      player.enemies[4] -= 2
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/4000 coins, " + player.pets[40] + "/50 Small elfs, " + player.enemies[1] + "/10 Small humanoids beaten, " + player.enemies[4] + "/2 Nordic grandfathers beaten")
   itemChosen = 0}
  }
  if (x==16) {
    if (player.coins >= 3500 && player.pets[2] >= 150 && player.pets[7] >= 60 && player.pets[15] >= 20) {
      player.coins -= 3500
      player.pets[2] -= 150
      player.pets[7] -= 60
      player.pets[15] -= 20
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/3500 coins, " + player.pets[2] + "/150 Green lizards, " + player.pets[7] + "/60 Snakes, " + player.pets[15] + "/20 Mutant tarantulas")
   itemChosen = 0}
  }
  if (x==17) {
    if (player.coins >= 5000 && player.pets[8] >= 40 && player.pets[36] >= 2 && player.pets[28] >= 2) {
      player.coins -= 5000
      player.pets[8] -= 40
      player.pets[36] -= 2
      player.pets[28] -= 2
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/5000 coins, " + player.pets[8] + "/40 Giant fireflies, " + player.pets[36] + "/2 Fire spectrals, " + player.pets[28] + "/2 Lilypads")
   itemChosen = 0}
  }
  if (x==18) {
    if (player.coins >= 10000 && player.pets[56] >= 10 && player.pets[49] >= 6 && player.pets[37] >= 2) {
      player.coins -= 10000
      player.pets[56] -= 10
      player.pets[49] -= 6
      player.pets[37] -= 2
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/10000 coins, " + player.pets[56] + "/10 Ghost rodents, " + player.pets[49] + "/6 Skeletal dogs, " + player.pets[37] + "/2 Purple stars")
   itemChosen = 0}
  }
  if (x==19) {
    if (player.highestLevel < 20000) {alert("Not unlocked yet")}
    else {
    if (player.coins >= 15000 && player.pets[64] >= 3 && player.pets[65] >= 1) {
      player.coins -= 15000
      player.pets[64] -= 3
      player.pets[65] -= 1
      itemChosen = x
      alert("Bought " + items[x][0])
     }
   else {alert("Not enough items; " + numberShortAlert(player.coins) + "/15000 coins, " + player.pets[64] + "/3 Infected spiders, " + player.pets[65] + "/1 Red snake")
   itemChosen = 0}
  }
}
if (x==20) {
  if (player.highestLevel < 20000) {alert("Not unlocked yet")}
  else {
  if (player.coins >= 25000 && player.enemies[6] >= 3 && player.enemies[9] >= 1) {
    player.coins -= 25000
    player.enemies[6] -= 3
    player.enemies[9] -= 1
    itemChosen = x
    alert("Bought " + items[x][0])
   }
 else {alert("Not enough items; " + numberShortAlert(player.coins) + "/25000 coins, " + player.enemies[6] + "/3 Stone boys beaten, " + player.enemies[9] + "/1 Magma boy beaten")
 itemChosen = 0}
 }
}
if (x==21) {
  if (player.highestLevel < 20000) {alert("Not unlocked yet")}
  else {
  if (player.coins >= 30000 && player.pets[44] >= 3 && player.pets[66] >= 1) {
    player.coins -= 30000
    player.pets[44] -= 3
    player.pets[66] -= 1
    itemChosen = x
    alert("Bought " + items[x][0])
   }
 else {alert("Not enough items; " + numberShortAlert(player.coins) + "/30000 coins, " + player.pets[44] + "/3 2-Headed snakes, " + player.pets[66] + "/1 Dimensional eye")
 itemChosen = 0}
 }
}
if (x==22) {
  if (player.highestLevel < 20000) {alert("Not unlocked yet")}
  else {
  if (player.coins >= 50000 && player.pets[11] >= 10 && player.pets[26] >= 5 && player.highestLevel >= 75000) {
    player.coins -= 50000
    player.pets[11] -= 10
    player.pets[26] -= 5
    itemChosen = x
    alert("Bought " + items[x][0])
   }
 else {alert("Not enough items; " + numberShortAlert(player.coins) + "/50000 coins, " + player.pets[11] + "/10 Glowing eyeballs, " + player.pets[26] + "/5 Salamanders, " + numberShort(player.highestLevel) + "/75k Highest level")
 itemChosen = 0}
 }
}
if (x==23) {
  if (player.highestLevel < 20000) {alert("Not unlocked yet")}
  else {
  if (player.coins >= 75000 && player.pets[34] >= 10 && player.pets[27] >= 3 && player.highestLevel >= 100000) {
    player.coins -= 75000
    player.pets[34] -= 10
    player.pets[27] -= 3
    itemChosen = x
    alert("Bought " + items[x][0])
   }
 else {alert("Not enough items; " + numberShortAlert(player.coins) + "/75000 coins, " + player.pets[34] + "/10 Eyeball spiders, " + player.pets[27] + "/3 Dark snakes, " + numberShort(player.highestLevel) + "/100k Highest level")
 itemChosen = 0}
 }
}
if (x==24) {
  if (player.highestLevel < 20000) {alert("Not unlocked yet")}
  else {
  if (player.coins >= 250000 && pets[player.selectedPet][1] > pets[46][1] && upgrade24requirement() >= 22 && player.highestLevel >= 250000) {
    player.coins -= 250000
    alert("Bought " + items[x][0])
    itemChosen = x
   }
 else {alert("Not enough items; " + numberShortAlert(player.coins) + "/250k coins, " + pets[player.selectedPet][1] + "/747 XP multi from pets, " + upgrade24requirement() + "/22 Upgrades maxed, " + numberShortAlert(player.highestLevel) + "/250k Highest level")
 itemChosen = 0}
 }
}
if (x==25) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.tier >= 5) {
    dimensionalReset()
    alert("Performed " + items[x][0])
    itemChosen = x
   }
 else {alert("Tier " + player.tier + "/5 Try again later")
 itemChosen = 0}
 }
}
if (x==26) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.tier >= 8 && player.items[25] >= 1) {
    dimensionalReset()
    alert("Performed " + items[x][0])
    itemChosen = x
   }
 else {alert("Tier " + player.tier + "/8, " + player.items[25] + "/1 Dimensional reset #1")
 itemChosen = 0}
 }
}
if (x==27) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.tier >= 12 && player.items[26] >= 1) {
    dimensionalReset()
    alert("Performed " + items[x][0])
    itemChosen = x
   }
 else {alert("Tier " + player.tier + "/12, " + player.items[26] + "/1 Dimensional reset #2")
 itemChosen = 0}
 }
}
if (x==28) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.tier >= 18 && player.items[27] >= 1) {
    dimensionalReset()
    alert("Performed " + items[x][0])
    itemChosen = x
   }
 else {alert("Tier " + player.tier + "/18, " + player.items[27] + "/1 Dimensional reset #3")
 itemChosen = 0}
 }
}
if (x==29) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.tier >= 28 && player.items[28] >= 1) {
    dimensionalReset()
    alert("Performed " + items[x][0])
    itemChosen = x
   }
 else {alert("Tier " + player.tier + "/28, " + player.items[28] + "/1 Dimensional reset #4")
 itemChosen = 0}
 }
}
if (x==30) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.tier >= 40 && player.items[29] >= 1) {
    dimensionalReset(1)
    alert("Performed " + items[x][0])
    itemChosen = x
   }
 else {alert("Tier " + player.tier + "/40, " + player.items[29] + "/1 Dimensional reset #5")
 itemChosen = 0}
 }
}
if (x==31) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.level >= 500000 && player.items[25] >= 1 && player.pets[13] >= 1 && player.pets[66] >= 5) {
    player.pets[13] -= 1
    player.pets[66] -= 5
    player.buttonClicks += 5000
    alert("Bought " + items[x][0])
    itemChosen = x
   }
 else {alert("Not enough items; " + numberShortAlert(player.level) + "/500k levels, " + player.pets[13] + "/1 Blue dragon, " + player.pets[66] + "/5 Dimensional eyes, " + player.items[25] + "/1 Dimensional reset #1")
 itemChosen = 0}
 }
}
if (x==32) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.coins >= 500000 && player.items[26] >= 1 && player.enemies[9] >= 10 && player.pets[36] >= 40 && player.pets[45] >= 3) {
    player.coins -= 500000
    player.enemies[9] -= 10
    player.pets[36] -= 40
    player.pets[45] -= 3
    alert("Bought " + items[x][0])
    itemChosen = x
   }
 else {alert("Not enough items; " + numberShortAlert(player.coins) + "/500k coins, " + player.enemies[9] + "/10 Magma boys beaten, " + player.pets[36] + "/40 Fire spectrals, " + player.pets[45] + "/3 Fire lords, " + player.items[26] + "/1 Dimensional reset #2")
 itemChosen = 0}
 }
}
if (x==33) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.level >= 2500000 && player.items[27] >= 1 && player.pets[21] >= 5 && player.pets[68] >= 5) {
    player.pets[21] -= 5
    player.pets[68] -= 5
    alert("Bought " + items[x][0])
    itemChosen = x
   }
 else {alert("Not enough items, " + numberShortAlert(player.level) + "/2.5m levels, " + player.pets[21] + "/5 Death scorpions, " + player.pets[68] + "/5 Toxic mushrooms, " + player.items[27] + "/1 Dimensional reset #3")
 itemChosen = 0}
 }
}
if (x==34) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.coins >= 6000000 && player.items[28] >= 1 && player.pets[37] >= 10 && player.pets[52] >= 1 && player.pets[60] >= 1) {
    player.coins -= 6000000
    player.pets[37] -= 10
    player.pets[52] -= 1
    player.pets[60] -= 1
    alert("Bought " + items[x][0])
    itemChosen = x
   }
 else {alert("Not enough items, " + numberShortAlert(player.coins) + "/6m coins, " + player.pets[37] + "/10 Purple stars, " + player.pets[52] + "/1 Skeletal vulture, " + player.pets[60] + "/1 Ghost dog, " + player.items[28] + "/1 Dimensional reset #4")
 itemChosen = 0}
 }
}
if (x==35) {
  if (player.items[24] < 1) {alert("Not unlocked yet")}
  else {
  if (player.level >= 50000000 && player.items[29] >= 1 && player.pets[30] >= 3 && player.pets[38] >= 1 && player.pets[69] >= 1) {
    player.pets[30] -= 3
    player.pets[38] -= 1
    player.pets[69] -= 1
    alert("Bought " + items[x][0])
    itemChosen = x
    for (i=0;i<player.buttonCooldowns.length;i++) {player.buttonCooldowns[i] = 0}
   }
 else {alert("Not enough items, " + numberShortAlert(player.level) + "/50m levels, " + player.pets[30] + "/3 Living mushrooms, " + player.pets[38] + "/1 Holy pig, " + player.pets[69] + "/1 Universal vortex, " + player.items[29] + "/1 Dimensional reset #5")
 itemChosen = 0}
 }
}
if (x==36) {
  if (player.items[30] < 1) {alert("Not unlocked yet")}
  else {
  if (player.coins >= 50000000 && player.level >= 250000000 && player.petsDiscovered >= 66 && player.tier >= 40 && player.pets[72] >= 1) {
    player.coins -= 50000000
    alert("Bought " + items[x][0])
    itemChosen = x
   }
 else {alert("Not enough items, " + numberShortAlert(player.coins) + "/50m coins, " + numberShortAlert(player.level) + "/250m levels, " + player.petsDiscovered + "/66 Pets discovered, " + player.tier + "/40 Tiers, " + player.pets[72] + "/1 White dragons")
 itemChosen = 0}
 }
}
if (x==37) {
  if (player.pets[75] >= 1) {
     if (player.pets[75] + player.items[37] >= 1000) {
      amt = 1000 - player.items[37]
     }
     else amt = player.pets[75]
     player.pets[75] -= amt
     itemChosen = x
     alert("Bought " + items[x][0] + " " + numberShortAlert(amt) + " times")
   }
   else {alert("You don't have any frozen spider")
  itemChosen = 0}
  }
if (x==38) {
    if (player.level < 5*10**8) {alert("Not unlocked yet")}
    else {
    if (player.coins >= 50000000 && player.pets[75] >= 50 && player.pets[76] >= 5 && player.pets[77] >= 1) {
      player.coins -= 50000000
      player.pets[75] -= 50
      player.pets[76] -= 5
      player.pets[77] -= 1
      alert("Bought " + items[x][0])
      itemChosen = x
     }
   else {alert("Not enough items, " + numberShortAlert(player.coins) + "/50m coins, " + numberShortAlert(player.pets[75]) + "/50 Frozen spiders, " + numberShortAlert(player.pets[76]) + "/5 Frozen bats, " + numberShortAlert(player.pets[77]) + "/1 Frozen firefly")
   itemChosen = 0}
   }
  }
if (x==39) {
    if (player.level < 5*10**8) {alert("Not unlocked yet")}
    else {
    if (player.pets[76] >= 100 && player.pets[77] >= 10 && player.pets[78] >= 1 && player.enemies[20] >= 1) {
      player.pets[76] -= 100
      player.pets[77] -= 10
      player.pets[78] -= 1
      alert("Bought " + items[x][0])
      itemChosen = x
     }
   else {alert("Not enough items, " + numberShortAlert(player.pets[76]) + "/100 Frozen bats, " + numberShortAlert(player.pets[77]) + "/10 Frozen fireflies, " + numberShortAlert(player.pets[78]) + "/1 Frozen tarantula, " + numberShortAlert(player.enemies[20]) + "/1 Ice wizards defeated")
   itemChosen = 0}
   }
  }
  if (x==40) {
    if (player.level < 5*10**8) {alert("Not unlocked yet")}
    else {
    if (player.coins >= 10**9 && player.pets[77] >= 50 && player.pets[78] >= 5 && player.pets[79] >= 1) {
      player.coins -= 10**9
      player.pets[77] -= 50
      player.pets[78] -= 5
      player.pets[79] -= 1
      alert("Bought " + items[x][0])
      itemChosen = x
     }
   else {alert("Not enough items, " + numberShortAlert(player.coins) + "/1b coins, " + numberShortAlert(player.pets[77]) + "/50 Frozen fireflies, " + numberShortAlert(player.pets[78]) + "/5 Frozen tarantulas, " + numberShortAlert(player.pets[79]) + "/1 Frozen hydra")
   itemChosen = 0}
   }
  }
  if (x==41) {
    if (player.level < 5*10**8) {alert("Not unlocked yet")}
    else {
    if (player.pets[78] >= 20 && player.pets[79] >= 6 && player.pets[80] >= 1 && player.artifacts[8] >= 1 && player.artifacts[9] >= 1) {
      player.pets[78] -= 20
      player.pets[79] -= 6
      player.pets[80] -= 1
      player.artifacts[8] -= 1
      player.artifacts[9] -= 1
      alert("Bought " + items[x][0])
      itemChosen = x
     }
   else {alert("Not enough items, " + numberShortAlert(player.pets[78]) + "/20 Frozen tarantulas, " + numberShortAlert(player.pets[79]) + "/6 Frozen 2-headed hydras, " + numberShortAlert(player.pets[80]) + "/1 Frozen ghost, " + numberShortAlert(player.artifacts[8]) + "/1 Frozen cooldown artifact"  + numberShortAlert(player.artifacts[9]) + "/1 Frozen stats artifact")
   itemChosen = 0}
   }
  }

if (itemChosen == x) {
if (!player.items[itemChosen]) {player.items[itemChosen] = amt}
  else {player.items[itemChosen] += amt}
openCloseShopTab()
openCloseShopTab()
}
else itemChosen = 0
   }
  }
  function showItemInfo(x) {
 if (x==0) {document.getElementById("shopInfo").innerHTML = ""}
 else {
  if (x==1) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>" + numberShort(player.coins) + "/100 Coins<br>" + player.pets[1] + "/40 Green butterflies<br><br>Effects:<br>+50% XP gain</p></center>"}
 if (x==2) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-200 Coins<br>-10 Gargoyles<br><br>Effects:<br>+25% Stats gain</p></center>"}
 if (x==3) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-300 Coins<br>-2 Golden butterflies<br><br>Effects:<br>+25% XPBoost gain</p></center>"}
 if (x==4) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-400 Coins<br>-40 Rats<br>-10 Cats<br>-10 Shiny rats<br><br>Effects:<br>+2% Faster cooldowns</p></center>"}
 if (x==5) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-500 Coins<br>-20 Glowing spiders<br>-6 Living roses<br><br>Effects:<br>+30% Fighting rewards</p></center>"}
 if (x==6) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1000 Coins<br>-Beat (Armored Human)<br><br>Effects:<br>-Unlock a new area (focused on coin drops)</p></center>"}
 if (x==7) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1000 Coins<br>-10 Eyeloons<br>-6 Glowing jellyfishes<br><br>Effects:<br>+75% XPBoost</p></center>"}
 if (x==8) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1000 Coins<br>-40 Purple butterflies<br>-14 Blue butterflies<br><br>Effects:<br>+100% XP gain</p></center>"}
 if (x==9) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1500 Coins<br>-30 Large tortoises<br>-10 Earth snakes<br><br>Effects:<br>+75% Stats gain</p></center>"}
 if (x==10) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-500 Coins<br>-Own (Green dragon)<br><br>Effects:<br>-Unboxed pets will be stored into an array. A button will show up alongside all the settings, click it to see the entire array.<br>-New pet discoveries will still show up as normal</p></center>"}
 if (x==11) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-2000 Coins<br>-10 Poisonous eyeballs<br>-2 Spirits<br><br>Effects:<br>+90% Fighting rewards</p></center>"}
 if (x==12) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-4000 Coins<br>-200 XPBoost<br>-40 Eldritch eyeballs<br>-20 Red slimes<br>-6 Small skeletons<br><br>Effects:<br>+200% XPBoost<br>-Softcap exponent +^0.05<br><br>(This upgrade used to do something completely different, but it was rebalanced alongside the XPBoost rework)</p></center>"}
 if (x==13) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-3000 Coins<br>-100 Green butterflies<br>-4 Red butterflies<br>-2 Golden butterflies<br><br>Effects:<br>+200% XP gain</p></center>"}
 if (x==14) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-3500 Coins<br>-10 Ice golems<br>-10 Living trees<br>-4 Vortex monsters<br><br>Effects:<br>+150% Fighting stats</p></center>"}
 if (x==15) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-4000 Coins<br>-50 Small elfs<br>-10 Small humanoids<br>-2 Nordic grandfathers<br><br>Effects:<br>-The 4 basic pet crates try to be opened every 30 minutes automatically</p></center>"}
 if (x==16) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-3500 Coins<br>-150 Green lizards<br>-60 Snakes<br>-20 Mutant tarantulas<br><br>Effects:<br>-Any crate that's free to open will get +1 added to it's base bulk</p></center>"}
 if (x==17) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-5000 Coins<br>-40 Giant fireflies<br>-2 Fire spectrals<br>-2 Lilypads<br><br>Effects:<br>+220% Fighting rewards</p></center>"}
 if (x==18) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-10000 Coins<br>-10 Ghost rodents<br>-6 Skeletal dogs<br>-2 Purple stars<br><br>Effects:<br>-XPBoost affects DailyXP at a reduced rate<br>-Any item that multiplies xp also works for daily xp</p></center>"}
 if (x==19) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-15000 Coins<br>-3 Infected spiders<br>-1 Red snake<br><br>Effects:<br>x2 XP (additive with itself, multiplicative with others)</p></center>"}
 if (x==20) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-25000 Coins<br>-3 Stone boys beaten<br>-1 Magma boy beaten<br><br>Effects:<br>x2 Stats</p></center>"}
 if (x==21) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-30000 Coins<br>-3 2-Headed snakes<br>-1 Dimensional eye<br><br>Effects:<br>+700% XPBoost</p></center>"}
 if (x==22) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-50000 Coins<br>-10 Glowing eyeballs<br>-5 Salamanders<br>-Reach level 75k<br><br>Effects:<br>/1.1 All button cooldowns</p></center>"}
 if (x==23) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-75000 Coins<br>-10 Eyeball spiders<br>-3 Dark snakes<br>-Reach level 100k<br><br>Effects:<br>x2 Fighting rewards (Additive with itself, stacks with others)</p></center>"}
 if (x==24) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-250k Coins<br>-Equip a pet stronger than Dark Blue Dragon<br>-Reach level 250k<br>-Have maxed 22 shop upgrades<br><br>Lore: Does this portal let you escape hell, or does it go deep into the abyss of hell?</p></center>"}
 if (x==25) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Tier 5<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Shard gain is doubled<br>-The 5th dimension is unlocked at a certain tier<br>-XP gain is multiplied by your tier (^1.5 if upgrade 30 is bought)</p></center>"}
 if (x==26) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Tier 8<br>-The previous dimensional reset<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Multipliers for D1-D2 are doubled<br>-The 6th dimension is unlocked at a certain tier<br>-Button cooldowns are reduced based on your tier (like items do)<br>Formula: 1 + 0.01 * tier (0.025 if upgrade 30 is bought)</p></center>"}
 if (x==27) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Tier 12<br>-The previous dimensional reset<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Multipliers for D1-D3 are doubled<br>-The 7th dimension is unlocked at a certain tier<br>-All dimensions cooldowns /1.5</p></center>"}
 if (x==28) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Tier 18<br>-The previous dimensional reset<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Multipliers for D1-D4 are doubled<br>-The 8th dimension is unlocked at a certain tier<br>-XPBoost softcap ^(+0.001) for each tier (+0.0025 if upgrade 30 is bought)</p></center>"}
 if (x==29) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Tier 28<br>-The previous dimensional reset<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Multipliers for D1-D5 are doubled<br>-The 9th dimension is unlocked at a certain tier<br>-Stats gain +0.01 for each tier (+0.025 if upgrade 30 is bought)</p></center>"}
 if (x==30) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Tier 40<br>-All 5 Dimensional resets<br><br>Effects:<br>-Your tier, shards, dimension amounts, dimensional resets and upgrades 31-35 are reset<br>-Dimensional resets extra effects are stronger<br>-All dimension multipliers x2</p></center>"}
 if (x==31) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Level 500k<br>-Perform the first dimensional reset<br>-5 Dimensional Eyes<br>-1 Blue Dragon<br><br>Effects:<br>+5000 Button Clicks<br>-XP buttons count as clicked twice<br>-Buttons clicked stat gets converted to an all dimensions multiplier</p></center>"}
 if (x==32) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-500k Coins<br>-Perform the second dimensional reset<br>-10 Magma boys beaten<br>-40 Fire spectral<br>-3 Fire lord<br><br>Effects:<br>x2 Stats gain<br>x3 Fighting rewards<br>-Enemies killed provides a multiplier to all dimensions<br><br>(Disclaimer: This is a reference to an item in the game Elden Ring of the same name, and the texture was simply found in a free textures pack that could maybe be found in internet. There's no intent of copy-ing Elden Ring, and if any verified dev wants me to change it, feel free to text me)</p></center>"}
 if (x==33) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Level 2.5m<br>-Perform the third dimensional reset<br>-5 Death scorpoions<br>-5 Toxic mushrooms<br><br>Effects:<br>-Unlocks a bossfight where hp saves after dying and rewards increase with each kill<br>-Rewards include an all dimensions multiplier<br><br>Lore: Do you think that fighting a beast on their own home is gonna be easy?</p></center>"}
 if (x==34) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-6m coins<br>-Perform the fourth dimensional reset<br>-1 Skeletal vulture<br>-1 Ghost dog<br>-10 Purple stars<br><br>Effects:<br>x10 XP gain<br>x100 XPBoost<br>x100 Daily XP<br>x2 All dimension multipliers</p></center>"}
 if (x==35) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Level 50m<br>-Perform the fifth dimensional reset<br>-5 Living mushrooms<br>-3 Holy pigs<br>-1 Universal Vortex<br><br>Effects:<br>/1.5 Button Cooldowns<br>/1.5 Dimension Cooldowns<br>-Pet automation triggers every 5 minutes, opens the other 3 crates and they are free to open<br>-All cooldowns are reset when the upgrade is bought<br><br>Lore: You just simply need to buy a new hand to progress, duh! Yours is already broken from so much clicking</p></center>"}
 if (x==36) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-50m coins<br>-Level 250m<br>-Tier 40<br>-Discover 66 pets<br>-Own a White dragon<br><br>Effects:<br>-I tip my hat off to your respect if you can buy this. May the luck be always on your side if you ever purchase this (Grants a UNIQUE role on my discord server for buying The Trophy of Time inside the HELL version)<br><br><br>You drop down defeated by this treacherous journey. How much time has it been, months? Years? DECADES??!! You finally purchase the trophy, and your legs crumble in dust. The last thing you hear is: Congratulations! You escaped hell</p></center>"}
 if (x==37) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1 Frozen spider<br><br>Effects:<br>+100% XP each level (Warning: Will buy max when clicked. This is multiplicative to the other +% XP upgrades)</p></center>"}
 if (x==38) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-50m coins<br>-50 Frozen spiders<br>-5 Frozen bats<br>-1 Frozen firefly<br><br>Effects:<br>+1 Frozen crate bulk (base)<br>+x0.1 All crates bulk amount</p></center>"}
 if (x==39) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-100 Frozen bats<br>-10 Frozen fireflies<br>-1 Frozen tarantula<br>-1 Ice wizard defeated<br><br>Effects:<br>-0.25^x Enemy stats scaling (Base: 2^x)<br>+0.2^x Enemy rewards scaling (Base, 1^x for coins, 1.5^x for rest)<br>x4 Stats gain</p></center>"}
 if (x==40) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-1b coins<br>-50 Frozen fireflies<br>-5 Frozen tarantulas<br>-1 Frozen 2-headed hydra<br><br>Effects:<br>x2 All dimension cooldown each level (yes, makes dimensions slower)<br>x5 All dimension multipliers each level</p></center>"}
 if (x==41) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-20 Frozen tarantulas<br>-6 Frozen 2-headed hydras<br>-1 Frozen ghost<br>-1 Frozen cooldown artifact<br>-1 Frozen stats artifact<br><br>Effects:<br>x5 Artifact drop amount</p></center>"}
 if (x==42) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + player.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>At least 1 Frozen Yeti<br><br>Effects:<br>-Some cool effects<br>-Unlocks some new frozen pets and some new frozen upgrades</p></center>"}
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
   if (x==25) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==26) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==27) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==28) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==29) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==30) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==31) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==32) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==33) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==34) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==35) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock"}
   if (x==36) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Perform a dimensional sacrifice to Unlock"}
   if (x==37) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 500m to Unlock"}
   if (x==38) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 500m to Unlock"}
   if (x==39) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 500m to Unlock"}
   if (x==40) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 500m to Unlock"}
   if (x==41) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 500m to Unlock"}
   if (x==42) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 500m to Unlock"}
 }
}

function updateShopBoosts() {
  player.itemXP = (1 + (player.items[1] * 0.5) + (player.items[8] * 1) + (player.items[13] * 2)) * (player.items[19] + 1) * (9 * player.items[34] + 1) * (player.items[36] + 1) * (player.items[37] + 1)
  player.itemStat = (1 + (player.items[2] * 0.25) + (player.items[9] * 0.75) + (player.items[14] * 1.5)) * (2 ** (player.items[20] + player.items[32] + player.items[36] + player.items[39] * 2))
  player.itemXPBoost = (1 + (player.items[3] * 0.25)+ (player.items[7] * 0.75) + (player.items[12] * 2) + (player.items[21] * 7)) * (99 * player.items[34] + 1) 
  player.itemCooldown = 1 + (player.items[4] * 0.02) + (player.items[22] * 0.1) + (player.items[35] * 0.5)
  player.itemLoot = (1 + (player.items[5] * 0.3) + (player.items[11] * 0.9) + (player.items[17] * 2.2)) * (player.items[23] + 1) * (2 * player.items[32] + 1)
  player.itemArtifacts = 1 + (player.items[41] * 4)
  player.itemXPBoostEffectSoftcap = 0 + (player.items[12] * 0.05) + (player.items[28] * player.tier * 2.5 ** Math.min(player.items[30], 1))/1000
  player.itemUnlocks = 0 + (Math.min(player.items[6], 1)) + (Math.min(player.items[24], 1)) + (Math.min(player.items[33], 1))
  player.extraPetAmount = 0 + (player.items[16])
  player.itemDimensions = 1 * 2 ** (player.items[30] + player.items[34] + player.items[36]) * 5 ** player.items[40]
  player.dimensionCooldown = 1 * 1.5 ** (player.items[27] + player.items[35]) / (2 ** player.items[40])
  player.enemyScaling = 3 - (player.items[39] * 0.25)
  player.rewardsScaling = 0 + (player.items[39] * 0.2)
  if (player.items[18] >= 1) player.itemDailyXP = ((player.XPBoostEffect ** 0.5) * player.itemXP * (9 * player.items[34] + 1))
  else player.itemDailyXP = 1
  if (player.items[25] >= 1) player.tierXPmulti = player.tier ** (Math.min(player.items[30], 0.5) + 1)
  else player.tierXPmulti = 1
  if (player.items[26] >= 1) player.tierCooldown = 1 + (player.tier * 2.5 ** Math.min(player.items[30], 1))/100
  else player.tierCooldown = 1
  if (player.items[29] >= 1) player.tierStats = 1 + (player.tier * 2.5 ** Math.min(player.items[30], 1))/100
  else player.tierStats = 1
  if (player.items[31] >= 1) player.clickToDimension = Math.sqrt((player.buttonClicks ** 1.5)/353553)
  else player.clickToDimension = 1
  if (player.items[32] >= 1) player.enemiesToDimension = Math.log(Math.E + player.enemiesDefeated/250)
  else player.enemiesToDimension = 1
  
}
setInterval(updateShopBoosts, 50)

function itemBoosts() {
  result = ""
  if (player.itemXP > 1) {result += "XP gain x" + numberShort(player.itemXP) + "<br>"}
  if (player.itemStat > 1) {result += "Stat gain x" + numberShort(player.itemStat) + "<br>"}
  if (player.itemXPBoost > 1) {result += "XPBoost gain x" + numberShort(player.itemXPBoost) + "<br>"}
  if (player.itemCooldown > 1) {result += "All button cooldown /" + numberShort(player.itemCooldown) + "<br>"}
  if (player.itemLoot > 1) {result += "Fighting loot x" + numberShort(player.itemLoot) + "<br>"}
  if (player.itemXPBoostEffectSoftcap > 0) {result += "XPBoost effect exponent +" + numberShort(player.itemXPBoostEffectSoftcap) + "<br>"}
  if (player.itemDailyXP > 1) {result += "Daily XP x" + numberShort(player.itemDailyXP) + "<br>"}
  if (player.extraPetAmount > 0) {result += "Extra pets: " + levelShort(player.extraPetAmount) + " <br>"}
  return result
}
