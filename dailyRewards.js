

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
      dailyRewardDay = player.dailyRewards+i+1
      document.getElementsByClassName("dayBox")[i].innerHTML = "Day " + dailyRewardDay
      if (dailyRewardDay % 2 == 1) {
        document.getElementsByClassName("dayBox")[i].innerHTML += "<br>" + numberShort(Math.min((17.5 + dailyRewardDay * 2.5) * pets[player.selectedPet][1] * player.itemDailyXP * player.tierXPmulti * (1 + player.petsDiscovered / 100), 10000 * pets[player.selectedPet][1] * player.itemDailyXP * player.tierXPmulti * (1 + player.petsDiscovered / 100))) + " XP"}
      else if (dailyRewardDay % 4 == 2) {document.getElementsByClassName("dayBox")[i].innerHTML += "<span class='crateName'><br>Skeletal crate</span><br><img src='img/crateSkeletal.png' style='width:4vh; margin: 0; margin-top: 1vh;'>"}
      else {document.getElementsByClassName("dayBox")[i].innerHTML += "<span class='crateName'><br>Ghost crate</span><br><img src='img/crateGhost.png' style='width:4vh; margin: 0; margin-top: 1vh;'>"}
    }
  }
  
  function displayDailyRewardRarities(x) {
    if (x==0) {document.getElementById("dailyRewardRarities").innerHTML = ""}
    else if ((x+player.dailyRewards) % 4 == 2) {
      if (x+player.dailyRewards < 100) {
      document.getElementById("dailyRewardRarities").innerHTML = "<img src='img/crateSkeletal.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
      totalWeight = 0
      for (i=0;i<skeletalUnboxChances.length;i++) totalWeight += skeletalUnboxChances[i][1]
      for(i=0;i<skeletalUnboxChances.length;i++) {
        document.getElementById("dailyRewardRarities").innerHTML += pets[skeletalUnboxChances[i][0]][0] + ": " + (skeletalUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
       }
      }
      else {
        document.getElementById("dailyRewardRarities").innerHTML = "<img src='img/crateSkeletal.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
      totalWeight = 0
      for (i=0;i<skeletalBoostUnboxChances.length;i++) totalWeight += skeletalBoostUnboxChances[i][1]
      for(i=0;i<skeletalBoostUnboxChances.length;i++) {
        document.getElementById("dailyRewardRarities").innerHTML += pets[skeletalBoostUnboxChances[i][0]][0] + ": " + (skeletalBoostUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
       }
      }
    }
    else if ((x+player.dailyRewards) % 4 == 0) {
      if (x+player.dailyRewards < 100) {
      document.getElementById("dailyRewardRarities").innerHTML = "<img src='img/crateGhost.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
      totalWeight = 0
      for (i=0;i<ghostUnboxChances.length;i++) totalWeight += ghostUnboxChances[i][1]
      for(i=0;i<ghostUnboxChances.length;i++) {
        document.getElementById("dailyRewardRarities").innerHTML += pets[ghostUnboxChances[i][0]][0] + ": " + (ghostUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
      }
     }
     else {
      document.getElementById("dailyRewardRarities").innerHTML = "<img src='img/crateGhost.png' style='width:6vh'><br><b>Rarities for this crate:</b><br>"
      totalWeight = 0
      for (i=0;i<ghostBoostUnboxChances.length;i++) totalWeight += ghostBoostUnboxChances[i][1]
      for(i=0;i<ghostBoostUnboxChances.length;i++) {
        document.getElementById("dailyRewardRarities").innerHTML += pets[ghostBoostUnboxChances[i][0]][0] + ": " + (ghostBoostUnboxChances[i][1] / totalWeight * 100).toFixed(2) + "%<br>"
      }
     }
    }
    else {document.getElementById("dailyRewardRarities").innerHTML = "Daily XP multipliers: <br>" + (17.5 + (player.dailyRewards+x) * 2.5) + " Base<br>" + DailyXPmultis()}
  }
  
  function claimDailyReward() {
    player.buttonCooldowns[9] = 86400 / (player.itemCooldown * player.tierCooldown) //24 hours
    player.dailyRewards++
    displayDailyRewards()
    if (player.dailyRewards % 2 == 1) {
      player.XP += Math.min((17.5 + player.dailyRewards * 2.5) * pets[player.selectedPet][1] * player.tierXPmulti * player.itemDailyXP * (1 + player.petsDiscovered / 100), 10000 * pets[player.selectedPet][1] * player.tierXPmulti * player.itemDailyXP * (1 + player.petsDiscovered / 100))}
    else if (dailyRewardDay % 4 == 2) {unboxPet(1, player.crateBulk[1])}
    else {unboxPet(2, player.crateBulk[2])}
  }

  function DailyXPmultis() {
    result = "<br>"
    if (player.selectedPet >= 1) {result += "x" + numberShort(pets[player.selectedPet][1]) + " From pets<br>"}
    if (player.petsDiscovered >= 1) {result += "x" + numberShort(1 + player.petsDiscovered / 100) + " From pet collection<br>"}
    if (player.items[18] >= 1) {result += "x" + numberShort(player.XPBoostEffect ** 0.5) + " From XPBoost<br>"}
    if (player.items[18] >= 1) {result += "x" + numberShort(player.itemXP * (9 * player.items[34] + 1)) + " From items<br>"}
    if (player.items[25] >= 1) {result += "x" + numberShort(player.tierXPmulti) + " From your tier<br>"}
    result += "Total: x" + numberShort((pets[player.selectedPet][1] * player.itemDailyXP * player.tierXPmulti * (1 + player.petsDiscovered / 100)))
    return result
  }
  