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
                document.getElementById("messageInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + pets[petChosen][0] + "</span><br>New pet discovered! </p><br><img src='img/pets/" + petChosen + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Effects:</span><br>x" + numberShort(pets[petChosen][1]) + " XP from buttons and Daily<br>-" + ((1 - (1 / pets[petChosen][2])) * 100).toFixed(1) + "% XP button cooldown<br>-" + ((1 - (1 / pets[petChosen][3])) * 100).toFixed(1) + "% pet button cooldown<br>+" + ((pets[petChosen][4] - 1) * 100).toFixed(1) + "% XPBoost stat</p></center>"
            } else {
                document.getElementById("messageInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + pets[petChosen][0] + "</span><br>You have " + (game.pets[petChosen] + 1) + "</p><br><img src='img/pets/" + petChosen + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Effects:</span><br>x" + numberShort(pets[petChosen][1]) + " XP from buttons and Daily<br>-" + ((1 - (1 / pets[petChosen][2])) * 100).toFixed(1) + "% XP button cooldown<br>-" + ((1 - (1 / pets[petChosen][3])) * 100).toFixed(1) + "% pet button cooldown<br>+" + ((pets[petChosen][4] - 1) * 100).toFixed(1) + "% XPBoost stat</p></center>"
            }
        }
        else if (x == 2) {
            document.getElementById("messageInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + enemies[enemiesChosen][0] + "</span><br></p><br><img src='img/enemies/" + enemiesChosen + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Stats:</span><br>" + (enemies[enemiesChosen][1] * 2 ** game.ConsecutiveKills).toFixed(1) + " HP<br>" + (enemies[enemiesChosen][2] * 2 ** game.ConsecutiveKills).toFixed(1) + " Damage<br>" + (enemies[enemiesChosen][3] * 2 ** game.ConsecutiveKills).toFixed(1) + " Defense<br> Drop tier: " + (enemies[enemiesChosen][4]) + "</p></center>"
        }
        else if (x == 3) {
            document.getElementById("messageInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + enemies[enemiesChosen][0] + "</span><br></p><br><img src='img/enemies/" + enemiesChosen + ".png' style='width: 50%'><br><p style='color: white'><span style='font-size: 32px; font-weight: bold'>Stats:</span><br>" + numberShort(enemies[enemiesChosen][1] * 2 ** game.bossKills) + " Base HP<br>" + numberShort(game.bossHP) + " Remaining HP<br>" + numberShort(enemies[enemiesChosen][2] * 2 ** game.bossKills) + " Damage</p></center>"
        }
    }
}