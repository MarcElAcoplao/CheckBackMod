const FightingButtons = [ //Stats of the xpboost buttons
  {name: "Test", level: 0, xpboost: 0, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "Area1", cooldown: 3600, cooldownID: 21, unlock: 21},
  {name: "Area2", cooldown: 3600, cooldownID: 22, unlock: 2},
  {name: "Area3", cooldown: 3600, cooldownID: 26, unlock: 25},
  {name: "placeholder", cooldown: 3600, cooldownID: 26, unlock: 25},
  {name: "Area4", cooldown: 3600, cooldownID: 44, unlock: 29},
]

//All of fighting stuff will be added here
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
        if (player.enemies[parseInt(this.id)] > 0) {showEnemiesInfo(parseInt(this.id))}
      })
      enemyBoxes[i-1].addEventListener('mouseout', function(){showEnemiesInfo(0)})
      if (player.enemies[i] > 0) { //1st value is red, 2nd green and 3rd blue
        enemyBoxes[i-1].innerHTML = "<img src='img/enemies/" + i + ".png' style='width: 128px'>"
        enemyBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + player.enemies[i] + "</p>"
        if (i<=5) enemyBoxes[i-1].style.border = "8px outset #555"
        else if (i<=11) enemyBoxes[i-1].style.border = "8px outset #447"
        else if (i<=16) enemyBoxes[i-1].style.border = "8px outset #647"
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
    else document.getElementById("enemiesInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + enemies[x][0] + "</span><br>You killed " + player.enemies[x] + "</p><br><img src='img/enemies/" + x + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Stats:</span><br>" + (enemies[x][1]).toFixed(1) + " HP<br>" + (enemies[x][2]).toFixed(1) + " Damage<br>" + (enemies[x][3]).toFixed(1) + " Defense<br> Drop tier: " + (enemies[x][4]) + "</p></center>"
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
    document.getElementById("statsDisplay").innerHTML = "<left><p style='color: white'><span> HP: " + numberShort(player.HP) + "<br> Current HP: " + numberShort(player.currentHP) + "<br> DMG: " + numberShort(player.DMG) + "<br> DEF: " + numberShort(player.DEF) + "<br> Coins: " + numberShort(player.coins) + "</p></center>"
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
    else if (x == 4) {
      document.getElementById("enemiesFightChances").innerHTML = "<style='width:6vh'><br><b>Rarities for this area:</b><br>"
      totalWeight = 0
      for (i=0;i<BossChances.length;i++) totalWeight += BossChances[i][1]
      for(i=0;i<BossChances.length;i++) {
        document.getElementById("enemiesFightChances").innerHTML += enemies[BossChances[i][0]][0] + ": " + (BossChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
      }
    }
    else if (x == 5) {
      document.getElementById("enemiesFightChances").innerHTML = "<style='width:6vh'><br><b>Rarities for this area:</b><br>"
      totalWeight = 0
      for (i=0;i<frozenEnemiesChances.length;i++) totalWeight += frozenEnemiesChances[i][1]
      for(i=0;i<frozenEnemiesChances.length;i++) {
        document.getElementById("enemiesFightChances").innerHTML += enemies[frozenEnemiesChances[i][0]][0] + ": " + (frozenEnemiesChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
      }
    }
  }

  function startFight(x) {
    totalWeight = 0
    fightNumber = x
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
     player.buttonCooldowns[21] = 3600 / (player.itemCooldown * player.tierCooldown * player.artifactsCooldown) //1h
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
     player.buttonCooldowns[22] = 21600 / (player.itemCooldown * player.tierCooldown * player.artifactsCooldown) //6h
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
     player.buttonCooldowns[26] = 86400 / (player.itemCooldown * player.tierCooldown * player.artifactsCooldown) //24h
    }
    if (x==5) {
      for (i=0;i<frozenEnemiesChances.length;i++) totalWeight += frozenEnemiesChances[i][1]
      for (i=0;i<frozenEnemiesChances.length;i++) {
        if (Math.random() * totalWeight < frozenEnemiesChances[i][1]) {
          enemiesChosen = frozenEnemiesChances[i][0]
          i = frozenEnemiesChances.length
        }
        else {
          totalWeight -= frozenEnemiesChances[i][1]
        }
      }
     player.buttonCooldowns[44] = 181850 / (player.itemCooldown * player.tierCooldown * player.artifactsCooldown) //Around 2.1d, random number lol 
    }
    if (x==4) {
      player.currentHP = player.HP
      enemiesChosen = 17
      if (document.getElementById("dailyMessagesDiv").style.display == "block") {openCloseMessages(0)}
      openCloseMessages(3)
      attackBoss()
    player.buttonCooldowns[36] = 43200 / (player.itemCooldown * player.tierCooldown * player.artifactsCooldown) //12h
    }
    else {
    if (document.getElementById("dailyMessagesDiv").style.display == "block") {openCloseMessages(0)}
    setTimeout(() => {
      openCloseMessages(2)
      player.currentHP = player.HP
      player.enemyHP = enemies[enemiesChosen][1] * player.enemyScaling ** player.ConsecutiveKills
      attack(fightNumber)
    }, 10)
    }
  }

  function attack(x) {
     console.log(fightNumber)
     player.enemyHP -= player.DMG - (enemies[enemiesChosen][3] * player.enemyScaling ** player.ConsecutiveKills)
     player.currentHP -= (enemies[enemiesChosen][2] * player.enemyScaling ** player.ConsecutiveKills) - player.DEF
     displayStats()
     setTimeout(() => {
      if (player.enemyHP <= 0) {fightRewards(enemies[enemiesChosen][4],y=fightNumber)}
     else if (player.currentHP <= 0) {
      alert("You died... and you stop fighting. Remaining enemy hp: " + numberShortAlert(player.enemyHP))
      claimRewards(fightNumber)
    }
     else if (player.DMG < enemies[enemiesChosen][3]) {
      alert("Can't deal damage to the enemy, fight ends here")
      claimRewards(fightNumber)
    }
     else attack(fightNumber)
     }, 100) //100ms delay
  }

  function attackBoss() {
    player.bossHP -= player.DMG
    player.currentHP -= enemies[enemiesChosen][2] * 3 ** player.bossKills
    displayStats()
    setTimeout(() => {
     if (player.bossHP <= 0) {killBoss()}
     else if (player.currentHP <= 0) {alert("You died... try again later. Remaining boss hp: " + numberShortAlert(player.bossHP))}
     else attackBoss()
     }, 100) //100ms delay
  }

  function killBoss() {
    player.bossKills += 1
    player.bossHP = enemies[17][1] * 3 ** player.bossKills
    player.bossMulti += 0.1 * player.bossKills * player.itemLoot / 90
    player.XP += 10000000000 * player.itemLoot * 1.5 ** player.bossKills
    player.coins += 10000 * player.itemLoot * 1.5 ** player.bossKills
    document.getElementsByClassName("dropBox")[0].innerHTML = numberShort(10000000000 * player.itemLoot * 1.5 ** player.bossKills) + " XP"
    document.getElementsByClassName("dropBox")[1].innerHTML = numberShort(10000 * player.itemLoot * 1.5 ** player.bossKills) + " Coins"
    document.getElementsByClassName("dropBox")[2].innerHTML = numberShort(0.1 * player.bossKills * player.itemLoot / 90) + " DimMulti"
    if (!player.enemies[enemiesChosen]) {player.enemies[enemiesChosen] = 1}
     else {player.enemies[enemiesChosen]++}
     player.enemiesDefeated += 1
  }

  function fightRewards(x,y) {
    console.log(x + "//" + y)
     if (x==1) {
      player.XPCounter += 200 * enemies[enemiesChosen][1] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      player.CoinsCounter += 1 * enemies[enemiesChosen][2] * player.itemLoot * player.artifactsCoins * (0.8 + player.rewardsScaling) ** player.ConsecutiveKills
      if (Math.random() < 1/10) {player.artifactsCounter += 1 * (player.ConsecutiveKills + 1) * player.itemArtifacts} 
     }
     if (x==2) {
      player.XPCounter += 500 * enemies[enemiesChosen][1] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      player.CoinsCounter += 2 * enemies[enemiesChosen][2] * player.itemLoot * player.artifactsCoins * (0.8 + player.rewardsScaling) ** player.ConsecutiveKills
      player.XPBoostCounter += 0.01 * enemies[enemiesChosen][3] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      if (Math.random() < 1/10) {player.artifactsCounter += 2 * (player.ConsecutiveKills + 1) * player.itemArtifacts}
     }
     if (x==3) {
      player.XPCounter += 550 * enemies[enemiesChosen][1] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      player.CoinsCounter += 5 * enemies[enemiesChosen][2] * player.itemLoot * player.artifactsCoins * (0.8 + player.rewardsScaling) ** player.ConsecutiveKills
      player.XPBoostCounter += 0.015 * enemies[enemiesChosen][3] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      if (Math.random() < 1/10) {player.artifactsCounter += 1 * (player.ConsecutiveKills + 1) * player.itemArtifacts}
     }
     if (x==4) {
      player.XPCounter += 750 * enemies[enemiesChosen][1] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      player.CoinsCounter += 10 * enemies[enemiesChosen][2] * player.itemLoot * player.artifactsCoins * (0.8 + player.rewardsScaling) ** player.ConsecutiveKills
      player.XPBoostCounter += 0.02 * enemies[enemiesChosen][3] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      if (Math.random() < 1/10) {player.artifactsCounter += 2 * (player.ConsecutiveKills + 1) * player.itemArtifacts}
     }
     if (x==5) {
      player.XPCounter += 1000 * enemies[enemiesChosen][1] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      player.CoinsCounter += 2 * enemies[enemiesChosen][2] * player.itemLoot * player.artifactsCoins * (0.8 + player.rewardsScaling) ** player.ConsecutiveKills 
      player.XPBoostCounter += 0.015 * enemies[enemiesChosen][3] * player.itemLoot* (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      if (Math.random() < 1/10) {player.artifactsCounter += 1 * (player.ConsecutiveKills + 1) * player.itemArtifacts}
     }
     if (x==6) {
      player.XPCounter += 1000000000 * enemies[enemiesChosen][1] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      player.CoinsCounter += 4 * enemies[enemiesChosen][2] * player.itemLoot * player.artifactsCoins * (0.8 + player.rewardsScaling) ** player.ConsecutiveKills 
      player.XPBoostCounter += 0.1 * enemies[enemiesChosen][3] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      if (Math.random() < 1/10) {player.artifactsCounter += 1 * (player.ConsecutiveKills + 1) * player.itemArtifacts}
     }
     if (x==7) {
      player.XPCounter += 4000000000 * enemies[enemiesChosen][1] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      player.CoinsCounter += 40 * enemies[enemiesChosen][2] * player.itemLoot * player.artifactsCoins * (0.8 + player.rewardsScaling) ** player.ConsecutiveKills 
      player.XPBoostCounter += 2 * enemies[enemiesChosen][3] * player.itemLoot * (1.3 + player.rewardsScaling) ** player.ConsecutiveKills
      player.artifactsCounter += 1 * (player.ConsecutiveKills + 1) * player.itemArtifacts
     }
     if (!player.enemies[enemiesChosen]) {player.enemies[enemiesChosen] = 1}
     else {player.enemies[enemiesChosen]++}
     player.enemiesDefeated += 1
     player.ConsecutiveKills += 1
     startFight(fightNumber)
  }

   function claimRewards(x) {
    console.log(player.ConsecutiveKills)
    document.getElementsByClassName("dropBox")[0].innerHTML = numberShort(player.XPCounter) + " XP"
    document.getElementsByClassName("dropBox")[1].innerHTML = numberShort(player.CoinsCounter) + " Coins"
    if (player.XPBoostCounter > 0) {document.getElementsByClassName("dropBox")[2].innerHTML = numberShort(player.XPBoostCounter) + " XPBoost"}
    else {document.getElementsByClassName("dropBox")[2].innerHTML = ""}
    if (player.artifactsCounter > 0) {
      if (fightNumber != 5) document.getElementsByClassName("dropBox")[3].innerHTML = numberShort(player.artifactsCounter) + " Artifacts"
      unboxArtifact(fightNumber,player.artifactsCounter)
    }
    else {document.getElementsByClassName("dropBox")[3].innerHTML = ""}
    player.XP += player.XPCounter
    player.coins += player.CoinsCounter
    player.XPBoost += player.XPBoostCounter
    player.XPCounter = 0
    player.CoinsCounter = 0
    player.XPBoostCounter = 0
    player.ConsecutiveKills = 0
    player.artifactsCounter = 0
   }