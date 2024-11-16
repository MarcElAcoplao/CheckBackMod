function openCloseArtifactsTab() {
    if (document.getElementById("artifactsDiv").style.display == "block") {
      document.getElementById("artifactsDiv").style.display = "none"
      document.getElementById("artifactsListInner").innerHTML = ""
    }
    else {
      document.getElementById("artifactsDiv").style.display = "block"
      displayArtifacts()
    }
  }

  function displayArtifacts() {
    document.getElementById("artifactsListInner").innerHTML = ""
    let artifactBox = document.createElement("div")
    artifactBox.style.display = "inline-block"
    artifactBox.style.position = "relative"
    artifactBox.style.width = "128px"
    artifactBox.style.height = "128px"
    artifactBox.style.margin = "8px 0 0 8px"
    artifactBox.style.border = "8px solid black"
    artifactBox.style.cursor = "pointer"
    artifactBox.style.backgroundColor = "#888"
    artifactBox.style.backgroundImage = "url('img/halftoneDots.png')"
    artifactBox.className += "artifactBox"
    artifactBoxes = document.getElementsByClassName("artifactBox");
    for (i=1;i<artifacts.length;i++) {
      document.getElementById("artifactsListInner").appendChild(artifactBox.cloneNode(true))
      artifactBoxes[i-1].setAttribute("id", i)
      artifactBoxes[i-1].addEventListener('mouseover', function(){
        if (game.artifacts[parseInt(this.id)] > 0) {showArtifactsInfo(parseInt(this.id))}
        else {showHiddenArtifactsInfo(parseInt(this.id))}
      })
      artifactBoxes[i-1].addEventListener('mouseout', function(){showArtifactsInfo(0)})
      if (game.artifacts[i] > 0) { //1st value is red, 2nd green and 3rd blue
        artifactBoxes[i-1].innerHTML = "<img src='img/artifacts/" + i + ".png' style='width: 128px'>"
        artifactBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + game.artifacts[i] + "</p>"
        if (i<=4) artifactBoxes[i-1].style.border = "8px outset #555"
        else if (i<=11) artifactBoxes[i-1].style.border = "8px outset #8cfffb"
        else if (i<=16) artifactBoxes[i-1].style.border = "8px outset #647"
        else if (i<=31) artifactBoxes[i-1].style.border = "8px outset #500"
        else if (i<=39) artifactBoxes[i-1].style.border = "8px outset #990"
        else if (i<=46) artifactBoxes[i-1].style.border = "8px outset #229"
        else if (i<=55) artifactBoxes[i-1].style.border = "8px outset #bbb"
        else if (i<=63) artifactBoxes[i-1].style.border = "8px outset #282"
      }
      else {
        artifactBoxes[i-1].innerHTML = "<img src='img/artifacts/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
        artifactBoxes[i-1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>0</p>"
      }
    }
    j=artifacts.length-1
  }

  function showArtifactsInfo(x) {
    if (x==0) {document.getElementById("artifactsInfo").innerHTML = ""}
    else if (x==1) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 1<br><br>Effects:<br>+1% XP<br>Total: +" + numberShort(game.artifacts[1]) + "% XP"
    else if (x==2) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 2<br><br>Effects:<br>+1% Coin gain<br>Total: +" + numberShort(game.artifacts[2]) + "% Coins"
    else if (x==3) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 3 (Common)<br><br>Effects:<br>+10% XP<br>Total: +" + numberShort(game.artifacts[3] * 10) + "% XP"
    else if (x==4) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 3 (Rare)<br><br>Effects:<br>+10% XPBoost<br>Total: +" + numberShort(game.artifacts[4] * 10) + "% XPBoost"
    else if (x==5) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 4 (Common)<br><br>Effects:<br>+100% XP<br>Total: +" + numberShort(game.artifacts[5] * 100) + "% XP"
    else if (x==6) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 4 (Common)<br><br>Effects:<br>+50% XPBoost<br>Total: +" + numberShort(game.artifacts[6] * 50) + "% XPBoost"
    else if (x==7) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 4 (Uncommon)<br><br>Effects:<br>+5% Crate bulk<br>Total: +" + numberShort(game.artifacts[7] * 5) + "% Crates opened"
    else if (x==8) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 4 (Rare)<br><br>Effects:<br>+/0.01 All cooldowns<br>Total: /" + numberShort(1 + game.artifacts[8]/100) + " Cooldowns"
    else if (x==9) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 4 (Rare)<br><br>Effects:<br>+10% Stats<br>Total: +" + numberShort(game.artifacts[9] * 10) + "% Stats"
    else if (x==10) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + artifacts[x][0] + "</span><br>You got " + levelShort(game.artifacts[x]) + "</p><br><img src='img/artifacts/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>Where it drops:<br>Area 4 (Very rare)<br><br>Effects:<br>+10% All dimensions multi<br>Total: +" + numberShort(game.artifacts[10] * 10) + "% Dimension multi"
  }

  function showHiddenArtifactsInfo(x) {
    if (x==0) {document.getElementById("artifactsInfo").innerHTML = ""}
    else if (x==1) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 1 (Guarantee)"
    else if (x==2) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 2 (Guarantee)"
    else if (x==3) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 3 (Common)"
    else if (x==4) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 3 (Rare)"
    else if (x==5) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 4 (Common)"
    else if (x==6) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 4 (Common)"
    else if (x==7) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 4 (Uncommon)"
    else if (x==8) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 4 (Rare)"
    else if (x==9) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 4 (Rare)"
    else if (x==10) document.getElementById("artifactsInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Drops from area 4 (Very rare)"
  }
  

  function unboxArtifact(x,y) {
    if (x==1) {game.artifacts[1] += Math.floor(y)}
    if (x==2) {game.artifacts[2] += Math.floor(y)}
    if (x==3) {
      if (y < 10) {
        if (Math.random() < y/10) {
           game.artifacts[4] += 1
           game.artifacts[3] += y-1
         }
        else game.artifacts[3] += 1
      }
      else {
        amt = Math.floor(y/10)
        game.artifacts[4] += amt
        game.artifacts[3] += y-amt
      }
    }
    if (x==5) {
      let counter = 0
      if (y >= 150) for(i=0;i<frozenArtifactsDropChances.length;i++) {
        game.artifacts[frozenArtifactsDropChances[i][0]] += Math.floor(y * frozenArtifactsDropChances[i][1] / 300)
        counter += Math.floor(y * frozenArtifactsDropChances[i][1] / 300)
      }
        else for(i=0;i<frozenArtifactsDropChances.length;i++) {
        amt = y * frozenArtifactsDropChances[i][1] / 300
        if (amt >= 1) {
          game.artifacts[frozenArtifactsDropChances[i][0]] += Math.floor(amt)
          counter += Math.floor(amt)
        }
        else if (Math.random() < amt) {
          game.artifacts[frozenArtifactsDropChances[i][0]] += 1
          counter += 1
        }
      }
      if (counter >= 1) document.getElementsByClassName("dropBox")[3].innerHTML = numberShort(counter) + " Artifacts"
    }
    if (document.getElementById("artifactsTabButton").style.display == "none") {document.getElementById("artifactsTabButton").style.display = "block"}
  }

  function calculateArtifactMulti() {
    game.artifactsXP = 1 + game.artifacts[1]/100 + game.artifacts[3]/10 + game.artifacts[5]
    game.artifactsCoins = 1 + game.artifacts[2]/100
    game.artifactsXPBoost = 1 + game.artifacts[4]/10 + game.artifacts[6]/2
    game.artifactsCooldown = 1 + game.artifacts[8]/100
    game.artifactsStats = 1 + game.artifacts[9]/10
    game.artifactsBulk = 1 + game.artifacts[7]/20
    game.artifactsDimension = 1 + game.artifacts[10]/10
  }
  setInterval(calculateArtifactMulti, 50)