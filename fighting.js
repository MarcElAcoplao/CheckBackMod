const FightingButtons = [ //Stats of the xpboost buttons
  {name: "Test", level: 0, xpboost: 0, cooldown: 60, cooldownID: 0, unlock: 0},
  {name: "Area1", cooldown: 3600, cooldownID: 21, unlock: 21},
  {name: "Area2", cooldown: 3600, cooldownID: 22, unlock: 2},
  {name: "Area3", cooldown: 3600, cooldownID: 26, unlock: 25},
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
    if (document.getElementById("dailyMessagesDiv").style.display == "block") {openCloseMessages(0)}
    openCloseMessages(2)
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
     game.enemiesDefeated += 1
  }
