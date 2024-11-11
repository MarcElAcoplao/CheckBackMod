function openCloseMessages(x) {
    if (x == 0) {
        document.getElementById("dailyMessagesDiv").style.display = "none"
        document.getElementById("equipPet").style.display = "none"
        document.getElementById("messageInner").innerHTML = ""
    } else {
        document.getElementById("dailyMessagesDiv").style.display = "block"
        if (x == 1) {
            document.getElementById("equipPet").style.display = "block"
            equipPet = petChosen
            if (game.pets[petChosen] == 0) {
                document.getElementById("messageInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + pets[petChosen][0] + "</span><br>New pet discovered! </p><br><img src='img/pets/" + petChosen + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Effects:</span><br>" + dropPetStats(petChosen) +"</p></center>"
            } else {
                document.getElementById("messageInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + pets[petChosen][0] + "</span><br>You have " + (game.pets[petChosen] + 1) + "</p><br><img src='img/pets/" + petChosen + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Effects:</span><br>" + dropPetStats(petChosen) +"</p></center>"
            }
        }
        else if (x == 2) {
            document.getElementById("messageInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + enemies[enemiesChosen][0] + "</span><br></p><br><img src='img/enemies/" + enemiesChosen + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Stats:</span><br>" + numberShort(enemies[enemiesChosen][1] * game.enemyScaling ** game.ConsecutiveKills) + " HP<br>" + numberShort(enemies[enemiesChosen][2] * game.enemyScaling ** game.ConsecutiveKills) + " Damage<br>" + numberShort(enemies[enemiesChosen][3] * game.enemyScaling ** game.ConsecutiveKills) + " Defense<br>Drop tier: " + (enemies[enemiesChosen][4]) + "<br>Current consecutive kills: " + (game.ConsecutiveKills).toFixed(0) + "</p></center>"
        }
        else if (x == 3) {
            document.getElementById("messageInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + enemies[enemiesChosen][0] + "</span><br></p><br><img src='img/enemies/" + enemiesChosen + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Stats:</span><br>" + numberShort(enemies[enemiesChosen][1] * 2 ** game.bossKills) + " Base HP<br>" + numberShort(game.bossHP) + " Remaining HP<br>" + numberShort(enemies[enemiesChosen][2] * 2 ** game.bossKills) + " Damage</p></center>"
        }
    }
}

function dropPetStats(x) {
    result = "x" + numberShort(pets[x][1]) + " XP from buttons and Daily<br>-" + ((1 - (1 / pets[x][2])) * 100).toFixed(1) + "% XP button cooldown<br>-" + ((1 - (1 / pets[x][3])) * 100).toFixed(1) + "% pet button cooldown<br>"
    if (pets[x][4] > 1) result += "x" + numberShort(pets[x][4]) + " XPBoost<br>"
    if (pets[x][5] > 1) result += "x" + numberShort(pets[x][5]) + " All Dimensions Multi<br>"
    return result
  }