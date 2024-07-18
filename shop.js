
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
if (x==24) {
  itemChosen = 0
  alert("Coming soon...")
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
 if (x==18) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-5000 Coins<br>-5 Ghost rodents<br>-3 Skeletal dogs<br>-1 Purple star<br><br>Effects:<br>-XPBoost affects DailyXP at a reduced rate<br>-Any item that multiplies xp also works for daily xp</p></center>"}
 if (x==19) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-15000 Coins<br>-3 Infected spiders<br>-1 Red snake<br><br>Effects:<br>x2 XP (additive with itself, multiplicative with others)</p></center>"}
 if (x==20) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-25000 Coins<br>-3 Stone boys beaten<br>-1 Magma boy beaten<br><br>Effects:<br>x2 Stats</p></center>"}
 if (x==21) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-30000 Coins<br>-3 2-Headed snakes<br>-1 Dimensional eye<br><br>Effects:<br>+40% XPBoost</p></center>"}
 if (x==22) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-50000 Coins<br>-10 Glowing eyeballs<br>-5 Salamanders<br>-Reach level 75k<br><br>Effects:<br>/1.1 All button cooldowns</p></center>"}
 if (x==23) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-75000 Coins<br>-10 Eyeball spiders<br>-3 Dark snakes<br>-Reach level 100k<br><br>Effects:<br>x2 Looting boost (Additive with itself, stacks with others)</p></center>"}
 if (x==24) {document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Cost:<br>-Many things (Like a bunch of different pets)!<br>-Equip a pet stronger than Dark Blue Dragon<br>-Reach level 250k<br><br>Effects:<br>-Unlocks a new feature (Coming soon)</p></center>"}  
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
  if (game.items[18] >= 1) game.itemDailyXP = ((game.XPBoostEffect ** 0.5) * game.itemXP)
  game.itemUnlocks = 0 + (game.items[6])
  game.extraPetAmount = 0 + (game.items[16])
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