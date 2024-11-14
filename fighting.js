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
        if (game.enemies[parseInt(this.id)] > 0) {showEnemiesInfo(parseInt(this.id))}
      })
      enemyBoxes[i-1].addEventListener('mouseout', function(){showEnemiesInfo(0)})
      if (game.enemies[i] > 0) { //1st value is red, 2nd green and 3rd blue
        enemyBoxes[i-1].innerHTML = "<img src='img/enemies/" + i + ".png' style='width: 128px'>"
        enemyBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + game.enemies[i] + "</p>"
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
    document.getElementById("statsDisplay").innerHTML = "<left><p style='color: white'><span> HP: " + numberShort(game.HP) + "<br> Current HP: " + numberShort(game.currentHP) + "<br> DMG: " + numberShort(game.DMG) + "<br> DEF: " + numberShort(game.DEF) + "<br> Coins: " + numberShort(game.coins) + "</p></center>"
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
     game.buttonCooldowns[21] = 3600 / (game.itemCooldown * game.tierCooldown * game.artifactsCooldown) //1h
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
     game.buttonCooldowns[22] = 21600 / (game.itemCooldown * game.tierCooldown * game.artifactsCooldown) //6h
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
     game.buttonCooldowns[26] = 86400 / (game.itemCooldown * game.tierCooldown * game.artifactsCooldown) //24h
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
     game.buttonCooldowns[44] = 181850 / (game.itemCooldown * game.tierCooldown * game.artifactsCooldown) //Around 2.1d, random number lol 
    }
    if (x==4) {
      game.currentHP = game.HP
      enemiesChosen = 17
      if (document.getElementById("dailyMessagesDiv").style.display == "block") {openCloseMessages(0)}
      openCloseMessages(3)
      attackBoss()
    game.buttonCooldowns[36] = 43200 / (game.itemCooldown * game.tierCooldown * game.artifactsCooldown) //12h
    }
    else {
    if (document.getElementById("dailyMessagesDiv").style.display == "block") {openCloseMessages(0)}
    setTimeout(() => {
      openCloseMessages(2)
      game.currentHP = game.HP
      game.enemyHP = enemies[enemiesChosen][1] * game.enemyScaling ** game.ConsecutiveKills
      attack(fightNumber)
    }, 10)
    }
  }

  function attack(x) {
     console.log(fightNumber)
     game.enemyHP -= game.DMG - (enemies[enemiesChosen][3] * game.enemyScaling ** game.ConsecutiveKills)
     game.currentHP -= (enemies[enemiesChosen][2] * game.enemyScaling ** game.ConsecutiveKills) - game.DEF
     displayStats()
     setTimeout(() => {
      if (game.enemyHP <= 0) {fightRewards(enemies[enemiesChosen][4],y=fightNumber)}
     else if (game.currentHP <= 0) {
      alert("You died... and you stop fighting. Remaining enemy hp: " + numberShortAlert(game.enemyHP))
      claimRewards(fightNumber)
    }
     else if (game.DMG < enemies[enemiesChosen][3]) {
      alert("Can't deal damage to the enemy, fight ends here")
      claimRewards(fightNumber)
    }
     else attack(fightNumber)
     }, 100) //100ms delay
  }

  function attackBoss() {
    game.bossHP -= game.DMG
    game.currentHP -= enemies[enemiesChosen][2] * 2 ** game.bossKills
    displayStats()
    setTimeout(() => {
     if (game.bossHP <= 0) {killBoss()}
     else if (game.currentHP <= 0) {alert("You died... try again later. Remaining boss hp: " + numberShortAlert(game.bossHP))}
     else attackBoss()
     }, 100) //100ms delay
  }

  function killBoss() {
    game.bossKills += 1
    game.bossHP = enemies[17][1] * 2 ** game.bossKills
    game.bossMulti += 0.1 * game.bossKills * game.itemLoot / 90
    game.XP += 10000000000 * game.itemLoot * 1.5 ** game.bossKills
    game.coins += 10000 * game.itemLoot * 1.5 ** game.bossKills
    document.getElementsByClassName("dropBox")[0].innerHTML = numberShort(10000000000 * game.itemLoot * 1.5 ** game.bossKills) + " XP"
    document.getElementsByClassName("dropBox")[1].innerHTML = numberShort(10000 * game.itemLoot * 1.5 ** game.bossKills) + " Coins"
    document.getElementsByClassName("dropBox")[2].innerHTML = numberShort(0.1 * game.bossKills * game.itemLoot / 90) + " DimMulti"
    if (!game.enemies[enemiesChosen]) {game.enemies[enemiesChosen] = 1}
     else {game.enemies[enemiesChosen]++}
     game.enemiesDefeated += 1
  }

  function fightRewards(x,y) {
    console.log(x + "//" + y)
     if (x==1) {
      game.XPCounter += 200 * enemies[enemiesChosen][1] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      game.CoinsCounter += 1 * enemies[enemiesChosen][2] * game.itemLoot * game.artifactsCoins * (1 + game.rewardsScaling) ** game.ConsecutiveKills
      if (Math.random() < 1/10 || game.ConsecutiveKills % 10 == 9) {game.artifactsCounter += 1 * (game.ConsecutiveKills + 1) * game.itemArtifacts} 
     }
     if (x==2) {
      game.XPCounter += 500 * enemies[enemiesChosen][1] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      game.CoinsCounter += 2 * enemies[enemiesChosen][2] * game.itemLoot * game.artifactsCoins * (1 + game.rewardsScaling) ** game.ConsecutiveKills
      game.XPBoostCounter += 0.01 * enemies[enemiesChosen][3] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      if (Math.random() < 1/10 || game.ConsecutiveKills % 10 == 9) {game.artifactsCounter += 2 * (game.ConsecutiveKills + 1) * game.itemArtifacts}
     }
     if (x==3) {
      game.XPCounter += 550 * enemies[enemiesChosen][1] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      game.CoinsCounter += 5 * enemies[enemiesChosen][2] * game.itemLoot * game.artifactsCoins * (1 + game.rewardsScaling) ** game.ConsecutiveKills
      game.XPBoostCounter += 0.015 * enemies[enemiesChosen][3] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      if (Math.random() < 1/10 || game.ConsecutiveKills % 10 == 9) {game.artifactsCounter += 1 * (game.ConsecutiveKills + 1) * game.itemArtifacts}
     }
     if (x==4) {
      game.XPCounter += 750 * enemies[enemiesChosen][1] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      game.CoinsCounter += 10 * enemies[enemiesChosen][2] * game.itemLoot * game.artifactsCoins * (1 + game.rewardsScaling) ** game.ConsecutiveKills
      game.XPBoostCounter += 0.02 * enemies[enemiesChosen][3] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      if (Math.random() < 1/10 || game.ConsecutiveKills % 10 == 9) {game.artifactsCounter += 2 * (game.ConsecutiveKills + 1) * game.itemArtifacts}
     }
     if (x==5) {
      game.XPCounter += 1000 * enemies[enemiesChosen][1] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      game.CoinsCounter += 2 * enemies[enemiesChosen][2] * game.itemLoot * game.artifactsCoins * (1 + game.rewardsScaling) ** game.ConsecutiveKills 
      game.XPBoostCounter += 0.015 * enemies[enemiesChosen][3] * game.itemLoot* (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      if (Math.random() < 1/10 || game.ConsecutiveKills % 10 == 9) {game.artifactsCounter += 1 * (game.ConsecutiveKills + 1) * game.itemArtifacts}
     }
     if (x==6) {
      game.XPCounter += 1000000000 * enemies[enemiesChosen][1] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      game.CoinsCounter += 4 * enemies[enemiesChosen][2] * game.itemLoot * game.artifactsCoins * (1 + game.rewardsScaling) ** game.ConsecutiveKills 
      game.XPBoostCounter += 0.1 * enemies[enemiesChosen][3] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      if (Math.random() < 1/10 || game.ConsecutiveKills % 10 == 9) {game.artifactsCounter += 1 * (game.ConsecutiveKills + 1) * game.itemArtifacts}
     }
     if (x==7) {
      game.XPCounter += 4000000000 * enemies[enemiesChosen][1] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      game.CoinsCounter += 40 * enemies[enemiesChosen][2] * game.itemLoot * game.artifactsCoins * (1 + game.rewardsScaling) ** game.ConsecutiveKills 
      game.XPBoostCounter += 2 * enemies[enemiesChosen][3] * game.itemLoot * (1.5 + game.rewardsScaling) ** game.ConsecutiveKills
      game.artifactsCounter += 1 * (game.ConsecutiveKills + 1) * game.itemArtifacts
     }
     if (!game.enemies[enemiesChosen]) {game.enemies[enemiesChosen] = 1}
     else {game.enemies[enemiesChosen]++}
     game.enemiesDefeated += 1
     game.ConsecutiveKills += 1
     startFight(fightNumber)
  }

   function claimRewards(x) {
    console.log(game.ConsecutiveKills)
    document.getElementsByClassName("dropBox")[0].innerHTML = numberShort(game.XPCounter) + " XP"
    document.getElementsByClassName("dropBox")[1].innerHTML = numberShort(game.CoinsCounter) + " Coins"
    if (game.XPBoostCounter > 0) {document.getElementsByClassName("dropBox")[2].innerHTML = numberShort(game.XPBoostCounter) + " XPBoost"}
    else {document.getElementsByClassName("dropBox")[2].innerHTML = ""}
    if (game.artifactsCounter > 0) {
      if (fightNumber != 5) document.getElementsByClassName("dropBox")[3].innerHTML = numberShort(game.artifactsCounter) + " Artifacts"
      unboxArtifact(fightNumber,game.artifactsCounter)
    }
    else {document.getElementsByClassName("dropBox")[3].innerHTML = ""}
    game.XP += game.XPCounter
    game.coins += game.CoinsCounter
    game.XPBoost += game.XPBoostCounter
    game.XPCounter = 0
    game.CoinsCounter = 0
    game.XPBoostCounter = 0
    game.ConsecutiveKills = 0
    game.artifactsCounter = 0
   }